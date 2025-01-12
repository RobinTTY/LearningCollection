"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1140],{74094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(74848),s=t(28453);const r={id:"json",title:"JSON",sidebar_position:4},i=void 0,o={id:"web/javascript/core-concepts/json",title:"JSON",description:"JSON (or JavaScript Object Notation) is a text-based format for storing and transmitting structured data. It comes from the JavaScript language, but it is still considered to be language-independent: it works with almost any programming language. With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects. You can also create more complex data structures by linking arrays to each other.",source:"@site/docs/web/javascript/core-concepts/json.md",sourceDirName:"web/javascript/core-concepts",slug:"/web/javascript/core-concepts/json",permalink:"/LearningCollection/web/javascript/core-concepts/json",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/javascript/core-concepts/json.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"json",title:"JSON",sidebar_position:4},sidebar:"docs",previous:{title:"Arithmetic Operators",permalink:"/LearningCollection/web/javascript/core-concepts/arithmetic-operators"},next:{title:"Promise",permalink:"/LearningCollection/web/javascript/core-concepts/promise"}},c={},l=[{value:"Basic syntax and structure",id:"basic-syntax-and-structure",level:2},{value:"Example - JSON object",id:"example---json-object",level:3},{value:"Example - Arrays",id:"example---arrays",level:3},{value:"Nested objects",id:"nested-objects",level:2},{value:"Advantages of JSON",id:"advantages-of-json",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"JSON"})," (or ",(0,a.jsx)(n.strong,{children:"JavaScript Object Notation"}),") is a text-based format for storing and transmitting structured data. It comes from the JavaScript language, but it is still considered to be language-independent: it works with almost any programming language. With JSON's lightweight syntax, you can easily store and send to other apps everything from numbers and strings to arrays and objects. You can also create more complex data structures by linking arrays to each other."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-syntax-and-structure",children:"Basic syntax and structure"}),"\n",(0,a.jsx)(n.p,{children:"JSON text can be built on one of two structures:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["a collection of key",":value"," pairs (associative array)"]}),"\n",(0,a.jsx)(n.li,{children:"an orderly set of values (array or list)"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example---json-object",children:"Example - JSON object"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Keys in an object are always strings, but values can be any of seven types of values, including another object or array."}),"\n",(0,a.jsx)(n.h3,{id:"example---arrays",children:"Example - Arrays"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'["night", "street", false, [345, 23, 8, "juice"], "fruit"];\n'})}),"\n",(0,a.jsx)(n.h2,{id:"nested-objects",children:"Nested objects"}),"\n",(0,a.jsx)(n.p,{children:"JSON is a highly flexible format. You can nest objects inside other objects as properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "persons": [\n    {\n      "firstName": "Whitney",\n      "lastName": "Byrd",\n      "age": 20\n    },\n    {\n      "firstName": "Eugene",\n      "lastName": "Lang",\n      "age": 26\n    },\n    {\n      "firstName": "Sophie",\n      "lastName": "Goodwin",\n      "age": 34\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"If objects and arrays contain other objects or arrays, the data has a tree-like structure. The nested objects are fully independent and may have different properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "persons": [\n    {\n      "firstName": "Whitney",\n      "age": 20\n    },\n    {\n      "firstName": "Eugene",\n      "lastName": "Lang"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"But in practice, such objects often look similar."}),"\n",(0,a.jsx)(n.h2,{id:"advantages-of-json",children:"Advantages of JSON"}),"\n",(0,a.jsx)(n.p,{children:"JSON is widely spread for data exchange on the Internet because of its strong advantages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"compactness"}),"\n",(0,a.jsx)(n.li,{children:"flexibility"}),"\n",(0,a.jsx)(n.li,{children:"high readability, even for people far from programming"}),"\n",(0,a.jsx)(n.li,{children:"most programming languages have functions and libraries for reading and creating JSON structures"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The JSON is a general format to pass structured data through the network because after you serialize data to JSON, you can deserialize it back without losing any information. The main advantage of JSON comparing to plain text is the ability to describe relations between objects via nesting and key-value pairs. So, it's high chances that the sites you're often visiting use JSON too. Other popular applications of JSON are data storage and configuration files for other programs."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);