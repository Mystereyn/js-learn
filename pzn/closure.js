function createAdder(value){
    const ownerShip = "Teuku";
    function add(param){
        console.log(ownerShip)
        return value+param;
    };
    return add;
}

const addTwo = createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));
