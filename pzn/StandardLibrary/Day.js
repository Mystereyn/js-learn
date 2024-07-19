const date= new Date();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const day = date.toDateString()

function intervalClock(){
    
    setInterval(()=>{
        
        const logDate = `Hari: ${day}, jam: ${hour}:${minutes}:${seconds}`;
        console.log(logDate);
    }, 1000)
}

function parsingDate(){
    
}


(()=>intervalClock())()

