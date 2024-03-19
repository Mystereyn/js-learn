function RecursiveString(word){
    RecursiveString(word);
    console.log(`${word}`);

}
RecursiveString("Recursive Start");
module.exports = RecursiveString;

