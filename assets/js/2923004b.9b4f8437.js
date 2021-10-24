"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6655:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"useMemo",title:"useMemo",sidebar_position:3},c=void 0,l={unversionedId:"Web/React/Hooks/Advanced Hooks/useMemo",id:"Web/React/Hooks/Advanced Hooks/useMemo",isDocsHomePage:!1,title:"useMemo",description:"The useMemo hook allows us to avoid heavy calculations. It memoizes a calculation result between a function's calls and between renders. While useCallback memoizes functions, useMemo memoizes any computed value.",source:"@site/docs/Web/React/Hooks/Advanced Hooks/useMemo.md",sourceDirName:"Web/React/Hooks/Advanced Hooks",slug:"/Web/React/Hooks/Advanced Hooks/useMemo",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useMemo",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/Advanced Hooks/useMemo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"useMemo",title:"useMemo",sidebar_position:3},sidebar:"mySidebar",previous:{title:"useCallback",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useCallback"},next:{title:"Rendering",permalink:"/LearningCollection/Web/React/React Internals/rendering"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"When to use useMemo",id:"when-to-use-usememo",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," hook allows us to avoid heavy calculations. It memoizes a calculation result between a function's calls and between renders. While ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," memoizes functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," memoizes any computed value."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,r.kt)("p",null,"The parameters of ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," are a 'create' function and an array of dependencies. ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no array is provided, a new value will be computed on every render."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose to "forget" some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without ',(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," \u2014 and then add it to optimize performance"))),(0,r.kt)("h2",{id:"when-to-use-usememo"},"When to use useMemo"),(0,r.kt)("p",null,"You will want to memorize data if it would be performance-intensive to recalculate something based on it. Otherwise it might not really be worth it because you always have to store data with ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),", this storing functionality also takes up some performance. So we shouldn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," for every value but for instance if we do some resource intensive sorting, etc."))}d.isMDXComponent=!0}}]);