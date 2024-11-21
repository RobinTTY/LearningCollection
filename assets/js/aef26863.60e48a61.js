"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6670],{15078:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(74848),r=o(28453);const s={id:"reactMemo",title:"React.memo",sidebar_position:4},a=void 0,c={id:"web/react/advanced-concepts/reactMemo",title:"React.memo",description:"If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.",source:"@site/docs/web/react/advanced-concepts/React.memo.md",sourceDirName:"web/react/advanced-concepts",slug:"/web/react/advanced-concepts/reactMemo",permalink:"/LearningCollection/web/react/advanced-concepts/reactMemo",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/advanced-concepts/React.memo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"reactMemo",title:"React.memo",sidebar_position:4},sidebar:"docs",previous:{title:"Portals",permalink:"/LearningCollection/web/react/advanced-concepts/portals"},next:{title:"Error Boundaries",permalink:"/LearningCollection/web/react/advanced-concepts/errorBoundaries"}},i={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Example areEqual function",id:"example-areequal-function",level:3},{value:"Caveats when using React.memo",id:"caveats-when-using-reactmemo",level:3},{value:"When to use React.memo",id:"when-to-use-reactmemo",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["If your component renders the same result given the same props, you can wrap it in a call to ",(0,t.jsx)(n.code,{children:"React.memo"})," for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"React.memo"})," only checks for prop changes. If your function component wrapped in ",(0,t.jsx)(n.code,{children:"React.memo"})," has a ",(0,t.jsx)(n.code,{children:"useState"}),", ",(0,t.jsx)(n.code,{children:"useReducer"})," or ",(0,t.jsx)(n.code,{children:"useContext"})," Hook in its implementation, it will still rerender when state or context change."]}),"\n",(0,t.jsxs)(n.p,{children:["This method only exists as a ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/optimizing-performance.html",children:"performance optimization"}),'. Do not rely on it to "prevent" a render, as this can lead to bugs.']}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default this will only shallowly compare complex objects in the props object. For more control over the comparison, you can also provide a custom comparison function as the second argument:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function MyComponent(props) {\n  /* render using props */\n}\n\nfunction areEqual(prevProps, nextProps) {\n  /*\n  return true if passing nextProps to render would return\n  the same result as passing prevProps to render,\n  otherwise return false\n  */\n}\n\nexport default React.memo(MyComponent, areEqual);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default ",(0,t.jsx)(n.code,{children:"React.memo"})," will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If we pass functions as props, ",(0,t.jsx)(n.code,{children:"React.memo"})," will not be enough to prevent unneeded re-renders. Since the function is redefined with every re-execution of the parent component, ",(0,t.jsx)(n.code,{children:"React.memo"})," will always detect a difference between the current and previous props. See ",(0,t.jsx)(n.a,{href:"#caveats-when-using-reactmemo",children:"Caveats when using React.memo"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"example-areequal-function",children:"Example areEqual function"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"areEqual"})," function may look like this (the function can be named differently of course):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function areEqual(prevMovie, nextMovie) {\n  return (\n    prevMovie.title === nextMovie.title &&\n    prevMovie.releaseDate === nextMovie.releaseDate\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"caveats-when-using-reactmemo",children:"Caveats when using React.memo"}),"\n",(0,t.jsxs)(n.p,{children:["If one of the passed props of the component to memoize is a function, the memoization will not work out of the box. This is due to the fact that the passed down function is redefined with every re-execution of the parent component. Therefore we need to preserve the function in the parent component, this allows us to properly use ",(0,t.jsx)(n.code,{children:"React.memo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The preserving of the function can be achieved via the ",(0,t.jsx)(n.code,{children:"useCallback"})," hook. For details on how to use ",(0,t.jsx)(n.code,{children:"useCallback"})," see ",(0,t.jsx)(n.a,{href:"../hooks/advanced-hooks/useCallback",children:"useCallback"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"when-to-use-reactmemo",children:"When to use React.memo"}),"\n",(0,t.jsxs)(n.p,{children:["There are no hard rules. Things, that affect ",(0,t.jsx)(n.code,{children:"React.memo"})," negatively:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["component often re-renders with props, that have changed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In this case, ",(0,t.jsx)(n.code,{children:"React.memo"})," cannot prevent a re-render, but had to do additional calculations"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["component is cheap to re-render","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Added comparison cost is not worth it for a "simple" component in terms of render, reconcile, DOM change and side-effect costs'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["comparison function is expensive to perform","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The more props, the more calculations are performed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["So in these cases ",(0,t.jsx)(n.code,{children:"React.memo"})," is not the best choice. Otherwise it might be a good idea if you want to optimize performance."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);