// ===== MAKE CONNECTION =====
var socket = io.connect("http://localhost:3000"); 

// ===== QUERY DOM =====
var message = $("#message");
var handle = $("#handle");
var button = $("#send");
var output = $("#output");
var feedback = $("#feedback");

// ===== EMIT EVENTS =====
button.on("click", function() {
    console.log(message.val());
    socket.emit("chat", {
        message: message.val(),
        handle: handle.val()
    });
});

message.keypress(function() {
    socket.emit("typing", handle.val());
});

// ===== LISTEN FOR EVENTS =====
socket.on("chat", function(data) {
    output.html("<p><strong>" + data.handle + ": </strong>" + data.message + "</p>");
});

socket.on("typing", function(data) {
    feedback.html("<p><em>" + data + " is typing a message...</em></p>");
});