    let arrays = ["Teuku", "Reynaldi", "Putra"];

    class ArrayLibrary {
        arraysForLoop() {
            // shorthand foreach
            arrays.forEach((data, index) => console.log(`index ${index}: ${data}`));
        }

        arraysQueueShift() {
            while (arrays.length > 0) {
                arrays.shift();
                if (arrays.length > 0) {
                    console.log(arrays);
                }
                return arrays;
            }
        }

        arraysQueuePush() {
            let insertNewElemen = [];

            if(insertNewElemen !== null){
                insertNewElemen = [...arrays];
                insertNewElemen.push("ini elemen baru");
                console.log(insertNewElemen);
            }
            return insertNewElemen;
        }
    }

    let arraysInstanceForLoop = new ArrayLibrary();
    arraysInstanceForLoop.arraysForLoop();

    let arraysQueueInstance = new ArrayLibrary();
    arraysQueueInstance.arraysQueueShift();

    let arraysQueuePushInstance = new ArrayLibrary();
    arraysQueuePushInstance.arraysQueuePush();
