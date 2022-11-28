//materi compare with equality operand
// operator equality "==";
// digunakan buat perbandingan valuenya saja


// function testEqual(val) {
//     if(val == 10 ) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator




// strict equliaty
// Operator yang menentukan true/false
//perbandingan untuk tipe data, variable dan valuenya


// function testStrict(val) {
//     if(val === 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testStrict(7));


// Method typeOf

// function compareEquality(a,b) {
//     if(typeof(a === b)) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// console.log(compareEquality("10" , 10));


/** 
 *  != digunakan buat perbandingan tidak cocoknya 2 nilai 
 * 
 * */
// function testNotEqual(val) {
//     if(val != 99) {
//         return "Not Equal";
//     }
//     return "Equal";
// };

// console.log(testNotEqual("99"));

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