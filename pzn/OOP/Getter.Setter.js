class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set setnamePerson(firstName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getnamePerson(){
        return `${this.firstName},${this.lastName}`
    }

}
let name = new Person("Masita",  "Umasugi");
console.log(name.getnamePerson);

