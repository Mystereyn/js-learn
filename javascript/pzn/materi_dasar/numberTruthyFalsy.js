// example
let comparingBoolean = ()=> {
    let isBoolean;

    const words = "Teuku";

    if(typeof(words) === "number"){
        isBoolean = false;
    } else {
        isBoolean = true
    }
    return isBoolean;
}
console.log(comparingBoolean());


// what if we are using number, as conclusion, 1 is a true, secondly if false give 0;

let comparingBooleanWithNum = (value)=>{

    // const words = "Teuku";

    // if(typeof(words) === "number"){
    //     return 1;
    // } else {
    //     return 0
    // }

    if(typeof(value) ==="number"){
        return 1;
    } else {
        return 0;
    }
}
console.log(comparingBooleanWithNum(42));
console.log(comparingBooleanWithNum("42"))