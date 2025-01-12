"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2984],{97636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(74848),i=t(28453);const r={title:"Inserting Data"},s=void 0,o={id:"csharp/entity-framework/querying-data/inserting-data",title:"Inserting Data",description:"The key methods for adding/inserting entities via the DbContext are Add and AddRange.",source:"@site/docs/csharp/entity-framework/querying-data/inserting-data.md",sourceDirName:"csharp/entity-framework/querying-data",slug:"/csharp/entity-framework/querying-data/inserting-data",permalink:"/LearningCollection/csharp/entity-framework/querying-data/inserting-data",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/querying-data/inserting-data.md",tags:[],version:"current",frontMatter:{title:"Inserting Data"},sidebar:"docs",previous:{title:"Tracking Behavior",permalink:"/LearningCollection/csharp/entity-framework/querying-data/tracking-behavior"},next:{title:"Updating Data",permalink:"/LearningCollection/csharp/entity-framework/querying-data/updating-data"}},d={},c=[{value:"Batch Inserting",id:"batch-inserting",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The key methods for adding/inserting entities via the DbContext are ",(0,a.jsx)(n.code,{children:"Add"})," and ",(0,a.jsx)(n.code,{children:"AddRange"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"inserting-data",src:t(52408).A+"",width:"1713",height:"934"})}),"\n",(0,a.jsx)(n.p,{children:"When an entry is added like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'var author = new Author{ FirstName = "William", LastName = "Shakespeare" };\ncontext.Add<Author>(author);\ncontext.SaveChanges();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Author.Id"})," will automatically be updated with the id generated by the db."]}),"\n",(0,a.jsx)(n.h2,{id:"batch-inserting",children:"Batch Inserting"}),"\n",(0,a.jsxs)(n.p,{children:["We can also add multiple entities at once using ",(0,a.jsx)(n.code,{children:"AddRange"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'context.Authors.AddRange(\n  new Author{ FirstName = "William", LastName = "Shakespeare" },\n  new Author{ FirstName = "Sofia", LastName = "Segovia" },\n  new Author{ FirstName = "Hugh", LastName = "Howey" },\n)\ncontext.SaveChanges();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Performance wise this doesn't change anything from calling ",(0,a.jsx)(n.code,{children:"Add"})," multiple times as long as we only call ",(0,a.jsx)(n.code,{children:"SaveChanges"})," once at the end. For high performance inserts ",(0,a.jsx)(n.a,{href:"https://github.com/borisdj/EFCore.BulkExtensions",children:"EFCore.BulkExtensions"})," is currently the way to go."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},52408:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/inserting-data-71427a47970d8ebdd60abaadcabbfd68.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);