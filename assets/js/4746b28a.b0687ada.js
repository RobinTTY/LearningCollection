"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5945],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,k=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return o?n.createElement(k,l(l({ref:t},u),{},{components:o})):n.createElement(k,l({ref:t},u))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},661:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={id:"rulesOfHooks",title:"Rules of Hooks",sidebar_position:6},l=void 0,s={unversionedId:"Web/React/Hooks/rulesOfHooks",id:"Web/React/Hooks/rulesOfHooks",title:"Rules of Hooks",description:"Hooks are JavaScript functions, but you need to follow two rules when using them. The React team provides a linter plugin to enforce them automatically.",source:"@site/docs/Web/React/Hooks/Rules of Hooks.md",sourceDirName:"Web/React/Hooks",slug:"/Web/React/Hooks/rulesOfHooks",permalink:"/LearningCollection/Web/React/Hooks/rulesOfHooks",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/Rules of Hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"rulesOfHooks",title:"Rules of Hooks",sidebar_position:6},sidebar:"finance",previous:{title:"useRef",permalink:"/LearningCollection/Web/React/Hooks/useRef"},next:{title:"useImperativeHandle",permalink:"/LearningCollection/Web/React/Hooks/Advanced Hooks/useImperativeHandle"}},i={},c=[{value:"Only call hooks at the top level",id:"only-call-hooks-at-the-top-level",level:2},{value:"Only call hooks from React functions",id:"only-call-hooks-from-react-functions",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hooks are JavaScript functions, but you need to follow two rules when using them. The React team provides a ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"linter plugin")," to enforce them automatically."),(0,r.kt)("h2",{id:"only-call-hooks-at-the-top-level"},"Only call hooks at the top level"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don\u2019t call Hooks inside loops, conditions, or nested functions.")," Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That\u2019s what allows React to correctly preserve the state of Hooks between multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," calls."),(0,r.kt)("h2",{id:"only-call-hooks-from-react-functions"},"Only call hooks from React functions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don\u2019t call Hooks from regular JavaScript functions.")," Instead, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Call Hooks from React function components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-custom.html"},"Call Hooks from custom Hooks"))),(0,r.kt)("p",null,"By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code."))}f.isMDXComponent=!0}}]);