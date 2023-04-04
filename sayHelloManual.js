// Write a function that can say hello to a specific person by name.

const sayHello = function(name) {
    let defaultName = 'World';

    if(!name) name = defaultName;
    
    return `Hello, ${name}!`;
};

console.log(
    'sayHello() outputs:',
    sayHello()
);

let expected = 'Hello, Luis!';
let actual = sayHello('Luis');

// console.log(
//     'expected:', expected,
//     'actual:', actual,
//     'pass?', expected === actual
// );

console.log(`
    expected: ${expected}
    actual:   ${actual}
    pass?     ${expected === actual}
`);

// console.table({
//     expected: expected,
//     actual:   actual,
//     pass:     expected === actual
// });

expected = 'Hello, World!';
actual = sayHello(); // No name?

console.log(`
    expected: ${expected}
    actual:   ${actual}
    pass?     ${expected === actual}
`);
