
// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-id
// 

const food = ["Nasi Goreng" , "Kwetiau" , "Pecel Lele"];

//! Convert value string ke Array
let map = Array.prototype.map

const newFood = map.call(food[0] , parseLetter => {return `${parseLetter}` })

console.log(newFood)


function useForEach() {
    // let newDatas;
    // const datas = {
    //     name : "Mystereyn",
    //     Age : 21,
    //     Address : "JL.Raya Bogor, Km.25"
    // }
    let multipleNames = ["Teuku", "Reynaldi" , "Putra", "Irwansyah"];

    // for(const values in multipleNames) {
    //     console.log(values)
    // }
    // let tampung;
    
    multipleNames.forEach(tampung => {
        console.log(tampung)
    });
}
useForEach()