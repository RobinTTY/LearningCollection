"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2207],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"es6-modules",title:"ES6 Modules"},s=void 0,c={unversionedId:"Web/JavaScript/Advanced Concepts/es6-modules",id:"Web/JavaScript/Advanced Concepts/es6-modules",title:"ES6 Modules",description:"Before ES6 we really went out of our ways to obtain modules in JavaScript. Systems like RequireJS, Angular\u2019s dependency injection mechanism, and CommonJS have been catering to our modular needs for a long time now \u2013 alongside with helpful tools such as Browserify and Webpack. In fact, ES6 modules have been heavily influenced by CommonJS. An ES6 module is a file containing JS code. There\u2019s no special module keyword; a module mostly reads just like a script. There are two differences.",source:"@site/docs/Web/JavaScript/Advanced Concepts/ES6 Modules.md",sourceDirName:"Web/JavaScript/Advanced Concepts",slug:"/Web/JavaScript/Advanced Concepts/es6-modules",permalink:"/LearningCollection/Web/JavaScript/Advanced Concepts/es6-modules",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Advanced Concepts/ES6 Modules.md",tags:[],version:"current",frontMatter:{id:"es6-modules",title:"ES6 Modules"},sidebar:"mySidebar",previous:{title:"Promise",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/promise"},next:{title:"Introduction to Javascript",permalink:"/LearningCollection/Web/JavaScript/Courses/Codeacademy Course/"}},u=[{value:"Background",id:"background",children:[],level:2},{value:"Export",id:"export",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"More Information",id:"more-information",children:[],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before ES6 we really went out of our ways to obtain modules in JavaScript. Systems like RequireJS, Angular\u2019s dependency injection mechanism, and CommonJS have been catering to our modular needs for a long time now \u2013 alongside with helpful tools such as Browserify and Webpack. In fact, ES6 modules have been heavily influenced by CommonJS. ",(0,a.kt)("strong",{parentName:"p"},"An ES6 module is a file containing JS code.")," There\u2019s no special module keyword; a module mostly reads just like a script. There are two differences."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'ES6 modules are automatically strict-mode code, even if you don\u2019t write "use strict"; in them'),(0,a.kt)("li",{parentName:"ul"},"Public variables, functions and classes are exposed using ",(0,a.kt)("inlineCode",{parentName:"li"},"export")),(0,a.kt)("li",{parentName:"ul"},"Exposed modules are called into other modules using ",(0,a.kt)("inlineCode",{parentName:"li"},"import")),(0,a.kt)("li",{parentName:"ul"},"Modules must be included in your HTML with ",(0,a.kt)("inlineCode",{parentName:"li"},'type="module"'),", which can be an inline or external script tag")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script type="module" src="main.js"><\/script>\n<script type="module">\n  // or an inline script\n<\/script>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modules are deferred, and only run after a document is loaded")),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"With ES6 modules, you can concatenate all scripts you might need in one main script by marking some of them as exports, then other modules can import them."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ProjectStructure",src:n(7786).Z})),(0,a.kt)("p",null,"Before ES2015 (ES6) release, there were at least 3 major modules competing standards:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Asynchronous Module Definition (AMD)"),(0,a.kt)("li",{parentName:"ul"},"RequireJS Modules"),(0,a.kt)("li",{parentName:"ul"},"CommonJS Modules")),(0,a.kt)("p",null,"A single, native module standard was therefore proposed in ES6 (ES2015). ES6 modules is a very powerful concept, although ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=es6"},"support is not available everywhere yet"),", a common way of using it is to transpile into ES5. You can use things like ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),", ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," or some other transpiler to compile the modules during a build process."),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("p",null,"Everything declared inside a module is local to the module, by default. If you want something declared in a module to be public, so that other modules can use it, you must export that feature. There are a few ways to do this. The simplest way is to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," keyword."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// kittydar.js - Find the locations of all the cats in an image.\n// (Heather Arthur wrote this library for real)\n// (but she didn't use modules, because it was 2013)\n\nexport function detectCats(canvas, options) {\n  var kittydar = new Kittydar(options);\n  return kittydar.detectCats(canvas);\n}\n\nexport class Kittydar {\n  ... several methods doing image processing ...\n}\n\n// This helper function isn't exported.\nfunction resizeCanvas() {\n  ...\n}\n...\n")),(0,a.kt)("p",null,"You can export any top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"function"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),". Since the code is a module, not a script, all the declarations will be scoped to that module, not globally visible across all scripts and modules."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"To import the exported features of another module, you use the \xecmport` keyword."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// demo.js - Kittydar demo program\n\nimport { detectCats } from "kittydar.js";\n\nfunction go() {\n  var canvas = document.getElementById("catpix");\n  var cats = detectCats(canvas);\n  drawRectangles(canvas, cats);\n}\n')),(0,a.kt)("p",null,"When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed."),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("p",null,"In depth information about modules can be found ",(0,a.kt)("a",{parentName:"p",href:"https://ponyfoo.com/articles/es6-modules-in-depth"},"here"),"."))}p.isMDXComponent=!0},7786:function(e,t,n){t.Z=n.p+"assets/images/es6modules-f01755d5eee798ae1f3f8febe64b0a42.png"}}]);