//块级函数
{
    if (true) {
        console.log(typeof doSomething);

        function doSomething () { }
    }

    console.log(typeof doSomething);
}
console.log(typeof doSomething);
