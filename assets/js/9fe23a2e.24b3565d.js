"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"dlls",title:"Dynamic Link Library (DLL)"},o=void 0,l={unversionedId:"General Concepts/dlls",id:"General Concepts/dlls",title:"Dynamic Link Library (DLL)",description:"- collection of code and/or data, which may be used by several applications",source:"@site/docs/General Concepts/Dynamic Link Library (DLL).md",sourceDirName:"General Concepts",slug:"/General Concepts/dlls",permalink:"/LearningCollection/General Concepts/dlls",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/Dynamic Link Library (DLL).md",tags:[],version:"current",frontMatter:{id:"dlls",title:"Dynamic Link Library (DLL)"},sidebar:"finance",previous:{title:"Dependency Injection",permalink:"/LearningCollection/General Concepts/dependencyInjection"},next:{title:"Remote Procedure Call (RPC)",permalink:"/LearningCollection/General Concepts/rpc"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"collection of code and/or data, which may be used by several applications"),(0,r.kt)("li",{parentName:"ul"},"for instance common methods to process files, work with GUI components etc. are made available in libraries so several applications may use the same functionality"),(0,r.kt)("li",{parentName:"ul"},"This not only reduces the need to build the same stuff multiple times, but it also ensures that e.g. common dialogs are the same between applications"),(0,r.kt)("li",{parentName:"ul"},"The library can be loaded on-demand. Instead of loading a mammoth single EXE into memory, the OS can load only the portions needed. Plus if a DLL is shared between applications, the OS can optimize how the library is loaded and share it between apps. This is called dynamic linking"),(0,r.kt)("li",{parentName:"ul"},"In some cases the library can be included within the application itself. This is known as static linking. Static linking makes deployment easier at the cost of flexibility as different application will each load the same copy of the DLL."),(0,r.kt)("li",{parentName:"ul"},"However, static linking is not always an option. E.g. you can't statically link a .NET application. The user must have the .NET libraries in order to run a .NET application and libraries (or assemblies as they are called in .NET) are loaded at runtime"),(0,r.kt)("li",{parentName:"ul"},"DLLs are created by the same tools used to create applications. The specific details depend very much on the tools used"),(0,r.kt)("li",{parentName:"ul"},'"Link": You can link the library to an application so that the logic in the library is not compiled directly into the application.')))}u.isMDXComponent=!0}}]);