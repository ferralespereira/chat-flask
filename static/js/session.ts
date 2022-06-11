let socket:any = io.connect('http://' + document.domain + ':' + location.port);

socket.on( 'connect', function() {
    socket.emit('my event', {
        data: 'User Connected'
    });
});

function sendMessage(){
  event.preventDefault();

  let user_name:any  = document.getElementById('username');
  let message:any = document.getElementById('message');
  
  socket.emit( 'my event', {
    user_name : user_name.value,
    message : message.value
  });
}

socket.on('my response', function(msg:any) {
    console.log(msg);
    if(typeof msg.user_name !== 'undefined'){

      let message_holder:any = document.getElementById('message-holder');
      let first_text:any     = document.getElementById('first-text');
      
      first_text.innerHTML = "";
      message_holder.innerHTML += '<div><b style="color: #000">'+msg.user_name+'</b> '+msg.message+'</div>';
    }else{
      console.log('new user connected');
    }
});