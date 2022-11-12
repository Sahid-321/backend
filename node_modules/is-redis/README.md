# is-redis [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if a redis is running

See the [dbs](https://github.com/charliedowler/dbs) module for more database types.


## Install

```sh
$ npm install --save is-redis
```


## Usage

##### Node.js

```js
var isRedis = require('is-redis');

// Callback
isRedis(function(db) {
  console.log(db.running);
  //=> true
});

// Promise
isRedis().then(function(db) {
  console.log(db.type);
  //=> redis
});
```


## CLI

```sh
$ npm install -g is-redis
```

```sh
$ is-redis
#=> Up
```


## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/is-redis
[npm-image]: https://badge.fury.io/js/is-redis.png

[travis-url]: http://travis-ci.org/charliedowler/is-redis
[travis-image]: https://secure.travis-ci.org/charliedowler/is-redis.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/is-redis
[depstat-image]: https://david-dm.org/charliedowler/is-redis.png