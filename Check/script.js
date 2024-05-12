var register = document.getElementById("register");
var full = document.getElementById("full");

document.getElementById("signupopen").addEventListener("click", function () {
    register.classList.add("show");
    full.classList.add("blurring")

})

document.getElementById("login").addEventListener("click", function () {
    register.classList.remove("show");
    full.classList.remove("blurring");
})



document.getElementById("signupBtn").addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.getElementById("name1").value;
    var userEmail = document.getElementById("email1").value;
    var userPassword = document.getElementById("pass1").value;

    // Retrieve users from localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    var existingUser = users.find(function (user) {
        return user.email === userEmail;
    });

    if (existingUser) {
        alert("Email already registered. Please use a different email.");
        return;
    }

    // Add the new user to the array
    users.push({ name: userName, email: userEmail, password: userPassword });

    // Store the updated array back in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Initialize tasks for the new user
    localStorage.setItem(userEmail, JSON.stringify([])); // Store an empty array for tasks

    alert("Registration Successful");
})

document.getElementById("signinBtn").addEventListener("click", function (event) {
    event.preventDefault(); {
        var userEmail = document.getElementById("originalEmail").value;
        var userPassword = document.getElementById("originalPassword").value;

        // Retrieve users from localStorage
        var users = JSON.parse(localStorage.getItem("users")) || [];

        // Find the user
        var currentUser = users.find(function (user) {
            return user.email === userEmail && user.password === userPassword;
        });

        if (!currentUser) {
            alert("Invalid email or password.");
            return;
        }

        // Redirect to the task page or perform other actions for authenticated user
        window.location.href = "process.html"; // Redirect to tasks.html
    }
})
