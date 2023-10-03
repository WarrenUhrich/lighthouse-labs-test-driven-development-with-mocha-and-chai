// try{} catch(error) {}

try {
    const myConst = 3;
    myConst = 5; // Will throw an error.
} catch(error) {
    console.log(error.message);
}

console.log('Is my program still running?');
