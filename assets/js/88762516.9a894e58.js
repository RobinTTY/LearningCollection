"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"schedulingUpdates",title:"Scheduling Updates",sidebar_position:2},i=void 0,s={unversionedId:"Web/React/React Internals/schedulingUpdates",id:"Web/React/React Internals/schedulingUpdates",title:"Scheduling Updates",description:"Updates to things like state or context don't happen immediately. Instead, they are scheduled to be processed at a later time. Now in reality most of the time, scheduled state changes will be processed very fast, pretty much instantly. But React reserves the right of actually postponing that state change. For example, because a lot of other performance intensive tasks are going on at the same moment, potentially tasks that React considers to have a higher priority.",source:"@site/docs/Web/React/React Internals/Scheduling Updates.md",sourceDirName:"Web/React/React Internals",slug:"/Web/React/React Internals/schedulingUpdates",permalink:"/LearningCollection/Web/React/React Internals/schedulingUpdates",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/React Internals/Scheduling Updates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"schedulingUpdates",title:"Scheduling Updates",sidebar_position:2},sidebar:"finance",previous:{title:"Rendering",permalink:"/LearningCollection/Web/React/React Internals/rendering"},next:{title:"Introduction",permalink:"/LearningCollection/Web/lit/intro"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Updates to things like state or context don't happen immediately. Instead, they are scheduled to be processed at a later time. Now in reality most of the time, scheduled state changes will be processed very fast, pretty much instantly. But React reserves the right of actually postponing that state change. For example, because a lot of other performance intensive tasks are going on at the same moment, potentially tasks that React considers to have a higher priority."),(0,a.kt)("p",null,"For reasons like that, React might postpone scheduled state changes. But React guarantees you that the order of state changes for one and the same type of state is guaranteed. Going further, if we have 2 different state changes directly after each other, React will batch them together and therefore only re-execute the component once."),(0,a.kt)("p",null,"For more insights into the scheduling process, see ",(0,a.kt)("a",{parentName:"p",href:"https://philippspiess.com/scheduling-in-react/"},"Scheduling in React"),"."))}u.isMDXComponent=!0}}]);