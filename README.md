# fast-md5

[![build status](https://secure.travis-ci.org/dimetrix/fast-md5.png)](http://travis-ci.org/dimetrix/fast-md5) [![info badge](https://img.shields.io/npm/dt/fast-md5.svg)](http://npm-stat.com/charts.html?package=fast-md5)

a JavaScript function for hashing messages with MD5.

## Installation

You can use this package on the server side as well as the client side.

### [Node.js](http://nodejs.org/):

~~~
npm install fast-md5
~~~


## API

~~~ javascript
md5(message)
~~~

  * `message` -- `String`, `Buffer`, `Array` or `Uint8Array`
  * returns `String`


## Usage

~~~ javascript
var md5 = require('fast-md5');

console.log(md5('message'));
~~~

This will print the following

~~~
78e731027d8fd50ed642340b7c9a63b3
~~~

It supports buffers, too

~~~ javascript
var fs = require('fs');
var md5 = require('md5');

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});
~~~

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/idimetrix/fast-md5/issues) or a [pull request](https://github.com/idimetrix/fast-md5/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)