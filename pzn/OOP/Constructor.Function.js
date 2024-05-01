// const budi = {
//     namaDepan : "T",
//     namaBelakang : "B"
// }

// const rey = {
//     namaDepan : "P",
//     namaBelakang : "V"
// }


// constructor function, memakai UpperCase untuk nama function karena best practisenya memakai ini
function Person(){

}  

const {
    
    firstName = "Teuku", 
    middleName = "Reynaldi", 
    lastName = "Putra"

} = new Person();
const Arr = [firstName, middleName, lastName];

console.log(Arr);



function ParameterConstructor(first,last){
    this.first = first;
    this.Last = last;
    this.txtGreetings = function(){
        return `Hello My firstname is ${this.first} and my last name is ${this.Last}`
    }
}

let me = new ParameterConstructor("Teuku Reynaldi", "Putra");
console.log(me.txtGreetings())