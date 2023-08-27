"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"constraints",title:"Constratints",sidebar_position:5},o=void 0,s={unversionedId:"Databases/sql/core-concepts/constraints",id:"Databases/sql/core-concepts/constraints",title:"Constratints",description:"A constraint is a rule we create on a database that enforces some specific behavior. For example, setting a NOT NULL constraint on a column ensures that the column will not accept NULL values. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database.",source:"@site/docs/Databases/sql/core-concepts/constraints.md",sourceDirName:"Databases/sql/core-concepts",slug:"/Databases/sql/core-concepts/constraints",permalink:"/LearningCollection/Databases/sql/core-concepts/constraints",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/constraints.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"constraints",title:"Constratints",sidebar_position:5},sidebar:"finance",previous:{title:"Altering Tables",permalink:"/LearningCollection/Databases/sql/core-concepts/altering-tables"},next:{title:"Functions",permalink:"/LearningCollection/Databases/sql/core-concepts/functions"}},l={},c=[{value:"NOT NULL constraint",id:"not-null-constraint",level:2},{value:"PRIMARY KEY constraint",id:"primary-key-constraint",level:2},{value:"FOREIGN KEY constraint",id:"foreign-key-constraint",level:2},{value:"Auto Increment",id:"auto-increment",level:2},{value:"ID&#39;s",id:"ids",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"constraint")," is a rule we create on a database that enforces some specific behavior. For example, setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint on a column ensures that the column will not accept ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," values. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database."),(0,r.kt)("h2",{id:"not-null-constraint"},"NOT NULL constraint"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint can be added directly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement. If we try to insert a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," value into a column with the ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint, the insert will fail with an error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"CREATE TABLE employees(\n    title TEXT NOT NULL\n);\n")),(0,r.kt)("h2",{id:"primary-key-constraint"},"PRIMARY KEY constraint"),(0,r.kt)("p",null,"A key defines and protects relationships between tables. A ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Primary_key"},"primary key")," is a special column that uniquely identifies records within a table. Each table can have one, and only one primary key."),(0,r.kt)("p",null,"It's very common to have a column named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," on each table in a database, and that ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is the primary key for that table. No two rows in that table can share an ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"CREATE TABLE employees(\n    id INTEGER PRIMARY KEY,\n    title TEXT NOT NULL\n);\n")),(0,r.kt)("h2",{id:"foreign-key-constraint"},"FOREIGN KEY constraint"),(0,r.kt)("p",null,"Foreign keys are what makes relational databases relational! Foreign keys define the relationships between tables. Simply put, a ",(0,r.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," is a field in one table that references another table's ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),"."),(0,r.kt)("p",null,"Creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," in SQLite for instance happens at table creation. After we define the table fields and constraints we add an additional constraint where we define the ",(0,r.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," and its ",(0,r.kt)("inlineCode",{parentName:"p"},"REFERENCES"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE departments (\n    id INTEGER PRIMARY KEY,\n    department_name TEXT NOT NULL\n);\n\nCREATE TABLE employees (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    department_id INTEGER,\n    CONSTRAINT fk_departments\n    FOREIGN KEY (department_id)\n    REFERENCES departments(id)\n);\n")),(0,r.kt)("p",null,"In this example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"employee")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"department_id"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"department_id")," must be the same as the id field of a record from the ",(0,r.kt)("inlineCode",{parentName:"p"},"departments")," table."),(0,r.kt)("h2",{id:"auto-increment"},"Auto Increment"),(0,r.kt)("p",null,"Many dialects of SQL support an ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," feature. When inserting records into a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," enabled, the database will assign the next value automatically. In SQLite an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field that has the ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," constraint will auto increment by default. Different dialects of SQL will implement this feature differently."),(0,r.kt)("h3",{id:"ids"},"ID's"),(0,r.kt)("p",null,"Depending on how your database is set up, you may be using traditional ids or you may be using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUIDs"),". SQL doesn't support auto incrementing a ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," so if your database is using them your server will have to handle the changing uuid's for each record."))}u.isMDXComponent=!0}}]);