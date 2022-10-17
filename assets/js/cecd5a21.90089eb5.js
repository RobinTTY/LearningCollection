"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5252],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"json",title:"JSON",sidebar_position:4},s=void 0,i={unversionedId:"Web/JavaScript/Core Concepts/json",id:"Web/JavaScript/Core Concepts/json",title:"JSON",description:"JSON (or JavaScript Object Notation) is a text-based format for storing and transmitting structured data. It comes from the JavaScript language, but it is still considered to be language-independent: it works with almost any programming language. With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects. You can also create more complex data structures by linking arrays to each other.",source:"@site/docs/Web/JavaScript/Core Concepts/json.md",sourceDirName:"Web/JavaScript/Core Concepts",slug:"/Web/JavaScript/Core Concepts/json",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/json",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Core Concepts/json.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"json",title:"JSON",sidebar_position:4},sidebar:"finance",previous:{title:"Arithmetic Operators",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/arithmetic-operators"},next:{title:"Promise",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/promise"}},l={},c=[{value:"Basic syntax and structure",id:"basic-syntax-and-structure",level:2},{value:"Example - JSON object",id:"example---json-object",level:3},{value:"Example - Arrays",id:"example---arrays",level:3},{value:"Nested objects",id:"nested-objects",level:2},{value:"Advantages of JSON",id:"advantages-of-json",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON")," (or ",(0,r.kt)("strong",{parentName:"p"},"JavaScript Object Notation"),") is a text-based format for storing and transmitting structured data. It comes from the JavaScript language, but it is still considered to be language-independent: it works with almost any programming language. With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects. You can also create more complex data structures by linking arrays to each other."),(0,r.kt)("h2",{id:"basic-syntax-and-structure"},"Basic syntax and structure"),(0,r.kt)("p",null,"JSON text can be built on one of two structures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a collection of key:value pairs (associative array)"),(0,r.kt)("li",{parentName:"ul"},"an orderly set of values (array or list)")),(0,r.kt)("h3",{id:"example---json-object"},"Example - JSON object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}\n')),(0,r.kt)("p",null,"Keys in an object are always strings, but values can be any of seven types of values, including another object or array."),(0,r.kt)("h3",{id:"example---arrays"},"Example - Arrays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["night", "street", false, [345, 23, 8, "juice"], "fruit"];\n')),(0,r.kt)("h2",{id:"nested-objects"},"Nested objects"),(0,r.kt)("p",null,"JSON is a highly flexible format. You can nest objects inside other objects as properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "persons": [\n    {\n      "firstName": "Whitney",\n      "lastName": "Byrd",\n      "age": 20\n    },\n    {\n      "firstName": "Eugene",\n      "lastName": "Lang",\n      "age": 26\n    },\n    {\n      "firstName": "Sophie",\n      "lastName": "Goodwin",\n      "age": 34\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"If objects and arrays contain other objects or arrays, the data has a tree-like structure. The nested objects are fully independent and may have different properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "persons": [\n    {\n      "firstName": "Whitney",\n      "age": 20\n    },\n    {\n      "firstName": "Eugene",\n      "lastName": "Lang"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"But in practice, such objects often look similar."),(0,r.kt)("h2",{id:"advantages-of-json"},"Advantages of JSON"),(0,r.kt)("p",null,"JSON is widely spread for data exchange on the Internet because of its strong advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"compactness"),(0,r.kt)("li",{parentName:"ul"},"flexibility"),(0,r.kt)("li",{parentName:"ul"},"high readability, even for people far from programming"),(0,r.kt)("li",{parentName:"ul"},"most programming languages have functions and libraries for reading and creating JSON structures")),(0,r.kt)("p",null,"The JSON is a general format to pass structured data through the network because after you serialize data to JSON, you can deserialize it back without losing any information. The main advantage of JSON comparing to plain text is the ability to describe relations between objects via nesting and key-value pairs. So, it's high chances that the sites you're often visiting use JSON too. Other popular applications of JSON are data storage and configuration files for other programs."))}u.isMDXComponent=!0}}]);