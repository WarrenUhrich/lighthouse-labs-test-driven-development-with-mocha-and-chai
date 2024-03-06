/**
 * Goal / Requirements:
 * * a function called sayHello
 * * it should give the text "Hello, World!" by default
 * * if we pass it a name, it should say hello to that name instead
 */

/**
 * A function that says hello!
 * 
 * @param {string} name 
 * @return {string} - A greeting string.
 */
const sayHello = function(name) {
    // if(name === undefined) {
    //     name = 'World';
    // }
    return `Hello, ${name}!`;
};

let expected = 'Hello, World!';
let actual = sayHello();
let passing = expected === actual;
// console.log('Expected:', expected, 'Actual:', actual, 'Passing?', passing);
// console.log(`
//     test:     sayHello()
//     --------------------
//     expected: ${expected}
//     actual:   ${actual}
//     passing?  ${passing}
// `);
// console.table({
//     test: 'sayHello()',
//     expected: expected,
//     actual: actual,
//     passing: passing
// });

// If the assertion FAILS (the first argument is FALSE), the MESSAGE will show in the terminal.
console.assert(passing, 'When no argument is passed into sayHello(), it fails to say "Hello, World!"');

expected = 'Hello, Monica!';
actual = sayHello('Monica');
passing = expected === actual;
// console.log('Expected:', expected, 'Actual:', actual, 'Passing?', passing);
// console.log(`
//     test:     sayHello('Monica')
//     ----------------------------
//     expected: ${expected}
//     actual:   ${actual}
//     passing?  ${passing}
// `);
// console.table({
//     test: 'sayHello(\'Monica\')',
//     expected: expected,
//     actual: actual,
//     passing: passing
// });
console.assert(passing, 'When the argument "Monica" is passed into sayHello(\'Monica\'), it fails to say "Hello, Monica!"');
