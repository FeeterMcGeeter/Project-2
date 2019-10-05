var db = require("../models");

module.exports = function (app) {
    // Get route for getting all messages
    app.get("/api/messages", function (req, res) {
        db.Message.findAll({}).then(function (dbMessage) {
            console.log(dbMessage);
            res.json(dbMessage);
        });
    });

    // Get route for retrieving a single message
    app.get("/api/messages/:id", function (req, res) {
        db.Message.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });

    // POST route for saving a new message
    app.post("/api/like", function (req, res) {
        db.Liked.create({
            text: req.body.text,
            UserId: req.user.id
        })
            .then(function (dbLiked) {
                res.json(dbLiked);
            });
    });

    // DELETE route for deleting messages
    app.delete("/api/messages/:id", function (req, res) {
        db.Message.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });

    // PUT route for updating messages
    app.put("/api/messages", function (req, res) {
        db.Message.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbMessage) {
            res.json(dbMessage);
        });
    });
};
