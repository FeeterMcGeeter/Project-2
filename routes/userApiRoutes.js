var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.status(201).end();
    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(function (user) {
                res.json(user); //once views is done redirect /home
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.get("/api/liked", function (req, res) {
        db.Liked.findAll({
            where: { UserId: req.UserId }
        })
            .then(function () {
                res.render("liked", { liked: liked });
            });
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    app.get("/", function (req, res) {
        if (req.user) {
            return res.render("home");
        } else {
            return res.render("login");
        }
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/login");
    });
};
