"use strict";


class OathServer {
    constructor(server, route) {
        this.io = require('socket.io')(server);
        this.route = route;
        this.promisesSent = 0;

        this.io.on('connection', function(socket){
            socket.on('chat message', function(msg){
                console.log('message: ' + msg);
            });

            socket.on('disconnect', function(){
                console.log('user disconnected');
            });
        });
    }

    send(promise) {
        this.io.of(this.route).on("connection",(socket) => {
            // this.io.emit('on connect', 'Connected. Route: "'+this.route+'", Socket ID: '+ socket.id);


            let promiseId = socket.id + '/pid#'+ ++this.promisesSent;
            this.io.sockets.connected[socket.id].emit('promiseId', promiseId);

            promise.then((res) => {
                this.io.sockets.connected[socket.id].emit(promiseId, res );
                socket.disconnect();
            }).catch((rej) => {
                socket.disconnect();
            });
            // this.io.sockets.connected[socket.id].emit('chat message', 'ONLY FOR: '+ this.route );

        });

    }
}
;

module.exports = OathServer;