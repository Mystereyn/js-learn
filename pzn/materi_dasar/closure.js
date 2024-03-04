// closure = kombinasi function dan bundel refrensei ke data sekitarnya
// contoh bundel refrensinya itu variable const ownerShip;

// function createAdder(value){ 

//     const ownerShip = "Teuku"; // global scope
    
//     function add(param){
//         console.log(ownerShip);
//         return value+param;
//     };
//     return add;
// }

// const addTwo = new createAdder(2);
// console.log(addTwo(10));
// console.log(addTwo(20));

// console.log('This is the result of variable addTen');  
// closure = combination of function and bundled references to surrounding data
// example of bundled reference is the variable const ownerShip;

function createAdder(value){ 
    const ownerShip = "Teuku"; // global scope
    // 
    function add(param){
        console.log(ownerShip); // This will print "Teuku" once
        return value + param;
    };
    return add;
}
// 
const addTwo = new createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));
console.log('This is the result of variable addTen');


 // function recursive
// function userIdentify(){
//     const user = {
//         name : "Teuku",
//         age : 21,
//         address : "JL.Raya Bogor"
//     }
//     if(user.hasOwnProperty("name")){
//         userIdentify("Betul")
//     } else {
//         console.log("Salah");
//     }
//     return user;
// }
// userIdentify();

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