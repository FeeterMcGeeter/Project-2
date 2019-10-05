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
    $(document).on("click", "#like", function() {
        console.log("yo");
        var messageData = $(this).attr("data");

        $.post("/api/like", {
            text: messageData
        })
            .done(function () {
                $("#like").css("color", "purple");
            }) 
            .fail(function (err) {
                console.log(err);
            });
    });
});