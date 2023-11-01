const assert = require('assert'); // This is requiring a module from NODEJS...

// const sayHelloExports = require('./sayHello');
// const sayHello = sayHelloExports.sayHello;
// const PI = sayHelloExports.pi;

const { sayHello, pi } = require('./sayHello'); // This is requiring OUR file...

// console.log(String(sayHello), pi);

let actual = sayHello('Mike');
let expected = 'Hello, Mike!';
assert.equal(actual, expected, 'sayHello("Mike")');

actual = sayHello();
expected = 'Hello, World!';
assert.equal(actual, expected, 'sayHello()');
