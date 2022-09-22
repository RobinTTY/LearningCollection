"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1047],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6655:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={id:"useMemo",title:"useMemo",sidebar_position:3},i=void 0,s={unversionedId:"Web/React/Hooks/Advanced Hooks/useMemo",id:"Web/React/Hooks/Advanced Hooks/useMemo",title:"useMemo",description:"The useMemo hook allows us to avoid heavy calculations. It memoizes a calculation result between a function's calls and between renders. While useCallback memoizes functions, useMemo memoizes any computed value.",source:"@site/docs/Web/React/Hooks/Advanced Hooks/useMemo.md",sourceDirName:"Web/React/Hooks/Advanced Hooks",slug:"/Web/React/Hooks/Advanced Hooks/useMemo",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useMemo",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/Advanced Hooks/useMemo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"useMemo",title:"useMemo",sidebar_position:3},sidebar:"mySidebar",previous:{title:"useCallback",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useCallback"},next:{title:"Custom Hooks",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/customHooks"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"When to use useMemo",id:"when-to-use-usememo",level:2}],u={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," hook allows us to avoid heavy calculations. It memoizes a calculation result between a function's calls and between renders. While ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," memoizes functions, ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," memoizes any computed value."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,a.kt)("p",null,"The parameters of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," are a 'create' function and an array of dependencies. ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no array is provided, a new value will be computed on every render."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},'You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose to "forget" some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without ',(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," \u2014 and then add it to optimize performance")),(0,a.kt)("h2",{id:"when-to-use-usememo"},"When to use useMemo"),(0,a.kt)("p",null,"You will want to memorize data if it would be performance-intensive to recalculate something based on it. Otherwise it might not really be worth it because you always have to store data with ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo"),", this storing functionality also takes up some performance. So we shouldn't use ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," for every value but for instance if we do some resource intensive sorting, etc."))}m.isMDXComponent=!0}}]);