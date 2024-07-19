
function intervalClock() {
    setInterval(() => {
        const date = new Date();

        const hour = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const day = date.toDateString();

        const logDate = `Hari: ${day}, waktu menunjukkan: ${hour}:${minutes}:${seconds}`;
        console.log(logDate);
    }, 1000);
}

(() => intervalClock())();
