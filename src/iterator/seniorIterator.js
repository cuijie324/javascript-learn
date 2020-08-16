{
    //传递参数给迭代器
    function* createIterator () {
        let first = yield 1;
        let second = yield first + 2;
        yield second + 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());//1
    console.log(iterator.next(4));//6 first = 4
    console.log(iterator.next(5));//8 second = 5
    console.log(iterator.next());
}

{
    //在迭代器中抛出错误
    function* createIterator () {
        let first = yield 1;
        let second = yield first + 2;
        yield second + 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next(4));
    // console.log(iterator.throw(new Error('Boom')));
}

{
    //通过try...catch捕捉异常
    function* createIterator () {
        let first = yield 1;
        let second
        try {
            second = yield first + 2;
        } catch (err) {
            console.error('error', err.message);
        }
        yield second + 3;
    }

    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next(4));
    console.log(iterator.throw(new Error('Boom')));
}

{
    //生成器委托
    function* createNumberIterator () {
        yield 1;
        yield 2;//如果是return的话，在生成器委托中，iterator.next()不会打印出来
    }

    // function* test () {
    //     yield* createNumberIterator();
    // }

    function* createColorIterator () {
        yield 'red';
        yield 'green';
    }

    function* createCombinedIterator () {
        yield* createNumberIterator();
        yield* createColorIterator();
        yield true;
    }

    console.log('\n生成器委托');
    let iterator = createCombinedIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    console.log([...function* () { yield* 'hello' }()]);//会调用字符串的默认迭代器
}
