try {
    const myVar = 123;
    myVar = 3.14;
    
    console.log('myVar:', myVar);    
} catch(error) {
    console.log('We can\'t re-assign a const.');
}

console.log('Hey, the program is finished!');
