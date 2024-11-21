"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7082],{91683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(74848),o=n(28453);const r={id:"readonly",title:"Readonly<Type>",sidebar_position:2},s=void 0,a={id:"web/typescript/utility-types/readonly",title:"Readonly<Type>",description:"Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.",source:"@site/docs/web/typescript/utility-types/readonly.md",sourceDirName:"web/typescript/utility-types",slug:"/web/typescript/utility-types/readonly",permalink:"/LearningCollection/web/typescript/utility-types/readonly",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/utility-types/readonly.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"readonly",title:"Readonly<Type>",sidebar_position:2},sidebar:"docs",previous:{title:"Partial<Type>",permalink:"/LearningCollection/web/typescript/utility-types/partial"},next:{title:"Introduction",permalink:"/LearningCollection/web/typescript/decorators/introduction"}},l={},p=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned."}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'interface Todo {\n  title: string;\n}\n\nconst todo: Readonly<Todo> = {\n  title: "Delete inactive users",\n};\n\ntodo.title = "Hello"; // Cannot assign to \'title\' because it is a read-only property.\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",children:"frozen object"}),")."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);