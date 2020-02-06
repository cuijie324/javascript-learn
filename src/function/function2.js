//name属性
{
    function doSomething () {

    }
    console.log(doSomething.name);//doSomething

    let add = new Function('a', 'b', 'return a + b;');
    console.log(add.name);//anonymous

    let obj = {
        _a: 1,
        get a () {
            return this._a;
        },
        set a (value) {
            this._a = value;
        },
        sayName: function () {
            console.log(this.name);
        }
    }
    console.log(obj.a.name);// undefined
    console.log(obj.sayName.name);//sayName

    let newSayName = obj.sayName.bind(obj);
    console.log(newSayName.name);//bound sayName
}

//函数的多重用途
{
    function Person (name) {
        this.name = name;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    }

    let person = new Person('cuijie');//通过原型方式创建对象
    console.log(person);
    console.log(person.__proto__);//新对象的原型指向Function.prototype
    console.log(person.__proto__.__proto__ === Object.prototype);//最终指向了Object.prototype
}

{
    function Person (name) {
        //ES5检查是否是构造函数调用的方法
        if (this instanceof Person) {
            this.name = name;
        } else {
            throw new Error('只能通过new方式调用');
        }
    }
    let person = new Person('cuijie');
    // person = Person('cuijie');//这里会报错
    person = Person.call(person, 'cuijie');//但这个不会报错
}

{
    function Person (name) {
        //ES6的判断方式
        console.log(new.target === Person);
        if (typeof new.target !== 'undefined') {
            this.name = name;
        } else {
            throw new Error('只能通过new方式调用');
        }
    }

    let person = new Person('cuijie');
    // person = Person('cuijie');//这里会报错
    // person = Person.call(person, 'cuijie');//这个也会报错
}
