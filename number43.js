// Materi manipulasi array with shift() function

// shift() digunakan untuk mengeluarkan nilai elemen
// yang paling depan


// Contoh 
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value 
// of 
// the string Stimpson, 
// and ourArray would have ["J", ["cat"]].


const myArray = [["John" , 23], ["dog" , 3]];
const removedFromMyArray = myArray.shift();

console.log(myArray);
console.log(removedFromMyArray);