var rPromise = require('request-promise');
var emit = require('./../sockets/emitterVideo.js');
var Qs = require('qs');
var _ = require('lodash');
var config = require('../config.js');
var mergeRequestWithSearch = require('./mergeObjects.js');

function getVideoResults(socket) {
    return function(query) {
            var requestParams = _.merge(config.video, {q: query});
            rPromise('https://www.googleapis.com/youtube/v3/search?' + Qs.stringify(requestParams))
                .then(mergeRequestWithSearch({q:query}))
                .then(emit(socket))
                .catch(console.error); // TODO deal with errors in a real way
    }
};

module.exports = getVideoResults;