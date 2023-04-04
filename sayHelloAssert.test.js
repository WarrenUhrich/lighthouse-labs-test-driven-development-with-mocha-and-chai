const assert = require('assert');
const {sayHello} = require('./sayHello');

let expected = 'Hello, Luis!';
let actual = sayHello('Luis');
assert.strictEqual(actual, expected);

expected = 'Hello, World!';
actual = sayHello();
assert.strictEqual(actual, expected);
