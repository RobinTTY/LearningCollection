"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4989],{53817:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(74848),o=s(28453);const r={title:"Enums"},c=void 0,a={id:"csharp/core-concepts/types/enums",title:"Enums",description:"An Enum type defines a set of constant values. The following enum declares constants that define different root vegetables:",source:"@site/docs/csharp/core-concepts/types/enums.md",sourceDirName:"csharp/core-concepts/types",slug:"/csharp/core-concepts/types/enums",permalink:"/LearningCollection/csharp/core-concepts/types/enums",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/types/enums.md",tags:[],version:"current",frontMatter:{title:"Enums"},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/csharp/core-concepts/types/introduction"},next:{title:"Tuples",permalink:"/LearningCollection/csharp/core-concepts/types/tuples"}},i={},l=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.code,{children:"Enum"})," type defines a set of constant values. The following ",(0,t.jsx)(n.code,{children:"enum"})," declares constants that define different root vegetables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public enum SomeRootVegetable\n{\n    HorseRadish,\n    Radish,\n    Turnip\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also define an ",(0,t.jsx)(n.code,{children:"enum"})," to be used in combination as flags. The following declaration declares a set of flags for the four seasons. Any combination of the seasons may be applied, including an ",(0,t.jsx)(n.code,{children:"All"})," value that includes all seasons:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"[Flags]\npublic enum Seasons\n{\n    None = 0,\n    Summer = 1,\n    Autumn = 2,\n    Winter = 4,\n    Spring = 8,\n    All = Summer | Autumn | Winter | Spring\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following example shows declarations of both the preceding enums:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"var turnip = SomeRootVegetable.Turnip;\nvar spring = Seasons.Spring;\nvar startingOnEquinox = Seasons.Spring | Seasons.Autumn;\nvar theYear = Seasons.All;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);