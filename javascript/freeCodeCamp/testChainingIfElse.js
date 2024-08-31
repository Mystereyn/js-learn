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



// What is ... in JS?