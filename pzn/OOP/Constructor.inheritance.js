function CreateConstructor(firstName, lastName){
    this.firstName = this.firstName;
    this.sayHello = function(name){
        return `Helo my name is ${this.firstName}`;
    }
}

function CreateInheritance(firstName, lastName){
    this.firstName = firstName;
    CreateConstructor.call(this, firstName, lastName)
}

const my = new CreateInheritance("Teuku");
console.log(my.sayHello())

function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, My name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const eko = new Manager("Eko", "Khanedy");
console.info(eko);
