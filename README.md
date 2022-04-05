# Lighthouse Labs | Test-Driven Development with Mocha and Chai

- [X] Lets Talk Manual Versus Automated Testing
- [X] Test-Driven Development Cycle
- [X] Assertions (`console` and NodeJS `assert`)
- [X] Modules in NodeJS; Getting Files to Share
- [ ] NPM and using External Libraries
- [ ] Mocha Test Runner
- [ ] Ignoring Files and/or Folders with `.gitignore`
- [ ] Chai Assertion Library

## Manual versus Automated

### Manual Testing

* Easier to set up and use
* Anyone can do it (though potentially to varying degrees depending on their understanding)
* Recording results is often inconsistent, esp. with multiple people
* During development, this is almost always employed to some degree

### Automated Testing

* Save money and time in the long-run
* Require time to setup
* Increased coverage
* Easily repeatable
* Result accuracy (removing some human)
* Encourages modularity

## Test-Driven Development

An approach to software projects and development that places priority on the writing of test cases before code.

1. Write a test (or tests) that confirms the feature is working correctly.
2. Write the code for the feature, ensuring it passes the test.
3. Refactoring (cleaning up your code, removing extras, logging, etc.)

## Improving Code Quality

1. Refactoring
    * Removing extraneous comments.
    * Removing extra logging.
    * Consistent tabs / white-space for readability.
2. Consider object-oriented approach for modularity, or breaking repeated tasks into function.
3. Testing
    * Manual
    * Automated
4. Error Handling

## NPM

Automated walkthrough to create your package.json file.
`npm init` creates ---> `package.json`

Installing packages:
`npm install package-name`
`npm install --save-dev package-name`
`npm install --global package-name`


