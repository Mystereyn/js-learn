(()=>{
    const number1 = 1;
    const number2 = 2; 

    // ini kenapa hasilnya true?
    const result = number1 ?? number2;
    console.log(result);
})();

(()=>{
    let obj = {
        name :"teuku",
        short : "t",
        age : 23,
        isAlive : true
    }
    obj = obj["short"] ?? "not found";
    console.log(obj)
})()

    