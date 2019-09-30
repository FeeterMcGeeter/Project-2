var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.render("login", {
                msg: "Welcome!",
                user: dbUser
            });
        });
    });

    // Load user page and pass User by id
    app.get("/user/:id", function(req, res) {
        db.User.findOne({ where: { id: req.params.id } }).then(function(
            dbUser
        ) {
            res.render("user", {
                user: dbUser
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
