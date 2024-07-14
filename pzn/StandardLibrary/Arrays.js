"use strict";

let arrays = ["Teuku", "Reynaldi", "Putra"];

class ArrayLibrary {
    arraysForLoop() {
        // shorthand foreach
        arrays.forEach((data, index) => console.log(`index ${index}: ${data}`));
    }

    arraysQueueShift() {
        while (arrays.length > 0) {
            arrays.shift()
            if (arrays.length > 0) {
                console.log(arrays);
            }
            return arrays;
        }
    }

    arraysQueuePush() {
        let insertNewElemen = [];

        if (insertNewElemen !== null) {
            insertNewElemen = [...arrays];
            insertNewElemen.push("ini elemen baru");
            console.log(insertNewElemen);
        }
        return insertNewElemen;
    }
    arraysQueueSearch() {
        console.log(arrays.find(value => value == 3));
        return arrays;
    }
    arraysFilter(insertNewElement) {
        // let hasPushed = insertNewElement ? insertNewElement = [...arrays] 
        ///                 ?  insertNewElement.push("ini elemen baru untuk coba arrays filter method") ?
        //                 insertNewElement.filter(value => value === insertNewElement[2] ? console): console.log("element failed to pushed")
        // return hasPushed;

        // let hasPushed;
        // if(insertNewElement){
        //     insertNewElement = [...arrays];
        //     insertNewElement.push("ini elemen baru untuk coba arrays filter method");
        // }
        // hasPushed = insertNewElement.filter((value)=>{
        //     return value ? value === insertNewElement[2] : console.log(value, true);
        // })
        // if (insertNewElement) {
        //     insertNewElement = [...arrays];
        //     insertNewElement.push("ini elemen baru untuk coba arrays filter method");

            // hasPushed = 
            // hasPushed = insertNewElement.filter((value, index) => {
            //     return value === insertNewElement[2] ? console.log(value) : null;
            // });
            // let hasPushed = insertNewElement

            // let hasBeenPushed = insertNewElement.filter((value, filtered)=>{
            //     return value ? filtered === insertNewElement[2] : console.log("Data yang dicari telah ditemukan");
            // })
            // return hasBeenPushed;

            return insertNewElement ? (()=>{
                insertNewElement = [...arrays];
                insertNewElement.push("ini data baru untuk find data method");

                let foundIndex = insertNewElement.find((value, index)=> value === insertNewElement[2]);
                
                let searchData = insertNewElement.find((value)=> value === "Putra");

                let hasBeenPushed = insertNewElement.filter((value)=> {
                    value === foundIndex ? (console.log(`Data yang dicari telah ditemukan, yaitu pada data index 
                    ${insertNewElement.indexOf(foundIndex)}, datanya : ${searchData}`), true) : false;

                    // value === searchData ? console.log(`datanya : ${searchData}`, true) : false;
                });
                return hasBeenPushed;
            })() : [];
            // let hasBeenPushed = insertNewElement.filter((value, filtered)=> {
            //     value === insertNewElement[2] ? (console.log("Data yang dicari telah ditemukan!"), true) : false
            // });
        // }
        // return insertNewElement;
    }
}
let arraysInstanceForLoop = new ArrayLibrary();
arraysInstanceForLoop.arraysForLoop();

let arraysQueueInstance = new ArrayLibrary();
arraysQueueInstance.arraysQueueShift();

let arraysQueuePushInstance = new ArrayLibrary();
arraysQueuePushInstance.arraysQueuePush();

let arraysQueueSearch = new ArrayLibrary();
arraysQueueSearch.arraysQueueSearch();

let arraysFilter = new ArrayLibrary();
arraysFilter.arraysFilter(true);