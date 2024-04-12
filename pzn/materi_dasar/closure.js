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



// This is not a closure
let x = 5;
let y = 8;

{
    let x = 10;
    let y = 20;
    let result = x + y;

    console.log(result)
}