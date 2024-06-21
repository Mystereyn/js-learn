class MathUtil {
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error('Total parameter harus lebih dari 0');
        }
        let result = 0;
        for(const number of numbers){
            result += number;
        }
        return result;
    }
}
console.log(MathUtil.sum(1,2,3,4,5,6,7,8))


class Flip {
    static numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    static flippedData = function () {
        let copyData = [...this.numbers];
        copyData.reverse();
        return copyData;
    }
}

console.log(Flip.flippedData());

// ini studi kasus untuk mengecek apakah property dan object itu tersedia atau tidakk
// jika ada, dapatkan info,
// jika tidak ada, maka lemparkan error dan info error datanya

class DataUser {
    static user1 = {
        name : "Putra",
        age : 23,
        adress : "Ciracas"
    }
    static user2 = {
        name : "Dewa",
        age : 24,
        adress : "Cijantung"
    }
    static user3 = {
        name : "Idan",
        age : 25,
        adress : "Raya Bogor"
    }
    static user4 = {
        name : "Hartono",
        age : 26,
        adress : "Cisarua"
    }
    static user5 = {
        name : "Budi",
        age : 27,
        adress : "Majalengka"
    }
    static getInfoUser = function(){
        let datas = [DataUser.user1,DataUser.user2,DataUser.user3,DataUser.user4,DataUser.user5];
        datas.forEach((user, index)=>{
            if(DataUser.hasOwnProperty('name')){
                console.log(`User ${index+1} :  name = ${user.name}`);
            }
            else {
                throw new Error('property name every object doesnt showing up, please try to rechecked above.');
            }
        })
        // for(let i of datas){
        //     if(DataUser.hasOwnProperty('name')){
        //         console.log(`Data berikut ini datanya ( user: ${i+1})`);
        //     } 
        // }
        return datas;
    }
}
DataUser.getInfoUser();

// try {
//     const resp = 
// }