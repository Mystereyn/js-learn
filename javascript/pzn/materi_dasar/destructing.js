/**
 * Destructing -> Fitur yang digunakan untuk bongkar value di array atau object ke dalam variable2
 * Fitur ini tanpa harus ambil data/nilai dari array atau object satu satu
 *
 *
 */

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

console.log("\n");

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

const arrays1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrays2 = [11, 12, 13, 14, 15];

const concating = [...arrays1, ...arrays2];

const datas = concating;
console.log(datas);
console.log("\n");


(() => {
  let arrays = [1, 2, 3, 4, 5, 6, 8, 10];
  let [y] = [arrays];
  console.log(y);
})();

console.log("\n");




const obj = {
  name : "Teuku",
  age : 22
}


// const getName = obj.name; console.log(getName)
const {name, age} = obj;

console.log(`Hai, my name is ${name} and my age is ${age}`)
console.log("\n");





// destrucuring dengan function paramter

function DestructorDisplayParameter({firstName, middleName,Address}){
  // Jika tidak menambahkan operator destructor atau object => {}, maka hanya satu data aja yang muncul
  // jika pake {} , maka semua data muncul
  return {firstName,middleName,Address};
}

function DataPersonal(){

  // let extract = DestructorDisplayParameter(()=>{
    let PersonalInfo = {
      firstName :"Teuku",
      middleName: "Reynaldi",
      Address: "JL. Raya Bogor"
    }
    return DestructorDisplayParameter(PersonalInfo);
}
console.log(DataPersonal());
console.log("\n");





//destructuring dengan memakai array di function parameter

function DestructingArrayDisplayParameter([num1, num2]){
  return  num1 + num2;
}
(()=>{
  console.log(DestructingArrayDisplayParameter([10,10]));
})()