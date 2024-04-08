
function function_As_Value(){
    let words = {
        text1 : function(name){
            return `Hello ${name}`
        }
    }
    return words;
}

function callFunction(){
    let words  = function_As_Value()
    return words.text1;
}
let call = callFunction();

console.log(call("Teuku"))