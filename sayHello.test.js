const {sayHello} = require('./sayHello');
// const sayHello = require('./sayHello').sayHello;

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
