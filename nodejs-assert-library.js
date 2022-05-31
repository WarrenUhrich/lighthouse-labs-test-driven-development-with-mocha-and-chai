const assert = require('assert');

const sayHello = (name) => {
    return 'Hello there, ' + name + '!';
}

const actual = sayHello('Ed');
const expected = 'Hello there, Ed!';

assert.strictEqual(actual, expected);
