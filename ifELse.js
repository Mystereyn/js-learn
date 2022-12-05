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

// Chaining if else else if
function testSize(value) {
    if(value < 5) {
        return "Tiny";
    } else if (value < 10) {
        return "Small";
    } else if (value < 15) {
        return "Medium";
    } else if (value < 20) {
        return "Large"
    } else {
        return "Huge";
    }
};

console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(15));
console.log(testSize(25));
