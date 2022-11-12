'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var isMysql = require('../index');

it('Should recognise redis is running - promise', function(done) {
  isMysql().then(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'redis');
    done();
  });
});
it('Should recognise redis is running - callback', function(done) {
  isMysql(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'redis');
    done();
  });
});
it('Should return running when run from bash', function(done) {
  exec('node ./bin/is-redis', function(err, stdout, stderr) {
    assert.equal(stdout.indexOf('Up') > -1, true);
    done();
  });
});