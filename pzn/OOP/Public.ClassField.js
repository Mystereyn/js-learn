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

    // public field bisa ditambahkan ke constructor param.
    constructor(namaDepan, namaBelakang){
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    };

    potongSisaSaldo(){
        let saldoAdmin = 5000;
        console.log(`Saldo anda : ${this.saldo}`)
        console.log(`Saldo admin : ${saldoAdmin}`);
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

// class Temperatur {
//     fahrenheit;
//     celcius;
//     kelvin;

//     constructor(fahrenheit, celcius, kelvin){
//         this.fahrenheit = fahrenheit;
//         this.celcius = celcius;
//         this.kelvin = kelvin
//     }

// }

// class CountTemperatur extends Temperatur{
//     convertTemperatur(){
//         fahrenheitToCelcius = function(){
//             return this.celcius = (9/5*this.celcius) + 32;
//         }
//         celciusToKelvin = function(){
//             return this.celcius = 
//         }
//     }
// }

// class Temperatur {
//     constructor(fahrenheit, celcius, kelvin) {
//         this.fahrenheit = fahrenheit;
//         this.celcius = celcius;
//         this.kelvin = kelvin;
//     }
// }

// class CountTemperatur extends Temperatur {
//     fahrenheitToCelsius() {
//         if (this.fahrenheit !== undefined) {
//             this.celcius = (this.fahrenheit - 32) * 5 / 9;
//             return this.celcius;
//         }
//         return undefined;
//     }

//     celsiusToFahrenheit() {
//         if (this.celcius !== undefined) {
//             this.fahrenheit = (this.celcius * 9 / 5) + 32;
//             return this.fahrenheit;
//         }
//         return undefined;
//     }

//     celsiusToKelvin() {
//         if (this.celcius !== undefined) {
//             this.kelvin = this.celcius + 273.15;
//             return this.kelvin;
//         }
//         return undefined;
//     }

//     kelvinToCelsius() {
//         if (this.kelvin !== undefined) {
//             this.celcius = this.kelvin - 273.15;
//             return this.celcius;
//         }
//         return undefined;
//     }

//     fahrenheitToKelvin() {
//         if (this.fahrenheit !== undefined) {
//             this.kelvin = (this.fahrenheit - 32) * 5 / 9 + 273.15;
//             return this.kelvin;
//         }
//         return undefined;
//     }

//     kelvinToFahrenheit() {
//         if (this.kelvin !== undefined) {
//             this.fahrenheit = (this.kelvin - 273.15) * 9 / 5 + 32;
//             return this.fahrenheit;
//         }
//         return undefined;
//     }
// }

// // Contoh penggunaan
// const temp = new CountTemperatur(32, 0, 273.15);

// console.log(`Fahrenheit to Celsius: ${temp.fahrenheitToCelsius()}`);  // Output: 0
// console.log(`Celsius to Fahrenheit: ${temp.celsiusToFahrenheit()}`);  // Output: 32
// console.log(`Celsius to Kelvin: ${temp.celsiusToKelvin()}`);         // Output: 273.15
// console.log(`Kelvin to Celsius: ${temp.kelvinToCelsius()}`);         // Output: 0
// console.log(`Fahrenheit to Kelvin: ${temp.fahrenheitToKelvin()}`);   // Output: 273.15
// console.log(`Kelvin to Fahrenheit: ${temp.kelvinToFahrenheit()}`);   // Output: 32