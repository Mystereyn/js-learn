let loginButton = document.getElementById('login-button');
let form = document.getElementsByClassName("simple-login-with-form-dbLocalStorage");
let argue = "";

loginButton.addEventListener('click', function(){
    let userInput = form[0].value.trim();

    if(userInput !== ""){
        alert(`welcome username = ${userInput}`)
    } else {
        alert("must be string input");
    }
    return console.log(userInput);
})
