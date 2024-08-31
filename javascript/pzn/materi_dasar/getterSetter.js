const dataPersonal = {
    firstName : "Teuku Reynaldi",
    Age : 22,
    Address : "JL. Raya Bogor",

    // hampir mirip dengan func
    get fullName(){
        return `Hello, so your name is ${this.firstName} and you live in ${this.Address}`
        // menggunakan this untuk merefrensikan data yang ingin dituju
    },
    set fullName(val){ //setter harus sama dengan penamaan gettet properties

        // val is paramater that is taking as executing the method, try the split string method
        const array = val.split(' ');
        this.firstName = array[0];
        this.Address = array[1];
    }
}
console.log(dataPersonal.fullName) //attribute

const data = {
    firstName : "Teuku Reynaldi",
    Age : 22,
    Address : "JL. Raya Bogor",

    get fullName(){
        // jika ingin menggunakan console.table(), return menjadi array object
        return [{
            "fullName" : this.firstName,
            "Address" : this.Address
        }]
    },
    set fullName(val){

        const array = val.split(' ');
        this.firstName = array[0];
        this.Address = array[1];
    }
}
console.table(data.fullName);