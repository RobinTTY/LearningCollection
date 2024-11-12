"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6467],{1927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(4848),i=n(8453);const r={title:"Migrations"},o=void 0,s={id:"csharp/entity-framework/migrations",title:"Migrations",description:"In real world projects, data models change as features get implemented: new entities or properties are added and removed, and database schemas need to be changed accordingly to be kept in sync with the application. The migrations feature in EF Core provides a way to incrementally update the database schema to keep it in sync with the application's data model while preserving existing data in the database.",source:"@site/docs/csharp/entity-framework/migrations.md",sourceDirName:"csharp/entity-framework",slug:"/csharp/entity-framework/migrations",permalink:"/LearningCollection/csharp/entity-framework/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/migrations.md",tags:[],version:"current",frontMatter:{title:"Migrations"},sidebar:"docs",previous:{title:"DbContext",permalink:"/LearningCollection/csharp/entity-framework/db-context"},next:{title:"Overview",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/overview"}},d={},c=[{value:"Important commands",id:"important-commands",level:2},{value:"Data seeding",id:"data-seeding",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In real world projects, data models change as features get implemented: new entities or properties are added and removed, and database schemas need to be changed accordingly to be kept in sync with the application. The migrations feature in EF Core provides a way to incrementally update the database schema to keep it in sync with the application's data model while preserving existing data in the database."}),"\n",(0,a.jsx)(t.p,{children:"At a high level, migrations function in the following way:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"When a data model change is introduced, the developer uses EF Core tools to add a corresponding migration describing the updates necessary to keep the database schema in sync. EF Core compares the current model against a snapshot of the old model to determine the differences, and generates migration source files; the files can be tracked in your project's source control like any other source file."}),"\n",(0,a.jsx)(t.li,{children:"Once a new migration has been generated, it can be applied to a database in various ways. EF Core records all applied migrations in a special history table, allowing it to know which migrations have been applied and which haven't."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"migration-workflow",src:n(7492).A+"",width:"1819",height:"985"})}),"\n",(0,a.jsx)(t.h2,{id:"important-commands",children:"Important commands"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dotnet ef migrations add \\<migration-name\\>\r\ndotnet ef migrations remove\r\ndotnet ef database update\n"})}),"\n",(0,a.jsx)(t.h2,{id:"data-seeding",children:"Data seeding"}),"\n",(0,a.jsxs)(t.p,{children:["See: ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/data-seeding",children:"Microsoft Docs"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7492:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/migration-workflow-b289a6fb785c8ae93208c4d70c40a0b6.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(6540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);