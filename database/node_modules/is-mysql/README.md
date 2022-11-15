# is-mysql [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if a mysql is running

See the [dbs](https://github.com/charliedowler/dbs) module for more database types.


## Install

```sh
$ npm install --save is-mysql
```


## Usage

##### Node.js

```js
var isMysql = require('is-mysql');

// Callback
isMysql(function(db) {
  console.log(db.running);
  //=> true
});

// Promise
isMysql().then(function(db) {
  console.log(db.type);
  //=> mysql
});
```


## CLI

```sh
$ npm install -g is-mysql
```

```sh
$ is-mysql
#=> Up
```


## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/is-mysql
[npm-image]: https://badge.fury.io/js/is-mysql.png

[travis-url]: http://travis-ci.org/charliedowler/is-mysql
[travis-image]: https://secure.travis-ci.org/charliedowler/is-mysql.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/is-mysql
[depstat-image]: https://david-dm.org/charliedowler/is-mysql.png