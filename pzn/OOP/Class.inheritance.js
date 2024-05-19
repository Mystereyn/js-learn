class Animal {
    constructor(bark, barks){
        this.bark = bark;
        this.barks = barks
    }
};

class classifiedAnimal extends Animal {
    constructor(bark,barks){
        super(bark, barks);
    }
    identifyAnimal(){
        let barks = {
            cat : "Meooooow",
            cowsAndBull : "Moooo",
            Frog : "WebekWebek"
         }
        // this.bark = {barks};
        console.log(barks[this.bark]);
    } 
}

// lets find property in the object of barks.
let animal1 = new classifiedAnimal("cat");
// console.log(animal1.identifyAnimal());
animal1.identifyAnimal();

let animal2 = new classifiedAnimal("cowsAndBull");
// console.log(animal2.identifyAnimal());
animal2.identifyAnimal();

