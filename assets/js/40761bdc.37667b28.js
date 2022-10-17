"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"reactMemo",title:"React.memo",sidebar_position:4},i=void 0,c={unversionedId:"Web/React/Advanced Concepts/reactMemo",id:"Web/React/Advanced Concepts/reactMemo",title:"React.memo",description:"If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.",source:"@site/docs/Web/React/Advanced Concepts/React.memo.md",sourceDirName:"Web/React/Advanced Concepts",slug:"/Web/React/Advanced Concepts/reactMemo",permalink:"/LearningCollection/Web/React/Advanced Concepts/reactMemo",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Advanced Concepts/React.memo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"reactMemo",title:"React.memo",sidebar_position:4},sidebar:"finance",previous:{title:"Portals",permalink:"/LearningCollection/Web/React/Advanced Concepts/portals"},next:{title:"Error Boundaries",permalink:"/LearningCollection/Web/React/Advanced Concepts/errorBoundaries"}},l={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example areEqual function",id:"example-areequal-function",level:3},{value:"Caveats when using React.memo",id:"caveats-when-using-reactmemo",level:3},{value:"When to use React.memo",id:"when-to-use-reactmemo",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your component renders the same result given the same props, you can wrap it in a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," only checks for prop changes. If your function component wrapped in ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useReducer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," Hook in its implementation, it will still rerender when state or context change."),(0,a.kt)("p",null,"This method only exists as a ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/optimizing-performance.html"},"performance optimization"),'. Do not rely on it to "prevent" a render, as this can lead to bugs.'),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),(0,a.kt)("p",null,"By default this will only shallowly compare complex objects in the props object. For more control over the comparison, you can also provide a custom comparison function as the second argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  /* render using props */\n}\n\nfunction areEqual(prevProps, nextProps) {\n  /*\n  return true if passing nextProps to render would return\n  the same result as passing prevProps to render,\n  otherwise return false\n  */\n}\n\nexport default React.memo(MyComponent, areEqual);\n")),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If we pass functions as props, ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," will not be enough to prevent unneeded re-renders. Since the function is redefined with every re-execution of the parent component, ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," will always detect a difference between the current and previous props. See ",(0,a.kt)("a",{parentName:"p",href:"#caveats-when-using-reactmemo"},"Caveats when using React.memo"),".")),(0,a.kt)("h3",{id:"example-areequal-function"},"Example areEqual function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"areEqual")," function may look like this (the function can be named differently of course):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function areEqual(prevMovie, nextMovie) {\n  return (\n    prevMovie.title === nextMovie.title &&\n    prevMovie.releaseDate === nextMovie.releaseDate\n  );\n}\n")),(0,a.kt)("h3",{id:"caveats-when-using-reactmemo"},"Caveats when using React.memo"),(0,a.kt)("p",null,"If one of the passed props of the component to memoize is a function, the memoization will not work out of the box. This is due to the fact that the passed down function is redefined with every re-execution of the parent component. Therefore we need to preserve the function in the parent component, this allows us to properly use ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo"),"."),(0,a.kt)("p",null,"The preserving of the function can be achieved via the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook. For details on how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," see ",(0,a.kt)("a",{parentName:"p",href:"../Hooks/Advanced%20Hooks/useCallback"},"useCallback"),"."),(0,a.kt)("h2",{id:"when-to-use-reactmemo"},"When to use React.memo"),(0,a.kt)("p",null,"There are no hard rules. Things, that affect ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," negatively:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"component often re-renders with props, that have changed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In this case, ",(0,a.kt)("inlineCode",{parentName:"li"},"React.memo")," cannot prevent a re-render, but had to do additional calculations"))),(0,a.kt)("li",{parentName:"ul"},"component is cheap to re-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Added comparison cost is not worth it for a "simple" component in terms of render, reconcile, DOM change and side-effect costs'))),(0,a.kt)("li",{parentName:"ul"},"comparison function is expensive to perform",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The more props, the more calculations are performed")))),(0,a.kt)("p",null,"So in these cases ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," is not the best choice. Otherwise it might be a good idea if you want to optimize performance."))}m.isMDXComponent=!0}}]);