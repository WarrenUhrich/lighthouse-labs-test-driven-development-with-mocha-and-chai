// console.log(exports, require, module, __filename, __dirname);

console.log('Hi, this is a larger app!');

console.log('This app says hello to 3 people!');

// const sayGoodbye = require('./sayHello').sayHello;
const { sayHello, PI } = require('./sayHello');

console.log(
    sayHello('Rico'),
    sayHello('Katelynn'),
    sayHello('Benjamin')
);
