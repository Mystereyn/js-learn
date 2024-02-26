// closure = kombinasi function dan bundel refrensei ke data sekitarnya
// contoh bundel refrensinya itu variable const ownerShip;

function createAdder(value){ 

    const ownerShip = "Teuku"; // global scope
    
    function add(param){
        console.log(ownerShip);
        return value+param;
    };
    return add; // alasan untuk return function ini adalah tergantung
                // jika dia ada merefrensikan global scope, 
                // maka return di global scope.

}

const addTwo = new createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));

const addTen = new createAdder(10);
console.log('This is the result of variable addTen');