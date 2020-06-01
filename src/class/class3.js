{
    class Rectangle {
        constructor(length, width) {
            console.log(new.target === Rectangle)
            this.length = length;
            this.width = width;
        }
    }

    new Rectangle(1, 2);

    class Square extends Rectangle {
        constructor(length) {
            super(length, length);
        }
    }

    new Square(5);
}