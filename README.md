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

  * `message` -- `String`
  * returns `String`


## Usage

~~~ javascript
var md5 = require('fast-md5');

console.log(md5('Expo 2020'));
~~~

This will print the following

~~~
a299078805331edb24ac298ba9f6364b
~~~

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/idimetrix/fast-md5/issues) or a [pull request](https://github.com/idimetrix/fast-md5/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)