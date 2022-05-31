const assert = require('assert').chai;
const {sayHello} = require('../say-hello');

describe('tests for sayHello function', () => {
    it('runs tests', () => {
        const actual = 'test';
        const expected = 'test';

        assert.strictEqual(actual, expected);
    });

    it('returns "Hello there, Warren!', () => {
        const actual = sayHello('Warren');
        const expected = 'Hello there, Warren!';

        assert.strictEqual(actual, expected);
    });
});
