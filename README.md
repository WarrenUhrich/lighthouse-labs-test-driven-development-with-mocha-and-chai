# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [ ] Test-Driven Development
* [ ] Assertions (console and NodeJS assert)
* [ ] CommonJS Modules
* [ ] npm
* [ ] Test Runners - Mocha
* [ ] Assertion Libraries - Chai

## What are some practices for ensuring / increasing code quality?

* Linting / static test/tools!
* We might follow particular programming paradigm:
    * Procedural programming - Using statements/language features in the global scope or in functions/objects/functions... our default mode!
    * Functional programming - function-based programming mind-set
    * Object-oriented programming - using classes and objects as our mind-set
* Write test cases for our code
* Take time complexity into consideration O(n) [big-O notation!]
* Error handling!
    * Avoiding crashing the program!
    * Use `if` statements to decide if we need to further direct the user or developer
    * `try...catch` statements to *catch* a thrown error, and write what should happen if the error occurs

## Manual vs. Automated Testing

### Manual Testing

* Our default approach
* Visit our page, run our program, and see what happens
* Can `console.log` and see what is inside?
* Benefits:
    * We can address errors quickly!
    * Test as-you-go! Very adaptable
    * There's no configuration or learning curve
    * Can be easy to pinpoint the error directly
* Drawbacks:
    * Can slow down progress / lack of consistency
    * Have to be precise as to what we're looking for and the error messages
    * Might not catch errors that certain user actions / edge-cases would produce
    * Time-consuming
    * Easy to miss things (human error)
    * Tedious to repeat

### Automated Testing

* Using features either supplied by the programming language, or testing tools, in order to run written tests
* Benefits:
    * Can run tests much faster!
    * If we plan thoroughly our testing, we can quickly identify issues in edge-cases
    * Consistency! Less/no room for human error in repetition
    * Flexible, can be used to protect main branch
    * Can be run extremely quickly, potentially even async
* Drawbacks:
    * Learning curve! We'll have to try it out and read the docs
    * Rigid - only tests what we tell it to test!

## TDD -> Test Driven Development

1. Writing a test to confirm if a feature would be running correctly (or not.)
2. Write the code for the feature (run the test and see if it passes.)
3. If there is an issue or issues, address them and refer to step 2.
4. Refactor the code (clean it up! Run the test a final time and you're good-to-go.)

## I want npm packages in my project!

1. `npm init` -> This will set-up an npm configuration file in your project.
    * `package.json` -> contain info about you/project, WHICH NPM PACKAGES are required to run your project!
2. Have a look at the package on NPMJS.com and see if it looks safe:
    * https://www.npmjs.com/package/mocha
3. Install the package: `npm install mocha`
    * Add the package to the `./node_modules` in our project
    * Update our `package.json` to keep track of the fact that our project needs `mocha` in order to run properly