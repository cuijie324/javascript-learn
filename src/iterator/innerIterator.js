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
}