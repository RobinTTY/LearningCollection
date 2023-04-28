"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,v=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},2150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"variables-and-constants",title:"Variables and Constants",sidebar_position:1},i=void 0,l={unversionedId:"Web/JavaScript/Core Concepts/variables-and-constants",id:"Web/JavaScript/Core Concepts/variables-and-constants",title:"Variables and Constants",description:"Variables in JavaScript can be declared in two ways:",source:"@site/docs/Web/JavaScript/Core Concepts/variables-constants.md",sourceDirName:"Web/JavaScript/Core Concepts",slug:"/Web/JavaScript/Core Concepts/variables-and-constants",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/variables-and-constants",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Core Concepts/variables-constants.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"variables-and-constants",title:"Variables and Constants",sidebar_position:1},sidebar:"finance",previous:{title:"JavaScript",permalink:"/LearningCollection/Web/JavaScript/"},next:{title:"Types",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/types"}},s={},c=[{value:"<code>var</code> keyword",id:"var-keyword",level:2},{value:"<code>let</code> keyword",id:"let-keyword",level:2},{value:"<code>const</code> keyword",id:"const-keyword",level:2},{value:"Variables without a keyword",id:"variables-without-a-keyword",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Variables in JavaScript can be declared in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var")," declares a function-scoped or globally-scoped variable, optionally initializing it to a value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"let")," declares a block-scoped local variable, optionally initializing it to a value")),(0,r.kt)("p",null,"Constants are declared via the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,r.kt)("h2",{id:"var-keyword"},(0,r.kt)("inlineCode",{parentName:"h2"},"var")," keyword"),(0,r.kt)("p",null,"The scope of a variable declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global. Duplicate variable declarations using ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," will not trigger an error, even in strict mode, and the variable will not lose its value, unless another assignment is performed."),(0,r.kt)("p",null,"The var keyword is not bad per se, but there is no need to use var in new projects."),(0,r.kt)("h2",{id:"let-keyword"},(0,r.kt)("inlineCode",{parentName:"h2"},"let")," keyword"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let")," allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," is that the latter is initialized to a value only when a parser evaluates it (see below)."),(0,r.kt)("h2",{id:"const-keyword"},(0,r.kt)("inlineCode",{parentName:"h2"},"const")," keyword"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const")," declares a constant whose value you want to forbid overwriting. Constants are block-scoped, much like variables declared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," keyword. If a constant is an object or array its properties or items can still be updated or removed."),(0,r.kt)("h2",{id:"variables-without-a-keyword"},"Variables without a keyword"),(0,r.kt)("p",null,"Variables can also be declared without a keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"age = 21;\n")),(0,r.kt)("p",null,"When this is done, the variable is implicitly declared ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Global_variable"},"globally"),". This is bad practice and should be avoided."))}u.isMDXComponent=!0}}]);