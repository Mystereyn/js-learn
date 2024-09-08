function greet(pass, name) {
    console.log("Hello, " + name);
    pass(); // Invoke the passed function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet(sayGoodbye, "teuku");

// test kalau menggunakan switch;

function foo(pass, compare){
    const day1 = "ahad/minggu";

    switch(compare){
        case 1:
            if(day1 == "ahad/minggu") console.log("benar");
            // ini function pass yang diambil dari param dipakai untuk melewati aksi saat ini, 
            // dan aksi dari code selanjutnya bernilai true
            pass();
        default :
        console.log("hanya mengetest dari param sebagai func");
    }
    return day1;
}
foo()