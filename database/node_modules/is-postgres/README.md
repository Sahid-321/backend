# is-postgres [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if a postgres is running

See the [dbs](https://github.com/charliedowler/dbs) module for more database types.


## Install

```sh
$ npm install --save is-postgres
```


## Usage

##### Node.js

```js
var isPostgres = require('is-postgres');

// Callback
isPostgres(function(db) {
  console.log(db.running);
  //=> true
});

// Promise
isPostgres().then(function(db) {
  console.log(db.type);
  //=> postgres
});
```


## CLI

```sh
$ npm install --global is-postgres
```

```sh
$ is-postgres
#=> Up
```

## Release History
 * 2014-10-20    v0.2.0    Cross platform support
 * 2014-08-31    v0.1.0    Initial release


## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/is-postgres
[npm-image]: https://badge.fury.io/js/is-postgres.png

[travis-url]: http://travis-ci.org/charliedowler/is-postgres
[travis-image]: https://secure.travis-ci.org/charliedowler/is-postgres.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/is-postgres
[depstat-image]: https://david-dm.org/charliedowler/is-postgres.png
