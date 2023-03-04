// function caseInSwitch(val) {
//     let answer = " ";

//     switch(val) {
//         case 1 :
//             answer = "Alpha";
//             console.log(answer);
//             break;
//         case 2 :
//             answer = "Beta";
//             console.log(answer);
//             break;

//         case 3 : 
//             answer = "Gamma";
//             console.log(answer);
//             break;

//         case 4 :
//             answer = "Delta";
//             console.log(answer);
//             break;
//     }
// };

// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));
// console.log(caseInSwitch(3));
// console.log(caseInSwitch(4));


function caseInSwitch(val) {
    var answer = " ";

    switch(val) {
        case 1 : 
            answer = "Alpha";
            break;
        case 2 :
            answer = "Beta";
            break;
        case 3 : 
            answer = "Gamma";
            break; 
        case 4 : 
            answer = "Delta";
            break;
    }
    return answer;
};

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));


// Memakai default logic
function switchOfStuff(val) {
    let answer = " ";

    switch(val){
        case "a":
            return answer = "apple";
            break;
        case "b" : 
            return answer = "bird";
            break;
        case "c" :
            return answer = "cat";
            break;                   
        default : 
            return answer = "stuff";
    }
    return answer;
};

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));



// multiple Identical
// function sequantialSizes(val) {

//     let answer = "";
    
//     switch(val) {
//         case 1 : answer = "Low";
//         case 2 : answer = "Low";
//         case 3 : answer = "Low";
//                  break;

//         case 4 : answer = "Mid";
//         case 5 : answer = "Mid";
//         case 6 : answer = "Mid";
//                  break;

//         case 7 : answer = "High";
//         case 8 : answer = "High";
//         case 9 : answer = "High";
//                  break;
//     };
//     return answer;
// };



function sequentialSizes(val) {
    
    let answer = " ";
    switch(val) {
        case 1 :
        case 2 :
        case 3 :
        answer = "Low";
        break;

        case 4 :
        case 5 : 
        case 6 :
        answer = "Mid";
        break;
        
        case 7 :
        case 8 :
        case 9 :
            answer = "High";
    }
    return answer;
};

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));

console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));

console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));

// If Else but using switchCase

function chainToSwitch(val) {
    let answer = "";

    switch(val) {
        case "bob" : 
            answer = "Marley";
            break;
        case 42 :
            answer = "The Answer";
            break;

        case 1 : 
            answer = "There is no #1";
            break;

        case 99 : 
            answer = "Missed me by this much!";
            break;

        case 7 : 
            answer = "Ate Nine";
            break;

        // default : 
        //     answer = "";
    }
    return answer;
};

console.log(chainToSwitch(1));
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(99));
console.log(chainToSwitch(156));
console.log(chainToSwitch("John"));







// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');


