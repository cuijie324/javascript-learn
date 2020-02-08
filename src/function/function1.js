//指定默认值
function makeRequest (url, timeout = 2000, callback = function () { }) {
    console.log('>>>', url, timeout, callback);
}

makeRequest('a');

//非严格模式下，arguments和参数同步
function mixArgs (first, second) {
    console.log(arguments.length);
    console.log(first === arguments[0]);//true
    console.log(second === arguments[1]);//true

    first = 2, second = 2;
    console.log(first === arguments[0]);//true
    console.log(second === arguments[1]);//true
}

mixArgs(1, 1);

//严格模式下，arguments不再和参数同步
function mixArgs (first, second) {
    'use strict'
    console.log(arguments.length);
    console.log(first === arguments[0]);//true
    console.log(second === arguments[1]);//true

    first = 2, second = 2;
    console.log(first !== arguments[0]);//true
    console.log(second !== arguments[1]);//true
}

mixArgs(1, 1);

//使用了默认参数后，和ES5的严格模式行为一致
function mixArgs (first, second = 5) {
    console.log(arguments.length);
    console.log(first === arguments[0]);//true
    console.log(second === arguments[1]);//true

    first = 2, second = 2;
    console.log(first !== arguments[0]);//true
    console.log(second !== arguments[1]);//true
}

mixArgs(1, 1);
mixArgs(1);//arguments是实参组成的数组

//默认参数表达式
function add (first, second = getValue(first)) {
    console.log(first, second);
}

function getValue (first) {
    return first + 5;
}

add(1, 2);//1, 2
add(1);//1, 6

//不定参数
function pick (object, ...args) {
    console.log(arguments.length, args.length);
}
pick({}, 'a', 'b');
console.log(pick.length);//1 统计的是命名参数的数量

//使用getter/setter定义对象属性，这个setter不可使用不定参数
let obj = {
    a: 1,
    _b: 2,
    get b () {
        return 'b';
    },

    set b (value) {
        this._b = value;
    }
}

console.log(obj.b, obj._b);//b, 2
obj.b = 10;
console.log(obj.b, obj._b);//b, 10

//Function构造函数
let add2 = new Function('first', 'second', 'return first + second');
console.log(add2(1, 2));

//展开运算符
let values = [10, 4, 3, -1];
console.log(Math.min.apply(Math, values));
console.log(Math.min(...values));
