console.info(this);

const personalInfo = {
    name : "Teuku",
    age : 23,
    txtGreetings : (txt)=>{
        return txt;
    }
}
console.log(personalInfo.txtGreetings(`Hello ${personalInfo.name}`));

const person = {
    name : "Teuku Reynaldi",
    txtHello : function(name2){
        console.log(`Hello ${name2} this is my friend name is ${this.name}` )
    }
}
person.txtHello("Putra")

// try with return nothing
// the result is undefined because the function not returning a value.
const anotherPerson = {
    name2 : "Teuku Reynaldi Putra",
    txtGreetings : ()=>{
        return;
    }
}

console.log(anotherPerson.txtGreetings(`Hello ${this.name2}`))

