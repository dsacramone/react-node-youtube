var rPromise = require('request-promise');
var emit = require('./../sockets/emitterVideo.js');
var Qs = require('qs');
var _ = require('lodash');
var config = require('../config.js');

function getVideoResults(socket) {
    return function(query) {
        var requestParams = _.merge(config.video, {q: (query ? query : config.video.q)});
        rPromise('https://www.googleapis.com/youtube/v3/search?' + Qs.stringify(requestParams))
            .then(emit(socket))
            .catch(console.error);
    }
};

module.exports = getVideoResults;