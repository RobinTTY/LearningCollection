"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"normalization",title:"Normalization",sidebar_position:4},i=void 0,l={unversionedId:"Databases/sql/core-concepts/database-design/normalization",id:"Databases/sql/core-concepts/database-design/normalization",title:"Normalization",description:"Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency.",source:"@site/docs/Databases/sql/core-concepts/database-design/normalization.md",sourceDirName:"Databases/sql/core-concepts/database-design",slug:"/Databases/sql/core-concepts/database-design/normalization",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/normalization",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/database-design/normalization.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"normalization",title:"Normalization",sidebar_position:4},sidebar:"finance",previous:{title:"Table Relationships",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/table-relationships"},next:{title:"Fact vs Dimension Tables",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/fact-vs-dimension-tables"}},s={},d=[{value:"Normal Forms",id:"normal-forms",level:2},{value:"First Normal Form (1NF)",id:"first-normal-form-1nf",level:3},{value:"Second Normal Form (2NF)",id:"second-normal-form-2nf",level:3},{value:"Example",id:"example",level:4},{value:"Third Normal Form (3NF)",id:"third-normal-form-3nf",level:3},{value:"Boyce-Codd Normal Form",id:"boyce-codd-normal-form",level:4},{value:"Example",id:"example-1",level:4},{value:"Fourth Normal Form (4NF)",id:"fourth-normal-form-4nf",level:3},{value:"Example",id:"example-2",level:4},{value:"Fifth Normal Form (5NF)",id:"fifth-normal-form-5nf",level:3},{value:"Example",id:"example-3",level:4}],m={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency."),(0,r.kt)("p",null,"Normalized tables are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easier to understand"),(0,r.kt)("li",{parentName:"ul"},"Easier to enhance and extend"),(0,r.kt)("li",{parentName:"ul"},"Protected from:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Insertion anomalies"),(0,r.kt)("li",{parentName:"ul"},"Update anomalies"),(0,r.kt)("li",{parentName:"ul"},"Deletion anomalies")))),(0,r.kt)("h2",{id:"normal-forms"},"Normal Forms"),(0,r.kt)("p",null,'There are a few rules for database normalization. Each rule is called a "normal form." If the first rule is observed, the database is said to be in "first normal form." If the first three rules are observed, the database is considered to be in "third normal form." Although other levels of normalization are possible, third normal form is considered the highest level necessary for most applications.'),(0,r.kt)("p",null,"As with many formal rules and specifications, real world scenarios don't always allow for perfect compliance. In general, normalization requires additional tables."),(0,r.kt)("p",null,"Following are the various types of Normal forms:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"normalization",src:a(171).Z,width:"1018",height:"484"})),(0,r.kt)("h3",{id:"first-normal-form-1nf"},"First Normal Form (1NF)"),(0,r.kt)("p",null,"The rules for first normal form are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using row order to convey information is not permitted"),(0,r.kt)("li",{parentName:"ul"},"Mixing data types within the same column is not permitted"),(0,r.kt)("li",{parentName:"ul"},"Having a table without a primary key is not permitted"),(0,r.kt)("li",{parentName:"ul"},"Repeating groups are not permitted (e.g. one column containing all items a player has in the inventory)")),(0,r.kt)("h3",{id:"second-normal-form-2nf"},"Second Normal Form (2NF)"),(0,r.kt)("p",null,"For the second normal form to be satisfied, a table must be in 1NF and ",(0,r.kt)("strong",{parentName:"p"},"each non-key attribute must depend on the entire primary key"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 1: { Player_ID, Item_Type } -> { Item_Quantity }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The item quantity depends on both the player ID and the item type, so this is a valid dependency"))),(0,r.kt)("li",{parentName:"ul"},"Example 2: { Player_ID, Item_Type } -> { Player_Rating }",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The player rating only depends on the player ID, not the item type - so this is not a valid dependency")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2NF",src:a(850).Z,width:"1851",height:"952"})),(0,r.kt)("h3",{id:"third-normal-form-3nf"},"Third Normal Form (3NF)"),(0,r.kt)("p",null,"For the third normal form to be satisfied, a table must be in 2NF and ",(0,r.kt)("strong",{parentName:"p"},"every non-key attribute must depend on the primary key, the whole key, and nothing but the key"),". This means there can't be any transitive dependencies. So there shouldn't exist any dependencies like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{ Player_ID } -> { Player_Skill_Level } -> { Player_Rating }")),(0,r.kt)("h4",{id:"boyce-codd-normal-form"},"Boyce-Codd Normal Form"),(0,r.kt)("p",null,"A slightly stronger version of 3NF is called Boyce-Codd Normal Form (BCNF). For the BCNF to be satisfied, every attribute in a table should depend on the key, the whole key, and nothing but the key. In real-world applications, it is really rare to ever encounter a table that is in 3NF but not BCNF (only tables with multiple overlapping candidate keys can be in 3NF and not BCNF)."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3NF",src:a(6302).Z,width:"1834",height:"1015"})),(0,r.kt)("h3",{id:"fourth-normal-form-4nf"},"Fourth Normal Form (4NF)"),(0,r.kt)("p",null,"For the fourth normal form to be satisfied, a table must be in 3NF and ",(0,r.kt)("strong",{parentName:"p"},"multivalued dependencies in the table must be multivalued dependencies on the key"),"."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"4NF",src:a(9731).Z,width:"1852",height:"1021"})),(0,r.kt)("h3",{id:"fifth-normal-form-5nf"},"Fifth Normal Form (5NF)"),(0,r.kt)("p",null,"For the fifth normal form to be satisfied, a table must be in 4NF and ",(0,r.kt)("strong",{parentName:"p"},"the table can't be describable as the logical result of joining some other tables together"),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"This design can be joined together from the other tables:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5NF_1",src:a(3650).Z,width:"1819",height:"1020"})),(0,r.kt)("p",null,"This design can't be joined together from the other tables and is therefore in 5NF:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5NF_2",src:a(9517).Z,width:"1863",height:"1024"})))}p.isMDXComponent=!0},850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2NF-a074553a5802289ce81ca1d5a81d7ccb.png"},6302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3NF-91b63cd7d88c24e02e814e9f2a93977d.png"},9731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4NF-f258d0d22205c9bc2adaa73933662895.png"},3650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5NF_1-c045fa88b9d20374f3e2566515a212ff.png"},9517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5NF_2-24211989242c5f82607244604c4fd407.png"},171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/normalization-9b8a7c7cbe50e2e566b08f0d73cc06dd.png"}}]);