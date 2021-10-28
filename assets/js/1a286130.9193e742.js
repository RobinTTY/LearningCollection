"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6390],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1036:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"volatileKeyword",title:"Volatile Keyword"},c=void 0,s={unversionedId:"C-Sharp/volatileKeyword",id:"C-Sharp/volatileKeyword",isDocsHomePage:!1,title:"Volatile Keyword",description:"- the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time",source:"@site/docs/C-Sharp/volatile.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/volatileKeyword",permalink:"/LearningCollection/C-Sharp/volatileKeyword",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/volatile.md",tags:[],version:"current",frontMatter:{id:"volatileKeyword",title:"Volatile Keyword"},sidebar:"mySidebar",previous:{title:"Unmanaged vs managed resources",permalink:"/LearningCollection/C-Sharp/unmanagedVsManagedResources"},next:{title:"ES6 Modules",permalink:"/LearningCollection/Web/JavaScript/Advanced Concepts/es6-modules"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time"),(0,o.kt)("li",{parentName:"ul"},"the compiler, the runtime system, and even hardware may, by default, rearrange reads and writes to memory locations for performance reasons",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fields that are declared volatile are not subject to these optimizations")))),(0,o.kt)("li",{parentName:"ul"},"Adding the volatile modifier ensures that all threads will observe volatile writes performed by any other thread in the order in which they were performed",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There is no guarantee of a single total ordering of volatile writes as seen from all threads of execution")))),(0,o.kt)("p",null,"The volatile keyword can be applied to fields of these types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference types"),(0,o.kt)("li",{parentName:"ul"},'Pointer types (Note that although the pointer itself can be volatile, the object that it points to cannot. In other words, you cannot declare a "pointer to volatile")'),(0,o.kt)("li",{parentName:"ul"},"Simple types such as sbyte, byte, short, ushort, int, uint, char, float, and bool"),(0,o.kt)("li",{parentName:"ul"},"An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint"),(0,o.kt)("li",{parentName:"ul"},"Generic type parameters known to be reference types")))}d.isMDXComponent=!0}}]);