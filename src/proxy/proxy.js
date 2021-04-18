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

    proxy.value = 123;
    // proxy.value = 'sss';

    console.log(target);
}

{
    //使用get陷阱函数进行对象外形验证
    let proxy = new Proxy({}, {
        get (trapTarget, key, receiver) {
            if (!(key in receiver)) {
                throw new Error(`${key} not in target`);
            }

            return Reflect.get(trapTarget, key, receiver);
        }
    });

    proxy.proxy = 'cc';
    console.log(proxy.proxy);

    console.log(proxy.name);//Error: name not in target
}