/**
 * Say hello to a specific person by name.
 * 
 * @param {String} name A person's name.
 * @return {String} A greeting including the person's name.
 */
const sayHello = function(name) {
    // console.log('arguments', arguments);
    return `Hello, ${name}!`;
};


const result = sayHello('Louis');
const expected = 'Hello, Louis!';
console.log(
    "sayHello('Louis')",
    'expected:', expected,
    'actual:', result,
    'passing?', result === expected
);

console.log(`
    sayHello('Louis')
        expected: ${expected}
        actual:   ${result}
        passing?  ${result === expected}
`);

console.table({
    test: "sayHello('Louis')",
    actual: expected,
    expected: result,
    passing: result === expected
});

const assertion = result === expected;
console.assert(assertion, `
    sayHello('Louis')
        expected: ${expected}
        actual:   ${result}
        passing?  ${result === expected}
`);
