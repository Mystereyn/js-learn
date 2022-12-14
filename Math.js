// contoh dari math pow(pangkat);

// Cara Baca : 
// Math.pow(x , y)= X^y; 

// 
function mathPow() {
    console.log(Math.pow(7,3));
}; 
mathPow();

// Math.Round = Method balikin nilai integer paling deket
 function mathRound(a = 0.5, b = 0.9) {
    return console.log(Math.round(a,b));
};
mathRound();

function abTest(a,b) {
    // if(a <= 0 || b <= 0) {
    //     console.log(undefined);
    // }

    if(a < 0 || b < 0) {
        return undefined; //primitive types = tidak membuthkan tanda string buat eksekusi
    };
    // else if (a && b == 0){
    //     return 0;
    // }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); //gatau baris code ini gunanya apa
};

console.log(abTest(2,2));
console.log(abTest(0,0));


