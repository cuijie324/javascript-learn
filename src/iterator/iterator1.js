//迭代器
{
    //手动创建一个迭代器
    function createIterator (items) {
        let i = 0;
        return {
            next () {
                if (i < items.length) {
                    return { value: items[i++], done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }

    let iterator = createIterator([1, 2, 3]);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

//生成器
{
    function* createIterator () {
        yield 1;
        yield 2;
        yield 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

//生成器函数表达式
{
    let createIterator = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

//生成器对象的方法
{
    let o = {
        *createIterator () {
            yield 1;
            yield 2;
            yield 3;
        }
    }

    let iterator = o.createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());//{ value: undefined, done: true }
}

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
