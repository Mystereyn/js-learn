// Materi Global vs Local Scope di Function

// Contoh 


const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
};
console.log(myFun(someVar));