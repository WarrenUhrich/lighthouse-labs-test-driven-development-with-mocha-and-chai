const sayHello = (name) => {
    return `Hello there, ${name}!`;
};

const actual = sayHello('Donna');
const expected = 'Hello there, Donna!';

// Assert ONLY prints when something FAILS.
console.assert(actual === expected, 'sayHello test');

console.log(`sayHello test: ${actual === expected ? 'PASSED' : 'FAILED'}
    actual:\t${actual}
    expected:\t${expected}`);

// console.table(
//     {
//         test_status: actual === expected ? 'PASSED' : 'FAILED',
//         actual_value: actual,
//         expected_value: expected
//     }
// );
