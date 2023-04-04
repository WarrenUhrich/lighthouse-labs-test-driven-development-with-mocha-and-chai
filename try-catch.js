// Add try{}catch(){} to your "error-handling" toolbelt!

try {
    const myConst = 3;
    myConst = 5; // Will throw an error.
} catch(error) {
    // console.log(error);
    console.log('An error has occurred.');
}

console.log('Our program is still running!');
