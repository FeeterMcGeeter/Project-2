$(document).ready(function () {

    // ===== NAVIGATES TO THE "PROFILE" PAGE WHEN NAV LINK IS CLICKED =====
    $(".profile").on("click", function () {
        window.location.replace("/profile");
    });

    // ===== NAVIGATES TO THE "LIKED" PAGE WHEN NAV LINK IS CLICKED =====
    $(".liked").on("click", function () {
        window.location.replace("/liked");
    });

    // ===== GET REQUEST FOR THE USER THAT IS CURRENTLY LOGGED IN =====
    $.get("/api/user_data").then(function(data) {
        // Displays the user in the navbar
        $(".member-name").text(data.email);
    });

    // ===== MESSAGE LIKE BUTTON =====
    $("#like").on("click", function () {
        var messageData = $(this).attr("data");

        $.post("/api/like", { text: messageData }, function (req, res) {
            db.Liked.create({
                text: req.body.text,
                UserId: req.UserId
            })
                .then(function (dbLiked) {
                    res.json(dbLiked);
                })
                .catch(function (err) {
                    res.status(401).json(err);
                });
        });
    });
});