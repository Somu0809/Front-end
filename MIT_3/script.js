function work() {
    var firstName = document.getElementById("firstNameBox").value;
    var secondName = document.getElementById("LastNameBox").value;
    var email = document.getElementById("EmailBox").value;
    var password = document.getElementById("PasswordBox").value;

    var firstNamebox = document.getElementById("firstNameBox");
    var secondNamebox = document.getElementById("LastNameBox");
    var emailbox = document.getElementById("EmailBox");
    var passwordbox = document.getElementById("PasswordBox");

    var resfirstName = document.getElementById("first-name");
    var ressecondName = document.getElementById("last-name");
    var resemail = document.getElementById("email");
    var respassword = document.getElementById("password");

    var final = document.getElementById("final");

    //Empty

    if (firstName == "") {
        resfirstName.innerHTML = "First Name cannot be empty"
        resfirstName.classList.add("red")
        firstNamebox.classList.add("errorborder")
    }
    if (secondName == "") {
        ressecondName.innerHTML = "Last Name cannot be empty"
        ressecondName.classList.add("red")
        secondNamebox.classList.add("errorborder")
    }
    if (password == "") {
        respassword.innerHTML = "Password cannot be empty"
        respassword.classList.add("red")
        passwordbox.classList.add("errorborder")
    }
    else {
        passwordbox.classList.remove("errorborder")
        emailbox.classList.remove("errorborder")
        secondNamebox.classList.remove("errorborder")
        firstNamebox.classList.remove("errorborder")
        resfirstName.classList.remove("red");
        ressecondName.classList.remove("red");
        resemail.classList.remove("red");
        respassword.classList.remove("red");
        resfirstName.innerHTML = ""
        ressecondName.innerHTML = ""
        resemail.innerHTML = ""
        respassword.innerHTML = ""
    }

    //email checking

    if (email == "") {
        resemail.innerHTML = "Email Address cannot be empty"
        resemail.classList.add("red")
        emailbox.classList.add("errorborder")
    }
    else if (email.slice(-10) != "@gmail.com") {
        resemail.innerHTML = "Email Address invalid"
        resemail.classList.add("red")
        emailbox.classList.add("errorborder")
    }
    else {
        emailbox.classList.remove("errorborder")
        resemail.innerHTML = ""
        final.innerHTML = "Login successful"
    }
}