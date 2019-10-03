$(document).ready(function () {
    var userNameInput = $("#userName");
    var bioInput = $("#bio");
    $("#submit").on("click", function () {
        event.preventDefault();
        var profileData = {
            userName: userNameInput.val().trim(),
            // avatar: avatar.val(),
            bio: bioInput.val()
        };
        if (!profileData.userName || !profileData.bio) {
            return;
        }
        storeUserData(profileData.userName, profileData.bio);
    });

    function storeUserData(userName, bio) {
        $.ajax({
            url: "/api/profile",
            method: "PUT",
            data: {
                userName: userName,
                bio: bio
            }
        })
            .then(function () {
                window.location.replace("/home");
            })
            .fail(function (err) {
                console.log(err);
            });
    };
});
