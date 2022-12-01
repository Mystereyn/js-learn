//materi compare with equality operand
// operator equality "==";
// digunakan buat perbandingan valuenya saja


function testEqual(val) {
    if(val == 10 ) {
        return "Not Equal";
    }
    return "Equal";
}
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator




// strict equliaty
// Operator yang menentukan true/false
//perbandingan untuk tipe data, variable dan valuenya


function testStrict(val) {
    if(val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));


// Method typeOf

function compareEquality(a,b) {
    if(typeof(a === b)) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(compareEquality("10" , 10));


/** 
 *  != digunakan buat perbandingan tidak cocoknya 2 nilai 
 * 
 * */
function testNotEqual(val) {
    if(val != 99) {
        return "Not Equal";
    }
    return "Equal";
};

console.log(testNotEqual("99"));

// !== digunakan jika ingin perbandingan tipe data value dari variable

function testStrictNotEqual (val) {
    if(val !== 17) {
        return "Not Equal";
    }
    return "Equal";
};
console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("Bob"));

function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100";
    };
    if(val > 10) {
        return "Over 10";
    };
    return "10 or Under"; 
};
console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(101));

function testGreaterOrEqual(val) {
    // categories 100
    if(val >= 20) {
        return "20 or Over";
    }
    // categories 10
    if(val >= 10) {
        return "10 or Over"
    }
    return "Less than 10";
};
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(21));


// Less Than
function testLessThan(val) {
    if(val < 25) {
        return "Under 25";
    }
    if(val< 55) {
        return "Under 55";
    } else {
        return "55 or Over";
    }; 
};
console.log(testLessThan(0));
console.log(testLessThan(54))
console.log(testLessThan(99));
console.log(testLessThan(55));

function testLessOrEqual(val) {
    if(val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if(val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
};

// Smaller than or Equal to 12
console.log(testLessOrEqual(0))
console.log(testLessOrEqual(11))
console.log(testLessOrEqual(12))


console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));

// More than 24
// More than 24
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));
