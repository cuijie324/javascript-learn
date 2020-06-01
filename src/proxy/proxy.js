//创建一个简单的代理
{
    let target = {};
    let proxy = new Proxy(target, {});

    proxy.name = 'proxy';
    console.log(proxy.name);
    console.log(target.name);

    target.name = 'target';
    console.log(proxy.name);
    console.log(target.name);
}

//使用set陷阱函数验证属性值
{
    let target = {
        name: 'cc'
    }

    let proxy = new Proxy(target, {
        set (trapTarget, key, value, receiver) {
            if (!trapTarget.hasOwnProperty(key)) {
                if (isNaN(value)) throw new TypeError('只能是数字');
            }

            return Reflect.set(trapTarget, key, value, receiver);
        }
    });

    target.name = 'cccc';
    proxy.name = 'jjjjj';

    // proxy.value = 123;
    proxy.value = 'sss';

    console.log(target);
}
