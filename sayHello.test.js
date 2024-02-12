



// Built-in to NodeJS doesn't require a real path; JUST a name.
const assert = require('assert'); // Requiring / importing a built-in NodeJS module.
// Must specify a system filepath if it is an actual file!
const sayHello = require('./sayHello');

let actual = sayHello();
let expected = 'Hello, World!';
// assert only throws an assertion error if the assertion fails!
assert.equal(actual, expected, 'sayHello() should print "Hello, World!"');

actual = sayHello('Erin');
expected = 'Hello, Erin!';
assert.equal(actual, expected, 'sayHello("Erin") should print "Hello, Erin!"');

// console.log('assert:', assert);

// let actual = '123';
// let expected = '123';
// assert.equal(actual, expected, 'is \'123\' == \'123\'');


