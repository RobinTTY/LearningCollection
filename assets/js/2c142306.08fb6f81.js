"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8249],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4306:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const s={id:"database-schema",title:"Database Schema",sidebar_position:2},r=void 0,o={unversionedId:"Databases/sql/core-concepts/database-design/database-schema",id:"Databases/sql/core-concepts/database-design/database-schema",title:"Database Schema",description:"A database's schema describes how data is organized within it. Data types, table names, field names, constraints, and the relationships between all of those entities are part of a database's schema.",source:"@site/docs/Databases/sql/core-concepts/database-design/database-schema.md",sourceDirName:"Databases/sql/core-concepts/database-design",slug:"/Databases/sql/core-concepts/database-design/database-schema",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/database-schema",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/database-design/database-schema.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"database-schema",title:"Database Schema",sidebar_position:2},sidebar:"finance",previous:{title:"Data Types",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/data-types"},next:{title:"Table Relationships",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/table-relationships"}},l={},d=[{value:"Manipulating a database schema",id:"manipulating-a-database-schema",level:2},{value:"Creating Tables",id:"creating-tables",level:3},{value:"Altering Tables",id:"altering-tables",level:3},{value:"Renaming a table or column",id:"renaming-a-table-or-column",level:4},{value:"Adding or droping a column",id:"adding-or-droping-a-column",level:4},{value:"Constraints",id:"constraints",level:2},{value:"NOT NULL constraint",id:"not-null-constraint",level:3},{value:"PRIMARY KEY constraint",id:"primary-key-constraint",level:3},{value:"FOREIGN KEY constraint",id:"foreign-key-constraint",level:3},{value:"UNIQUE constraint",id:"unique-constraint",level:3},{value:"Defining a <code>UNIQUE</code> constraint for one column",id:"defining-a-unique-constraint-for-one-column",level:4},{value:"Defining a <code>UNIQUE</code> constraint for multiple columns",id:"defining-a-unique-constraint-for-multiple-columns",level:4},{value:"Auto Increment",id:"auto-increment",level:3},{value:"ID&#39;s",id:"ids",level:4},{value:"Schema Migrations",id:"schema-migrations",level:2},{value:"Risks and benefits",id:"risks-and-benefits",level:3}],c={toc:d},p="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A database's ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/topics/database-schema"},"schema")," describes how data is organized within it. Data types, table names, field names, constraints, and the relationships between all of those entities are part of a database's schema."),(0,i.kt)("p",null,"When designing a database schema there typically isn't a \"correct\" solution. We do our best to choose a sane set of tables, fields, constraints, etc that will accomplish our project's goals. Like many things in programming, different schema designs come with different tradeoffs."),(0,i.kt)("h2",{id:"manipulating-a-database-schema"},"Manipulating a database schema"),(0,i.kt)("h3",{id:"creating-tables"},"Creating Tables"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement is used to create a new table in a database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees (id INTEGER, name TEXT, age INTEGER, is_manager BOOLEAN, salary INTEGER);\n")),(0,i.kt)("p",null,"Each field name is followed by its datatype.\nIt's also acceptable and common to break up the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement with some whitespace like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees(\n    id INTEGER,\n    name TEXT,\n    age INTEGER,\n    is_manager BOOLEAN,\n    salary INTEGER\n);\n")),(0,i.kt)("h3",{id:"altering-tables"},"Altering Tables"),(0,i.kt)("p",null,"We often need to alter our database schema without deleting it and re-creating it. We can use use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement to make changes in place without deleting any data. The following statements are valid for the SQLite Syntax."),(0,i.kt)("h4",{id:"renaming-a-table-or-column"},"Renaming a table or column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees\nRENAME TO contractors;\n\nALTER TABLE contractors\nRENAME COLUMN salary TO invoice;\n")),(0,i.kt)("h4",{id:"adding-or-droping-a-column"},"Adding or droping a column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE contractors\nADD COLUMN job_title TEXT;\n\nALTER TABLE contractors\nDROP COLUMN is_manager;\n")),(0,i.kt)("h2",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"constraint")," is a rule we create on a database that enforces some specific behavior. For example, setting a ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint on a column ensures that the column will not accept ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database."),(0,i.kt)("h3",{id:"not-null-constraint"},"NOT NULL constraint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint can be added directly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement. If we try to insert a ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," value into a column with the ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint, the insert will fail with an error message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"CREATE TABLE employees(\n    title TEXT NOT NULL\n);\n")),(0,i.kt)("h3",{id:"primary-key-constraint"},"PRIMARY KEY constraint"),(0,i.kt)("p",null,"A key defines and protects relationships between tables. A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Primary_key"},"primary key")," is a special column that uniquely identifies records within a table. Each table can have one, and only one primary key."),(0,i.kt)("p",null,"It's very common to have a column named ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," on each table in a database, and that ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is the primary key for that table. No two rows in that table can share an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{2}","{2}":!0},"CREATE TABLE employees(\n    id INTEGER PRIMARY KEY,\n    title TEXT NOT NULL\n);\n")),(0,i.kt)("h3",{id:"foreign-key-constraint"},"FOREIGN KEY constraint"),(0,i.kt)("p",null,"Foreign keys are what makes relational databases relational! Foreign keys define the relationships between tables. Simply put, a ",(0,i.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," is a field in one table that references another table's ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),"."),(0,i.kt)("p",null,"Creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," in SQLite for instance happens at table creation. After we define the table fields and constraints we add an additional constraint where we define the ",(0,i.kt)("inlineCode",{parentName:"p"},"FOREIGN KEY")," and its ",(0,i.kt)("inlineCode",{parentName:"p"},"REFERENCES"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE departments (\n    id INTEGER PRIMARY KEY,\n    department_name TEXT NOT NULL\n);\n\nCREATE TABLE employees (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    department_id INTEGER,\n    CONSTRAINT fk_departments\n    FOREIGN KEY (department_id)\n    REFERENCES departments(id)\n);\n")),(0,i.kt)("p",null,"In this example, an ",(0,i.kt)("inlineCode",{parentName:"p"},"employee")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"department_id"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"department_id")," must be the same as the id field of a record from the ",(0,i.kt)("inlineCode",{parentName:"p"},"departments")," table."),(0,i.kt)("h3",{id:"unique-constraint"},"UNIQUE constraint"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIQUE")," constraint ensures all values in a column or a group of columns are distinct from one another or unique. You can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIQUE")," constraint at the column or the table level. Only at the table level, you can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIQUE")," constraint across multiple columns."),(0,i.kt)("h4",{id:"defining-a-unique-constraint-for-one-column"},"Defining a ",(0,i.kt)("inlineCode",{parentName:"h4"},"UNIQUE")," constraint for one column"),(0,i.kt)("p",null,"The following statement creates a new table named contacts with a ",(0,i.kt)("inlineCode",{parentName:"p"},"UNIQUE")," constraint defined for the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE contacts(\n    contact_id INTEGER PRIMARY KEY,\n    first_name TEXT,\n    last_name TEXT,\n    email TEXT NOT NULL UNIQUE\n);\n")),(0,i.kt)("h4",{id:"defining-a-unique-constraint-for-multiple-columns"},"Defining a ",(0,i.kt)("inlineCode",{parentName:"h4"},"UNIQUE")," constraint for multiple columns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE product_suppliers (\n  product_id INTEGER,\n  supplier_id INTEGER,\n  UNIQUE(product_id, supplier_id)\n);\n")),(0,i.kt)("p",null,"This ensures that we can have multiple rows with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"product_id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"supplier_id"),", but we can't have two rows where both the ",(0,i.kt)("inlineCode",{parentName:"p"},"product_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"supplier_id")," are the same."),(0,i.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,i.kt)("p",null,"Many dialects of SQL support an ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," feature. When inserting records into a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," enabled, the database will assign the next value automatically. In SQLite an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field that has the ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," constraint will auto increment by default. Different dialects of SQL will implement this feature differently."),(0,i.kt)("h4",{id:"ids"},"ID's"),(0,i.kt)("p",null,"Depending on how your database is set up, you may be using traditional ids or you may be using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUIDs"),". SQL doesn't support auto incrementing a ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," so if your database is using them your server will have to handle the changing uuid's for each record."),(0,i.kt)("h2",{id:"schema-migrations"},"Schema Migrations"),(0,i.kt)("p",null,"In software engineering, a schema migration (also database migration, database change management) refers to the management of version-controlled, incremental and reversible changes to relational database schemas. A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version."),(0,i.kt)("p",null,"Migrations are performed programmatically by using a schema migration tool. When invoked with a specified desired schema version, the tool automates the successive application or reversal of an appropriate sequence of schema changes until it is brought to the desired state."),(0,i.kt)("p",null,"Most schema migration tools aim to minimize the impact of schema changes on any existing data in the database. Despite this, preservation of data in general is not guaranteed because schema changes such as the deletion of a database column can destroy data (i.e. all values stored under that column for all rows in that table are deleted). Instead, the tools help to preserve the meaning of the data or to reorganize existing data to meet new requirements. Since meaning of the data often cannot be encoded, the configuration of the tools usually needs manual intervention."),(0,i.kt)("h3",{id:"risks-and-benefits"},"Risks and benefits"),(0,i.kt)("p",null,"Schema migration allows for fixing mistakes and adapting the data as requirements change. They are an essential part of software evolution, especially in agile environments (see below)."),(0,i.kt)("p",null,"Applying a schema migration to a production database is always a risk. Development and test databases tend to be smaller and cleaner. The data in them is better understood or, if everything else fails, the amount of data is small enough for a human to process. Production databases are usually huge, old and full of surprises. The surprises can come from many sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Corrupt data that was written by old versions of the software and not cleaned properly"),(0,i.kt)("li",{parentName:"ul"},"Implied dependencies in the data which no one knows about anymore"),(0,i.kt)("li",{parentName:"ul"},"People directly changing the database without using the designated tools"),(0,i.kt)("li",{parentName:"ul"},"Bugs in the schema migration tools"),(0,i.kt)("li",{parentName:"ul"},"Mistakes in assumptions how data should be migrated")),(0,i.kt)("p",null,"For these reasons, the migration process needs a high level of discipline, thorough testing and a sound backup strategy."),(0,i.kt)("p",null,"Schema migrations may take a long time to complete and for systems that operate 24/7 it is important to be able to do ",(0,i.kt)("a",{parentName:"p",href:"https://www.aviransplace.com/post/safe-database-migration-pattern-without-downtime-1"},"database migrations without downtime"),". Usually it is done with the help of feature flags and continuous delivery."))}m.isMDXComponent=!0}}]);