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

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


const arrays1 = [1,2,3,4,5,6,7,8,9,10];
const arrays2 = [11,12,13,14,15];

const concating = [...arrays1, ...arrays2];

const datas = concating;
console.log(datas);

