let arr = [1, 2, 3];

//创建新数组
let newArr = Array.from(arr, v => v + 1);
console.log(newArr);

newArr = Array.from(arr, function (v) { return v + this.num }, { num: 2 });//不能使用箭头函数
console.log(newArr);

let value = newArr.find(v => v === 2);
console.log(value);

newArr.fill(1);
console.log(newArr);
