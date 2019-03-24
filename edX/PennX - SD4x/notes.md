# Notes on PennX: SD4x

## Anatomy of an HTTP Request

The first line of a request will always be a verb followed by an argument:

- GET: retrieve resource
- HEAD: retrieve only headers (information about the resource)
- POST: create resource (usually used in form submission context)

![HTTPRequest](ressources/HTTPRequest.PNG)

## Anatomy of an HTTP Response

The first line of a response is always the protocol and status code. Following that comes other header information regarding the response and/or the server, then a blank line and the the response body, i.e. the resource that was requested.

![HTTPResponse](ressources/HTTPResponse.PNG)

## CSS Syntax

![cssSyntax](ressources/cssSyntax.PNG)

## Javascript

Truthy and falsy values:

- truthy values: 'test', 'false', 5, etc.
- falsy values: null, undefined, 0, NAN, '' (treated as false)

Any variable type can become a boolean when used with logical operators!

## Arrays

Values stored can be of any type:

```Javascript
var myArray = ['cars', 12, false]
```

- When reading an array value by its index, the array will return undefined if the index is out of bounds, __no exception!__
- Elements can be written to negative indices and there can be gaps between elements, where no other element is
  - __e.g. a[1] = 'test', a[3] = 'another test' and a[2] is undefined, a.length will be 2 not 3__

### push()

Adds an element to the end of an array: e.g. myArray.push('wow');

### unshift()

Adds an element to the start of an array: e.g. myArray.unshift('wow');

### pop()

Removes and returns an element from the end of the array: e.g. var vehicle = myArray.pop();

### shift()

Removes and returns an element from the beginning of the array: e.g. var vehicle = myArray.shift();