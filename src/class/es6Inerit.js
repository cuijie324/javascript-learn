class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea () {
        return this.length * this.width;
    }

    static create (length, width) {
        return new Rectangle(length, width);
    }
}

class Square extends Rectangle {
    constructor(height) {
        super(height, height);
    }

    //屏蔽类方法
    getArea () {
        console.log(super.getArea());//可以通过super访问基类方法
        return this.length * this.length;
    }
}

let square = new Square(3);
console.log(square.getArea());//9
console.log(square instanceof Square);//true
console.log(square instanceof Rectangle);//true

let ss = Square.create(3, 4);//继承的静态方法
console.log(ss.getArea());//12
console.log(ss instanceof Square);//false
console.log(ss instanceof Rectangle);//true

//从表达式中派生类，表达式是个传统的ES5类
{
    function Rectangle (length, width) {
        this.length = length;
        this.width = width;
    }

    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    }

    //extends后面可以接收任意类型的表达式
    class Square extends Rectangle {
        constructor(length) {
            super(length, length);
        }
    }

    let square = new Square(3);
    console.log(square.getArea());//9
    console.log(square instanceof Square);//true
    console.log(square instanceof Rectangle);//true
}

//从表达式中派生类，表达式是个函数
{
    let serialiableMixin = {
        serialize: function () {
            return JSON.stringify(this);
        }
    }

    let areaMixin = {
        getArea: function () {
            return this.length * this.width;
        }
    }

    function mixin (...mixins) {//不定参数
        let base = function () { };
        Object.assign(base.prototype, ...mixins);
        return base;
    }

    class Square extends mixin(serialiableMixin, areaMixin) {
        constructor(length) {
            super();
            this.length = length;
            this.width = length;
        }
    }

    console.log('>>从表达式中派生类');
    let square = new Square(4);
    console.log(square.getArea());
}

{
    //继承内置对象
    class myArray extends Array {

    }

    let arr = new myArray(1, 2);
    console.log(arr.length);
    arr.length = 0;
    console.log(arr);
}

{
    //Symbol.species属性
    class MyClass {
        static get [Symbol.species] () {
            return this;
        }

        constructor(name) {
            this.name = name;
        }

        clone () {
            return new this.constructor[Symbol.species](this.name);
        }
    }

    let my = new MyClass('cui');
    console.log(my);
    console.log(my.clone());
}