class Person {
    constructor(name, shortName) {
        this.name = name;
        this.shortName = shortName;
    }
    get identity() {
        return `${this.name}` && `${this.shortName}`;
    }
    /**
     * @param {string} value
     */
    set fullName(value){
        // const result = value.split("");
        const result = value.split(", ");
        this.name = result[0];
        // this.lastName = result.slice(1).join(", ");
        this.lastName = result.pop();
    }
}

const my = new Person("Teuku", "Reynaldi");

function getInfo(){
    console.info(my); // log above variable

    my.fullName = "Teuku, Reynaldi, Putra, Irwansyah"
    console.info(my)
}

getInfo();


// class Number {
//     constructor(num1,numn2){
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     get calculated(){
//         return  `${this.num1} ` + `${this.num2}`
//     }

//     /**
//      * 
//      *  @param {integer} result;
//      */
//     set calculating(result){
//         return result = this.calculated;
//     }
// }

// function getIntheritance(){
//     var num1 = this.num1.Number(1, 0);
//     var num2 = this.num2.Number(2, 0);

//     console.log(num1.calculated + num2.calculated);
// }

// getIntheritance();

class Number {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
    get calculated() {
      return `${this.num1} + ${this.num2}`;
    }

    /**
     * 
     * @param {Integer} result
     */
    set calculating(result) {
      this.result = result;
    }
  }
  
  function getInheritance() {
    var num1 = new Number(1, 0);
    var num2 = new Number(2, 0);
  
    console.log(num1.calculated + " " + num2.calculated);
  }
  
  getInheritance();
  