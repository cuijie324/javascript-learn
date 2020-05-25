{
    class PersonClass {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            // PersonClass = 'a';//不可修改
            console.log(this.name);
        }
    }

    //class声明只是语法糖
    console.log(typeof PersonClass); //'function'

    let person = new PersonClass('类声明');
    person.sayName();

}

//类表达式
{
    let PersonClass = class {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log(this.name);
        }
    }

    let person = new PersonClass('类表达式');
    person.sayName();
}

//具名类表达式
{
    let PersonClass = class PersonClass2 {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log('inner', typeof PersonClass);//function
            console.log('inner', typeof PersonClass2);//function 这里是有效的 
            console.log(this.name);
        }
    }

    console.log(typeof PersonClass);//function
    console.log(typeof PersonClass2);//undefined 只在类内部有效

    let person = new PersonClass('具名表达式');
    person.sayName();
}

//作为一级公民的类
{
    let person = new class {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log(this.name);
        }
    }('立即执行的类表达式');

    person.sayName();
}

//访问器属性
{
    class CustomHTMLElement {
        constructor(element) {
            this.element = element;
        }

        get html () {
            return this.element.innerHtml;
        }

        set html (value) {
            this.element.innerHtml = value;
        }
    }

    let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
    console.log('访问器属性', descriptor);

    let customHTMLElement = new CustomHTMLElement({ innerHtml: 'test' });
    console.log(customHTMLElement.html);
}

//访问器属性的等价表示
{
    let CustomHTMLElement = (function () {
        'use strict';

        const CustomHTMLElement = function (element) {
            if (typeof new.target === "undefined") {
                throw new Error('只能通过new调用');
            }
            this.element = element;
        }

        //定义存储器属性
        Object.defineProperty(CustomHTMLElement.prototype, 'html', {//定义在原型上
            enumerable: false,
            configurable: true,
            get: function () {
                return this.element.innerHtml;
            },
            set: function (value) {
                this.element.innerHtml = value;
            }
        });

        return CustomHTMLElement;
    })();

    let customHTMLElement = new CustomHTMLElement({ innerHtml: 'test' });
    console.log('模拟访问器属性', customHTMLElement.html);
    console.log(Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html'));
}

//需计算属性名
{
    let methodName = 'sayName';
    let propertyName = 'html';
    class PersonClass {
        constructor(name) {
            this.name = name;
        }

        [methodName] () {
            console.log(this.name);
        }

        get [propertyName] () {
            return this.innerHtml;
        }

        set [propertyName] (value) {
            this.innerHtml = value;
        }
    }

    let person = new PersonClass('cc');
    person.sayName();
    console.log(person.html);
    person.html = 'html';
    console.log(person.html);
}

//生成器方法
{
    class MyClass {
        *createIterator () {
            yield 1;
            yield 3;
            yield 5;
        }
    }

    let myClass = new MyClass();
    let iterator = myClass.createIterator();
    console.log(iterator);
    console.log(iterator.next());

    for (let item of iterator) {
        console.log(item);
    }
}

//有默认迭代器的自定义类
{
    class Collection {
        constructor() {
            this.items = [];
        }

        //是个生成器方法
        *[Symbol.iterator] () {
            yield* this.items.values();
        }
    }

    console.log('>>>有默认迭代器的自定义类');
    let collection = new Collection();
    collection.items.push(1);
    collection.items.push(3);
    collection.items.push(7);

    for (let value of collection) {
        console.log(value);
    }
}
