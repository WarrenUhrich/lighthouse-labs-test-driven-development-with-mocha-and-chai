// exports.sayHello = (name) => {
const sayHello = (name) => {
    return `Hello there, ${name}`;
}

const PI = Math.PI;

// It is often easier to include all exports at the bottom.
module.exports = {
    sayHello: sayHello,
    pi: PI
};
