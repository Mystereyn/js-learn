// spread operator = a tool that for combined 2 values or more
//
function spreadOperator() {
    const array1 = ["Teuku", "Reynaldi"];
    const array2 = ["Putra", "Irnwansyah"];

    const combined = [...array1, ...array2];
    return combined;
}

const print = spreadOperator();
console.log(print);