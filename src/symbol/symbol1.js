//Symbol
let firstName = Symbol('first name');

//创建Symbol
{
    console.log(firstName, firstName.toString());
}

//Symbol的使用方法
{
    let person = {
        [firstName]: 'cuijie'
    }
    console.log(person);
    console.log(Object.getOwnPropertyDescriptor(person, firstName));

    //使用defineProperty修改对象属性
    Object.defineProperty(person, firstName, { writable: false });
    console.log(Object.getOwnPropertyDescriptor(person, firstName));
    person[firstName] = 'sss';//不会报错，但修改不了属性值
    console.log(person);

    //使用defineProperties增加属性
    let lastName = Symbol('last name');
    Object.defineProperties(person, {
        [lastName]: {
            value: 'rui',
            enumerable: true, //默认是不可枚举的，打印不出来
        }
    });
    console.log(Object.getOwnPropertyDescriptor(person, lastName));
    console.log('lastName', person);
}

//Symbol共享体系
{
    let uid = Symbol.for('uid');
    let uid2 = Symbol.for('uid');
    let uid3 = Symbol('uid');
    console.log(uid === uid2);//true
    console.log(uid === uid3);//false

    //检索描述字符串
    console.log(Symbol.keyFor(uid));//uid
    console.log(Symbol.keyFor(uid3));//undefined
}

//Symbol属性检索
{
    let person = {
        sex: 1
    }

    let boy = {
        name: 'cuijie',
        [firstName]: 'rui'
    }
    Object.setPrototypeOf(boy, person);

    console.log(Object.keys(boy));//获取所有可枚举的自有属性数组 [ 'name' ]
    console.log(Object.getOwnPropertyNames(boy));//获取所有自有属性数组 [ 'name' ]
    console.log(Object.getOwnPropertySymbols(boy));//获取所有自有的Symbol属性数组 [ Symbol(first name) ]

    //获取所有可枚举属性，包括继承来的属性
    let keys = [];
    for (key in boy) {
        keys.push(key);
    }
    console.log(keys);//[ 'name', 'sex' ]
}