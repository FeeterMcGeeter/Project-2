// var db = require("../models");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    // Load index page
    // app.get("/", function (req, res) {
    //     db.User.findAll({}).then(function (dbUser) {
    //         res.render("message-room", {
    //             msg: "Welcome!",
    //             user: dbUser
    //         });
    //     });
    // });

    // Load user page and pass User by id
    // app.get("/user/:id", function (req, res) {
    //     db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
    //         res.render("user", {
    //             user: dbUser
    //         });
    //     });
    // });

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        } else {
            res.redirect("login");
        }
        // res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    });

    app.get("/home", function(req, res) {
        res.render("home");
    });

    app.get("/login", function(req, res) {
        res.render("login");
    });

    // app.get("/login", function (req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //         res.redirect("/user");
    //     }
    //     res.sendFile(path.join(__dirname, "../views/home.handlebars"));
    // });

    // app.get("/user/:id", isAuthenticated, function (req, res) {
    //     db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
    //         res.render("user", {
    //             user: dbUser
    //         });
    //     });
    //     res.sendFile(path.join(__dirname, "..views/home.handlebars"));
    // });

    app.get("*", function (req, res) {
        res.render("404");
    });
};

// Render 404 page for any unmatched routes
