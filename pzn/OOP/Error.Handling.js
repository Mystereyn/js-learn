"use strict";

class MathUtil {

    static sum(...numbers) {

        if (numbers.length === 0) {
            throw new Error("Total parameter harus lebih dari 0");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }

}

try {
    console.info(MathUtil.sum());
    console.info("Eko");
} catch (error) {
    console.info(`Terjadi error : ${error.message}`);
} finally {
    console.info("Program selesai");
}

console.info("Khannedy");

class Counter {

    #counter = 1;

    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }

}

const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());


class Database {
    static colleger1 = {
        name : "Teuku Reynaldi",
        age : 23,
        address : "Jl. Raya Bogor"
    }
    static colleger2 = {
        name : "Budi Hartono",
        age : 24,
        address : "Jl. Raya Puncak"
    }
    static colleger3 = {
        name : "Smith",
        age : 29,
        address : "Jl. Asia Afrika Bandung"
    }
    static colleger4 = {
        name : "Pelita",
        age : 30,
        address : "Cipanas"
    }
    static colleger5 = {
        name : "Brawijaya",
        age : 19,
        address : "Cisadane"
    }
    static logData(){

        const datas = [
            Database.colleger1, 
            Database.colleger2, 
            Database.colleger3, 
            Database.colleger4, 
            Database.colleger5
        ];

        try {
            const dataJSON = JSON.stringify(datas);
            if(dataJSON !== null){
                console.log(`Data JSON success to render : ${dataJSON}`);
            }

        } catch (err){ 
            throw new Error('Data failed to rendered!, please rechecked the code above');
        }
    }
}

Database.logData();