"use strict";


class Stack {
    constructor(){
        this.arr = []
    }
    Push(){
        // push data awal 
        this.arr.push(1,2,3,4,5)
        console.log(`Data awal : ${[this.arr]}`);
        return this.arr;
    }   
    Pop(){
        if(this.arr.length){
            this.arr.push(6,7,8);
            console.log(`Data ditambahkan menjadi : ${this.arr}`);
        }
        if(this.arr.length){
            this.arr.pop();
            console.log(`Data telah diubah, menjadi ${this.arr}`);
        }        

        return this.arr;
    }
    // returning an element of top array not deleting it.
    Peek(){
        return `${this.arr[this.arr.length -1]}`;
    }
    isEmpty(){
        if(this.arr === null){
            console.log("Data tidak kosong");
        }
    }

    isFull(){
        if(this.arr !== null){
            console.log(`Data full`)
        }
    }
    arguments(){
        console.log(`Dan data terakhir dan menjadi yang top adalah ${this.arr[this.arr.length - 1]}`)
    }
}

const logStack = new Stack();
logStack.Push()
logStack.Pop();
logStack.Peek();
logStack.isEmpty();
logStack.isFull();
logStack.arguments()





console.log("\n")
console.log('===========')

class CatatanStack {
    constructor(){
        this.arr = [];
    }

    TambahElemen(element){
        this.arr.push(element);
        console.log(`Elemen ${element} ditambahkan ke stack`);
        console.log(`Stack saat ini: ${this.arr}`);
    }   

    HapusElemen(){
        if(this.arr.length){
            let poppedElement = this.arr.pop();
            console.log(`Elemen ${poppedElement} dihapus dari stack`);
        } else {
            console.log('Stack kosong. Tidak bisa menghapus elemen.');
        }
        console.log(`Stack saat ini: ${this.arr}`);
    }

    LihatTop(){
        if(this.arr.length){
            return this.arr[this.arr.length - 1];
        } else {
            console.log('Stack kosong.');
            return null;
        }
    }

    ApakahKosong(){
        return this.arr.length === 0;
    }

    ApakahPenuh(){
        // Dalam JavaScript, stack berbasis array tidak terbatas secara default
        // Metode ini bisa disesuaikan jika ukuran maksimum ditentukan
        return false; // Selalu false untuk array dinamis
    }

    ElemenTop(){
        console.log(`Elemen teratas adalah: ${this.LihatTop()}`);
    }
}

const catatanStack = new CatatanStack();
catatanStack.TambahElemen(1);
catatanStack.TambahElemen(2);
catatanStack.TambahElemen(3);
catatanStack.TambahElemen(4);
catatanStack.TambahElemen(5);
catatanStack.HapusElemen();
catatanStack.HapusElemen();
console.log(`Elemen teratas: ${catatanStack.LihatTop()}`);
console.log(`Apakah stack kosong? ${catatanStack.ApakahKosong()}`);
catatanStack.ElemenTop();

