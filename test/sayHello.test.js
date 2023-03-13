// const assert = require('assert'); // NodeJS assert library
const assert = require('chai').assert; // Chai assert library
const {sayHello} = require('../sayHello');

describe('sayHello function', () => {
    it('returns "Hello, World!" if no name is passed', () => {
        const expected = 'Hello, World!';
        const actual = sayHello();
    
        assert.strictEqual(actual, expected);
    });
    
    it('returns "Hello, Jeremy!" if "Jeremy" is passed', () => {
        const expected = 'Hello, Jeremy!';
        const actual = sayHello('Jeremy');
    
        assert.strictEqual(actual, expected);
    });
});
