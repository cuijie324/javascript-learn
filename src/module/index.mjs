import { name, setName, obj, setNewObj } from './example.mjs';
import { name as newName, myName } from './example.mjs';
import defaultValue, { anotherName } from './example2.mjs';
import { default as sum, anotherName as ano } from './example2.mjs';

console.log('>>>>name', name);
// name = 'cuijie';//不能修改

import * as example from './example.mjs';//命名空间导入
console.log(example);

function test () {
    // import { name } from './example.mjs';//这样也是不行的
    console.log(name);
}

// test();

{
    //怪异点
    console.log('>>>>before', name);
    setName('module');//修改名字
    console.log('>>>>after', name);

    //对象依然会起效
    console.log('>>>>before', obj);
    setNewObj({ name: 'new' });
    console.log('>>>>after', obj);
}

{
    //导入导出重命名
    console.log(newName);
    console.log(myName);
}

{
    //默认值
    console.log(defaultValue);

    //既有默认值又有普通值的情况
    console.log(anotherName);

    console.log('使用重命名语法', sum, ano);
}

//绑定的再导出
// export { anotherName } from './example2.mjs';
export * from './example2.mjs';
