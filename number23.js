let a = 48;
let b = 108;
let c = 33;
// a should equal 4.
// Waiting:b should equal 27.
// Waiting:c should equal 3.
// Waiting:You should use the /= operator for each variable.
// Waiting:You should not modify the code above the specified comment.

// Only change code below this line
// a = a / 12;
// b = b / 4;
// c = c / 11;

a /= 12;
b /= 4;
c /= 11;

const object = {
    Name: "Teuku Reynaldi",
    Age : 21,
    Address : "Jl.Raya Bogor"
}

// object must be transfering into a new variable, we called Sort for sorting.
const sort = (object) => {
    console.log(object);
}
sort(object.Name);
sort(object.Age)