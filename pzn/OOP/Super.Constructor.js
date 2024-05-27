class Person {
    constructor(firstName){
        this.firstName = firstName;
    }
    sayHello(name){
        console.log( `Hello ${name} my first name is ${this.firstName}`);
    }
}
const me = new Person("Teuku");