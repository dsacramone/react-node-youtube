var Qs = require('qs');

module.exports = function(socket, artistList){
    return function(videoData) {
        socket.emit('videoRequest', videoData);
    }
}
