"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5315],{5284:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),o=n(8453);const r={id:"partial",title:"Partial<Type>",sidebar_position:1},s=void 0,a={id:"web/typescript/utility-types/partial",title:"Partial<Type>",description:"Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.",source:"@site/docs/web/typescript/utility-types/partial.md",sourceDirName:"web/typescript/utility-types",slug:"/web/typescript/utility-types/partial",permalink:"/LearningCollection/web/typescript/utility-types/partial",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/utility-types/partial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"partial",title:"Partial<Type>",sidebar_position:1},sidebar:"docs",previous:{title:"Generics",permalink:"/LearningCollection/web/typescript/advanced-concepts/generics"},next:{title:"Readonly<Type>",permalink:"/LearningCollection/web/typescript/utility-types/readonly"}},p={},l=[];function c(t){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Constructs a type with all properties of ",(0,i.jsx)(e.code,{children:"Type"})," set to optional. This utility will return a type that represents all subsets of a given type."]}),"\n",(0,i.jsxs)(e.p,{children:["We could for example us that to support an update operation for a ",(0,i.jsx)(e.code,{children:"Todo"})," type:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'type Todo {\n  title: string;\n  description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\nconst todo1 = {\n  title: "organize desk",\n  description: "clear clutter",\n};\n\nconst todo2 = updateTodo(todo1, {\n  description: "throw out trash",\n});\n'})})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);