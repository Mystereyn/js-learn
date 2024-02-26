// function first(){
//     let firstVariable = "First";
// }
// function second(){
//     let secondVariable = "Second";
// }

// first(); second();

// console.log(firstVariable);
// console.log(secondVariable);

// // we try var key
// function anotherFirtst(){
//     var anotherFirstVariable = "another First"; 
// }
// function anotherSecond(){
//     var secondVariable = "another Second";
// }

// anotherFirtst()
// anotherSecond()

// console.log(anotherFirstVariable);
// console.log(secondVariable);


function fn(){
    let variable = "Teuku";

    function nestedFn(){
        console.log(variable);
        const nextVariableNested = "Reynaldi";
    }
    nestedFn();

    // cannot access, because the variable log outside of nestedfn(); 
    console.log(nextVariableNested);
}