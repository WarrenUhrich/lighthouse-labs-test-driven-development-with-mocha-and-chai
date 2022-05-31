const sayHello = (name) => {
    return 'Hello there, ' + name;
}

// console.log(sayHello('Harinder'));
console.assert(
    sayHello('Harinder') === 'Hello there, ',
    'sayHello returned malformed string.'
);

console.log(
    'expected:', 'Hello there, Hope',
    'actual:', sayHello('Hope'),
    'Passed?', sayHello('Hope') === 'Hello there, Hope'
);

console.log(`
    expected: Hello there, Hope
    actual: ${sayHello('Hope')}
    Passed? ${sayHello('Hope') === 'Hello there, Hope'}
`);

console.table({
    expected: 'Hello there, Hope',
    actual: sayHello('Hope'),
    passing: sayHello('Hope') === 'Hello there, Hope'
});

