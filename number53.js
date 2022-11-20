// var arr;
// function nextInLine(arr, item) {
//     // Only change code below this line
//     arr = [0,3.4,6,7,8,9];
//     // item = arr.JSON.stringify(1,2,5)
//     return item;
//     // Only change code above this line
// };
// let nextInLine = ([5,6,7,8,9], 1);
// console.log(nextInLine(arr(1,2,5)))

// var arr;
// function nextInLine(arr, item) {
    ////  Only change code below this line
    // arr = [0,3,4];
//     arr = [];
//     arr.push(1,2);
//     console.log(arr);
//     return item;
//     // Only change code above this line
// }


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    console.log(arr);

    item = arr.shift();
    console.log(item);
    return item;
    // Only change code above this line
};

// * CATATAN

//* OUTPUT FUNGSI DIATAS ADALAH 1, DATA VALUENYA DARI MANA, KOK BISA DAPET 1?
//* SEDANGKAN DIBAWAH AJA NAMA VARIABLENYA UDAH BEDA

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); //* INI JUGA HASILNYA [2,3,4,5,6]; KENAPA NILAI 1 NYA HILANG?
