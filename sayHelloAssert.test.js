const assert = require('assert');
const {sayHello} = require('./sayHello');

const expected = 'Hello,, World!'; // Extra comma, this will fail...
const actual = sayHello();

// Only displays on FAILURE, not on success.
console.assert(expected === actual, 'sayHello message mismatch');
assert.strictEqual(actual, expected);
