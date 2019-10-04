$(document).ready(function () {
    var emailSignUpInput = $(".emailSignUp");
    var passwordSignUpInput = $(".passwordSignUp");
    // When the signup button is clicked, we validate the email and password are not blank
    $("#signUp").on("click", function (event) {
        event.preventDefault();
        var userData = {
            email: emailSignUpInput.val(),
            password: passwordSignUpInput.val()
        };
        console.log(userData);
        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);
        emailSignUpInput.val("");
        passwordSignUpInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the home page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        })
            .done(function () {
                window.location.replace("/home");
            }) 
            .fail(function (err) {
                console.log(err);
            });
    }

    var emailLogInInput = $(".emailLogIn");
    var passwordLogInInput = $(".passwordLogIn");

    // When the form is submitted, we validate there's an email and password entered
    $("#logIn").on("click", function (event) {
        event.preventDefault();
        var userData = {
            email: emailLogInInput.val(),
            password: passwordLogInInput.val()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailLogInInput.val("");
        passwordLogInInput.val("");
    });
    // loginUser does a post to our "api/login" route and if successful, redirects us the the home page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .done(function () {
                window.location.replace("/home");
            })
            .fail(function () {
                alert("NO");
            });
    }

    // ===== CLICKING THE "LOG OUT" BUTTON IN THE NAVBAR WILL SEND USER TO THE LOG IN PAGE =====
    $(".logOut").on("click", function () {
        $.ajax({ url: "/logout", method: "GET" }).then(function () {
            window.location.replace("/login");
        });
    });

    // ===== CLICKING THE "HOME" BUTTON IN THE NAVBAR WILL SEND USER TO THE HOME PAGE =====
    $(".home").on("click", function () {
        window.location.replace("/home");
    });
});