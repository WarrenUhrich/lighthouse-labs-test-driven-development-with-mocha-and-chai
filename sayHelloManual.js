/**
 * sayHello - says hello to the world, or to a person by name.
 * 
 * @param {string} name - The name of a person we want to say hello to.
 * @return {string} - The greeting text (string.)
 */
const sayHello = function(name) {
    if(!name) name = 'World'; // Default is 'World' if nothing is passed in.

    return `Hello, ${name}!`;
};

// We'll write our experiments first... and then see if we can write code that "passes!"
let result = sayHello(); // we got undefined...
let expected = 'Hello, World!';
let assertion = result === expected;
console.log(
    "sayHello()",
    'expected:', expected,
    'actual:', result,
    'passing?', result === expected
);

console.log(`
    sayHello()
        * Expected: ${expected}
        * Actual:   ${result}
        * Passing?  ${result === expected}
`);

console.table({
    test: "sayHello()",
    expected: expected,
    actual: result,
    passing: result === expected
});

// console.assert ONLY PRINTS if the assertion FAILS. It is silent on success.
// This can be a pro or a con, depending on your preference.
console.assert(assertion, 'sayHello() assertion failed. Expected: ' + expected + ', actual: ' + result);

// We'll write our experiments first... and then see if we can write code that "passes!"
result = sayHello('Jake'); // we got undefined...
expected = 'Hello, Jake!';
assertion = result === expected;
console.log(
    "sayHello('Jake')",
    'expected:', expected,
    'actual:', result,
    'passing?', result === expected
);

console.log(`
    sayHello('Jake')
        * Expected: ${expected}
        * Actual:   ${result}
        * Passing?  ${result === expected}
`);

console.table({
    test: "sayHello('Jake')",
    expected: expected,
    actual: result,
    passing: result === expected
});

console.assert(assertion, 'sayHello(\'Jake\') assertion failed. Expected: ' + expected + ', actual: ' + result);
