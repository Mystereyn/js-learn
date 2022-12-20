    //! const myDog = {
    //!! name : "Bull",
    //! legs : 4,
   //!tails : 1,
  //! friends : ["Cat" , "Ball" , "Bone" , "Milk"] 
//! };
//! 
//! console.log(myDog);
//! console.log("\n");

//** */Access object properties with Dot (.);
// ** const testObj = {
// **     "hat" : "ballcap",
// **     "shirt" : "jersey",
// **     "shoes" : "cleats"
// ** };
 
// ** const hatValue = testObj.hat;
// ** const shirtValue = testObj.shirt;
// ** const shoesValue = testObj.shoes;

// ** console.log(hatValue,shirtValue,shoesValue);



//! access obj with bracket notation

//! const testObj = {
//!     "an entreee" : "hamburger",
//!     "my side" : "veggies",
//!     "the drink"  :"water"
//! };

//! const entreeValue = testObj["an entreee"];
//! console.log(entreeValue);

//! const drinkValue = testObj["the drink"];
//!console.log(drinkValue);


// access with variable and bracket notation
const testObj = {
    12 : "Namath",
    16 : "Montana",
    19 : "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
console.log(player);

// updating a value of below these all properties, 
// choose did you want to change it 
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails" : 1,
    "friends" : ["FreeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog);

myDog.bark = "bow-wow";
console.log(myDog);

delete myDog.tails; //delete = menghapus properties
console.log(myDog);









// Using Objects for Lookups

Setup
function phoneticLookup(val) {
    let result = "";
  
    switch(val) {
        case "alpha":
         result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
    }    
   // Only change code above this line
    return result;
};
phoneticLookup("charlie");

//   change to single variable object, bernama lookUp

// function phoneticLookup(lookUp) {
//   // menyimpan value properties di variable yang baru
//    lookUp = {
//     "alpha" : "adams",
//     "Bravo" : "Boston",
//     "delta" : "Denver",
//     "echo" : "Easy",
//     "foxtrot" : "Frank"
//   };
// };

// console.log(phoneticLookup("alpha));



function phoneticLookup(value) {
    var result = " ";
    const lookUp = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank",
    "charlie" : "Chicago"
};
    return lookUp[value];
    return result;
}
console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));

