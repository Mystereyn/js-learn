// class Customer {
//     firstName;
//     lastName;
//     bills = 10000
// }
// const me = new Customer("Teuku");
// console.log(me)

class Pelanggan {
    // ini public field
    namaDepan = "";
    namaBelakang = "";
    saldo = 50000;

    constructor(namaDepan, namaBelakang){
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    };

    potongSisaSaldo(){
        let saldoAdmin = 5000;
        if(this.saldo){
            let sisa = this.saldo - saldoAdmin;
            console.log(`Halo yth. ${this.namaDepan} ${this.namaBelakang}, saldo anda telah terpotong menjadi : ${sisa}`)
        } else {
            console.log(`Saldo anda belum terpotong oleh saldo admin!`);
        }
    }
}
const me = new Pelanggan("Teuku", "Reynaldi");
console.log(me)
me.potongSisaSaldo();

// bagaimana jika kita menambahkan child class?

class 