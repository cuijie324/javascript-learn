//定义一个无实例的函数
{
    function MyObject () {

    }

    console.log(new MyObject() instanceof MyObject);// true

    //修改Symbol.hasInstance属性，永远返回false
    Object.defineProperty(MyObject, Symbol.hasInstance, {
        value: function () {
            return false;
        },
        enumerable: true,
        configurable: true,
        writable: true
    });

    console.log(new MyObject() instanceof MyObject);//false
    console.log(Object.keys(new MyObject()));//[]
    console.log(Object.getOwnPropertySymbols(new MyObject()));//[]
    console.log(Object.getOwnPropertyNames(new MyObject()))//[]
}

//根据条件判断
{
    function SpecialNumber () {

    }

    Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
        value: function (v) {
            return v instanceof Number && v > 100
        }
    });

    console.log(new Number(2) instanceof SpecialNumber);//false;
    console.log(new Number(2000) instanceof SpecialNumber);//true;
}

//Symbol.isConcatSpreadable
{
    let collection = {
        0: 'cui',
        1: 'jie',
        length: 2,
        [Symbol.isConcatSpreadable]: true,//如果是false的话，就把这个对象作为一个整体添加到结果中
    }

    console.log([1, 2].concat(collection));//[1, 2, 'cui', 'jie']
}

//字符串类型
{
    let hasLengthOf10 = {
        [Symbol.match]: function (value) {
            return value.length === 10 ? [value.substring(0, 10)] : null;
        },
        [Symbol.replace]: function (value, replacement) {
            return value.length === 10 ? replacement + value.substring(0, 10) : value;
        },
        [Symbol.search]: function (value) {
            return value.length === 10 ? 0 : -1
        },
        [Symbol.split]: function (value) {
            return value.length === 10 ? ['', ''] : [value];
        }
    }

    let message1 = 'Hello world',
        message2 = 'Hello John';

    let match1 = message1.match(hasLengthOf10),//null
        match2 = message2.match(hasLengthOf10);//[ 'Hello John' ]
    console.log(match1, match2);

    let replace1 = message1.replace(hasLengthOf10),//Hello world
        replace2 = message2.replace(hasLengthOf10);//undefinedHello John
    console.log(replace1, replace2);

    let search1 = message1.search(hasLengthOf10),//-1
        search2 = message2.search(hasLengthOf10);//0
    console.log(search1, search2);

    let split1 = message1.split(hasLengthOf10),//['Hello world']
        split2 = message2.split(hasLengthOf10);//['', '']
    console.log(split1, split2);

}