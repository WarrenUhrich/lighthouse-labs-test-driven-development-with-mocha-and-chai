/**
 * A function that says hello!
 * 
 * @param {string} name 
 * @return {string} - A greeting string.
 */
const sayHello = function(name) {
    if(name === undefined) {
        name = 'World';
    }
    return `Hello, ${name}!`;
};

const PI = 3.14;

module.exports = {
    sayHello: sayHello,
    pi: PI
};
