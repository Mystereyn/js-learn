
function testRestParameter(a, ...datas) {
    let arrays = []; // Menetapkan array kosong sebagai nilai awal

    for (let item of datas) {
        arrays.push(item);
    }

    console.log(`Nilai satu a = ${a} dan Ada ${arrays.length} elemen di dalam arrays:`, arrays);

}

testRestParameter(1, 2, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c');