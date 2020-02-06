//箭头函数
{
    let add = (a, b) => console.log(arguments);
    // add();
}

//尾调用优化
{
    function factorial (n) {
        if (n <= 1) {
            return 1;
        }
        console.log('>>>', n);
        return n * factorial(n - 1);
    }

    //尾调用优化版本
    function bestFactorial (n, p = 1) {
        if (n <= 1) {
            return 1 * p;
        }

        let result = n * p;
        return bestFactorial(n - 1, result);
    }

    // console.log(factorial(10000));//Maximum call stack size exceeded
    console.log(bestFactorial(10000, 1));//TODO:怎么还不如上面？
}
