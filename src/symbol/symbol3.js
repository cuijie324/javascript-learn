//Symbol.toPrimitive
{
    function Temperature (degrees) {
        this.degrees = degrees;
    }

    Temperature.prototype[Symbol.toPrimitive] = function (hint) {
        console.log('>>>hint', hint);
        switch (hint) {
            case 'string':
                return this.degrees + '\u00b0';
            case 'number':
                return this.degrees;
            case 'default':
                return this.degrees + ' degrees';
        }
    }

    let freezing = new Temperature(32);
    console.log(freezing + '!');//32 degrees!
    console.log(freezing / 2);//16
    console.log(String(freezing));//32°
}

//Symbol.toStringTag
{
    //使用toString()识别数组
    function isArray (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    }
    console.log(isArray([]));//true

    function Person (name) {
        this.name = name;
    }

    Person.prototype[Symbol.toStringTag] = 'Person';
    let person = new Person('cuijie');
    console.log(person.toString());//[object Person]
}

//Symbol.unscopables
{
    //TODO: 没搞懂
    Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null), {
        copyWith: true,
    });

    let values = [1, 2, 3],
        colors = new Array('red', 'green', 'blue'),
        color = 'black';

    with (colors) {
        push(color);
        push(...values);
    }
    console.log(colors);
}