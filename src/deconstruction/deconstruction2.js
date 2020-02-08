//数组解构
let colors = ['red', 'green', 'blue'];

//声明解构
{
    let [firstColor, secondColor] = colors;
    console.log(firstColor, secondColor);
}

//赋值解构
{
    let firstColor = 'black', secondColor = 'white';
    console.log(firstColor, secondColor);
    [firstColor, secondColor] = colors;
    console.log(firstColor, secondColor);

    //交换两个变量的值
    {
        let a = 1, b = 2;
        [a, b] = [b, a];
        console.log(a, b);
    }
}

//默认值
{
    let colors = ['red'];
    let [firstColor, secondColor = 'blue'] = colors;
    console.log(firstColor, secondColor);
}

//嵌套数组解构
{
    let colors = ['red', ['green', 'blue']];
    let [firstColor, [secondColor]] = colors;
    console.log(firstColor, secondColor);
}

//不定元素
{
    let [firstColor, ...restColors] = colors;
    console.log(firstColor, restColors);

    //数组复制
    {
        let clonedColors = colors.concat();
        console.log(clonedColors);
    }

    {
        let [...clonedColors] = colors;
        console.log(clonedColors);
    }
}