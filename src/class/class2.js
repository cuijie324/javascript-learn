//ES5中的静态方法
{
    function PersonClass (name) {
        this.name = name;
    }

    PersonClass.create = function (name) {
        return new PersonClass(name);
    }

    PersonClass.prototype.sayName = function () {
        console.log(this.name);
    }

    let person = PersonClass.create('zz');
    person.sayName();
}

//ES6中的静态方法
{
    class PersonClass {
        constructor(name) {
            this.name = name;
        }

        static create (name) {
            return new PersonClass(name);
        }

        sayName () {
            console.log(this.name);
        }
    }

    let person = PersonClass.create('cc');
    person.sayName();
}   