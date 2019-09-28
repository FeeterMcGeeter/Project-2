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
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    });
});

message.keypress(function() {
    socket.emit("typing", handle.value);
});

// ===== LISTEN FOR EVENTS =====
socket.on("chat", function(data) {
    output.HTML("<p><strong>" + data.handle + ": </strong>" + data.message + "</p>");
});

socket.on("typing", function(data) {
    feedback.HTML("<p><em>" + data + " is typing a message...</em></p>");
});