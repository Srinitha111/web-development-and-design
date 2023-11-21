var users = [];

function register() {
    var registerUsername = document.getElementById("registerUsername").value;
    var registerPassword = document.getElementById("registerPassword").value;

    if (registerUsername && registerPassword) {
        users.push({ username: registerUsername, password: registerPassword });
        alert("Registration successful! Please login.");
        showLoginForm();
    } else {
        alert("Please enter a username and password.");
    }
}

function login() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var user = users.find(function(user) {
        return user.username === loginUsername && user.password === loginPassword;
    });

    if (user) {
        alert("Login successful!");
        showSecurePage();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("securePage").style.display = "none";
}

function showSecurePage() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("securePage").style.display = "block";
}