// console.log(arguments);

/**
 * Say hello to a specific person by name.
 * 
 * @param {String} name A person's name.
 * @return {String} A greeting including the person's name.
 */
const sayHello = function(name) {
    if(!name) {
        name = 'World';
    }

    return `Hello, ${name}!`;
};

const PI = 3.14;

module.exports = {
    sayHello: sayHello,
    pi: PI
};
