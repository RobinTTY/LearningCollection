"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={id:"customHooks",title:"Custom Hooks",sidebar_position:4},s=void 0,c={unversionedId:"web/react/hooks/advanced-hooks/customHooks",id:"web/react/hooks/advanced-hooks/customHooks",title:"Custom Hooks",description:"A custom Hook is a JavaScript function whose name starts with \u201duse\u201d and that may call other Hooks.",source:"@site/docs/web/react/hooks/advanced-hooks/Custom Hooks.md",sourceDirName:"web/react/hooks/advanced-hooks",slug:"/web/react/hooks/advanced-hooks/customHooks",permalink:"/LearningCollection/web/react/hooks/advanced-hooks/customHooks",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/hooks/advanced-hooks/Custom Hooks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"customHooks",title:"Custom Hooks",sidebar_position:4},sidebar:"finance",previous:{title:"useMemo",permalink:"/LearningCollection/web/react/hooks/advanced-hooks/useMemo"},next:{title:"Rendering",permalink:"/LearningCollection/web/react/react-internals/rendering"}},u={},i=[{value:"Example",id:"example",level:2}],l={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A custom Hook is a JavaScript function whose name starts with \u201duse\u201d and that may call other Hooks.\nBuilding your own Hooks lets you extract component logic into reusable functions.\n",(0,o.kt)("strong",{parentName:"p"},"When you have component logic that needs to be used by multiple components and uses Hooks, we can extract that logic to a custom Hook.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Imagine we have a component ",(0,o.kt)("inlineCode",{parentName:"p"},"ForwardCounter.js")," which displays a counter which slowly counts up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ForwardCounter.js"',title:'"ForwardCounter.js"'},'import { useState, useEffect } from "react";\n\nimport Card from "./Card";\n\nconst ForwardCounter = () => {\n  const [counter, setCounter] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCounter((prevCounter) => prevCounter + 1);\n    }, 1000);\n\n    return () => clearInterval(interval);\n  }, []);\n\n  return <Card>{counter}</Card>;\n};\n\nexport default ForwardCounter;\n')),(0,o.kt)("p",null,"Now imagine we need basically the exact same logic in our component ",(0,o.kt)("inlineCode",{parentName:"p"},"BackwardCounter.js")," that does the same thing only that it decrements the counter. Instead of duplicating the code, we can extract it to a custom Hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="useCounter.js"',title:'"useCounter.js"'},'import { useState, useEffect } from "react";\n\nconst useCounter = (forwards = true) => {\n  const [counter, setCounter] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      if (forwards) {\n        setCounter((prevCounter) => prevCounter + 1);\n      } else {\n        setCounter((prevCounter) => prevCounter - 1);\n      }\n    }, 1000);\n\n    return () => clearInterval(interval);\n  }, [forwards]);\n\n  return counter;\n};\n\nexport default useCounter;\n')),(0,o.kt)("p",null,"Now we can use the hook in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForwardCounter.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BackwardCounter.js")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ForwardCounter.js"',title:'"ForwardCounter.js"'},'import Card from "./Card";\nimport useCounter from "../hooks/use-counter";\n\nconst ForwardCounter = () => {\n  const counter = useCounter();\n\n  return <Card>{counter}</Card>;\n};\n\nexport default ForwardCounter;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BackwardCounter.js"',title:'"BackwardCounter.js"'},'import Card from "./Card";\nimport useCounter from "../hooks/use-counter";\n\nconst BackwardCounter = () => {\n  const counter = useCounter(false);\n\n  return <Card>{counter}</Card>;\n};\n\nexport default BackwardCounter;\n')))}d.isMDXComponent=!0}}]);