//生成器
{
    function* createIterator () {
        yield 1;
        yield 2;
        yield 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

//生成器函数表达式
{
    let createIterator = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

//生成器对象的方法
{
    let o = {
        *createIterator () {
            yield 1;
            yield 2;
            yield 3;
        }
    }

    let iterator = o.createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}
