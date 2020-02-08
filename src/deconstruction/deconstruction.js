let node = {
    type: 'Identifier',
    name: 'foo'
}

//解构声明
{
    let { type, name } = node;
    console.log(type, name);
}

//解构赋值
{
    let type = 'Literal', name = 5;
    console.log(type, name);
    ({ type, name } = node);
    console.log(type, name);
}

//函数参数
{
    // let type = 'Literal', name = 5;
    function outputInfo (value) {
        console.log(value === node);//true
    }

    // console.log(type, name);//这里还访问不到type name
    outputInfo({ type, name } = node);//TODO: 这里很奇怪
    console.log(type, name);//Identifier foo
}

{
    // function tmp (a = 5) {
    //     console.log(a);
    // }

    // tmp();
    // console.log(a);//这里访问不到a

    // function tmp ({ a }) {
    //     console.log(a);
    // }

    // tmp({ a: 5 });
    // console.log(a);//这里访问不到a
}

//默认值
{
    let { type, name, value = 'cuijie' } = node;
    console.log(type, name, value);
}

//为非同名局部变量赋值
{
    let { type: localType, name: localName, value: localValue = 'rui' } = node;
    console.log(localType, localName, localValue);
}

//嵌套对象解构
{
    let node = {
        type: 'Identifier',
        name: 'foo',
        loc: {
            start: {
                line: 1,
                column: 1
            }
        }
    }

    let { loc: { start } } = node;
    console.log(start);
}