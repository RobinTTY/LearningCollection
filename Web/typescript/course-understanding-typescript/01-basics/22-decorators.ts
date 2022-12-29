// Simple decorator (the target is the class)
function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

// Decorator factory - can accept arguments
function Logger2(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

@Logger2("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person.name);

// Output:
// app.ts:10 LOGGING - PERSON
// app.ts:11 class Person {
//     constructor() {
//         this.name = "Max";
//         console.log("Creating person object...");
//     }
// }
// app.ts:20 Creating person object...
// app.ts:25

// ---More realistic example---
/**
 * Will add a template to the DOM element with the given id
 * @param template The template to add to the DOM
 * @param hookId The id of the DOM element to add the template to
 */
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// This is the same technique Angular uses to add templates to the DOM (although it's way more complex)
@WithTemplate("<h1>My Person Object</h1>", "app") // This decorator function will be executed second
@Logger2("LOGGING") // This decorator function will be executed first
class Person2 {
  name = "Robin";

  constructor() {
    console.log("Creating person2 object...");
  }
}

// ---Different types of decorators---
// ---Property Decorator---
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// ---Accessor Decorator---
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ---Method Decorator---
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ---Parameter Decorator---
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Output:
// app.ts:70 Property decorator!
// app.ts:71 {constructor: ƒ, getPriceWithTax: ƒ} 'title'
// app.ts:76 Accessor decorator!
// app.ts:77 {constructor: ƒ, getPriceWithTax: ƒ}
// app.ts:78 price
// app.ts:79 {get: undefined, enumerable: false, configurable: true, set: ƒ}
// app.ts:96 Parameter decorator!
// app.ts:97 {constructor: ƒ, getPriceWithTax: ƒ}
// app.ts:98 getPriceWithTax
// app.ts:99 0
// app.ts:88 Method decorator!
// app.ts:89 {constructor: ƒ, getPriceWithTax: ƒ}
// app.ts:90 getPriceWithTax
// app.ts:91 {writable: true, enumerable: false, configurable: true, value: ƒ}

// instantiation of the class doesn't trigger decorator functions
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

// ---Returning (and changing) a Class in a Class Decorator---
function WithTemplate2(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }

    // Adds new functionality to the existing class
    return class extends constructor {
      constructor(..._: any[]) {
        super();
        console.log("Creating new object...");
      }
    };
  };
}

// ---Creating an 'Autobind' Decorator (binding 'this' context)---
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // Method which should be called
  const originalMethod = descriptor.value;
  // Adjusted method we return
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // Binding the context ('this' here refers to the object which calls the method)
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// Need to bind the context of the function to the instance of the class
button.addEventListener("click", p.showMessage);

// ---Validation with Decorators---
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

// Validate that a property exists
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

// Validates that a property is a positive number
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

// Does the actual validation (descriptor function only register the validators)
function validate(obj: any) {
  // Check whether the object has any validators
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  // Validate the object
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

// Form submission handler
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  // Create new course with the entered information
  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
