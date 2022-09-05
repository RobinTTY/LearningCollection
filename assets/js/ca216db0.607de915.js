"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9902],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),f=a,y=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1464:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"memVsFileStream",title:"Memory Stream vs FileStream"},s=void 0,m={unversionedId:"C-Sharp/memVsFileStream",id:"C-Sharp/memVsFileStream",title:"Memory Stream vs FileStream",description:"- Stream is a representation of bytes",source:"@site/docs/C-Sharp/MemoryStream vs FileStream.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/memVsFileStream",permalink:"/LearningCollection/C-Sharp/memVsFileStream",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/MemoryStream vs FileStream.md",tags:[],version:"current",frontMatter:{id:"memVsFileStream",title:"Memory Stream vs FileStream"},sidebar:"mySidebar",previous:{title:"Asynchronous Programming",permalink:"/LearningCollection/C-Sharp/asyncProgramming"},next:{title:"Properties vs Public variables",permalink:"/LearningCollection/C-Sharp/propsVsPublicVars"}},c={},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stream is a representation of bytes"),(0,o.kt)("li",{parentName:"ul"},"Both these classes derive from the Stream class which is abstract by definition"),(0,o.kt)("li",{parentName:"ul"},"As the name suggests, a FileStream reads and writes to a file whereas a MemoryStream reads and writes to the memory. ",(0,o.kt)("strong",{parentName:"li"},"So it relates to where the stream is stored"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Let us assume you want to read binary data from the database, you would go in for a MemoryStream"),(0,o.kt)("li",{parentName:"ul"},"However if you want to read a file on your system, you would go in for a FileStream"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"One quick advantage of a MemoryStream is that there is not need to create temporary buffers and files in an application"))))}f.isMDXComponent=!0}}]);