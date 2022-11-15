# dbs [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> List common databases that are running


## Install

```sh
$ npm install --save dbs
```


## Usage

##### Node.js

```js
var dbs = require('dbs');

// Promise
dbs().then(function(databases) {
  databases.forEach(function(db) {
      console.log(db.type);
      //=> mongo
      console.log(db.running);
      //=> true
  });
});
```


## CLI

```sh
$ npm install --global dbs
```

```sh
$ dbs
#=> mongo is running
```


## License

MIT © Charlie Dowler

[npm-url]: https://npmjs.org/package/dbs
[npm-image]: https://badge.fury.io/js/dbs.png

[travis-url]: http://travis-ci.org/charliedowler/dbs
[travis-image]: https://secure.travis-ci.org/charliedowler/dbs.png?branch=master

[depstat-url]: https://david-dm.org/charliedowler/dbs
[depstat-image]: https://david-dm.org/charliedowler/dbs.png
