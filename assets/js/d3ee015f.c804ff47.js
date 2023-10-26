"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=o,f=y["".concat(p,".").concat(d)]||y[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"readonly",title:"Readonly<Type>",sidebar_position:2},a=void 0,l={unversionedId:"web/typescript/utility-types/readonly",id:"web/typescript/utility-types/readonly",title:"Readonly<Type>",description:"Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.",source:"@site/docs/web/typescript/utility-types/readonly.md",sourceDirName:"web/typescript/utility-types",slug:"/web/typescript/utility-types/readonly",permalink:"/LearningCollection/web/typescript/utility-types/readonly",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/utility-types/readonly.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"readonly",title:"Readonly<Type>",sidebar_position:2},sidebar:"finance",previous:{title:"Partial<Type>",permalink:"/LearningCollection/web/typescript/utility-types/partial"},next:{title:"Introduction",permalink:"/LearningCollection/web/typescript/decorators/introduction"}},p={},s=[],c={toc:s},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n\ntodo.title = "Hello"; // Cannot assign to \'title\' because it is a read-only property.\n')),(0,o.kt)("p",null,"This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"},"frozen object"),")."))}u.isMDXComponent=!0}}]);