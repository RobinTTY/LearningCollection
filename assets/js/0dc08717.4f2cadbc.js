"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9489],{12351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(74848),r=n(28453);const i={title:"Deleting Data"},o=void 0,s={id:"csharp/entity-framework/querying-data/deleting-data",title:"Deleting Data",description:"To remove an entity from the database we can do the following:",source:"@site/docs/csharp/entity-framework/querying-data/deleting-data.md",sourceDirName:"csharp/entity-framework/querying-data",slug:"/csharp/entity-framework/querying-data/deleting-data",permalink:"/LearningCollection/csharp/entity-framework/querying-data/deleting-data",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/querying-data/deleting-data.md",tags:[],version:"current",frontMatter:{title:"Deleting Data"},sidebar:"docs",previous:{title:"Updating Data",permalink:"/LearningCollection/csharp/entity-framework/querying-data/updating-data"},next:{title:"Integration Testing",permalink:"/LearningCollection/csharp/entity-framework/testing/integration-testing"}},l={},c=[{value:"Efficient deleting with <code>ExecuteDelete</code>",id:"efficient-deleting-with-executedelete",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"To remove an entity from the database we can do the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"var authorToDelete = _context.Authors.Find(1);\nif (authorToDelete != null)\n{\n  _context.Authors.Remove(authorToDelete);\n  _context.SaveChanges();\n}\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"efficient-deleting-with-executedelete",children:["Efficient deleting with ",(0,a.jsx)(t.code,{children:"ExecuteDelete"})]}),"\n",(0,a.jsxs)(t.p,{children:["Let's assume that you need to delete all Blogs with a rating below a certain threshold. The traditional ",(0,a.jsx)(t.code,{children:"SaveChanges()"})," approach requires you to do the following:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"foreach (var blog in context.Blogs.Where(b => b.Rating < 3))\n{\n    context.Blogs.Remove(blog);\n}\n\ncontext.SaveChanges();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This is quite an inefficient way to perform this task: we query the database for all Blogs matching our filter, and then we query, materialize and track all those instances; the number of matching entities could be huge. We then tell EF's change tracker that each Blog needs to be removed, and apply those changes by calling ",(0,a.jsx)(t.code,{children:"SaveChanges()"}),", which generates a ",(0,a.jsx)(t.code,{children:"DELETE"})," statement for each and every one of them."]}),"\n",(0,a.jsx)(t.p,{children:"Here is the same task performed via the ExecuteDelete API:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:"context.Blogs.Where(b => b.Rating < 3).ExecuteDelete();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This uses the familiar LINQ operators to determine which Blogs should be affected - just as if we were querying them - and then tells EF to execute a SQL ",(0,a.jsx)(t.code,{children:"DELETE"})," against the database:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"DELETE FROM [b]\nFROM [Blogs] AS [b]\nWHERE [b].[Rating] < 3\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Aside from being simpler and shorter, this executes very efficiently in the database, without loading any data from the database or involving EF's change tracker."})," Note that you can use arbitrary LINQ operators to select which Blogs you'd like to delete - these are translated to SQL for execution at the database, just as if you were querying those Blogs out."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);