class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea () {
        return this.length * this.width;
    }

    static create (length, width) {
        return new Rectangle(length, width);
    }
}

class Square extends Rectangle {
    constructor(height) {
        super(height, height);
    }

    //屏蔽类方法
    getArea () {
        console.log(super.getArea());//可以通过super访问基类方法
        return this.length * this.length;
    }
}

let square = new Square(3);
console.log(square.getArea());//9
console.log(square instanceof Square);//true
console.log(square instanceof Rectangle);//true

let ss = Square.create(3, 4);//继承的静态方法
console.log(ss.getArea());//12
console.log(ss instanceof Square);//false
console.log(ss instanceof Rectangle);//true
