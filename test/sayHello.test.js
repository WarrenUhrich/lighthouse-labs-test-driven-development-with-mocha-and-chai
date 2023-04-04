// const assert = require('assert');
const { assert } = require('chai');
const { sayHello } = require('../sayHello');

// Mocha uses the describe function to create a group of tests.
// This is basically a label.
describe('sayHello function', function() {
    // The it() function is used to write each individual test
    it('returns "Hello, World!" if no name is given', function() {
        const expected = 'Hello, World!';
        const actual = sayHello();

        assert.strictEqual(actual, expected);
    });
    it('returns "Hello, Luis!" if name "Luis" is given', function() {
        const expected = 'Hello, Luis!';
        const actual = sayHello('Luis');

        assert.strictEqual(actual, expected);
    });
});
