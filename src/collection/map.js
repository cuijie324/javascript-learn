//Map集合
{
    let map = new Map(),
        key1 = {},
        key2 = {};

    map.set('name', 'cuijie');
    map.set(key1, key2);
    console.log(map.get(key1));

    map.forEach((value, key, ownerMap) => {
        console.log(value, key, ownerMap === map);
    });
}

//私有对象数据
{
    let Person = (function () {
        let privateDate = new WeakMap();

        function Person (name) {
            privateDate.set(this, { name });//私有对象数据保存
        }

        Person.prototype.getName = function () {
            return privateDate.get(this).name;
        }

        return Person;
    })();

    let person = new Person('cuijie');
    console.log(person.getName());
}
