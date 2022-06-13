var socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function () {
    socket.emit('my event', {
        data: 'User Connected'
    });
});
function sendMessage() {
    event.preventDefault();
    var user_name = document.getElementById('username');
    var message = document.getElementById('message');
    socket.emit('my event', {
        user_name: user_name.value,
        message: message.value
    });
}
var users_amount = 0;
socket.on('my response', function (msg) {
    console.log(msg);
    if (typeof msg.user_name !== 'undefined') {
        var message_holder = document.getElementById('message-holder');
        var first_text = document.getElementById('first-text');
        first_text.innerHTML = "";
        message_holder.innerHTML += '<div><b style="color: #000">' + msg.user_name + '</b> ' + msg.message + '</div>';
    }
    else {
        users_amount++;
        console.log('new user connected ' + users_amount);
    }
});
