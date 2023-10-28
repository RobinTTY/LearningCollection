"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),y=r,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},9034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"types",title:"Types",sidebar_position:2},o=void 0,l={unversionedId:"web/javascript/core-concepts/types",id:"web/javascript/core-concepts/types",title:"Types",description:"JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",source:"@site/docs/web/javascript/core-concepts/types.md",sourceDirName:"web/javascript/core-concepts",slug:"/web/javascript/core-concepts/types",permalink:"/LearningCollection/web/javascript/core-concepts/types",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/javascript/core-concepts/types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"types",title:"Types",sidebar_position:2},sidebar:"docs",previous:{title:"Variables and Constants",permalink:"/LearningCollection/web/javascript/core-concepts/variables-and-constants"},next:{title:"Arithmetic Operators",permalink:"/LearningCollection/web/javascript/core-concepts/arithmetic-operators"}},p={},s=[{value:"JavaScript types",id:"javascript-types",level:2},{value:"Boolean type",id:"boolean-type",level:3},{value:"Null type",id:"null-type",level:3},{value:"Undefined type",id:"undefined-type",level:3},{value:"Number type",id:"number-type",level:3},{value:"BigInt type",id:"bigint-type",level:3},{value:"String type",id:"string-type",level:3},{value:"Symbol type",id:"symbol-type",level:3},{value:"<code>typeof</code> operator",id:"typeof-operator",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JavaScript is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic_programming_language"},"dynamic")," language with ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Type_system#DYNAMIC"},"dynamic types"),". ",(0,r.kt)("strong",{parentName:"p"},"Variables in JavaScript are not directly associated with any particular value type"),", and any variable can be assigned (and re-assigned) values of all types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let foo = 42; // foo is now a number\nfoo = "bar"; // foo is now a string\nfoo = true; // foo is now a boolean\n')),(0,r.kt)("p",null,"JavaScript is also a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Strong_and_weak_typing"},"weakly typed")," language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const foo = 42;\nconst result = foo + "1";\nconsole.log(result); // 421\n')),(0,r.kt)("h2",{id:"javascript-types"},"JavaScript types"),(0,r.kt)("p",null,"The set of types in the JavaScript language consists of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values"},"primitive values")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects"},"objects"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values"},"Primitive values")," (immutable ",(0,r.kt)("a",{parentName:"li",href:"https://www.oxfordlearnersdictionaries.com/definition/english/datum"},"datum")," represented directly at the lowest level of the language)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#boolean-type"},"Boolean type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#null-type"},"Null type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#undefined-type"},"Undefined type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#number-type"},"Number type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bigint-type"},"BigInt type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#string-type"},"String type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#symbol-type"},"Symbol type")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects"},"Objects")," (collections of properties)")),(0,r.kt)("p",null,'All types except objects define immutable values (that is, values which can\'t be changed). For example, Strings are immutable. We refer to values of these types as "primitive values".'),(0,r.kt)("h3",{id:"boolean-type"},"Boolean type"),(0,r.kt)("p",null,"Boolean represents a logical entity and can have two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"null-type"},"Null type"),(0,r.kt)("p",null,"The Null type has exactly one value: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". It represents the intentional absence of any object value. ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," expresses a lack of identification, indicating that a variable points to no object. In APIs, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," is often retrieved in a place where an object can be expected but no object is relevant."),(0,r.kt)("h3",{id:"undefined-type"},"Undefined type"),(0,r.kt)("p",null,"A variable that has not been assigned a value is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". A method or statement also returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the variable that is being evaluated does not have an assigned value. A function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if a value was not returned."),(0,r.kt)("h3",{id:"number-type"},"Number type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," type is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Double-precision_floating-point_format"},"double-precision 64-bit binary format IEEE 754 value"),". Although a number often represents only its value, JavaScript provides ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators"},"bitwise operators"),"."),(0,r.kt)("h3",{id:"bigint-type"},"BigInt type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt")," type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers. BigInts cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown."),(0,r.kt)("h3",{id:"string-type"},"String type"),(0,r.kt)("p",null,"JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),' type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. JavaScript strings are immutable.'),(0,r.kt)("h3",{id:"symbol-type"},"Symbol type"),(0,r.kt)("p",null,'A "symbol" represents a unique identifier. ',(0,r.kt)("inlineCode",{parentName:"p"},"Symbol")," is a built-in object whose constructor returns a symbol ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"primitive")," \u2014 also called a Symbol value or just a Symbol \u2014 that's guaranteed to be unique."),(0,r.kt)("p",null,"Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object."),(0,r.kt)("h2",{id:"typeof-operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"typeof")," operator"),(0,r.kt)("p",null,"We can easily recognize the data type using the ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof")," operator. There are two ways to write this operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(typeof(9)); // number\nconsole.log(typeof 9); // number\n")))}d.isMDXComponent=!0}}]);