// Materi Global vs Local Scope di Function

// Contoh 

// Global Variable
const someVar = "Hat";

function myFun() {

  // Local Variable tpi nama variable sama
  const someVar = "Head";
  // return untuk kembalikan value variable someVar di local scope
  // dan juga mengubah value global menjadi local value
  return someVar;
};
// mencetak funsi local scope variable 
console.log(myFun(someVar));


const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "Sweater"
  return outerWear;
};

console.log(myOutfit(outerWear));