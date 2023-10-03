const assert = require('assert');
const { sayHello } = require('./sayHello');

let actual = sayHello('Roderick');
let expected = 'Hello, Roderick!';
// console.log(assert);
assert.strictEqual(actual, expected);

actual = sayHello('Neeha');
expected = 'Hello, Neeha!';
assert.strictEqual(actual, expected);
