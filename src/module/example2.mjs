// //导出默认变量
// let defaultArgument = 'cc';
// export default defaultArgument;

//导出默认值的三种方式
// export default function (a, b) {
//     return a + b;
// }

function sum (a, b) {
    return a + b;
}
// export default sum;
let anotherName = 'cc';

export { sum as default, anotherName };
