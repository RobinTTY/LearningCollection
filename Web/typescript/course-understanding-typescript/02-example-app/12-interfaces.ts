interface Named {
  readonly name: string;
  // optional properties
  outputName?: string;
}

interface Greetable extends Named {
  readonly name: string;

  greet(phrase: string): void;
}

// Class can implement multiple interfaces
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = {
  name: "Max",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
