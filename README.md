# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [X] Test-Driven Development
* [ ] Assertions (console and NodeJS assert)
* [ ] CommonJS Modules
* [ ] npm
* [ ] Test Runners
* [ ] Assertion Libraries

## Improved Code Quality

* DRY code! Don't repeat yourself!
* Lots of practice, you'll find good patterns!
* Naming conventions!
* Pseudo-code before diving in!
* Rubber Duck (speak the problem or solution aloud! You'll get more ideas)
* Scalable considerations (can our data grow?)
* Sharing with cohort for feedback
* Code reviews
* Taking time to refactor / improve code
* Considering appropriate situations for arrow functions (or any language feature)
* Linting
* Formal Tests
* Error-handling

## Types of Testing

* **Unit Testing**
* Functional Testing
* Integrated Testing
* Linting
* **Manual Testing** (console logging, etc.)

### Manual Testing

* The default approach... we write our code and see if it works or not
* Visit our page, click stuff, type, see what happens
* Benefits?
    * Nice detailed look at what is going on
    * Can be as specific as we'd like
    * Can be very very precise
    * Lots of control
    * Unlimited flexibility
* Drawbacks?
    * Slow
    * Exhausting
    * Not scalable
    * Room for human error
    * Can be difficult to know where the problem is

### Automated Testing

* When we use built-in features of the languages, or we install a test-runner and run written tests
* Essentially experiments that can be run against our code and tell us if the code was successful or not
* Benefits?
    * Huge speed increase!
    * Computers don't need breaks and are CONSISTENT!
    * Re-usability
    * With high test coverage of a project, it can be very quick to identify the source of the issue
    * Can let you know of a problem you may not have noticed was caused by a recent change!
* Drawbacks?
    * There is effort and time required to write tests
        * Can be costly for a company
    * We have to be careful how we write our tests... there is such a thing as too specific/rigid
    * We can make mistakes when writing tests!!!
    * Automated tests can miss things that a user would catch right away

## TDD / Test-Driven Development

1. Write a test to confirm that a feature is operating properly.
2. Write code for the feature (run your test(s) to confirm.)
3. If there is an issue encountered, address it.
4. Refactor the code (clean it up!)
