function masakNasi(stockBeras) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( stockBeras > 0) {
                return resolve("Nasi sudah jadi");
            }
            return reject(Error("Beras habis"));
        },1000)
    })
}


const stockBeras = 10;
const isNasiJadi = masakNasi(stockBeras)

console.log("Apakah nasi sudah jadi?");
console.log(isNasiJadi);

masakNasi(stockBeras).then(() => {
    console.log("Yosh kita makan nasi");
})
.catch((err) => {
    console.log("Kita gak makan nasi")
    console.log(err);
})
