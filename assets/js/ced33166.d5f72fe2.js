"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"rendering",title:"Rendering",sidebar_position:1},i=void 0,l={unversionedId:"web/react/react-internals/rendering",id:"web/react/react-internals/rendering",title:"Rendering",description:"React is comprised of two main libraries, react and react-dom. The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.",source:"@site/docs/web/react/react-internals/Rendering.md",sourceDirName:"web/react/react-internals",slug:"/web/react/react-internals/rendering",permalink:"/LearningCollection/web/react/react-internals/rendering",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/react-internals/Rendering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"rendering",title:"Rendering",sidebar_position:1},sidebar:"docs",previous:{title:"Custom Hooks",permalink:"/LearningCollection/web/react/hooks/advanced-hooks/customHooks"},next:{title:"Scheduling Updates",permalink:"/LearningCollection/web/react/react-internals/schedulingUpdates"}},c={},s=[{value:"react-dom",id:"react-dom",level:2},{value:"Updates to the DOM",id:"updates-to-the-dom",level:3},{value:"Example of a re-render",id:"example-of-a-re-render",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React is comprised of two main libraries, ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"react")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-dom"},"react-dom"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," package contains only the functionality necessary to define React components. It is typically used together with a React renderer like ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," for the web, or ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," for the native environments."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(733).Z,width:"971",height:"691"})),(0,a.kt)("p",null,"In summary, while ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," handles the creation of components, renderers handle the displaying."),(0,a.kt)("h2",{id:"react-dom"},"react-dom"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," determines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"how the component tree currently looks like and"),(0,a.kt)("li",{parentName:"ul"},"what it should look like (e.g. when data changes)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," receives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the differences (the required changes) and"),(0,a.kt)("li",{parentName:"ul"},"manipulates the real DOM as a consequence")),(0,a.kt)("h3",{id:"updates-to-the-dom"},"Updates to the DOM"),(0,a.kt)("p",null,"The re-execution of a component function doesn't mean that the DOM is re-rendered. Components are re-evaluated whenever props, state or context changes. React uses the virtual DOM as a representation of the actual DOM. React computes the necessary changes by using an in-memory version of the DOM, and rerenders the minimal amount necessary."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(5589).Z,width:"954",height:"766"})),(0,a.kt)("h3",{id:"example-of-a-re-render"},"Example of a re-render"),(0,a.kt)("p",null,"Let's assume the current state of the DOM looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>Hello World</h1>\n</div>\n")),(0,a.kt)("p",null,"Now assume that after a new evaluation the DOM should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},"<div>\n  <h1>Hello World</h1>\n  <p>This is a paragraph</p>\n</div>\n")),(0,a.kt)("p",null,"The only required change is to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>")," element. React will compute the difference between the two DOM trees and will only add the new ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>")," element."))}u.isMDXComponent=!0},733:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Architecture-b049c3e3c9764db97490e25e685ce7c5.svg"},5589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rerender-6a6d43fa1b641c660adabb8857d38090.png"}}]);