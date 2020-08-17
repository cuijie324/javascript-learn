{
    //一个简单的任务运行器
    function run (taskDef) {
        let task = taskDef();
        let result = task.next();

        function step () {
            if (!result.done) {//递归执行，一直到最后
                result = task.next();
                step();
            }
        }

        step();
    }

    run(function* () {
        console.log(1);
        yield;
        console.log(2);
        yield;
        console.log(3);
    });
}

{
    //带数据的任务运行
    function run (taskDef) {
        let task = taskDef();
        let result = task.next();

        function step () {
            if (result.done) return;

            result = task.next(result.value);
            step();
        }

        step();
    }

    run(function* () {
        let value = yield 1;
        console.log(value);//1

        value = yield value + 3;
        console.log(value);//4
    });
}

{
    //异步任务运行器
    let fs = require('fs');
    let path = require('path');

    function readFile (filename) {
        return function (callback) {
            fs.readFile(filename, 'utf8', callback);
        }
    }

    function run (taskDef) {
        let task = taskDef();
        let result = task.next();

        function step () {
            if (result.done) return;

            //不是回调函数时
            if (typeof result.value !== 'function') {
                result = task.next(result.value);
                return step();
            }

            result.value((err, value) => {
                if (err) return task.throw(err);

                result = task.next(value);
                step();
            });
        }

        step();
    }

    //运行器里面用同步的写法写异步代码
    run(function* () {
        let content = yield readFile(path.join(__dirname, 'content.json'));
        console.log(content);
        let a = yield 1;
        console.log(a);
        console.log('done');
    })
}
