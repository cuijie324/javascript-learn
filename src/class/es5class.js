//使用ES5的方法模拟ES6的类
let PersonClass = (
    function () {
        'use strict';

        const PersonClass = function (name) {
            if (typeof new.target === 'undefined') {
                throw new Error('只能使用new调用');
            }
            this.name = name;
        }

        Object.defineProperty(PersonClass.prototype, 'sayName', {
            value: function () {
                if (typeof new.target !== 'undefined') {
                    throw new Error('类的方法不能使用new调用');
                }

                console.log(this.name);
            },
            enumerable: false,
            writable: true,
            configurable: true,
        })

        return PersonClass;
    }
)();

//使用
let person = new PersonClass('cuijie');
console.log(person);

for (key in person) {
    console.log(key);
}
