

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
    const timeNow = date.parse(`2020-10-10T08:45:45.123+07:00`);
    console.log(timeNow);

    const theDate = date(timeNow)
    console.log(theDate);

}

(()=>{intervalClock(); parsingDate();})();

