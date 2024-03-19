// var str;

// str = "hi my name is teukureynaldi";

// var regexModifiers = str.match(/teukureynaldi/i);
// console.log(regexModifiers);

// set global variable
let str;

str = "Hi, my name is TeukuReynaldi";
let regex = /TeukuReynaldi/;

let result = regex.test(str);
console.log(result)