
letter =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function testRegex() {
    // regex mencari text dengan pola
    const letter = new RegExp(/[l]/)
    console.log(letter)
}; 

function findUppercase() {
    const regex = /[A-Z]/g;
    const findCapital = letter.match(regex);
    console.log(findCapital)
}

function findLowerCase(){
    // kalau kapital itu [A-Z]
    // [a-z] adalah untuk mencari lowercase.
    const regex = /[a-z]/g;
    const findLower = letter.match(regex)
    console.log(findLower);
} 

function findLetter_A(obj){
    const execute = obj.exec(letter);   
    const result = `found a in position  + ${execute.index}  + ${execute.input}`
    console.log(result);
}
[findLowerCase(), findUppercase(), testRegex(), findLetter_A()];

