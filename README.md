# Lighthouse Labs | Test Driven Development with Mocha and Chai

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-test-driven-development-with-mocha-and-chai/tree/2023.03.13-web-ft-east-06march2023) | [Vimeo Video Recording (Coming Soon!)](#coming-soon)

* [X] Test-Driven Development
* [X] Assertions (console and NodeJS assert)
* [X] CommonJS Modules
* [X] npm
* [X] Test Runners
* [X] Assertion Libraries

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

![Test Driven Development](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TDD_Global_Lifecycle.png/1920px-TDD_Global_Lifecycle.png)

### Error Handling

**Imagine there is a form field in a program that expects a number.**

Many programming languages, frameworks, and environments expect values to maintain a specific data type. If a number is required for maths, a value of a different type may result in an error, and sometimes an error can cause the entirety of the program to freeze up or crash.

Having your code written in a way that expects a potential error like this to occur in regular operation of the program can prevent an issue fatal to the program.

*In a case like the number, perhaps the program can try to convert a text input into a number if there are numeric values. Or halt the calculation, printing a message letting the user know their input is invalid.*

Note that error handling can be used in combination with testing to great effect, often making for the most robust solutions.

### [Try...Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

In many languages, JavaScript included, one of the most common ways to handle portions of code likely to encounter an error is with the use of `try...catch` blocks.

Here is an example of the base syntax:

```JavaScript
try {
  // Try running some code...
} catch ( error ) {
  // If it fails, run this block.
  // Note if we accept an argument here, we gain access to an error object containing information about what happened.
}
```

One of the strengths of this sort of block is it allows us to prevent our script(s) from crashing. Some crashes will prevent other instructions from running at all in the file, resulting in a poor user experience, so it is best to avoid hard crashes—instead catching common or expected issues in the code.

It also offers an easy opportunity for logging that an error has occured (either in the console or a log file.)

[An example from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#try_it):

```JavaScript
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
```

## Mocha and Chai

## Examples

Manual testing, we type stuff and see if it works. It is one of the slowest ways of doing things, and the most expensive, as you'll be doing this many, *many*, ***many*** times as the project grows and grows... 

**say-hello.js**

```JavaScript
const sayHello (name) => {
  console.log(`Hello there, ${name}!`);
}

sayHello('Alice');
```

The above is difficult to test, how would we know if it really showed up in the console? Functions that return something are much easier to check.

```JavaScript
const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';

console.assert(actual === expected, 'they aren\'t the same');
```

`console.assert()` only prints to the console if the condition evaluates to `false`, which can be tricky. Because of this, many people opt in to a different manual testing pattern:

```JavaScript
const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';

console.log('actual', actual);
console.log('expected', expected);
```

This ends up being a lot of console logs... in a pinch, you could opt for a table, though they take up a lot of space:

```JavaScript
const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';

console.table({actual: actual, expected: expected});
```

A verbose string also does the trick:

```JavaScript
const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';

console.log(`sayHello(name) Test: ${actual === expected ? 'PASSED' : 'FAILED'}
  ACTUAL:\t${sayHello('Alice')}
  EXPECTED:\tHello there, Alice!`
);
```

Note how much time and how difficult to maintain these sorts of tests and outputs can be!

## Node-Specific Documentations

Note that NodeJS adds on a lot of new classes, plugins, libraries, etc. onto base JavaScript. [MDN has documentation for `console.assert()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/assert), and everything else JavaScript on its own offers! JavaScript, we must keep in mind, was originally only intended for web browsers, however. If we want to learn more about the assertions we can do in our terminal using NodeJS specifically, we'll have to look at the [NodeJS documentation](https://nodejs.org/en/docs/) itself.

Again, on the topic of ways we can assert in NodeJS, let's look at the extended features supplied to us by NodeJS: [NodeJS Assertion Testing](https://nodejs.org/docs/latest-v15.x/api/assert.html)

Let's see about using NodeJS' built-in assert library.

## NodeJS Assertion Testing

Firstly, we need our file to load in the assert library code. There are two widely used syntaxes for this:

* Common JS syntax (CJS): `const assert = require('assert');`
* ECMAScript Module syntax (ESM): `import assert from 'assert';`

Out-of-the-box, NodeJS knows CJS, so we'll start with this for now. The original version(s) of NodeJS predates implementation of the ESM syntax, but we'll get a chance to use ESM a bunch down the road with some modern libraries.

Let's use CJS to store the assert object in an `assert` variable/constant; once required, we can `console.log()` to ensure it was found successfully:

```JavaScript
const assert = require('assert');

console.log('assert:', assert);

const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';
```

Awesome, the library is available. Now we can write our first assertion and see what happens.

```JavaScript
const assert = require('assert');

const sayHello (name) => {
  // console.log(`Hello there, ${name}!`);
  return `Hello there, ${name}!`;
}

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!'; // Change and see what happens.

assert.strictEqual(actual, expected);
```

If the assertion does not evaluate to `true`, a detailed message will show you what failed, why, and even where!

## Separation of Test and Production

This file is not very useful if we plan on launching or otherwise releasing this project. You do not want assertions, console logs/errors, and all sorts of testing code running whenever someone visits your website or runs your program. Testing is great for the development team, but the public doesn't want or need this extra overhead and output.

This calls for us to be careful about when we run tests, and this tells us we'll need to separate tests into a different part of the project... a dedicated testing area! Be it a file or folder, that'll be no problem for us.

If our first file is called `say-hello.js` we may want to call our second, related file, something similar to imply a relationship: `say-hello.test.js`.

**say-hello.js**

```JavaScript
const sayHello = (name) => {
  return `Hello there, ${name}!`;
}
```

**say-hello.test.js** `// Note that ".test" doesn't mean anything! It is just so we know it is for testing.`

```JavaScript
const assert = require('assert');
// How do we get our sayHello() function in here!?

// const actual = sayHello('Alice'); // FAILS, we don't have the function in this file yet!
const expected = 'Hello there, Alice!';
```

For more information, see the official documentation for [CommonJS Modules](https://nodejs.org/api/modules.html). This page offers detailed information and examples regarding the use of `require()` and `module.exports` to load file contents, variables, functions, etc. from one file (module) to another.

One of the features of *CommonJS Modules* that makes it so easy-to-use and flexible, is the [module wrapper](https://nodejs.org/api/modules.html#the-module-wrapper) that NodeJS uses. Each file, or modules, ending up inside of a function looking something like this:

```JavaScript
(function(exports, require, module, __filename, __dirname) {
  // NodeJS file/module code here.
});
```

As we work with modules, we can check the current wrapper contents via JS' [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) variable (note this variable is not present in arrow functions.) This is a variable that is available in any function, and acts as an array of all arguments passed into it when executed. Because all files (modules) get wrapped in a function, it can become possible to access the wrapper values via:

* `arguments[0]` (`exports`)
* `arguments[1]` (`require`)
* `arguments[2]` (`module`)
* `arguments[3]` (`__filename`)
* `arguments[4]` (`__dirname`)

In your file feel free to run a test to confirm the presence of this wrapper: `console.log( arguments );`.

Exports, by default, is an empty object. We can rewrite its contents completely, or populate the object with named properties. Back to where we were...

**say-hello.js**

```JavaScript
const sayHello = (name) => {
  return `Hello there, ${name}!`;
}

module.exports = sayHello; // No parenthesis, we don't want it to run RIGHT HERE; we just want to store it.
```

Now we can `require` it in other files. Let's get it into our test file:

**say-hello.test.js** `// Note that ".test" doesn't mean anything! It is just so we know it is for testing.`

```JavaScript
const assert = require('assert');
const sayHello = require('./say-hello'); // For our own files, we must use relative or absolute paths.

const actual = sayHello('Alice');
const expected = 'Hello there, Alice!';
```

There are a couple of other ways we can handle `module.exports`...

```JavaScript
// With your variable assignments:
module.exports.sayHello = (name) => {
  return `Hello there, ${name}!`;
};

// As an object all at once with key-value pairs (object property and value.)
module.exports = {
  sayHello: sayHello,
  pi: 3.14
};
```

In either of the above ways, `sayHello` could be accessed via `const sayHello = require('./say-hello').sayHello;` or `const {sayHello} = require('./say-hello');`. In those formats, `sayHello` is an object property/method so we just have to make sure we treat it as such when accessing it. When in doubt, double check how values are exported, console log, and explore the format of what you're `require`-ing in!

## Using NPM

To include and easily keep track of dependencies (packages) required for our project, we use a file called `package.json`. Whenever you open a project using JavaScript and you see a file by this name, you know that the NodeJS Package Manager (NPM) is in use. `package.json` can also be used to include meta information about our project, store common commands specific to the project so that they are easy to repeat, and more.

We can create the file manually, *or* use the npm command: `npm init`.

This command will walk you through the steps, keep in mind you can press enter for most of the steps if you are happy with the displayed defaults. Name, description, (space-separated) keywords, and licence are important if you plan on publicly hosting and sharing your package, as it will become easier to search and understand that way. Research licences if you plan on sharing your code to either ensure it is more legally protected or free-to-use depending on your goals for that code.

Note that `package.json` and regular `npm` commands are specific to the **present working directory**. Dependencies and files affected with exist within the current directory, so that you can easily add, update, manage, and remove them on a per-project basis.

The main npm repository source is: [npmjs.com](https://npmjs.com/).

Head there now, and [search for Mocha](https://npmjs.com/package/mocha). Do some research, especially for server-side code, ensure it is a widely used, tested, and safe package before installing and running it. Keep in mind most code, in any language on your device, has read/write access! It is possible for a script to read files on your computer, install malicious code, or commit other unsavoury actions. The npm page can be a good initial indicator, as it will give you information regarding number of downloads and other important information. You can also see if there is an official website and documentation, which can imply it is well-maintained and easier to use than one that may be lacking in that department.

To install a package, you can run your installation with:

```bash
npm install package-name
```

There are additional flags we can add to modify the steps taken for installations. Consider the `--save-dev` flag, it will mark something as only used for development phases. This is good, as the developer will know to exclude it when launching the live version, giving it less bloat and making it more secure for production.

```bash
npm install --save-dev package-name
````

Finally, a common flag you'll see, is the `--global` flag. Using this does not add it to the local project's `package.json`, instead simply installing it to your computer. This is commonly used for command-line tools that you may want to re-use ***anywhere*** on your computer. The other, above options, only install the packages to your local project.

```bash
npm install --global package-name
```

For direction on which is most appropriate to use, it is a good idea to read their documentation and consider your personal use-case for this package.

Install Mocha: `npm install --save-dev mocha`

Note that almost any popular package you install will have many dependencies of its own. Check out `./node_modules/mocha/package.json`, you'll see that it has many of its own dependencies. There will be many, many folders in a typical `./node_modules/` directory, once you install a few packages.

## .gitignore

If you're using `npm` and have installed any packages, be careful! There are thousands, if not millions, of lines of code in the `./node_modules/` folder! Plus, you won't be changing those directly, so although they likely must be present for your project to run, they are already being kept track of in git repositories elsewhere so this would be double-work. It will also increase the time of your git pulls and pushes ***very significantly***.

Create a file in your project called `.gitignore` (recall that files starting with a period are hidden!)

***.gitignore***

```
/node_modules
```
## Using Mocha

[Open the offical website for instructions](https://mochajs.org/#getting-started). Create a directory called `test` in the project. We'll name a file in there after our project file.

`test/say-hello.test.js`

To execute the test runner, we'll use the install binary: `./node_modules/mocha/bin/mocha`. It will check the `/test/` folder in our directory and attempt to run all tests found therewithin. Note your tests will not run without this executable, as NodeJS on its own does not understand `it()` and other Mocha-specific commands. Try a test test:

```JavaScript
it('can do the thing I said it could', () => {
  throw Error('Testing a failure!');
});
```

See the detailed output? Awesome! Now lets work on a real `assert()`:

```JavaScript
const assert = require('assert');
const sayHello = require('../sayHello');

it('returns "Hello there, Alice!" when given the string "Alice"', () => {
  const actual = sayHello('Alice');
  const expected = 'Hello there, Alice!';

  assert.strictEqual(actual, expected);
});
```

There we have it! Run it with 'Bob!' to see what happens if it fails, then again with 'Alice!' to confirm it is working. This is automation. You run Mocha, and all `./tests` files will be run automatically and you can review the report for potential concerns in your project. Finally, manual file-by-file testing: no more!

Describe can also be used for organization, but is completely optional. As files get more populated, it can become more and more helpful.

```JavaScript
const assert = require('assert');
const sayHello = require('../sayHello');

describe('tests for sayHello function', () => {
  it('returns "Hello there, Alice!" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'Hello there, Alice!';

    assert.strictEqual(actual, expected);
  });

  it('returns "Hello there, William!" when given the string "William"', () => {
    const actual = sayHello('William');
    const expected = 'Hello there, William!';

    assert.strictEqual(actual, expected);
  });
});
```

Let's check for an error this time.

**./say-hello.js**

```JavaScript
const sayHello = (name) => {
  return `Hello there, ${name}!`;
}

module.exports = {
  sayHello: sayHello,
  throwErrorFunc: () => {throw new Error()}
};
```

**./tests/say-hello.test.js**

```JavaScript
const assert = require('assert');
const { sayHello, throwErrorFunc } = require('../sayHello');

describe('tests for sayHello function', () => {
  it('returns "Hello there, Alice!" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'Hello there, Alice!';

    assert.strictEqual(actual, expected);
  });

  it('returns "Hello there, William!" when given the string "William"', () => {
    const actual = sayHello('William');
    const expected = 'Hello there, William!';

    assert.strictEqual(actual, expected);
  });
});

describe('tests for throwErrorFunc function', () => {
  it('throws an error of type Error', () => {
    assert.throws(() => throwErrorFunc(), Error); // Change from Error to TypeError to show failure state.
  });
});
```

## Using Chai

This is Mocha working with the built-in NodeJS assertion library... we'd mentioned we'd have a look at [Chai](https://www.chaijs.com/) though. It is a popular alternative! Note how modular this all is... we were able to do manual testing with NodeJS' assert library, we were able to combine that with Mocha, and we're also able to use Mocha with Chai instead. There are many possibilities, don't be surprised if you see any one of these combinations or even a different one when out in the workplace.

`npm install --save-dev chai`

We'll be looking at [Chai's](https://www.chaijs.com/guide/styles/) "Assert" API (note that it offers other options, should and expect, that look a bit different but do the same thing!)

See how [many assert options are available via Chai](https://www.chaijs.com/api/assert/).

Once installed, update your tests file:

```JavaScript
const assert = require('chai').assert; // Look how easy that is!
const { sayHello, throwErrorFunc } = require('../sayHello');

describe('tests for sayHello function', () => {
  it('returns "Hello there, Alice!" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'Hello there, Alice!';

    assert.strictEqual(actual, expected);
  });

  it('returns "Hello there, William!" when given the string "William"', () => {
    const actual = sayHello('William');
    const expected = 'Hello there, William!';

    assert.strictEqual(actual, expected);
  });
});

describe('tests for throwErrorFunc function', () => {
  it('throws an error of type Error', () => {
    assert.throws(() => throwErrorFunc(), Error); // Change from Error to TypeError to show failure state.
  });
});
```

Chai's assert API is *compatible* with NodeJS', but has many, many more options! So we can run it on our old code, and we'd be free to explore so much more.

## Resources

* [Wikipedia: Test-driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
* [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
    * [MDN: console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/Console/assert)
    * [MDN: arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
    * [MDN: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
* [NodeJS: Docs](https://nodejs.org/docs/latest-v15.x/api/)
    * [NodeJS: CommonJS Modules](https://nodejs.org/api/modules.html#modules-commonjs-modules)
        * [NodeJS: Module Wrapper](https://nodejs.org/api/modules.html#the-module-wrapper)
    * [NodeJS: Assert](https://nodejs.org/api/assert.html#assert)
* [npmjs.com](https://www.npmjs.com/)
* [.gitignore](https://git-scm.com/docs/gitignore)
  * [.gitignore Generator](https://www.toptal.com/developers/gitignore)
* [Mocha: Getting Started](https://mochajs.org/#getting-started)
* [Chai: Assert API Reference](https://www.chaijs.com/api/assert/)
