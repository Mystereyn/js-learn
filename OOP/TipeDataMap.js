
// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-id
// 

const food = ["Nasi Goreng" , "Kwetiau" , "Pecel Lele"];

let map = Array.prototype.map

const newFood = map.call(food[0] , parseLetter => {return `${parseLetter}` })

console.log(newFood)