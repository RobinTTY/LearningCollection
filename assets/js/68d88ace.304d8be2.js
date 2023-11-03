"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Range Operator (..)"},l=void 0,i={unversionedId:"csharp/core-concepts/operators/range-operator",id:"csharp/core-concepts/operators/range-operator",title:"Range Operator (..)",description:"The .. operator specifies the start and end of a range of indices as its operands. The range operator is used to specify the start and end of a range for a sequence.",source:"@site/docs/csharp/core-concepts/operators/range-operator.md",sourceDirName:"csharp/core-concepts/operators",slug:"/csharp/core-concepts/operators/range-operator",permalink:"/LearningCollection/csharp/core-concepts/operators/range-operator",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/operators/range-operator.md",tags:[],version:"current",frontMatter:{title:"Range Operator (..)"},sidebar:"docs",previous:{title:"Null-coalescing operator (??)",permalink:"/LearningCollection/csharp/core-concepts/operators/null-coalescing-operator"},next:{title:"IEnumerable",permalink:"/LearningCollection/csharp/core-concepts/interfaces/ienumerable"}},p={},s=[],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"..")," operator specifies the start and end of a range of indices as its operands. The range operator is used to specify the start and end of a range for a sequence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var people = new string[] { "Jane", "Jean", "Grey", "Marcus", "Theophilus", "Keje" };\nvar all = people[..];           // contains all elements\nvar firstFour = people[..4];    // contains the first four elements\nvar lastTwo = people[4..];      // contains "Theophilus" and "Keje"\n')),(0,a.kt)("p",null,"The following table shows various ways to express collection ranges:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Range operator expression"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"..")),(0,a.kt)("td",{parentName:"tr",align:null},"All values in the collection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"..end")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," to the ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," exclusively.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start..")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," to the ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," inclusively.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start..end")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," inclusively to the ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," exclusively.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"^start..")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," inclusively to the end counting from the ",(0,a.kt)("inlineCode",{parentName:"td"},"end"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"..^end")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," to the end exclusively counting from the ",(0,a.kt)("inlineCode",{parentName:"td"},"end"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"start..^end")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," inclusively to ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," exclusively counting from the end.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"^start..^end")),(0,a.kt)("td",{parentName:"tr",align:null},"Values from ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," inclusively to ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," exclusively both counting from the end.")))),(0,a.kt)("p",null,"The following example demonstrates the effect of using all the ranges presented in the preceding table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'int[] oneThroughTen = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\n\nWrite(oneThroughTen, ..);\nWrite(oneThroughTen, ..3);\nWrite(oneThroughTen, 2..);\nWrite(oneThroughTen, 3..5);\nWrite(oneThroughTen, ^2..);\nWrite(oneThroughTen, ..^3);\nWrite(oneThroughTen, 3..^4);\nWrite(oneThroughTen, ^4..^2);\n\nstatic void Write(int[] values, Range range) =>\n    Console.WriteLine($"{range}:\\t{string.Join(", ", values[range])}");\n// Sample output:\n//      0..^0:      1, 2, 3, 4, 5, 6, 7, 8, 9, 10\n//      0..3:       1, 2, 3\n//      2..^0:      3, 4, 5, 6, 7, 8, 9, 10\n//      3..5:       4, 5\n//      ^2..^0:     9, 10\n//      0..^3:      1, 2, 3, 4, 5, 6, 7\n//      3..^4:      4, 5, 6\n//      ^4..^2:     7, 8\n')))}u.isMDXComponent=!0}}]);