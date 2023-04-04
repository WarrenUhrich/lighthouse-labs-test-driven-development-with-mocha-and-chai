const sayHello = function(name) {
    let defaultName = 'World';

    if(!name) name = defaultName;
    
    return `Hello, ${name}!`;
};

const PI = 3.14;

module.exports = {
    sayHello,
    PI
};
