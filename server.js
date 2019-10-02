require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
var socket = require("socket.io");

var db = require("./models");

var app = express();
var server = require("http").Server(app);
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/messageApiRoutes")(app);
require("./routes/userApiRoutes")(app);
require("./routes/viewRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// ===== SOCKET SET UP =====
var io = socket(server);

io.on("connection", function (socket) {
    console.log("Made socket connection", socket.id);

    socket.on("chat", function (data) {
        io.sockets.emit("chat", data);
    });

    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data);
    });
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    server.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;
