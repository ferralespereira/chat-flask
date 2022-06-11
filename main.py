from flask import Flask, flash, redirect, url_for, render_template, request
from datetime import datetime
from flask_socketio import SocketIO


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

# context processor
@app.context_processor
def  date_now():
    return {
        'now': datetime.utcnow()
    }

@app.route('/')
def sessions():
    return render_template('session.html')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    socketio.emit('my response', json)

if __name__ == '__main__':
    socketio.run(app, debug=True)