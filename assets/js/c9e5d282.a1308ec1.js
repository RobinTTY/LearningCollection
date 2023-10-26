"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={id:"performance",title:"Performance",sidebar_position:6},i=void 0,s={unversionedId:"databases/sql/core-concepts/database-design/performance",id:"databases/sql/core-concepts/database-design/performance",title:"Performance",description:"Indexes",source:"@site/docs/databases/sql/core-concepts/database-design/performance.md",sourceDirName:"databases/sql/core-concepts/database-design",slug:"/databases/sql/core-concepts/database-design/performance",permalink:"/LearningCollection/databases/sql/core-concepts/database-design/performance",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/sql/core-concepts/database-design/performance.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"performance",title:"Performance",sidebar_position:6},sidebar:"finance",previous:{title:"Fact vs Dimension Tables",permalink:"/LearningCollection/databases/sql/core-concepts/database-design/fact-vs-dimension-tables"},next:{title:"Subqueries",permalink:"/LearningCollection/databases/sql/advanced-concepts/subqueries"}},l={},d=[{value:"Indexes",id:"indexes",level:2},{value:"Creating an index",id:"creating-an-index",level:3},{value:"Why not index everything?",id:"why-not-index-everything",level:3},{value:"Multi-column indexes",id:"multi-column-indexes",level:3},{value:"Denormalization",id:"denormalization",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"indexes"},"Indexes"),(0,o.kt)("p",null,"An index is an in-memory structure that ensures that queries we run on a database are performant, that is to say, they run quickly. Most database indexes are just ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_tree"},"binary trees"),". The binary tree can be stored in ram as well as on disk, and it makes it easy to lookup the location of an entire row."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," columns are indexed by default, ensuring you can look up a row by its ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," very quickly. However, if you have other columns that you want to be able to do quick lookups on, you'll need to index them.\nIn terms of Big-O complexity, a binary tree index ensures that lookups are ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Big_O_notation"},"O(log(n))"),"."),(0,o.kt)("h3",{id:"creating-an-index"},"Creating an index"),(0,o.kt)("p",null,"To create an index, you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE INDEX")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX index_name on table_name (column_name);\n")),(0,o.kt)("p",null,"It's fairly common to name an index after the column it's created on with a suffix of ",(0,o.kt)("inlineCode",{parentName:"p"},"_idx"),"."),(0,o.kt)("h3",{id:"why-not-index-everything"},"Why not index everything?"),(0,o.kt)("p",null,"While indexes make specific kinds of lookups much faster, they also add performance overhead - they can slow down a database in other ways. Think about it, if you index every column, you could have hundreds of binary trees in memory! That needlessly bloats the memory usage of your database. It also means that each time you insert a record, that record needs to be added to many trees - slowing down your insert speed."),(0,o.kt)("p",null,"The rule of thumb is simple:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add an index to columns you know you'll be doing frequent lookups on. Leave everything else un-indexed. You can always add indexes later.")),(0,o.kt)("h3",{id:"multi-column-indexes"},"Multi-column indexes"),(0,o.kt)("p",null,"Multi-column indexes are useful for the exact reason you might think - they speed up lookups that depend on multiple columns."),(0,o.kt)("p",null,"We can create such an index like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX first_name_last_name_age_idx\nON users (first_name, last_name, age);\n")),(0,o.kt)("p",null,"A multi-column index is sorted by the first column first, the second column next, and so forth. A lookup on only the first column in a multi-column index gets almost all of the performance improvements that it would get from its own single-column index. However, lookups on only the second or third column will have very degraded performance."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Unless you have specific reasons to do something special, only add multi-column indexes if you're doing frequent lookups on a specific combination of columns.")),(0,o.kt)("h2",{id:"denormalization"},"Denormalization"),(0,o.kt)("p",null,"Denormalization is the process of adding redundant data to a database to speed up queries. It's a tradeoff - you're adding more data to your database, but you're making it easier to query that data."),(0,o.kt)("p",null,"Storing duplicate information can drastically speed up an application that needs to look it up in different ways. For example, if you store a user's country information right on their user record, no expensive join is required to load their profile page. That said, denormalizing data comes at a risk. Denormalizing a database incurs a large risk of inaccurate and buggy data."))}p.isMDXComponent=!0}}]);