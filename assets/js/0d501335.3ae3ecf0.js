"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6011],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(c,".").concat(y)]||f[y]||p[y]||o;return r?n.createElement(m,i(i({ref:e},s),{},{components:r})):n.createElement(m,i({ref:e},s))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6888:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={id:"taskFactoryStartNew",title:"Task.Factory.StartNew()"},c=void 0,l={unversionedId:"C-Sharp/taskFactoryStartNew",id:"C-Sharp/taskFactoryStartNew",title:"Task.Factory.StartNew()",description:"- gives you the opportunity to define a lot of useful things about the thread you want to create, while Task.Run doesn't provide this",source:"@site/docs/C-Sharp/Task.Factory.StartNew.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/taskFactoryStartNew",permalink:"/LearningCollection/C-Sharp/taskFactoryStartNew",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Task.Factory.StartNew.md",tags:[],version:"current",frontMatter:{id:"taskFactoryStartNew",title:"Task.Factory.StartNew()"},sidebar:"mySidebar",previous:{title:"Serialization",permalink:"/LearningCollection/C-Sharp/serialization"},next:{title:"Thread vs Task",permalink:"/LearningCollection/C-Sharp/threadVsTask"}},s={},p=[],f={toc:p};function y(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gives you the opportunity to define a lot of useful things about the thread you want to create, while Task.Run doesn't provide this"),(0,o.kt)("li",{parentName:"ul"},"you can attach options to a task for instance:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Task.Factory.StartNew(..., TaskCreationOptions.LongRunning);"))),(0,o.kt)("li",{parentName:"ul"},"Task.Run method in no way obsoletes Task.Factory.StartNew, but rather should simply be thought of as a quick way to use Task.Factory.StartNew without needing to specify a bunch of parameters"),(0,o.kt)("li",{parentName:"ul"},"It\u2019s a shortcut. In fact, Task.Run is actually implemented in terms of the same logic used for Task.Factory.StartNew, just passing in some default parameters"),(0,o.kt)("li",{parentName:"ul"},"When you pass an Action to Task.Run:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Task.Run(someAction);"))),(0,o.kt)("li",{parentName:"ul"},"that\u2019s exactly equivalent to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Task.Factory.StartNew(someAction, CancellationToken.None, TaskCreationOptions.DenyChildAttach, TaskScheduler.Default);")))))}y.isMDXComponent=!0}}]);