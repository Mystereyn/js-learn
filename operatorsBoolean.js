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

console.log('\n');

console.log("this is logical and");

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));

console.log('\n');
console.log("this is logical or");

// OR OPERATOR
function testLogicalOr(val) {
    
    if(val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";
};

// <=
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));

// >=
console.log(testLogicalOr(20)); //inside
console.log(testLogicalOr(21)); //
console.log(testLogicalOr(25)); 