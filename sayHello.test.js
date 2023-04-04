// const sayHello = require('./sayHello').sayHello;
const {sayHello} = require('./sayHello');

// console.log(sayHello);

let expected = 'Hello, Luis!';
let actual = sayHello('Luis');

console.log(`
    expected: ${expected}
    actual:   ${actual}
    pass?     ${expected === actual}
`);

expected = 'Hello, World!';
actual = sayHello(); // No name?

console.log(`
    expected: ${expected}
    actual:   ${actual}
    pass?     ${expected === actual}
`);

