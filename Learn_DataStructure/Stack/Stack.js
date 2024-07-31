"use strict";

const nums = [1,2,3,4,5,6,7,8,9,10];

class Stack {

    // push data baru
    Push(){
        nums.push(11);
        console.log(`Data telah ditambahkan menjadi : ${nums}`);
        return nums;
    }   
    Pop(){
        nums.pop();
        console.log(`Data index terakhir, telah dihapus, dan menjadi : ${nums}`);
        return nums;
    }
    // returning an element of top array not deleting it.
    Peek(){
        return `${nums[nums.length -1]}`;
    }
    isEmpty(){
        if(nums !== null){
            console.log("Data tidak kosong");
        } else {
            return -1;
        }
    }
    isFull(){
        if(nums){
            console.log(`Data tidak kosong atau full`)
        }
    }
    arguments(){
        console.log(`Dan data terakhir dan menjadi yang top adalah ${nums[nums.length - 1]}`)
    }
}

const logPushedStack = new Stack().Push();
const logPopStack = new Stack().Pop();
const logIsFull = new Stack().isFull();
const logArgument = new Stack().arguments();

