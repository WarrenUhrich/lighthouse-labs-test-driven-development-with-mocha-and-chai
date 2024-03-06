// The /test folder is the folder that Mocha will read!
// Any .test.js files in this folder will be run when we run Mocha.

// We need to grab OUR sayHello function!
// ./ is our current file DIR...
// ../ is the DIR above our current file DIR...
const { sayHello } = require('../sayHello');

// NodeJS assert module:
// const assert = require('assert');

// Chai assert package/module:
// const assert = require('chai').assert;
const { assert } = require('chai');

// A group of tests:
describe('sayHello function tests', function() {

    // Individual test #1:
    it('should return \'Hello, World!\' if no argument is passed.', function() {

        const expected = 'Hello, World!';
        const actual = sayHello();
        assert.strictEqual(actual, expected);

    });

    // Individual test #2:
    it('should return \'Hello, Alex!\' if "Alex" is passed as an argument.', function() {

        const expected = 'Hello, Alex!';
        const actual = sayHello('Alex');
        assert.strictEqual(actual, expected);

    });
});
