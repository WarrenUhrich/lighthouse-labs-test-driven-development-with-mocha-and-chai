// Write a function that can say hello to a specific person by name.

const sayHello = (name='World') => {
    return `Hello, ${name}!`;
};

// console.log(
//     'sayHello() outputs:',
//     sayHello()
// );

// Let's see our expected, and current output:
// console.log(
//     'sayHello() expected:',
//     'Hello, World!',
//     'sayHello() actual:',
//     sayHello()
// );

// Let's see expected, actual, and whether they match!
// console.log(
//     'sayHello() expected:',
//     'Hello, World!',
//     'sayHello() actual:',
//     sayHello(),
//     'Passed:',
//     'Hello, World!' === sayHello()
// );

// Case: no name provided.
console.log(`
    sayHello() expected:
    Hello, World!
    sayHello() actual:
    ${sayHello()}
    Passed:
    ${'Hello, World!' === sayHello()}
`);

// Case: Name provided: Eric
console.log(`
    sayHello('Eric') expected:
    Hello, Eric!
    sayHello('Eric') actual:
    ${sayHello('Eric')}
    Passed:
    ${'Hello, Eric!' === sayHello('Eric')}
`);

// console.table({
//     expected: 'Hello, World!',
//     actual: sayHello(),
//     passed: 'Hello, World!' === sayHello()
// });
