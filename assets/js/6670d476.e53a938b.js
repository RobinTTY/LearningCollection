"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3625],{13429:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(74848),a=r(28453);const t={id:"javascriptRefresher",title:"Javascript Refresher"},o=void 0,l={id:"web/javascript/courses/packt-course/javascriptRefresher",title:"Javascript Refresher",description:"let & const",source:"@site/docs/web/javascript/courses/packt-course/README.md",sourceDirName:"web/javascript/courses/packt-course",slug:"/web/javascript/courses/packt-course/",permalink:"/LearningCollection/web/javascript/courses/packt-course/",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/javascript/courses/packt-course/README.md",tags:[],version:"current",frontMatter:{id:"javascriptRefresher",title:"Javascript Refresher"},sidebar:"docs",previous:{title:"PennX - SD4x",permalink:"/LearningCollection/web/javascript/courses/edx-course/pennxSd4x"},next:{title:"Typescript",permalink:"/LearningCollection/web/typescript/"}},i={},c=[{value:"let &amp; const",id:"let--const",level:2},{value:"Example let vs var",id:"example-let-vs-var",level:3},{value:"Arrow functions",id:"arrow-functions",level:2},{value:"Example",id:"example",level:3},{value:"Exports and Imports (Modules)",id:"exports-and-imports-modules",level:2},{value:"Example",id:"example-1",level:3},{value:"Classes",id:"classes",level:2},{value:"Example",id:"example-2",level:3},{value:"Spread Operator &amp; Rest Parameters",id:"spread-operator--rest-parameters",level:2},{value:"The Spread Operator",id:"the-spread-operator",level:3},{value:"Example",id:"example-3",level:4},{value:"Rest Parameters",id:"rest-parameters",level:3},{value:"Example",id:"example-4",level:4},{value:"Destructuring",id:"destructuring",level:2},{value:"Example",id:"example-5",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"let--const",children:"let & const"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// use let for values that are variable\nlet a = 1;\n// use const for values that are constant\nconst b = 1;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: Variables declared with the ",(0,s.jsx)(n.code,{children:"var"})," keyword are scoped to the immediate function body (hence the function scope) while ",(0,s.jsx)(n.code,{children:"let"})," variables are scoped to the immediate enclosing block denoted by "," (hence the block scope)."]}),"\n",(0,s.jsx)(n.h3,{id:"example-let-vs-var",children:"Example let vs var"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function run() {\n  var foo = "Foo";\n  let bar = "Bar";\n\n  console.log(foo, bar); // Foo Bar\n\n  {\n    var moo = "Mooo";\n    let baz = "Bazz";\n    console.log(moo, baz); // Mooo Bazz\n  }\n\n  console.log(moo); // Mooo => initialized with var\n  console.log(baz); // ReferenceError => initialized with let\n}\n\nrun();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"arrow-functions",children:"Arrow functions"}),"\n",(0,s.jsxs)(n.p,{children:["Arrow functions are defined using the '=>' syntax. They are syntactic sugar for the function expression and are more concise. They do have some ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",children:"limitations"})," though."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// traditional function declaration\nfunction printMyName(name) {\n  console.log(name);\n}\n\nprintMyName("Robin");\n\n// arrow function\nconst printMyName = (name) => {\n  console.log(name);\n};\n\nprintMyName("Robin");\n\n// Special case of only returning (kind of like C#)\nconst multiply = (number) => number * 2;\n\nconsole.log(multiply(2));\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exports-and-imports-modules",children:"Exports and Imports (Modules)"}),"\n",(0,s.jsx)(n.p,{children:"A module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs."}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// person.js\nconst person = {\n    name: 'Robin'\n}\nexport default Robin\n\n// utility.js\nexport const clean = () => { ... }\nexport const baseDate = 10;\n\n// app.js\nimport person from './person';  // don't need curly braces since it's the default export\nimport prs from './person';     // the name we import it as doesn't matter\n\nimport { baseData } from './utility.js';        // we need to explicitly target which export we want since we have no default\nimport { clean as cln } from './utility.js';    // we can also assign an alias here\nimport * as bundled from './utility.js';        // we can also use the * operator to import everything, access via bundled.clean() for instance\n"})}),"\n",(0,s.jsx)(n.p,{children:"If a module defines a default export then you can import that default export by omitting the curly braces."}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsx)(n.p,{children:"Classes are a template for creating objects. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics."}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// with EcmaScript 6\nclass Human {\n  constructor() {\n    this.gender = "male";\n  }\n\n  printGender() {\n    console.log(this.gender);\n  }\n}\n\nclass Person extends Human {\n  constructor() {\n    // super must always be called if a class is being extended\n    super();\n    this.name = "Robin";\n  }\n\n  printMyName() {\n    console.log(this.name);\n  }\n}\n\nconst person = new Person();\nperson.printMyName();\nperson.printGender();\n\n// with EcmaScript 7 (proposal) - https://github.com/tc39/proposal-class-fields\nclass Human {\n  // no more \'this\' keyword here\n  gender = "male";\n\n  printGender = () => {\n    console.log(this.gender);\n  };\n}\n\nclass Person extends Human {\n  name = "Robin";\n\n  printMyName = () => {\n    console.log(this.name);\n  };\n}\n\nconst person = new Person();\nperson.printMyName();\nperson.printGender();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"spread-operator--rest-parameters",children:"Spread Operator & Rest Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"the-spread-operator",children:"The Spread Operator"}),"\n",(0,s.jsx)(n.p,{children:'The spread operator "spreads" the values in an iterable (arrays, strings) across zero or more arguments or elements.'}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5, 6];\n\nconsole.log(arr2); // [1, 2, 3, 4, 5, 6]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"rest-parameters",children:"Rest Parameters"}),"\n",(0,s.jsx)(n.p,{children:"The rest parameter gives us an easier and cleaner way of working with an indefinite number of parameters."}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function sortArgs(...args) {\n  return args.sort();\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"destructuring",children:"Destructuring"}),"\n",(0,s.jsx)(n.p,{children:"The destructuring assignment syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables."}),"\n",(0,s.jsx)(n.h3,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Array destructuring\nlet a, b, rest;\n[a, b, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(rest); // [30, 40, 50]\n\n// Object destructuring\nlet { x, y, ...z } = { x: 10, y: 20, a: 30, b: 40 };\nconsole.log(z); // { a: 30, b: 40 }\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(96540);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);