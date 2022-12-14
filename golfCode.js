// function golfScore(par, strokes) {
    
//     if(strokes == 1) {
//         return "Hole-in-One";
//     } else if(strokes <= 2 ) {
//         return "Eagle";
//     } else if(strokes <= 1) {
//         return "Birdie";
//     }
// };

// console.log(golfScore(4,1));
// console.log(golfScore(4,2));


// function golfScore(par , strokes) {
//     if(strokes < 5 && strokes <= 1) {
//         return "Hole-in-one!";

//     } else if(par <= 5 || par == 1 ) {
//         return "Eagle";

//     } else if(par > 4 || par == 3) {
//         return "Birdie";
//     } else if(par == 4 && par == 5) {
//         return "Par";
//     }
// };




function golfScore(par, strokes) {
    var name = ["Hole-in-one!" , "Eagle" , "Birdie" , "Par", "Bogey" , "Double Bogey" , "Go Home!"];

    if (strokes == 1) {
      return name[0]
    } else if (strokes <= par - 2) {
      return name[1]
    } else if (strokes == par - 1) {
      return name[2]
    } else if (strokes == par) {
      return name[3]
    } else if (strokes == par + 1) {
      return name[4]
    } else if (strokes == par + 2) {
      return name[5]
    } else if (strokes >= par + 3) {
      return name[6]
    }
  }

console.log(golfScore(4,1));
console.log(golfScore(4,2));
console.log(golfScore(5,2));
console.log(golfScore(4,3));
console.log(golfScore(4,4));
console.log(golfScore(4,5));
console.log(golfScore(4,6));
console.log(golfScore(4,7));