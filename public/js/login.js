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
});




