var _ = require('lodash');

module.exports = function(q) {
  return function(d) {
      return JSON.stringify(_.merge(JSON.parse(d), q))
  }
}