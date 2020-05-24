{
    class PersonClass {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            // PersonClass = 'a';//不可修改
            console.log(this.name);
        }
    }

    //class声明只是语法糖
    console.log(typeof PersonClass); //'function'

    let person = new PersonClass('类声明');
    person.sayName();

}

//类表达式
{
    let PersonClass = class {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log(this.name);
        }
    }

    let person = new PersonClass('类表达式');
    person.sayName();
}

//具名类表达式
{
    let PersonClass = class PersonClass2 {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log('inner', typeof PersonClass);//function
            console.log('inner', typeof PersonClass2);//function 这里是有效的 
            console.log(this.name);
        }
    }

    console.log(typeof PersonClass);//function
    console.log(typeof PersonClass2);//undefined 只在类内部有效

    let person = new PersonClass('具名表达式');
    person.sayName();
}

//作为一级公民的类
{
    let person = new class {
        constructor(name) {
            this.name = name;
        }

        sayName () {
            console.log(this.name);
        }
    }('立即执行的类表达式');

    person.sayName();
}

//访问器属性
{
    class CustomHTMLElement {
        constructor(element) {
            this.element = element;
        }

        get html () {
            return this.element.innerHtml;
        }

        set html (value) {
            this.element.innerHtml = value;
        }
    }

    let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html');
    console.log(descriptor);
}
