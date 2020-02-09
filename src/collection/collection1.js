//ES5中的Set和Map集合
{
    let set = Object.create(null);
    set.foo = true;
}

//Set集合
{
    let set = new Set();

    //添加元素
    set.add(5);
    set.add(5);//重复元素会被忽略
    console.log(set.size);//1
    console.log(set.has(5));//true
    console.log(set.has('5'));//false

    set.add('5');

    //移除元素
    set.delete(5);
    console.log(set.size);//1
    set.clear();
    console.log(set.size);//0

    //forEach
    set.add(1);
    set.add(2);
    set.add(0);
    set.forEach((value, value2, ownerSet) => {
        console.log(value, value2, ownerSet === set);
    });
}

//forEach的第二个参数
{
    let set = new Set([1, 2]);
    let processor = {
        output (value) {
            console.log(value);
        },
        process (dataSet) {
            dataSet.forEach(function (value) {
                // console.log(this);
                this.output(value);
            }, this);//不指定this的话，绑定到了全局对象
        },
        process2 (dataSet) {
            dataSet.forEach(value => {//箭头函数可以避免this绑定问题
                this.output(value);
            });
        }
    }

    processor.process(set);
    processor.process2(set);
}

//Set集合转换为数组
{
    let set = new Set([1, 2, 3, 4]);
    let arr = [...set];
    console.log(arr);

    //过滤数组的重复元素
    console.log([...new Set([1, 1, 3, 4])]);
}

//Weak Set
{
    let key = {};
    let set = new WeakSet([key]);
    set.add(key);
    console.log(set);
    key = null;
    set.delete(key);
    console.log(key, set);
}