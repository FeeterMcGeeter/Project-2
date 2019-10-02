<<<<<<< HEAD
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
            .done(function (data) {
                console.log(data);
                emailSignUpInput.val("");
                passwordSignUpInput.val("");
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
            .fail(function (err) {
                alert('NO');
            });
    }
=======
// var firebaseConfig = {
//     apiKey: "AIzaSyC3MQubTUN-8Lr20Wc7zeaWxiTyrzdpwF4",
//     authDomain: "project-2-9f4a7.firebaseapp.com",
//     databaseURL: "https://project-2-9f4a7.firebaseio.com",
//     projectId: "project-2-9f4a7",
//     storageBucket: "project-2-9f4a7.appspot.com",
//     messagingSenderId: "978609737040",
//     appId: "1:978609737040:web:d1fa73165fd65b20967055",
//     measurementId: "G-32LVTSXTPT"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

$("#signUp").on("click", function(event) {
    event.preventDefault();

    var email = $(".emailSignUp").val().trim();
    var password = $(".passwordSignUp").val().trim();

    $.post("/api/signup", {
        email: email,
        password: password
    });
});

$("#logIn").on("click", function(event) {
    event.preventDefault(); 

    var email = $(".emailLogIn").val().trim();
    var password = $(".passwordLogIn").val().trim();

    $.post("/api/login", {
        email: email,
        password: password
    }).then(function() {
        window.location.replace("/home");
    });


});

$("#logOut").on("click", function() {
    $.ajax({url: "/logout", method: "GET"}).then (function() {
        window.location.replace("/login");
    });
>>>>>>> 6361c7165af5c5d2e09412b03c16c6d6a732396b
});




