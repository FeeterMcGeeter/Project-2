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

    var emailSignUp = $("#emailSignUp").val();
    var passwordSignUp = $("#passwordSignUp").val();

    console.log(emailSignUp);
    console.log(passwordSignUp);
});

$("#logIn").on("click", function(event) {
    event.preventDefault();

    var emailLogIn = $("#emailLogIn").val();
    var passwordLogIn = $("#passwordLogIn").val();

    console.log(emailLogIn);
    console.log(passwordLogIn);
});


