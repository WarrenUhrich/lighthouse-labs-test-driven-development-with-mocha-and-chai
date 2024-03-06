// const sayHello = require('./sayHello.js');
// const { sayHello, pi } = require('./sayHello.js');
const { sayHello } = require('./sayHello'); // Need to specify, from THIS file, how we get to your target file.

// NodeJS has a built-in module called 'assert'
const assert = require('assert'); // No filepath, we just use the name if the module is built-in to NodeJS.
// console.log('assert module exports:', assert);

// console.log(sayHello());

let expected = 'Hello, World!';
let actual = sayHello();
// let passed = expected === actual;
// console.assert(passed, 'It should return \'Hello, World!\' if no argument is passed.');
assert.strictEqual(actual, expected, 'It should return \'Hello, World!\' if no argument is passed.');

expected = 'Hello, Alex!';
actual = sayHello('Alex');
assert.strictEqual(actual, expected, 'It should return \'Hello, Alex!\' if "Alex" is passed as an argument.');
