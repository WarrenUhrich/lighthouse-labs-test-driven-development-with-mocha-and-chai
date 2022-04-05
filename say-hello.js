// module.exports.sayHello = (name) => { // Alternative syntax, property-by-property.
const sayHello = (name) => {
    return `Hello there, ${name}!`;
}

const PI = Math.PI;

// It is often easier to include all exports at the bottom; simply re-assign the exports object.
module.exports = {
    sayHello: sayHello,
    pi: PI
};
