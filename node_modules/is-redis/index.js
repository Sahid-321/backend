'use strict';
var exec = require('child_process').exec;
var Q = require('q');
module.exports = function (callback) {
  var deferred = Q.defer();
  exec('redis-cli ping', function (err, stdout, stderr) {
    var result = {
      type: 'redis',
      running: (err || !/pong/i.test(stdout)) ? false : true
    };
    if (callback) callback(result);
    deferred.resolve(result);
  });
  return deferred.promise;
};