class School {
    constructor(students, teachers) {
        this.students = students; // Array of student objects
        this.teachers = teachers; // Array of teacher objects
    }

    checkInstance(obj, type) {
        return obj instanceof type;
    }
}

// Contoh penggunaan:
// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Teacher {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const students = [new Student('Alice'), new Student('Bob')];
// const teachers = [new Teacher('Mr. Smith'), new Teacher('Ms. Johnson')];

// const mySchool = new School(students, teachers);

// // Memeriksa apakah objek adalah instance dari kelas tertentu
// console.log(mySchool.checkInstance(students[0], Student)); // true
// console.log(mySchool.checkInstance(teachers[0], Student)); // false
// console.log(mySchool.checkInstance(teachers[0], Teacher)); // true


// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//         this.name = name;
//         this.role = role;
//     }

//     renderDetails() {
//         console.log(`${this.name}: ${this.role}`);
//     }
//     check() {
//         if (this.role instanceof Instructor) {
//             console.log("Benar");
//         } else {
//             console.log("salah");
//         }
//     }
// }

// const jon = new Instructor({ name: 'Jon Snow' });
// const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });
// const checked = new Instructor();
// checked.check()
// // jon.renderDetails();
// // brayden.renderDetails();


// class Hospital {
//     constructor(Radiologist, MedicalDirector, MedicalAssistant){
//         this.Radiologist = Radiologist;
//         this.MedicalDirector = MedicalDirector;
//         this.MedicalAssistant = MedicalAssistant;
//     }
//     checkObject(){
//         if(this.Radiologist instanceof Hospital){
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }

// const obj = new Hospital()
// obj.checkObject()

class Hospital {
    constructor(Radiologist, MedicalDirector, MedicalAssistant){
        this.Radiologist = Radiologist;
        this.MedicalDirector = MedicalDirector;
        this.MedicalAssistant = MedicalAssistant;
    }

    checkObject(){
        if(this.Radiologist instanceof Hospital){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

// Contoh pembuatan objek Radiologist yang merupakan instance dari Hospital
const radiologist = new Hospital(null, null, null);

// Membuat instance dari Hospital dengan Radiologist sebagai instance dari Hospital
const hospital = new Hospital(radiologist, null, null);

// Memanggil metode checkObject untuk memeriksa apakah Radiologist adalah instance dari Hospital
hospital.checkObject(); // Output: true

// Membuat instance dari Hospital dengan Radiologist sebagai bukan instance dari Hospital
const anotherHospital = new Hospital({}, null, null);

// Memanggil metode checkObject untuk memeriksa apakah Radiologist adalah instance dari Hospital
anotherHospital.checkObject(); // Output: false



// coba kita belajar instanceof dan nilai null;

// class Hero {
//     constructor(player1, player2){
//         this.player1 = player1;
//         this.player2 = player2;
//     }
//     checkObject(){
//         if(typeof(this.player1) === "string" && this.player1 instanceof Hero){
            
//         }
//     }
// }


