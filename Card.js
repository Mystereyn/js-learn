let count = 0;

function cc(card) {

    switch(card) {
        // cartu bertambah tiap 1 tingkat
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
            count++;
            break;
        // kartu beerkurang 1 tingkat tiap flip  
        case 10 :
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    };

    let holdbet = "Hold";

    if(count > 0) {
        holdbet = "Bet";
    };
    return count + " " + holdbet;
};
console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));