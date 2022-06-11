var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on( 'connect', function() {
    socket.emit('my event', {
        data: 'User Connected'
    });
});

function sendMessage(e){
  event.preventDefault();

  let user_name  = document.getElementById('username');
  let message = document.getElementById('message');
  
  socket.emit( 'my event', {
    user_name : user_name.value,
    message : message.value
  });

}

socket.on('my response', function(msg) {
    console.log(msg);
    if(typeof msg.user_name !== 'undefined'){

      let message_holder = document.getElementById('message-holder');
      let first_text     = document.getElementById('first-text');
      
      first_text.innerHTML = "";
      message_holder.innerHTML += '<div><b style="color: #000">'+msg.user_name+'</b> '+msg.message+'</div>';
    }
});