'use strict';
var exec = require('child_process').exec;
var Q = require('q');
module.exports = function(callback) {
  var deferred = Q.defer();

  var command = {};
  command.win32 = 'net start | find "post"';
  command.linux = command.darwin = 'netstat -an | grep PG';

  exec(command[process.platform], function(err, stdout, stderr) {
    var result = {
      type: 'postgres',
      running: (!err && (/PGSQL/.test(stdout) || /postgres/.test(stdout))) ? true : false
    };
    if (callback) callback(result);
    deferred.resolve(result);
  });
  return deferred.promise;
};
