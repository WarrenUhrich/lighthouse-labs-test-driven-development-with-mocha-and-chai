// try{/* An error MIGHT occur here... */} catch(error) {/* IF an error occurs, do this! */} 

const myConst = 3;
// myConst = 5; // Crashes whole program!

try { // Code that might fail...
    myConst = 5;
} catch(error) { // If the try fails, run this instead...
    console.log('Cannot re-assign constant!');
}

console.log('Hello, World!');
