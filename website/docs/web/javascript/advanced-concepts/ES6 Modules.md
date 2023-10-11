---
id: es6-modules
title: ES6 Modules
sidebar_position: 2
---

Before ES6 we really went out of our ways to obtain modules in JavaScript. Systems like RequireJS, Angular’s dependency injection mechanism, and CommonJS have been catering to our modular needs for a long time now – alongside with helpful tools such as Browserify and Webpack. In fact, ES6 modules have been heavily influenced by CommonJS. **An ES6 module is a file containing JS code.** There’s no special module keyword; a module mostly reads just like a script. There are two differences.

- ES6 modules are automatically strict-mode code, even if you don’t write "use strict"; in them
- Public variables, functions and classes are exposed using `export`
- Exposed modules are called into other modules using `import`
- Modules must be included in your HTML with `type="module"`, which can be an inline or external script tag

```js
<script type="module" src="main.js"></script>
<script type="module">
  // or an inline script
</script>
```

- Modules are deferred, and only run after a document is loaded

## Background

With ES6 modules, you can concatenate all scripts you might need in one main script by marking some of them as exports, then other modules can import them.

![ProjectStructure](/img/docs/Web/JavaScript/AdvancedConcepts/es6modules.png)

Before ES2015 (ES6) release, there were at least 3 major modules competing standards:

- Asynchronous Module Definition (AMD)
- RequireJS Modules
- CommonJS Modules

A single, native module standard was therefore proposed in ES6 (ES2015). ES6 modules is a very powerful concept, although [support is not available everywhere yet](https://caniuse.com/?search=es6), a common way of using it is to transpile into ES5. You can use things like [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) or some other transpiler to compile the modules during a build process.

## Export

Everything declared inside a module is local to the module, by default. If you want something declared in a module to be public, so that other modules can use it, you must export that feature. There are a few ways to do this. The simplest way is to add the `export` keyword.

```js
// kittydar.js - Find the locations of all the cats in an image.
// (Heather Arthur wrote this library for real)
// (but she didn't use modules, because it was 2013)

export function detectCats(canvas, options) {
  var kittydar = new Kittydar(options);
  return kittydar.detectCats(canvas);
}

export class Kittydar {
  ... several methods doing image processing ...
}

// This helper function isn't exported.
function resizeCanvas() {
  ...
}
...
```

You can export any top-level `function`, `class`, `var`, `let`, or `const`. Since the code is a module, not a script, all the declarations will be scoped to that module, not globally visible across all scripts and modules.

## Import

To import the exported features of another module, you use the ìmport` keyword.

```js
// demo.js - Kittydar demo program

import { detectCats } from "kittydar.js";

function go() {
  var canvas = document.getElementById("catpix");
  var cats = detectCats(canvas);
  drawRectangles(canvas, cats);
}
```

When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.

## More Information

In depth information about modules can be found [here](https://ponyfoo.com/articles/es6-modules-in-depth).
