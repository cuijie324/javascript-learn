function MyObject () {

}

console.log(new MyObject() instanceof MyObject);// true

//修改Symbol.hasInstance属性，永远返回false
Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function () {
        return false;
    },
    enumerable: true,
    configurable: true,
    writable: true
});

console.log(new MyObject() instanceof MyObject);//false
console.log(Object.keys(new MyObject()));
console.log(Object.getOwnPropertySymbols(new MyObject()))
console.log(Object.getOwnPropertyNames(new MyObject()))
