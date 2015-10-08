

module.exports = function(socket){
    return function(req) {
        socket.on('selectArtist', function(artist) {
            req(artist);
        });
    }
}
