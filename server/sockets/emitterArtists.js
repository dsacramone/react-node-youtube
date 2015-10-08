var config = require('../config.js');

module.exports = function(socket){
    return function() {
        socket.emit('userArtists', config.artists);
    }
}