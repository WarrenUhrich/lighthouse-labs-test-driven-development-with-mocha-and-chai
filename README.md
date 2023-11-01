# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [ ] Test-Driven Development (TDD)
* [ ] Assertions (console and NodeJS assert)
* [ ] CommonJS Modules -> Calling on functions from other files!
* [ ] npm
* [ ] Test Runners
* [ ] Assertion Libraries

## Improving Code Quality

* Well-commented code!
* Pair programming (always good to have a second pair of eyes)
* Pseudo-code your plan of attack!
* Refactor - go back and improve if you have time! 👍
* Testing our code!
* Running a Linter to avoid errors
* Running code formatters (or taking the time to format your code)
* Taking steps to better the readability / legibility of our code
* Code review
* DRYing our code
* Error handling
    * Sometimes a user will input the wrong type of information
    * We have an unexpected value from a request our program makes
    * Steps we should follow when an error occurs
    * `try...catch` statement

## Testing!

### Manual

* Browsing/running a site/program on your own
* Running a program and seeing if it works!
* Benefit(s):
    * Can spot some user experience and app design issues much easier!
    * Easy to test specific features how we'd like
    * Fast, quick, and easy! Make changes and see what happens!
    * Don't need to set anything extra up!
    * Easy to check all parts of the stack if/as needed, are they communicating well?
* Drawback(s):
    * Can be very time-consuming to run and check features by-hand/eye
    * Prone to human-error, especially if a task is very repetative and must be tested a lot
    * Does not assure technical quality (can be easy to miss technical requirements)
    * Limited scope (easy to forget to check old features to see if new ones break them!)
    * Have to challenge yourself to find new ways to break the program

### Automated (Unit / Integration Testing Automation)

* Writing test-cases to run a variety of scenarios
* Using in-built feature of a language, or a test-runner, to run pre-built tests
* Benefit(s):
    * Much, much faster than manual testing
    * More precise/consistent
    * Easily repeatable/re-usable
* Drawback(s):
    * Easy to miss the user experience concerns
    * Only does exactly what we ask it to (it can't think outside the box)
    * Simple tests aren't always worth planning a suite of tests for

## Assertions

Comparing two outcomes, usually one expected and the actual result, to see if something completed its task properly.
