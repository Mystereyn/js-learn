const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // code gw
let isFound = false; //code gw

function searchData(target) {
     // log barisnya dlu
     for (let i = 0; i < nums.length; i++) {
          
          if (nums[i] === target) {
               isFound = true;
               console.log(`Angka ${target} ditemukan di index ${i}`);
               return i;
          }
     }

     console.log(`Angka ${target} tidak ditemukan`);
     return -1;
}

searchData(10);   
searchData(1);   
searchData(16); 
