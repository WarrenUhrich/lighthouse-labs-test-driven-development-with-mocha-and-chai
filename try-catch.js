// Stuff is happening...

let isError = false;

try {
  const abc = 3;
  abc = 4; // Once the error happens, we skip to CATCH.
  '';
  '';
  '';
  '';
  '';
} catch (error) {
    isError = true;
    // console.log(error);
    console.log('An error occurred.');
}

console.log('We still got here!');
