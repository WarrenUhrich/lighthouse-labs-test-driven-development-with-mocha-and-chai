/**
 * sayHello - says hello to the world, or to a person by name.
 * 
 * @param {string} name - The name of a person we want to say hello to.
 * @return {string} - The greeting text (string.)
 */
const sayHello = function(name) {
    if(!name) name = 'World'; // Default is 'World' if nothing is passed in.

    return `Hello, ${name}!`;
};

module.exports = sayHello;
