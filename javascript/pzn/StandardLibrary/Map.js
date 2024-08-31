const map = new Map();

function logicMap(){

    // membuat property dan value
    map.set("teuku", "umur 23");
    console.log(map);

    // method map.get() untuk mengecek value berdasarkan property yang telah dibuat diatas
    console.log(map.get("teuku"));

    // mengecek apakah property ini telah dibuat?
    console.log(map.has("teuku"))

};

logicMap();