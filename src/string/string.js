let txt = "𠮷";//这是个辅助平面字符
console.log(txt.length);//2
console.log(txt.charAt(0));//打印出来乱码

console.log(txt.charCodeAt(0));//55362
console.log(txt.charCodeAt(1));//57271

console.log(txt.codePointAt(0));//134071
console.log(txt.codePointAt(1));//57271

//检测是否是辅助平面字符
function is32Bit (c) {
    return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit(txt));//true
console.log(is32Bit('a'));//false

//正则表达式u修饰符
console.log(/^.$/.test(txt));//false
console.log(/^.$/u.test(txt));//true

//计算码位数量
function codePointLength (str) {
    let result = str.match(/[\s\S]/gu);
    return result ? result.length : 0
}

console.log(txt.length);//2
console.log(codePointLength(txt));//1

//检测u修饰符支持
function hasRegExpU () {
    try {
        let pattern = new RegExp('.', 'u');
        return true;
    } catch (err) {
        return false;
    }
}

console.log(hasRegExpU());//true

let str = 'Hello World!';
console.log(str.repeat(4));

console.log(str.startsWith('H'));//true
console.log(str.endsWith('!'));//true
console.log(str.includes('W'));//true

console.log(str.endsWith('o', 8));//true
