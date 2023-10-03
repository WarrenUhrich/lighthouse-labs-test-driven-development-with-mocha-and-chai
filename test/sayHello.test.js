// const assert = require('assert'); // This is a Node module.
const { assert } = require('chai'); // This is the Chai package from npm.
const { sayHello } = require('../sayHello'); // This is OUR module/file.

// Mocha uses the describe function to create a GROUP of tests.
describe('sayHello function', function () {

    // The it() function is used to create/write individual tests.
    it('returns "Hello, Mako!" if given the name Mako', function() {
        const expected = 'Hello, Mako!';
        const actual = sayHello('Mako');

        assert.strictEqual(actual, expected);
    });
    
    it('returns "Hello, World!" if no name is given', function() {
        const expected = 'Hello, World!';
        const actual = sayHello();

        assert.strictEqual(actual, expected);
    });

});
