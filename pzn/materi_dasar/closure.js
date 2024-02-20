// closure = kombinasi function dan bundel refrensei ke data sekitarnya
// contoh bundel refrensinya itu variable const ownerShip;

function createAdder(value){ // function yang menampung nested func, 
                             //value disini untuk mencetak nilai integer

    const ownerShip = "Teuku"; // global scope
    
    // function  
    function add(param){
        console.log(ownerShip) //global scope yang menjadi local scope
        return value+param;
    };
    return add; // alasan untuk return function ini adalah tergantung
                // jika dia ada merefrensikan global scope, 
                // maka return di global scope.

}

const addTwo = createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));
