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

