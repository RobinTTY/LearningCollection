"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8190],{38088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(74848),i=n(28453);const r={id:"volatileKeyword",title:"Volatile Keyword",sidebar_position:3},a=void 0,s={id:"csharp/advanced-concepts/volatileKeyword",title:"Volatile Keyword",description:"- the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time",source:"@site/docs/csharp/advanced-concepts/volatile.md",sourceDirName:"csharp/advanced-concepts",slug:"/csharp/advanced-concepts/volatileKeyword",permalink:"/LearningCollection/csharp/advanced-concepts/volatileKeyword",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/advanced-concepts/volatile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"volatileKeyword",title:"Volatile Keyword",sidebar_position:3},sidebar:"docs",previous:{title:"Attributes",permalink:"/LearningCollection/csharp/advanced-concepts/attributes"},next:{title:"Unmanaged vs managed resources",permalink:"/LearningCollection/csharp/advanced-concepts/unmanagedVsManagedResources"}},l={},c=[];function d(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time"}),"\n",(0,o.jsxs)(t.li,{children:["the compiler, the runtime system, and even hardware may, by default, rearrange reads and writes to memory locations for performance reasons","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Fields that are declared volatile are not subject to these optimizations"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Adding the volatile modifier ensures that all threads will observe volatile writes performed by any other thread in the order in which they were performed","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"There is no guarantee of a single total ordering of volatile writes as seen from all threads of execution"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The volatile keyword can be applied to fields of these types:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Reference types"}),"\n",(0,o.jsx)(t.li,{children:'Pointer types (Note that although the pointer itself can be volatile, the object that it points to cannot. In other words, you cannot declare a "pointer to volatile")'}),"\n",(0,o.jsx)(t.li,{children:"Simple types such as sbyte, byte, short, ushort, int, uint, char, float, and bool"}),"\n",(0,o.jsx)(t.li,{children:"An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint"}),"\n",(0,o.jsx)(t.li,{children:"Generic type parameters known to be reference types"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);