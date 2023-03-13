// let user = {
//     userName : "Mystereyn!",
// }

// user = null;

// console.log(user);

let user = {
    userName : "Mystereyn!"
}

let admin = user;

// user = null;
// admin = null;

console.log(user);

// Penjelasan code diatas :

// garbage collection adalah mengatur memori otomatis yang diatur oleh js dan
// akan sulit terlihat oleh mata manusia

// diatas. variable mengandung isi value primitives
// lalu buat variable admin untuk menampung value di variable user

// Ketika variable user dikasih value null, maka console.log() akan menampilkan null, value di variable user tidak sampai

// hampir mirip dengan method syntax delete, bedanya delete akan langsung menghapus variable dan value

// sedangkan diberikan null maka console.log(tidak menampilkan sesuatu melainkan null, artinya kondisinya adalah False);

// akan berbeda jika variable admin diberi null, maka values di user akan tetap terlihat di console.log()


