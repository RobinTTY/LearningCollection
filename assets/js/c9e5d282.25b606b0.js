"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6597],{66360:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=a(74848),t=a(28453);const i={id:"performance",title:"Performance",sidebar_position:6},s=void 0,r={id:"databases/sql/core-concepts/database-design/performance",title:"Performance",description:"Indexes",source:"@site/docs/databases/sql/core-concepts/database-design/performance.md",sourceDirName:"databases/sql/core-concepts/database-design",slug:"/databases/sql/core-concepts/database-design/performance",permalink:"/LearningCollection/databases/sql/core-concepts/database-design/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/sql/core-concepts/database-design/performance.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"performance",title:"Performance",sidebar_position:6},sidebar:"docs",previous:{title:"Fact vs Dimension Tables",permalink:"/LearningCollection/databases/sql/core-concepts/database-design/fact-vs-dimension-tables"},next:{title:"Subqueries",permalink:"/LearningCollection/databases/sql/advanced-concepts/subqueries"}},d={},l=[{value:"Indexes",id:"indexes",level:2},{value:"Creating an index",id:"creating-an-index",level:3},{value:"Why not index everything?",id:"why-not-index-everything",level:3},{value:"Multi-column indexes",id:"multi-column-indexes",level:3},{value:"Denormalization",id:"denormalization",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"indexes",children:"Indexes"}),"\n",(0,o.jsxs)(n.p,{children:["An index is an in-memory structure that ensures that queries we run on a database are performant, that is to say, they run quickly. Most database indexes are just ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Binary_tree",children:"binary trees"}),". The binary tree can be stored in ram as well as on disk, and it makes it easy to lookup the location of an entire row."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"PRIMARY KEY"})," columns are indexed by default, ensuring you can look up a row by its ",(0,o.jsx)(n.code,{children:"id"})," very quickly. However, if you have other columns that you want to be able to do quick lookups on, you'll need to index them.\nIn terms of Big-O complexity, a binary tree index ensures that lookups are ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Big_O_notation",children:"O(log(n))"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-an-index",children:"Creating an index"}),"\n",(0,o.jsxs)(n.p,{children:["To create an index, you use the ",(0,o.jsx)(n.code,{children:"CREATE INDEX"})," command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX index_name on table_name (column_name);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It's fairly common to name an index after the column it's created on with a suffix of ",(0,o.jsx)(n.code,{children:"_idx"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"why-not-index-everything",children:"Why not index everything?"}),"\n",(0,o.jsx)(n.p,{children:"While indexes make specific kinds of lookups much faster, they also add performance overhead - they can slow down a database in other ways. Think about it, if you index every column, you could have hundreds of binary trees in memory! That needlessly bloats the memory usage of your database. It also means that each time you insert a record, that record needs to be added to many trees - slowing down your insert speed."}),"\n",(0,o.jsx)(n.p,{children:"The rule of thumb is simple:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Add an index to columns you know you'll be doing frequent lookups on. Leave everything else un-indexed. You can always add indexes later."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"multi-column-indexes",children:"Multi-column indexes"}),"\n",(0,o.jsx)(n.p,{children:"Multi-column indexes are useful for the exact reason you might think - they speed up lookups that depend on multiple columns."}),"\n",(0,o.jsx)(n.p,{children:"We can create such an index like so:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX first_name_last_name_age_idx\nON users (first_name, last_name, age);\n"})}),"\n",(0,o.jsx)(n.p,{children:"A multi-column index is sorted by the first column first, the second column next, and so forth. A lookup on only the first column in a multi-column index gets almost all of the performance improvements that it would get from its own single-column index. However, lookups on only the second or third column will have very degraded performance."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Unless you have specific reasons to do something special, only add multi-column indexes if you're doing frequent lookups on a specific combination of columns."})}),"\n",(0,o.jsx)(n.h2,{id:"denormalization",children:"Denormalization"}),"\n",(0,o.jsx)(n.p,{children:"Denormalization is the process of adding redundant data to a database to speed up queries. It's a tradeoff - you're adding more data to your database, but you're making it easier to query that data."}),"\n",(0,o.jsx)(n.p,{children:"Storing duplicate information can drastically speed up an application that needs to look it up in different ways. For example, if you store a user's country information right on their user record, no expensive join is required to load their profile page. That said, denormalizing data comes at a risk. Denormalizing a database incurs a large risk of inaccurate and buggy data."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var o=a(96540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);