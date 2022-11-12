'use strict';
var dbs = require('../index');
var assert = require('assert');
var exec = require('child_process').exec;

it('Should detect all databases are running - promise', function(done) {
  if ('TRAVIS' in process.env) this.timeout(10000);
  dbs().then(function(result) {
    result.forEach(function(db) {
      assert.equal(db.running, true);
    });
    done();
  });
});

it('Should detect all databases are running from bash', function(done) {
  if ('TRAVIS' in process.env) this.timeout(10000);
  exec('node ./bin/dbs', function(err, stdout, stderr) {
    var expected = ['mongo', 'mysql', 'couchdb', 'redis', 'postgres'];
    for (var e in expected) {
      var db = expected[e];
      var regex = new RegExp(db);
      assert.equal(regex.test(stdout), true, 'bash - check if ' + db + ' is running.');
    }
    done();
  });
});
