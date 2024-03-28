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

