function testElse(val) {
    let result = "";
    // Only change code below this line
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }  
    return result;
}
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));

console.log(testElse(10));

// Else If
function testElseIf(val) {
    if(val > 10 ) {
        return "Greater than 10";
    } else if(val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
};

console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(12));