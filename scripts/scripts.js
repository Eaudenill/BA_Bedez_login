const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener ('submit', (e) => {
    if (username.value === '' || username.value == null && password.value === '' || password.value == null) {
        document.getElementById("alert").innerHTML = "Please enter your username and password.";
        console.log("Login error");
    }
    else if (username.value === '' || username.value == null){
        document.getElementById("alert").innerHTML = "Please enter your username.";
        console.log("Login error");
    }
    else if (password.value === '' || password.value == null){
        document.getElementById("alert").innerHTML = "Please enter your password.";
        console.log("Login error");
    }
    else {
        document.getElementById("alert").innerHTML = "";
    }
    e.preventDefault()
})

























function changeColor (idName) {
    document.getElementById(idName).style.background = "white";
}

function changeBack (idName) {
    document.getElementById(idName).style.background = "var(--beige)";
}

function changeOnClickandOut (idName) {
    document.getElementById(idName).onmouseenter = function() {changeColor(idName)};
    document.getElementById(idName).onmouseleave= function() {changeBack(idName)};
}

changeOnClickandOut("username");
changeOnClickandOut("password");

