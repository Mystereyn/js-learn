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
// this is lazy
function* generateEvenNumber(value){
    for(let i = 0; i <= value; i++){
        if(i%2 === 1){
            console.log(`Yield ${i}`);
            yield i;
        }
    }
}

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