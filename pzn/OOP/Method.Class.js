class Person {
    constructor(name){
        this.name = name;
    }
    sayHello(buddyName){
        console.log(`Hello bro ${buddyName}, my name is  ${this.name}`)
    }
}
const buddy = new Person("Teuku");
console.log(buddy)
buddy.sayHello("Rey")