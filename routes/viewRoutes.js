module.exports = function (app) {
    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/home");
        } else {
            res.redirect("/login");
        } 
        
    });

    app.get("/home", function(req, res) {
        if (req.query.render === "liked") {
            return res.render("home", { show: "liked" });
        }
        return res.render("home", { userName: req.user.userName });
    });

    app.get("/profile", function(req, res) {
        res.render("profile");
    });

    app.get("/login", function (req, res) {
        res.render("login");
    });

    app.get("*", function (req, res) {
        res.render("404");
    });

};

// app.get("/profile",function(req,res){
// database.sequelize(findAll({where:{username}.then(
//     function(data){
//         var email = data.email
//         var;
//         res.render('profile',{email:email,username:username})
//     }
// ))
// })