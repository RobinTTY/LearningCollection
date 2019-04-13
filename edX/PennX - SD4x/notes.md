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

## Objects

- Objects are used to store key-value pairs
- values can be of any type, including objects
- values can be accessed by myObject.property or myObject['property']

Example object declaration and modification:

```Javascript
var pet = {
    name: 'Cooper',
    type: 'dog'
}

console.log(pet.age);           // undefined
pet.age = 11;
console.log(pet.age);           // 11

pet['status'] = 'good boy';
console.log(pet.status);        // "good boy"
```

key-value pair age and status is added since it doesn't exist yet.

## Control Structures

Keep in mind difference between comparisons "==" and "===":  
== will compare different types and do conversions (1 == '1': true!)  
== will do no conversions, simple comparison (1 === '1': false!)

Objects are only considered equal if the variables are aliases, i.e. refer to the same object:

```Javascript
var cooper = { age: 11 }
var flanders = { age: 11 }

if (cooper == flanders) { . . . }   // false

var myDog = cooper;

if(myDog == cooper) { . . . }       // true!
```

## Functions

Example of a function:

```Javascript
function factorial(n) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

var x = ...

var f = factorial(x);

console.log(f);
```

Array has predefined functions like:

- forEach, which executes a function for each element of the array (like linq).
- every, which evaluates each element against a function that returns either true or false (an int and a string can also be truthy so not literally true or false)
- map, applies a function to every element of the array and saves the result for each element in a new array

### Pass by value vs Pass by reference

Primitive arguments are passed by value, the function cannot change them.
Object arguments are passed by reference, the function can change them.

### Functions as objects

__Javascript functions are objects!__  
Therefore functions can take advantage of the benefits of an object, such as having properties

Since JavaScript functions are objects, they can be assigned to variables:

```Javascript
var add = function (a, b){
    return a + b;
};

console.log(add(3,5));      // 8
```

JavaScript functions can also be declared and used in objects:

```Javascript
var johnDoe = {
    name: 'John Doe',
    age: '32',
    greeting: function(){
        return ' Hello! Nice Meeting You!';
    }
}

console.log(johnDoe.greeting());
```

### Object prototypes

- Every object in JavaScript has a prototype, accessed from the \_\_proto__ property in the object.
- The \_\_proto__ property is also an object, with its own \_\_proto__ property, and so on
- The root prototype of all objects is Object.prototype
- An object inherits the properties of its prototype

### Creating a prototype

- Prototypes are created like any other JavaScript function or object
- the _this_ keyword refers to the current object
- the new keyword can be used to create new objects from the same prototype

```Javascript
function Person (name, age){    // prototype
    this.name = name;
    this.age = age;
    this.greeting = function () {
        return 'Hello! My name is ' + this.name;
    }
}

var johnDoe = new Person('John Doe', 32);
johnDoe.greeting();     // Hello! My name is John Doe

var janeDoe = new Person('Jane Doe', 28);
janeDoe.greeting();     // Hello! My name is Jane Doe
```

### Extending prototypes

- Prototypes can extend another prototype with more functionality
- To inherit a prototype, set the \_\_ proto__ property of an object to the parent prototype

```Javascript
function Student (name, age, school) {
    this.__proto__ = new Person(name, age);
    this.school = school;
}

var sarahBrown = new Student('Sarah Brown', 17, 'PennX');

sarahBrown.greeting();          // Hello! My name is Sarah Brown
sarahBrown instanceof Person;   // true
```

### Prototype properties

- Properties and methods can be added to prototypes by adding them to the prototype property

```Javascript
var Person = function (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

Person.prototype.planet = 'Earth';
Person.prototype.introduction = function(){
    return 'I am a ' + this.occupation;
}

var johnDoe = new Person('John Doe', 32, 'Dentist');

johnDoe.planet;             // Earth
johnDoe.introduction();     // I am a Dentist
```

## JavaScript regular expressions

In Javascript strings are immutable!

```Javascript
var animal = 'cat';

animal[0] = 'r';

console.log(animal); // still cat
```

Functions that work on strings, like toUpperCase() therefore return a new string.

- A regular expression is a pattern of characters
- A string matches a regular expression if it adheres to the same pattern
- Example: "consists of exactly three digits (0-9)"
  - '123' matches
  - 'abc' does not match
  - '12' does not match
  - '12345' does not match

### Simple regular expressions

- We can pass a regular expression to the string's search function to see if it matches the pattern
- In general, it is considered a match if any part of the string matches the regular expression

```Javascript
var status = 'I am working VERY hard';

status.search(/VERY/);  // returns the position -> 13

status.search(/very/);  // not found -> -1

status.search(/very/i); // ignores case -> 13
```

We can also use the regex test function:

```Javascript
/script/.test('javascript is so much fun!');    // true
```

### Ranges of characters

```Javascript
var numbers = '5 8 2 5 7 6';
numbers.search(/[012]/);        // 4

var password = 'password4real';
password.search(/[a-z]/);       // 0
password.search(/\d/);          // 8 (any digit)

var code = 'abc123d4e5';
code.search(/[0-9][a-z][0-9]/); // 5

var chars = 'abc123K456';
chars.search(/[^0-9a-z]/);      // look for characters not in range -> 6
```

### Quantifiers

```Javascript
/[a-z][0-9]?[a-z]/.test('a1b');     // matches
/[a-z][0-9]?[a-z]/.test('abc');     // matches -> number is optional
/[a-z][0-9]?[a-z]/.test('a123b');   // doesn't match -> ? tests for single occurrence

/[a-z][0-9]*[a-z]/.test('a123b');   // matches -> * tests for multiple occurrence
```

### startsWith and endsWith Matches

```Javascript
/^[a-z][0-9]/.test('a1b');          // ^ starts with -> true
/^[a-z][0-9]/.test('ab12');         // false

/[a-z][a-z]$/.test('123abc');      // $ ends with -> true
/[a-z][a-z]$/.test('123abc456');   // false
```

## Event-driven programming

- Event-driven programming can be used to modify HTML based on user input
- This is done by defining callback functions and associating them with various events by adding event listeners
  - element.addEventListener(event, function)
  - Events: 'click', etc.

## jQuery

- simplifies JavaScript usage on webapps
- more intuitive way of DOM manipulation
- great cross-browser support (except IE6)
- additional utilities
- effects and animations
- customizable plugins

### Selecting DOM Elements

- in jQuery, $ is used to select DOm elements for manipulation, along with basic CSS element syntax
  - $("*") selects all elements
  - $(this) selects the current element
  - $("div") selects all \<div> elements
  - $(".title") selects all elements with class="title"
  - $("#name") selects the element with id="name"

### jQuery DOM Manipulation

- to manipulate DOM contents, the general format is $(selector).action(arguments)
- Examples:

```Javascript
$("#name").html("Hello");           // set html of element with id name to Hello
$("#name").append("World!");        // append World! to element with id name
$("#name").addClass("greeting");    // add class
$("#name").hide();                  // hide element
$("#name").show();                  // unhide element
```

- to add an event listener to an element, the general format is $(selector).event(callback)

### Selectors

```Javascript
$(someNodes).find(selector)     // will search someNodes' children for selector
$("div.book")                   // selects divs with class="book"
$("div, .book")                 // selects all divs and all elements with class="book"
$("p:hidden")                   // selects all <p> elements that are visually hidden
```