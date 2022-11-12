'use strict';
var isMongo = require('is-mongo');
var isMysql = require('is-mysql');
var isCouch = require('is-couch');
var isRedis = require('is-redis');
var isPostgres = require('is-postgres');
var Q = require('q');
module.exports = function () {
  var promises = [isMongo(), isMysql(), isCouch(), isRedis(), isPostgres()];
  return Q.all(promises);
};