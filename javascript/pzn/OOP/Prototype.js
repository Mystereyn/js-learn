// function CreateConstructor(firstName){
//     this.firstName = firstName;
//     this.sayHello = function(friendName){
//         `Helo ${friendName} is ${this.firstName}`;
//     }
// }

// function CreateInheritance(firstName,friendName){
//     this.lastName = this.lastName ;
//     CreateConstructor.call(this, friendName, firstName);
// }

// const my = new CreateInheritance("Teuku", "Reynaldi");
// console.log(my.sayHello())

// my.sayThings = function(){
//     console.log("This is my mouse, the brand name is VortexSeries!");
// } 

// function CreateConstructor(firstName) {
//     this.firstName = firstName;
//     this.sayHello = function(friendName) {
//         // Return a string, not just a string literal in backticks
//         return `Hello ${friendName}, this is ${this.firstName}`;
//     };
// }

// function CreateInheritance(firstName, friendName) {
//     // Initialize the inherited properties
//     CreateConstructor.call(this, firstName);
    
//     // Add a new property to `this` for `lastName`
//     this.lastName = null; // Initialize `lastName` to a default value, since it wasn't initialized before
    
//     // Example: Setting a new property for `friendName`
//     this.friendName = friendName;
// }

// // Create an instance of CreateInheritance
// const my = new CreateInheritance("Reynaldi", "Teuku");

// // Call the `sayHello` method with the correct parameter
// console.log(my.sayHello(my.friendName));

// // Add a new method `sayThings` to `my`
// my.protoype.sayThings = function() {
//     console.log("This is my mouse, the brand name is VortexSeries!");
// };

// // Call the `sayThings` method
// my.sayThings();


function CreateConstructor(firstName, txt){
    this.firstName = firstName;
    this.txt = txt;
}

// create prototype
CreateConstructor.prototype.sayTHings = function(){
    console.log(`Hello ${this.firstName} and i love ${this.txt}`);
}

const instance = new CreateConstructor("Teuku", "Programming");
instance.sayTHings()


function CreatePrototypeConstructor(namaDepan, namaTengah, namaBelakang){
    this.namaDepan = namaDepan;
    this.namaTengah = namaTengah;
    this.namaBelakang = namaBelakang;
}

CreatePrototypeConstructor.prototype.sayWords = function(){
    console.log(`Hello ${this.namaDepan} ${this.namaBelakang} ${this.namaBelakang} `);
}
const me = new CreatePrototypeConstructor("Teuku", "Reynaldi", "Putra")
console.log(me);

