# Lighthouse Labs | Test Driven Development with Mocha and Chai

* [X] Test-Driven Development
* [X] Assertions (console and NodeJS assert)
* [ ] CommonJS Modules
* [ ] npm
* [ ] Test Runners
* [ ] Assertion Libraries

## Improved Code Quality

* Refactoring! (Taking time to go back and rewrite portions of code!)
* Linting! (Using tools to enforce best practices, or catch errors even before *running* our code.)
* Running tests against our code!
* Manually testing our code (run the code, see if anything goes wrong!)
* Using version control!
* Writing DRY code!
* Error-handling!

## Error-Handling in JS

We could do a ***lot*** of checks for errors, unexpected data-types, or if things went wrong...
This could mean a lot of conditionals / if-statements.


A `try...catch` block will watch in the `try` portion for errors. If an error occurs in this `try` portion, the program will ***not*** crash, and instead the `catch` will run.

```js
try {
    // Write code that *might* have an error here.
} catch(error) {
    console.log('Sorry, something went wrong!', error);
}
```

## Manual Testing vs. Automated Testing

### Manual Testing

* The "default" approach... we write code, we see if it works or not!
* `console.log`, trying different inputs/outputs, and seeing if it works or breaks
* Benefits:
    * Nice and quick!
    * Very simple! We just use standard programming to experiment (no extra learning)
    * No extra dependencies, functions, or libraries that we have to bring into our code
* Drawbacks:
    * Can be time-consuming... (not always easily repeatable as you develop)
    * Not always consistent

### Automated Testing

* Using features in a language, or via a test-runner to run coded/pre-built tests
* Basically from our perspective, we can say "run our tests!" And the program will tell us what is working, and what is not.
* Benefits:
    * You can test a lot, or even everything, extremely efficiently!
    * Consistent! Easy to keep running the previous tests to watch for breakages
    * This builds a separation of concerns (organizes well into separate files / dedicated places as to not pollute our project code)
    * Scalable! As a project grows you have a lot more peace-of-mind and ease of troubleshooting
* Drawbacks:
    * You have to set up the tests (spend time thinking through and writing success/failure scenarios)
    * More code files manage, have to consider updating them if the project spec or requirements change

## Test-Driven Development

1. Write a test to confirm if a feature would be working or not.
2. Write code for the feature. ( Run the above test(s)! )
3. If there are issues, address them.
4. Refactor the code (clean it up!)

Benefits:
* Can improve code quality
* Forces you think about the logic a bit (what is success/failure)
* Helps identify early-on where the efforts might be, and can help inform your design

Drawbacks:
* It can be time-consuming
