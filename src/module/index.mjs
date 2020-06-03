import { name, setName, obj, setNewObj } from './example.mjs';
import { name as newName, myName } from './example.mjs';

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