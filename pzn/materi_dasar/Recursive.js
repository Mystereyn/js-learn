require('./ExampleRecursive');

console.log("\n");
function userIdentify(iteration) {
    const user = {
        name: "Teuku",
        age: 21,
        address: "JL.Raya Bogor"
    };

    if (iteration >= 0) {
        console.log(`Iteration ${iteration}:`, user);
        userIdentify(iteration - 1); // Call the function recursively with a decremented iteration
    } else {
        console.log("Recursion terminated.");
    }

    return user;
}

userIdentify(3); // Call the function with the desired number of iterations


// function doSomething(act){
    // console.log(`i am ${act}.`);
//     console.log(`${act}`);
//     doSomething(act);
// }
// doSomething("This recursive without base condition just like(if,else,else if, switch, ternary)")

// function anotherdoSomething(act){
    // console.log(`i am ${act}.`);
//     if(act >= 1){
//         console.log(`iteration ${act} : `, + " of function anotherDoSomething");
//         anotherdoSomethingdoSomething(act - 0);
//     } else {
//         console.log('Recursion has been achieved!');
//     }

// }
// anotherdoSomething("This recursive without base condition just like(if,else,else if, switch, ternary)" - 0)
console.log('\n');
function anotherdoSomething(act){
    // console.log(`i am ${act}.`);
    // if(act >= 1){
    if(act >= 1){
        console.log(`iteration ${act} : ` + " of function anotherDoSomething");
        anotherdoSomething(act - 1);
    } else {
        console.log('Recursion has been achieved!');
    }

}
anotherdoSomething(2)


function factorial(value){
    var result = 1;
    for(var i = 1; i <= value; i++){
        result *= 1;
    }
    return result
}
console.log(factorial(2));
console.log(factorial(1*2));

