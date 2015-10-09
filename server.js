var express = require("express");
var http = require('http');
var Socket = require('socket.io');
var _ = require('lodash');
var videoRequest = require('./server/helpers/request.js');
var config = require('./server/config.js');
var userArtistsEmit = require('./server/sockets/emitterArtists.js');
var userArtistSelectionEmit = require('./server/sockets/emitterArtistSelection.js');

  var app = new express();

  var port = process.env.PORT || config.port;

  app.use('/', express.static('public'));

  var server = http.createServer(app).listen(port, function() {
      console.log('Express server listening on port ' + config.port);
  });

  var io = Socket.listen(server);

  // socket sending / receiving happens here
  io.sockets.on('connection', function (socket) {
      var reqVid = videoRequest(socket);
      userArtistsEmit(socket)();
      reqVid(config.video.q);
      userArtistSelectionEmit(socket)(reqVid);
  });
