//模版字面量
let message = `hello world`;

//标签模版
let name = 'cuijie';
message = tag`Hello \n${name}`;
console.log('tag message>', message);

//标签函数，可以修改默认的模版字面量返回
function tag (literals, ...substitutions) {
    console.log('literals', literals);
    console.log('literals.raw', literals.raw);
    console.log('substitutions', substitutions);

    //这里模拟了模版字面量的默认行为
    let result = '';
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    result += literals[literals.length - 1];

    return result;
}

//在模版字面量中使用原始值
message = String.raw`Hello \n${name}`;
console.log('String.raw', message);
console.log(`Hello \n${name}`);

let message2 = String.raw`Multiline\nstring`;
console.log(message2);
