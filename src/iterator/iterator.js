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
