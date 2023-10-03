/**
 * Say hello to a specific person by name.
 * @param {String} name A person's name.
 * @return {String} The greeting (including the name.)
 */
const sayHello = function(name) {
    let greeting = '';

    let greetingName = 'World';
    if(name) {
        greetingName = name;
    }

    // greeting = 'Hello, ' + name + '!';
    greeting = `Hello, ${greetingName}!`;

    return greeting;
};

const PI = 3.14;

module.exports = {
    sayHello,
    PI: PI
};
