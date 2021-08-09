"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8918],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3185:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={id:"javascriptRefresher",title:"Javascript Refresher"},l=void 0,c={unversionedId:"Web/JavaScript/Packt Course/javascriptRefresher",id:"Web/JavaScript/Packt Course/javascriptRefresher",isDocsHomePage:!1,title:"Javascript Refresher",description:"let & const",source:"@site/docs/Web/JavaScript/Packt Course/README.md",sourceDirName:"Web/JavaScript/Packt Course",slug:"/Web/JavaScript/Packt Course/javascriptRefresher",permalink:"/LearningCollection/Web/JavaScript/Packt Course/javascriptRefresher",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Packt Course/README.md",version:"current",frontMatter:{id:"javascriptRefresher",title:"Javascript Refresher"},sidebar:"mySidebar",previous:{title:"Introduction to Javascript",permalink:"/LearningCollection/Web/JavaScript/Codeacademy Course/introductionToJavascript"},next:{title:"JavaScript",permalink:"/LearningCollection/Web/JavaScript/javascript"}},p=[{value:"let &amp; const",id:"let--const",children:[{value:"Example let vs var",id:"example-let-vs-var",children:[]}]},{value:"Arrow functions",id:"arrow-functions",children:[{value:"Example",id:"example",children:[]}]},{value:"Exports and Imports (Modules)",id:"exports-and-imports-modules",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Classes",id:"classes",children:[{value:"Example",id:"example-2",children:[]}]},{value:"Spread Operator &amp; Rest Parameters",id:"spread-operator--rest-parameters",children:[{value:"The Spread Operator",id:"the-spread-operator",children:[]},{value:"Rest Parameters",id:"rest-parameters",children:[]}]},{value:"Destructuring",id:"destructuring",children:[{value:"Example",id:"example-5",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"let--const"},"let & const"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// use let for values that are variable\nlet a = 1;\n// use const for values that are constant\nconst b = 1;\n")),(0,o.kt)("p",null,"Note: Variables declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," keyword are scoped to the immediate function body (hence the function scope) while ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," variables are scoped to the immediate enclosing block denoted by { } (hence the block scope)."),(0,o.kt)("h3",{id:"example-let-vs-var"},"Example let vs var"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function run() {\n  var foo = "Foo";\n  let bar = "Bar";\n\n  console.log(foo, bar); // Foo Bar\n\n  {\n    var moo = "Mooo";\n    let baz = "Bazz";\n    console.log(moo, baz); // Mooo Bazz\n  }\n\n  console.log(moo); // Mooo => initialized with var\n  console.log(baz); // ReferenceError => initialized with let\n}\n\nrun();\n')),(0,o.kt)("h2",{id:"arrow-functions"},"Arrow functions"),(0,o.kt)("p",null,"Arrow functions are defined using the '=>' syntax. They are syntactic sugar for the function expression and are more concise. They do have some ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"limitations")," though."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// traditional function declaration\nfunction printMyName(name) {\n  console.log(name);\n}\n\nprintMyName("Robin");\n\n// arrow function\nconst printMyName = (name) => {\n  console.log(name);\n};\n\nprintMyName("Robin");\n\n// Special case of only returning (kind of like C#)\nconst multiply = (number) => number * 2;\n\nconsole.log(multiply(2));\n')),(0,o.kt)("h2",{id:"exports-and-imports-modules"},"Exports and Imports (Modules)"),(0,o.kt)("p",null,"A module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// person.js\nconst person = {\n    name: 'Robin'\n}\nexport default Robin\n\n// utility.js\nexport const clean = () => { ... }\nexport const baseDate = 10;\n\n// app.js\nimport person from './person';  // don't need curly braces since it's the default export\nimport prs from './person';     // the name we import it as doesn't matter\n\nimport { baseData } from './utility.js';        // we need to explicitly target which export we want since we have no default\nimport { clean as cln } from './utility.js';    // we can also assign an alias here\nimport * as bundled from './utility.js';        // we can also use the * operator to import everything, access via bundled.clean() for instance\n")),(0,o.kt)("p",null,"If a module defines a default export then you can import that default export by omitting the curly braces."),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("p",null,"Classes are a template for creating objects. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics."),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// with EcmaScript 6\nclass Human {\n  constructor() {\n    this.gender = "male";\n  }\n\n  printGender() {\n    console.log(this.gender);\n  }\n}\n\nclass Person extends Human {\n  constructor() {\n    // super must always be called if a class is being extended\n    super();\n    this.name = "Robin";\n  }\n\n  printMyName() {\n    console.log(this.name);\n  }\n}\n\nconst person = new Person();\nperson.printMyName();\nperson.printGender();\n\n// with EcmaScript 7 (proposal) - https://github.com/tc39/proposal-class-fields\nclass Human {\n  // no more \'this\' keyword here\n  gender = "male";\n\n  printGender = () => {\n    console.log(this.gender);\n  };\n}\n\nclass Person extends Human {\n  name = "Robin";\n\n  printMyName = () => {\n    console.log(this.name);\n  };\n}\n\nconst person = new Person();\nperson.printMyName();\nperson.printGender();\n')),(0,o.kt)("h2",{id:"spread-operator--rest-parameters"},"Spread Operator & Rest Parameters"),(0,o.kt)("h3",{id:"the-spread-operator"},"The Spread Operator"),(0,o.kt)("p",null,"The spread operator \u201cspreads\u201d the values in an iterable (arrays, strings) across zero or more arguments or elements."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5, 6];\n\nconsole.log(arr2); // [1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h3",{id:"rest-parameters"},"Rest Parameters"),(0,o.kt)("p",null,"The rest parameter gives us an easier and cleaner way of working with an indefinite number of parameters."),(0,o.kt)("h4",{id:"example-4"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sortArgs(...args) {\n  return args.sort();\n}\n")),(0,o.kt)("h2",{id:"destructuring"},"Destructuring"),(0,o.kt)("p",null,"The destructuring assignment syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables."),(0,o.kt)("h3",{id:"example-5"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Array destructuring\nlet a, b, rest;\n[a, b, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(rest); // [30, 40, 50]\n\n// Object destructuring\nlet { x, y, ...z } = { x: 10, y: 20, a: 30, b: 40 };\nconsole.log(z); // { a: 30, b: 40 }\n")))}m.isMDXComponent=!0}}]);