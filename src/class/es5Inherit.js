//ES5实现继承
function Rectangle (length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
}

function Square (length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        enumerable: true,
        writable: true,
        configurable: true,
    }
});

let square = new Square(3);
console.log(square.getArea());//9
console.log(square instanceof Square);//true
console.log(Square instanceof Rectangle);//false
