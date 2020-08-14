{
    console.log('>>>Symbol创建');
    let firstName = Symbol();//不使用new，它是基本类型
    let lastName = Symbol('last name');
    let person = {};

    person[firstName] = 'Nicholas';
    person[lastName] = 'jie';
    console.log(person[firstName]);
    console.log(firstName);
    console.log(lastName);

    console.log(person);
    console.log(typeof firstName === 'symbol');
}

{
    console.log('>>>Symbol的使用方法');
    let firstName = Symbol('first name');
    let person = {
        [firstName]: 'cui'
    }

    Object.defineProperty(person, firstName, { writable: false });//修改属性的可写性
    console.log(person, person[firstName]);
    person[firstName] = 'jie';//不报错，但写不成功
    console.log('person', person, person[firstName]);

    let lastName = Symbol('last name');
    Object.defineProperties(person, {//打印出来看不到新定义的[lastName]属性
        [lastName]: {
            value: 'jie',
            writable: false,
            enumerable: true
        }
    });

    console.log('person', person, person[lastName], person[lastName]);
}

{
    console.log('>>>Symbol共享体系');
    let uid = Symbol.for('uid');
    let uid2 = Symbol.for('uid');

    console.log(uid === uid2);

    let uid3 = Symbol.keyFor(uid);
    console.log('Symbol.keyFor', uid3, typeof uid3);

    console.log(Symbol.keyFor(Symbol()), typeof Symbol.keyFor(Symbol()));//undifined
    console.log(Symbol.keyFor(Symbol.for()), typeof Symbol.keyFor(Symbol.for()));//也是返回undefined，是字符串版本格式的
}

{
    console.log('>>>Symbol与强制类型转换');
    let firstName = Symbol('first name');
    console.log(firstName, firstName.toString(), String(firstName));
}

{
    console.log('>>>Symbol属性检索');
    let firstName = Symbol('first name');
    let person = {
        [firstName]: 'cui',
        'lastName': 'jie'
    }

    console.log(Object.keys(person));
    console.log(Object.getOwnPropertyNames(person));
    console.log(Object.getOwnPropertySymbols(person));
}