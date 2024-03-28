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
function* generateEvenNumber(value){
    for(let i = 0; i <= value; i++){
        if(i%2 === 1){
            yield i;
        }
    }
}

const evenNumber = generateEvenNumber(100);
for(const iterationNumber of evenNumber){
    console.log(iterationNumber);
}