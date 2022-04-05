const assert = require('assert'); // No path; this library is built into NodeJS.

const ourFunctions = require('./say-hello');
const sayHello = ourFunctions.sayHello;

const actual = sayHello('Sneha');
const expected = 'Hello there, Sneha!';

// console.log(assert); // See what's inside!
// Strict will type-match as well.
assert.strictEqual(actual, expected);
