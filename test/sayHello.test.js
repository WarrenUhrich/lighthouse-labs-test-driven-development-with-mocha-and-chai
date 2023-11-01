// const assert = require('assert');
const { assert } = require('chai');
const { sayHello } = require('../sayHello');

// Mocha uses "describe" to group tests
describe('sayHello function', function() {

    // Each individual test is in an "it"
    it('returns "Hello, Sasha!" if given the argument "Sasha"', function() {
        const expected = 'Hello, Sasha!';
        const actual = sayHello('Sasha');
        assert.strictEqual(actual, expected);
    });

    it('returns "Hello, World!" if given no argument', function() {
        const expected = 'Hello, World!';
        const actual = sayHello();
        assert.strictEqual(actual, expected);
    });

});
