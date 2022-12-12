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
function sequantialSizes(val) {

    let answer = "";
    
    switch(val) {
        case 1 : answer = "Low";
        case 2 : answer = "Low";
        case 3 : answer = "Low";
                 break;

        case 4 : answer = "Mid";
        case 5 : answer = "Mid";
        case 6 : answer = "Mid";
                 break;

        case 7 : answer = "High";
        case 8 : answer = "High";
        case 9 : answer = "High";
                 break;
    };
    return answer;
};

console.log(sequantialSizes(1));
console.log(sequantialSizes(2));
console.log(sequantialSizes(3));

console.log(sequantialSizes(4));
console.log(sequantialSizes(5));
console.log(sequantialSizes(6));

console.log(sequantialSizes(7));
console.log(sequantialSizes(8));
console.log(sequantialSizes(9));
