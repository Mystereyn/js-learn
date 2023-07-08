// Materi Local Scope And Functions


// Contoh

function myTest() {
    const loc = "foo";
    console.log(loc);
};  
myTest();

console.log(loc); // ini error, karena 
// variablenya ada di dalam function

function myLocalScope() {
    const myVar = 'bar';
    console.log('inside myLocalScope' , myVar);
};
myLocalScope();

console.log('outside myLocalScope', myVar);