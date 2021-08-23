# Promise

> Definition: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Description

A Promise is a proxy for a value not necessarily known when the promise is created. A promise can be in one of three states:

- pending: initial state, neither fulfilled nor rejected
- resolved (or fulfilled): meaning that the operation was completed successfully
- rejected: meaning that the operation failed

A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's `then` method are called.

> Note: If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

## Flow of execution

![ProjectStructure](/img/docs/Web/JavaScript/promises.png)

## Syntax

```js
// A promise is created like this:
let promise = new Promise(executor);
```

The `executor` is a function which is custom code that ties an outcome to a promise. You, the programmer, write the `executor`. Its signature is expected to be:

```js
function(resolutionFunc, rejectionFunc){
    // typically, some asynchronous operation.
}
```

`resolutionFunc` and `rejectionFunc` are also functions, and you can give them whatever actual names you want.

Their signatures are simple, they accept a single parameter of any type:

```js
resolutionFunc(value); // call on resolved
rejectionFunc(reason); // call on rejected
```

The `resolutionFunc` `value` parameter can be another promise object, in which case the promise gets dynamically inserted into the [promise chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).

## Example: Using a Promise

```js
// the resolutionFunc is called 'resolve' here, and the rejectionFunc 'reject'
let promise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

promise.then(
    // on success
    (message) => {
        // Called on resolve: Success
        console.log(message);
    })
    .catch((message) => {
        // Called on reject: Failure
        console.log(message);
    })
);
```

## Replacing a callback with a Promise

Promises can replace callbacks [most of the time](https://stackoverflow.com/questions/45041462/node-js-when-to-use-promises-vs-callbacks). This can have several advantages, see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

An example of replacing a callback with a `Promise`:

```js
// Using a callback
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

// Using a promise
function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}
```

We call these methods like this:

```js
watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
```

Using the promise we have a nicer method signature. More importantly we avoid things like [callback hell](http://callbackhell.com/).

## Promise.prototype.then()

The `then()` method returns a `Promise`. It takes up to two arguments: callback functions for the success and failure cases of the `Promise`.

### Syntax

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

### Example

```js
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});
```

## Promise.prototype.catch()

The `catch()` method returns a `Promise` and deals with rejected cases only. It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.

### Syntax

```js
p.catch(onRejected);

p.catch(function (reason) {
  // rejection
});
```

### Example

```js
const promise1 = new Promise((resolve, reject) => {
  throw "Uh-oh!";
});

promise1.catch((error) => {
  console.error(error);
});
// expected output: Uh-oh!
```

## `catch()` vs `then()`

**The code fragments:**

```js
promise.then(f1).catch(f2);
// and
promise.then(f1, f2);
```

**are not equal!**

The difference is that **if an error happens in `f1`**, then it is handled by `.catch` here:

```js
// error in f1 will be caught by catch
promise.then(f1).catch(f2);
```

but not here:

```js
// error in f1 will not be caught
promise.then(f1, f2);
```

That’s because an error is passed down the chain, and in the second code piece there’s no chain below `f1`. In other words, **`.then` passes results/errors to the next `.then/catch`.** So in the first example, there’s a catch below, and in the second one there isn’t, so the error is unhandled.

### Flow diagram

![PromiseFlow](/img/docs/Web/JavaScript/catchVsThen.png)

### Reference

For more info see: [StackOverflow](https://stackoverflow.com/questions/24662289/when-is-thensuccess-fail-considered-an-antipattern-for-promises)

## Promise.all()

The `Promise.all()` method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

## Promise.race()

The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```
