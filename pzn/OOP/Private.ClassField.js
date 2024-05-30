//ini adalah private field 
// yaitu field yang hanya diakses oleh didalam class itu sendiri;


class CounterPrivate {
    #counter = 0;

    increment(){
        return this.#counter++;
    }
}

const count = new CounterPrivate()

console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())

// error, karna akses dari keluar kelas dan memakai kunci # untuk lindungi field

// count.#counter = 100

console.log(`Check private field is available and the total recursives are : ${count.increment()}`)

class 