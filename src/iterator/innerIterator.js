{
    //内置迭代器
    let colors = ['red', 'green', 'blue'];
    colors['a'] = 'ccc';

    for (let entry of colors.entries()) {
        console.log(entry);
    }

    for (let item in colors) {
        console.log(item);
    }

    let maps = new Map();
    maps.set('name', 'cuijie');
    maps.set('age', 17);

    for (let [key, value] of maps) {//Map的默认迭代器是entries，这里还使用了解构赋值
        console.log(key, value);
    }
}

{
    //字符串迭代器，字符串可以使用for...of
    let str = 'A B';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}