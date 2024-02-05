function createLocalStorage(){

    let createValue = [
            {name : "Teuku"},
        {age : 21}
    ];
    localStorage.setItem("createValue", JSON.stringify(createValue));
    
    createValue = JSON  .parse(localStorage.getItem(createValue));
    return console.log(createValue);
}

