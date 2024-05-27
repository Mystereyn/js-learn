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

