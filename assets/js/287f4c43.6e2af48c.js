"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={id:"useCallback",title:"useCallback",sidebar_position:2},s=void 0,l={unversionedId:"Web/React/Hooks/Advanced Hooks/useCallback",id:"Web/React/Hooks/Advanced Hooks/useCallback",title:"useCallback",description:"The useCallback hook basically allows us to store a function across component executions. This allows us to avoid the re-creation of the function every time a component is re-executed. The return value of useCallback is a memoized callback (with it we can reuse the same function across executions).",source:"@site/docs/Web/React/Hooks/Advanced Hooks/useCallback.md",sourceDirName:"Web/React/Hooks/Advanced Hooks",slug:"/Web/React/Hooks/Advanced Hooks/useCallback",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useCallback",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/Advanced Hooks/useCallback.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"useCallback",title:"useCallback",sidebar_position:2},sidebar:"mySidebar",previous:{title:"useImperativeHandle",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useImperativeHandle"},next:{title:"useMemo",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useMemo"}},u={},d=[{value:"Syntax",id:"syntax",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," hook basically allows us to store a function across component executions. This allows us to avoid the re-creation of the function every time a component is re-executed. The return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},"memoized")," callback (with it we can reuse the same function across executions)."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// we wrap the function we want to memoize inside useCallback\nconst memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n")),(0,r.kt)("p",null,"A new function instance will only be generated if any value of the variables inside the dependency array changes between re-renders. If nothing changes, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," will just return the cached version of the function instance."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The array of dependencies is not passed as arguments to the callback. Conceptually, though, that\u2019s what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically."))))}m.isMDXComponent=!0}}]);