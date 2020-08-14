
//可迭代对象
{
    let values = [1, 2, 3];
    for (let num of values) {
        console.log(num);
    }

    let iterator = values[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }

    //检测是否为可迭代对象
    function isIterable (object) {
        return typeof object[Symbol.iterator] === 'function';
    }

    console.log(isIterable(new Set()));//true
    console.log(isIterable(new WeakSet()));//false
}

//创建可迭代对象
{
    let collection = {
        items: [],
        // *[Symbol.iterator] () {//新语法
        //     for (let item of this.items) {
        //         yield item;
        //     }
        // }
        [Symbol.iterator]: function* () {//旧语法
            for (let item of this.items) {
                yield item;
            }
        }
    }

    collection.items.push(5);
    collection.items.push(1);
    collection.items.push(3);

    for (let it of collection) {
        console.log(it);
    }
}
