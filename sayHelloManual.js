/**
 * Say hello to a specific person by name.
 * @param {String} name A person's name.
 * @return {String} The greeting (including the name.)
 */
const sayHello = function(name) {
    let greeting = '';

    // greeting = 'Hello, ' + name + '!';
    greeting = `Hello, ${name}!`;

    return greeting;
};

const actual = sayHello('Ryan');
const expected = 'Hello, Ryan!';
console.log(
    'actual:', actual,
    'expected:', expected,
    'pass?', actual === expected
); // Do we get what we expect?

console.log(`
    actual:   ${actual}
    expected: ${expected}
    pass?     ${actual === expected}
`);

console.table({
    actual: actual,
    expected: expected,
    pass: actual === expected
});

console.assert(actual === expected, `
    actual:   ${actual}
    expected: ${expected}
    pass?     ${actual === expected}
`);
