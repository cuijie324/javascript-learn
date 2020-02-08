//对象字面量语法扩展
{
    let name = 'cuijie';
    let lastName = 'rui';
    let obj = {
        name,//属性初始值的简写
        getName () {//对象方法的简写语法
            return this.name;
        },
        [lastName]: lastName,//可计算属性名
    }

    console.log(obj, obj.getName.name);
}

//新增方法
{
    let receiver = {}, supplier = {
        _name: 'cuijie',
        get name () {
            return this._name
        },
        set name (value) {
            this._name = value;
        }
    }

    Object.assign(receiver, supplier);//复制后，访问器属性变成了数据属性
    console.log(receiver, supplier);
    console.log(Object.getOwnPropertyDescriptor(receiver, 'name'));
}

//重复的对象字面量属性
{
    let obj = {
        name: 'cui',
        name: 'jie'//取值后面的重复属性
    }
    console.log(obj);
}

//自有属性的枚举顺序
{
    let obj = {
        b: 1,
        a: 2,
        1: 2,
        0: 1
    }
    console.log(Object.getOwnPropertyNames(obj).join(''));//01ba
}

//增强的对象原型
{
    let person = {
        getGreeting () {
            return 'Hello';
        }
    }

    let dog = {
        getGreeting () {
            return 'Woof';
        }
    }

    let friend = Object.create(person);
    console.log(Object.getPrototypeOf(friend) === person);
    console.log(friend.getGreeting());//Hello

    Object.setPrototypeOf(friend, dog);
    console.log(Object.getPrototypeOf(friend) === dog);
    console.log(friend.getGreeting());//Woof

    //简化原型方位的Super引用
    {
        let friend = {
            getGreeting () {
                // return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!';
                return super.getGreeting() + ', hi!';
            }
        }

        Object.setPrototypeOf(friend, person);
        console.log(friend.getGreeting());//Hello, hi!

        Object.setPrototypeOf(friend, dog);
        console.log(friend.getGreeting());//Woof, hi!
    }

    //多重继承问题
    {
        let friend = {
            getGreeting () {
                return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!';
                // return super.getGreeting() + ', hi!';
            }
        }

        Object.setPrototypeOf(friend, person);

        let relative = Object.create(friend);
        console.log(person.getGreeting());
        console.log(friend.getGreeting());//Hello, hi!
        console.log(relative.getGreeting());//Maximum call stack size exceeded
    }
}
