
// Materi variable global scope dan block scope

// Declare the myGlobal variable below this line

// Ini variable Global Scope
let oopsGlobal;
let myGlobal
function fun1() {

    // Lalu di masukkan variablenya ke blockScope, 
    // Beserta dengan nilainya. 

    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
    myGlobal = 10
    // let myGlobal = oopsGlobal + 2;
    // console.log(myGlobal);    
};
// fun1();

  // Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
};

