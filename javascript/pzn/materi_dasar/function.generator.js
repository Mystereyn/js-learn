function* generator(){
    yield "Teuku"
    yield "Reynaldi"
    yield "Putra"
}

const profile = generator();

for(const datas of profile){
    console.log(datas);
}

// what if we used as arrow function generator?

// const arrowGenerator* = ()=>{

// }

// arrow function not available

// and the anonymous function too, 

// (function()*{

// })


// so that we conclude is normally function that the only which could be as the generator function

// use yield if the function is generator
// this is lazy function


/**
 * 
 * 
 * 
 * 
 *  penjelasan lazy function 

    Lazy function adalah sebuah function yang tidak akan mengesekusi
    evaluasi ekspresi ditunda sampai value tersebut benar diperlukan
    singkatnya nilai komputasi tidak akan dievaluasi saat program dieksekusi
    sampai titik dimana mereka didefinisikan terlebih dahulu.
    lazy function biasanya digunakan untuk big data collection
 * 
 * 
 *  Dengan lazy computation, kita dapat membuat struktur data atau fungsi yang menunda evaluasi nilai hingga saat diperlukan, 
 *  yang dapat membantu meningkatkan kinerja dan efisiensi program, 
 *  terutama dalam kasus-kasus di mana tidak semua data atau hasil komputasi benar-benar dibutuhkan.
 * 
 */
function* generateEvenNumber(value){
    for(let i = 0; i <= value; i++){
        if(i%2 === 1){
            console.log(`Yield ${i}`);
            yield i;
        }
    }
}
console.log("\n");

const evenNumber = generateEvenNumber(100);
for(const iterationNumber of evenNumber){
    console.log(iterationNumber);
}


// this is Eager Function
function* generateOddNumber(value){
    const result = [];
    for(let i = 0; i <= value; i++){
        if(i%2 === 0){
            console.log(`Yield ${i}`);
            result.push(i);
        }
    }
    return result;
}

const oddNumber = generateOddNumber(100);
for(const iterationNumber of oddNumber){
    console.log(iterationNumber);
}