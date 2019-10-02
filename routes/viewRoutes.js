module.exports = function (app) {
    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/home");
        } else {
            res.redirect("/login");
        }
    });

    app.get("/home", function (req, res) {
        res.render("home");
    });

    app.get("/login", function (req, res) {
        res.render("login");
    });

    app.get("*", function (req, res) {
        res.render("404");
    });
};

// app.get("/profile",function(req,res){
// database.sequelize(finndalla({where:{username}.then(
//     function(data){
//         var email = data.email
//         var;
//         res.render('profile',{email:email,username:username})
//     }
// ))
// })