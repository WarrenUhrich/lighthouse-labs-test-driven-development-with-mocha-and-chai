# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [ ] Let's Talk Manual Versus Automated Testing
* [ ] Test-Driven Development Cycle
* [ ] Assertions (`console` and NodeJS assert)
* [ ] Modules in NodeJS; Getting Files to Share
* [ ] NPM and using External Libraries
* [ ] Mocha Test Runner
* [ ] Ignoring Files and/or Folders with `.gitignore`
* [ ] Chai Assertion Library

## Improved Code Quality

1. Refactoring!
    * Simplifying and/or DRYing our code
2. Finding and Squashing Bugs
3. Checking for Compatibility
4. Enhancing the User Experience
5. Code Review Process (check with others!)
6. Make it easier to read
7. Different / varied test cases
8. Error handling
9. Testing

## Manual Versus Automated Testing

### Manual

* The default approach... we write code and see if it works or not.
* Visit our page, click on stuff, see what happens.
* Benefits include: zeroing in on problems quickly... can adjust testing on-the-fly, make it more case-specific, easier to find what is user-friendly or not!
* Drawbacks include: time to test can be large... might only run a specific way and miss bugs, might only fit a specific purpose, inconsistency in testing.

### Automated

* We'll use built-in features of the language, or install a test runner, and run pre-built tests.
* Benefits include: test for larger scope of bugs, time - automation is fast, using reliable/repeatable/consistent tools, free libraries (low-cost), test for compatibility/state quickly and on different metrics, removes human error, consistent result output.
* Drawbacks include: not catching common user mistakes, no abstract / creative breaks or cases handled (only what we expect), if there is an error in the written tests results won't be reliable, single quick-tests aren't worth the set-up.

## Test-Driven Development

1. Write a test that confirm if a feature is running correctly.
2. Write code for the feature (run the test to confirm.)
3. If any issues are encountered, address them.
4. Refactor the code (clean it up!)

Benefits: writing code with tests in mind - less redundancy, keeping scope in perspective and keeps everyone on the same page, helps with planning and clearly defining the program / features, encourages modularity, promotes early pseudo-code and better understanding of the code/feature, presents more "professionally" and is easier to track quality, fewer bugs overall.


