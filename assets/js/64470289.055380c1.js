"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8982],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(t),u=s,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},627:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(7462),s=(t(7294),t(3905));const i={id:"database-schema",title:"Database Schema",sidebar_position:2},o=void 0,r={unversionedId:"Databases/sql/core-concepts/database-schema",id:"Databases/sql/core-concepts/database-schema",title:"Database Schema",description:"A database's schema describes how data is organized within it. Data types, table names, field names, constraints, and the relationships between all of those entities are part of a database's schema.",source:"@site/docs/Databases/sql/core-concepts/database-schema.md",sourceDirName:"Databases/sql/core-concepts",slug:"/Databases/sql/core-concepts/database-schema",permalink:"/LearningCollection/Databases/sql/core-concepts/database-schema",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/database-schema.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"database-schema",title:"Database Schema",sidebar_position:2},sidebar:"finance",previous:{title:"Data Types",permalink:"/LearningCollection/Databases/sql/core-concepts/data-types"},next:{title:"Querying Tables",permalink:"/LearningCollection/Databases/sql/core-concepts/querying-tables"}},l={},c=[{value:"Manipulating a database schema",id:"manipulating-a-database-schema",level:2},{value:"Creating Tables",id:"creating-tables",level:3},{value:"Altering Tables",id:"altering-tables",level:3},{value:"Renaming a table or column",id:"renaming-a-table-or-column",level:4},{value:"Adding or droping a column",id:"adding-or-droping-a-column",level:4},{value:"Fact Tables and Dimension Tables",id:"fact-tables-and-dimension-tables",level:2},{value:"Fact Table",id:"fact-table",level:3},{value:"Dimension Table",id:"dimension-table",level:3},{value:"Schema Migrations",id:"schema-migrations",level:2},{value:"Risks and benefits",id:"risks-and-benefits",level:3}],d={toc:c},m="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A database's ",(0,s.kt)("a",{parentName:"p",href:"https://www.ibm.com/topics/database-schema"},"schema")," describes how data is organized within it. Data types, table names, field names, constraints, and the relationships between all of those entities are part of a database's schema."),(0,s.kt)("p",null,"When designing a database schema there typically isn't a \"correct\" solution. We do our best to choose a sane set of tables, fields, constraints, etc that will accomplish our project's goals. Like many things in programming, different schema designs come with different tradeoffs."),(0,s.kt)("h2",{id:"manipulating-a-database-schema"},"Manipulating a database schema"),(0,s.kt)("h3",{id:"creating-tables"},"Creating Tables"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement is used to create a new table in a database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees (id INTEGER, name TEXT, age INTEGER, is_manager BOOLEAN, salary INTEGER);\n")),(0,s.kt)("p",null,"Each field name is followed by its datatype.\nIt's also acceptable and common to break up the ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement with some whitespace like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees(\n    id INTEGER,\n    name TEXT,\n    age INTEGER,\n    is_manager BOOLEAN,\n    salary INTEGER\n);\n")),(0,s.kt)("h3",{id:"altering-tables"},"Altering Tables"),(0,s.kt)("p",null,"We often need to alter our database schema without deleting it and re-creating it. We can use use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement to make changes in place without deleting any data. The following statements are valid for the SQLite Syntax."),(0,s.kt)("h4",{id:"renaming-a-table-or-column"},"Renaming a table or column"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees\nRENAME TO contractors;\n\nALTER TABLE contractors\nRENAME COLUMN salary TO invoice;\n")),(0,s.kt)("h4",{id:"adding-or-droping-a-column"},"Adding or droping a column"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE contractors\nADD COLUMN job_title TEXT;\n\nALTER TABLE contractors\nDROP COLUMN is_manager;\n")),(0,s.kt)("h2",{id:"fact-tables-and-dimension-tables"},"Fact Tables and Dimension Tables"),(0,s.kt)("p",null,"In Data Warehouse Modeling, a star schema and a snowflake schema consists of Fact and Dimension tables."),(0,s.kt)("h3",{id:"fact-table"},"Fact Table"),(0,s.kt)("p",null,"Facts, are the verb. An entry in a fact table marks a discrete event that happens to something from the dimension table. A product sale would be recorded in a fact table. The event of the sale would be noted by what product was sold, which employee sold it, and which customer bought it. Product, Employee, and Customer are all dimensions that describe the event, the sale."),(0,s.kt)("p",null,"In addition fact tables also typically have some kind of quantitative data. The quantity sold, the price per item, total price, and so on."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Contains all the primary keys of the dimension and associated facts or measures (is a property on which calculations can be made) like quantity sold, amount sold and average sales")),(0,s.kt)("h3",{id:"dimension-table"},"Dimension Table"),(0,s.kt)("p",null,"It may help to think of dimensions as things or objects. A thing such as a product can exist without ever being involved in a business event. A dimension is your noun. It is something that can exist independent of a business event, such as a sale. Products, employees, equipment, are all things that exist. A dimension either does something, or has something done to it."),(0,s.kt)("p",null,"Employees sell, customers buy. Employees and customers are examples of dimensions, they do. Products are sold, they are also dimensions as they have something done to them."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dimension tables provides descriptive information for all the measurements recorded in fact table"),(0,s.kt)("li",{parentName:"ul"},"Dimensions are relatively very small as comparison of fact table"),(0,s.kt)("li",{parentName:"ul"},"Commonly used dimensions are people, products, place and time")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.stack.imgur.com/aB9k9.jpg",alt:"facts-vs-dimensions"})),(0,s.kt)("h2",{id:"schema-migrations"},"Schema Migrations"),(0,s.kt)("p",null,"In software engineering, a schema migration (also database migration, database change management) refers to the management of version-controlled, incremental and reversible changes to relational database schemas. A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version."),(0,s.kt)("p",null,"Migrations are performed programmatically by using a schema migration tool. When invoked with a specified desired schema version, the tool automates the successive application or reversal of an appropriate sequence of schema changes until it is brought to the desired state."),(0,s.kt)("p",null,"Most schema migration tools aim to minimize the impact of schema changes on any existing data in the database. Despite this, preservation of data in general is not guaranteed because schema changes such as the deletion of a database column can destroy data (i.e. all values stored under that column for all rows in that table are deleted). Instead, the tools help to preserve the meaning of the data or to reorganize existing data to meet new requirements. Since meaning of the data often cannot be encoded, the configuration of the tools usually needs manual intervention."),(0,s.kt)("h3",{id:"risks-and-benefits"},"Risks and benefits"),(0,s.kt)("p",null,"Schema migration allows for fixing mistakes and adapting the data as requirements change. They are an essential part of software evolution, especially in agile environments (see below)."),(0,s.kt)("p",null,"Applying a schema migration to a production database is always a risk. Development and test databases tend to be smaller and cleaner. The data in them is better understood or, if everything else fails, the amount of data is small enough for a human to process. Production databases are usually huge, old and full of surprises. The surprises can come from many sources:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Corrupt data that was written by old versions of the software and not cleaned properly"),(0,s.kt)("li",{parentName:"ul"},"Implied dependencies in the data which no one knows about anymore"),(0,s.kt)("li",{parentName:"ul"},"People directly changing the database without using the designated tools"),(0,s.kt)("li",{parentName:"ul"},"Bugs in the schema migration tools"),(0,s.kt)("li",{parentName:"ul"},"Mistakes in assumptions how data should be migrated")),(0,s.kt)("p",null,"For these reasons, the migration process needs a high level of discipline, thorough testing and a sound backup strategy."),(0,s.kt)("p",null,"Schema migrations may take a long time to complete and for systems that operate 24/7 it is important to be able to do ",(0,s.kt)("a",{parentName:"p",href:"https://www.aviransplace.com/post/safe-database-migration-pattern-without-downtime-1"},"database migrations without downtime"),". Usually it is done with the help of feature flags and continuous delivery."))}p.isMDXComponent=!0}}]);