// AUTOMATED TESTING!

// ./node_modules/mocha/bin/mocha

// Mocha WILL run this file!
// It is in the ./tests/ folder!

// const assert = require('assert'); // No path; this library is built into NodeJS.
const assert = require('chai').assert; // Using Chai instead of NodeJS assert now!

const ourFunctions = require('../say-hello');
const sayHello = ourFunctions.sayHello;

describe('tests for sayHello function', () => {
    it('returns "Hello there, Sneha!" when given string "Sneha"', () => {
        const actual = sayHello('Sneha');
        const expected = 'Hello there, Sneha!';
    
        assert.strictEqual(actual, expected);
    });

    it('returns "Hello there, Vincent!" when given string "Vincent"', () => {
        const actual = sayHello('Vincent');
        const expected = 'Hello there, Vincent!';
    
        assert.strictEqual(actual, expected);
    });
});

