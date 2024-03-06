console.log('try-catch-example.js is running!');

try { // IF an error is THROWN in the try block...
    const myNum = 3.13;
    myNum = 3.14;
} catch(error) { // the CATCH will accept the error, and we can write what will happen.
    // console.log('This is from the CATCH block! Error:', error);
    console.log('This is from the catch(error) block.');
}

console.log('try-catch example.js is done!');
