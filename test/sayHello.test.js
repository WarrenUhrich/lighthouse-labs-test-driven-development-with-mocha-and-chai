// const assert = require('assert');   // NodeJS ASSERT MODULE.
const chai = require('chai');          // Chai   ASSERT MODULE.
const sayHello = require('../sayHello');

// Describe lets us label/organize a GROUP of tests.
describe('sayHello function tests', function() {

  it('prints "Hello, World!" if no args are passed', function() {
    const expected = 'Hello, World!';
    const actual = sayHello(); // look mom, no args!
    chai.assert.strictEqual(actual, expected);
  });

  it('prints "Hello, Jasjot!" if argument name="Jasjot"', function() {
    const expected = 'Hello, Jasjot!';
    const actual = sayHello('Jasjot');
    chai.assert.strictEqual(actual, expected);
  });

  it('says "must use string for the argument" if an unsupported data-type is used', function() {
    const expected = 'must use string for the argument';
    const actual = sayHello([]); // Array is invalid!
    chai.assert.strictEqual(actual, expected);
  });

});
