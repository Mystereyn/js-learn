const arrowFunction = ()=> {
    console.log("Hi arrow function")
}
arrowFunction();

const returnValueArrowFunction = ()=>{
    const txt = "Hello this is returnin value of arrow function";
    return console.log(txt);
}

returnValueArrowFunction();

const parameterArrowFunction = (args) => {
    args = "Teuku Reynaldi";

    let arr = [];

    for (let i = 0; i < args.length; i++) {
        arr.push(args[i]);
        console.log(arr.join('').split(''));
    }
    
    return args;
}

parameterArrowFunction();

let arorwFunctionArguments = ()=> {
    let numbers = [1,2,3,4,5,6,7,8];
    let datas = numbers.filter(count => count % 2 == 0)
    console.log(datas)
}
arorwFunctionArguments()
