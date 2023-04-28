"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"volatileKeyword",title:"Volatile Keyword",sidebar_position:3},i=void 0,l={unversionedId:"C-Sharp/Advanced Concepts/volatileKeyword",id:"C-Sharp/Advanced Concepts/volatileKeyword",title:"Volatile Keyword",description:"- the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time",source:"@site/docs/C-Sharp/Advanced Concepts/Volatile.md",sourceDirName:"C-Sharp/Advanced Concepts",slug:"/C-Sharp/Advanced Concepts/volatileKeyword",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/volatileKeyword",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Advanced Concepts/Volatile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"volatileKeyword",title:"Volatile Keyword",sidebar_position:3},sidebar:"finance",previous:{title:"Attributes",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/attributes"},next:{title:"Unmanaged vs managed resources",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/unmanagedVsManagedResources"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time"),(0,a.kt)("li",{parentName:"ul"},"the compiler, the runtime system, and even hardware may, by default, rearrange reads and writes to memory locations for performance reasons",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fields that are declared volatile are not subject to these optimizations")))),(0,a.kt)("li",{parentName:"ul"},"Adding the volatile modifier ensures that all threads will observe volatile writes performed by any other thread in the order in which they were performed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There is no guarantee of a single total ordering of volatile writes as seen from all threads of execution")))),(0,a.kt)("p",null,"The volatile keyword can be applied to fields of these types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reference types"),(0,a.kt)("li",{parentName:"ul"},'Pointer types (Note that although the pointer itself can be volatile, the object that it points to cannot. In other words, you cannot declare a "pointer to volatile")'),(0,a.kt)("li",{parentName:"ul"},"Simple types such as sbyte, byte, short, ushort, int, uint, char, float, and bool"),(0,a.kt)("li",{parentName:"ul"},"An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint"),(0,a.kt)("li",{parentName:"ul"},"Generic type parameters known to be reference types")))}u.isMDXComponent=!0}}]);