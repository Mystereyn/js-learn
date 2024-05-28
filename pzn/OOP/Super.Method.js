class Shape {
    paint(){
        console.log("Painting a Shape!")
    }
}

class Rectangle extends Shape {
    paint(){
        // This is a method from the parent class alias from the above.
        super.paint();
            console.log("Painting a Rectangle too!");
    }
}

const obj = new Rectangle();
obj.paint()


class Animal {
    constructor(mammals, fish, birds, reptiles, amphibian) {
        this.mammals = mammals;
        this.fish = fish
        this.birds = birds;
        this.reptiles = reptiles;
        this.amphibian = amphibian;
    }
    listedTheAnimal(){
        this.mammals = ["Dog", "Cow", "Cat", "Giraffe"];
    }
}

class DeletingPropertyAnimal extends Animal {
    deleteProperty(){
        super.listedTheAnimal();
        // delete this.mammals;
        // console.log("The Properties has been Eliminated")

        if(this.mammals){
            this.mammals.pop()
            console.log(this.mammals);
        } else {
            console.log("Last indexis array failed to removed!");
        }

    }
 
}

const print = new DeletingPropertyAnimal();
print.deleteProperty()
