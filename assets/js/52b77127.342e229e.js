"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8918],{21064:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=n(74848),t=n(28453);const c={title:"Null-conditional operator (?)"},s=void 0,l={id:"csharp/core-concepts/operators/null-conditional-operator",title:"Null-conditional operator (?)",description:"- Tests the value of the left-hand operand for null before performing a member access (?.) or index (?[]) operation",source:"@site/docs/csharp/core-concepts/operators/null-conditional-operator.md",sourceDirName:"csharp/core-concepts/operators",slug:"/csharp/core-concepts/operators/null-conditional-operator",permalink:"/LearningCollection/csharp/core-concepts/operators/null-conditional-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/operators/null-conditional-operator.md",tags:[],version:"current",frontMatter:{title:"Null-conditional operator (?)"},sidebar:"docs",previous:{title:"Arrays",permalink:"/LearningCollection/csharp/core-concepts/types/arrays"},next:{title:"Null-coalescing operator (??)",permalink:"/LearningCollection/csharp/core-concepts/operators/null-coalescing-operator"}},a={},i=[];function p(e){const o={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Tests the value of the left-hand operand for null before performing a member access ",(0,r.jsx)(o.code,{children:"(?.)"})," or index ",(0,r.jsx)(o.code,{children:"(?[])"})," operation"]}),"\n",(0,r.jsx)(o.li,{children:"returns null if the left-hand operand evaluates to null"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Syntax:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-cs",children:"int? length = customers?.Length; // null if customers is null\nint? count = customers?[0]?.Orders?.Count(); // null if customers, the first customer, or Orders is null\n"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>l});var r=n(96540);const t={},c=r.createContext(t);function s(e){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(c.Provider,{value:o},e.children)}}}]);