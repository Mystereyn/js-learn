function objFeeze() {
    const data = {
        name: "Teuku Reynaldi",
        age: 22,
    };
    // freeze = object yang keseluruhan tidak bisa diubah
    Object.freeze(data);

    // coba kita ubah dengan delete function, hasil tidak bisa.
    data.name = "Putra";
    delete data.name;

    // bagaimana kita tambahkan datanya

    // Object.defineProperty(data1, "tambahDataObject_freez", {
    //     value: true,
    //     writable: false,
    // });

    // data tidak bisa ditambahkan

    // console.log(data1.tambahDataObject_freez);

    console.log(data);
    console.log(data.tambahDataObject_freez);
}

function objSealed() {
    const object = {
        property1: 42,
    };

    Object.seal(object);
    object.property1 = 33;
    console.log(object.property1);
    // Expected output: 33

    delete object.property1; // Cannot delete when sealed
    console.log(object.property1);
    // Expected output: 33
}

function objAssign(){
    const object = {
        name : "Teuku Reynaldi object assign",
        age : 100,
        hobbies : ["Basket", "Playing online game", "reading shitpost"],
        isAlive : true
    }
    const newObject = {
        isMechanicalKeyboard : true,
        codingJavascript : true,
        onCollage : true,
    }
    const assignObject = Object.assign([object, newObject]);
    console.log(assignObject);
}

(()=>{objFeeze();objSealed();objAssign();})();