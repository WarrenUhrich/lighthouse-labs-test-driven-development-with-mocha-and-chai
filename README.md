# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [ ] Test-Driven Development
* [ ] Assertions (console and NodeJS assert)
* [ ] CommonJS Modules
* [ ] npm
* [ ] Test Runners
* [ ] Assertion Libraries

## Improving Code Quality

* Testing
* "Testing-as-we-go"
* Refactoring
* Clean functions
* DRY code (Don't Repeat Yourself!!)
* Legibility (naming, organizing)
* Linting
* Writing explanatory comments (documenting code)

## Testing!!

### Manual

Running our code, and seeing if it works. Tweaking until we get the desired result.

* Run `node file.js` and see if it runs
* `console.log`

Pros:
* Check step-by-step; errors don't compound, debug piece-by-piece
* Quick, on-the-fly, flexible
* Transparent - easy to debug and see what you're working on
* Easy to isolate and output what you'd like to focus on where you'd like to output it
* As a user, we can evaluate the user experience, or notice things that we aren't testing for

Cons:
* Tedious - lead to exhaustion and human rror
* Laborious - takes time and effort to carry out these steps...
* It becomes difficult to properly perform long tests
* Doesn't scale well, esp. in larger projects

### Automated

* Running a test file to see if a function or functionality is meeting a set standard, or giving the correct output
    * Either pass or fail

Pros:
* Quick and easy (not tedious)
* Fast to execute
* Easy for team work
    * Easy to perform again and again (easy to repeat)
* Easy to see if your new code has caused pieces to fail
* Easier to organize in separate files (separation of concerns)

Cons:
* Pass or fail might not tell you precisely where the problem is
* Requires time to set up - can be overkill in small additions / projects
* Doesn't tell us much about the end-user experience, won't catch glaring visual or UX issues

## Test-Driven Development

1. Writing a test.
2. Write code to run in the test.
3. If any issues are encountered, address them.
4. Refactor the code (clean it up!)

Pros:
* Can save time with a clear road-map - clear whether it is working or not out-of-the-gate
* Well-thought-out use-cases...
    * What constitutes a success?
    * What does failure of the feature look like?
* Test writer doesn't have to know how the code would run, just write a specification for the expected input and result

Cons:
* Obscures debugging to a degree - have to read the tests to understand what is happening
* Time spent writing tests
* Similar lines for tests (unDRY / damp)
* If we're not careful with our tests, they can provide false positives
