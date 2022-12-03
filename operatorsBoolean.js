// and

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('\n');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

function testLogicalAnd (val) {
    if(val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
};

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));


// OR OPERATOR
function testLogicalOR(val) {
    if(val >= 20 || val >= 25) {
        return "Inside";
    }
    return "Outside";
};

console.log(testLogicalOR(0));
console.log(testLogicalOR(9));



