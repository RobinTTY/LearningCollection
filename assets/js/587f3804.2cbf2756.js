"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=s,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const o={id:"fact-vs-dimension-tables",title:"Fact vs Dimension Tables",sidebar_position:6},i=void 0,r={unversionedId:"Databases/sql/core-concepts/database-design/fact-vs-dimension-tables",id:"Databases/sql/core-concepts/database-design/fact-vs-dimension-tables",title:"Fact vs Dimension Tables",description:"In Data Warehouse Modeling, a star schema and a snowflake schema consists of Fact and Dimension tables.",source:"@site/docs/Databases/sql/core-concepts/database-design/fact-vs-dimensions.md",sourceDirName:"Databases/sql/core-concepts/database-design",slug:"/Databases/sql/core-concepts/database-design/fact-vs-dimension-tables",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/fact-vs-dimension-tables",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/database-design/fact-vs-dimensions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"fact-vs-dimension-tables",title:"Fact vs Dimension Tables",sidebar_position:6},sidebar:"finance",previous:{title:"Table Relationships",permalink:"/LearningCollection/Databases/sql/core-concepts/database-design/table-relationships"},next:{title:"Querying Tables",permalink:"/LearningCollection/Databases/sql/core-concepts/querying-tables"}},l={},c=[{value:"Fact Table",id:"fact-table",level:2},{value:"Dimension Table",id:"dimension-table",level:2},{value:"Overview",id:"overview",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In Data Warehouse Modeling, a star schema and a snowflake schema consists of Fact and Dimension tables."),(0,s.kt)("h2",{id:"fact-table"},"Fact Table"),(0,s.kt)("p",null,"Facts, are the verb. An entry in a fact table marks a discrete event that happens to something from the dimension table. A product sale would be recorded in a fact table. The event of the sale would be noted by what product was sold, which employee sold it, and which customer bought it. Product, Employee, and Customer are all dimensions that describe the event, the sale."),(0,s.kt)("p",null,"In addition fact tables also typically have some kind of quantitative data. The quantity sold, the price per item, total price, and so on."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Contains all the primary keys of the dimension and associated facts or measures (is a property on which calculations can be made) like quantity sold, amount sold and average sales")),(0,s.kt)("h2",{id:"dimension-table"},"Dimension Table"),(0,s.kt)("p",null,"It may help to think of dimensions as things or objects. A thing such as a product can exist without ever being involved in a business event. A dimension is your noun. It is something that can exist independent of a business event, such as a sale. Products, employees, equipment, are all things that exist. A dimension either does something, or has something done to it."),(0,s.kt)("p",null,"Employees sell, customers buy. Employees and customers are examples of dimensions, they do. Products are sold, they are also dimensions as they have something done to them."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dimension tables provides descriptive information for all the measurements recorded in fact table"),(0,s.kt)("li",{parentName:"ul"},"Dimensions are relatively very small as comparison of fact table"),(0,s.kt)("li",{parentName:"ul"},"Commonly used dimensions are people, products, place and time")),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.stack.imgur.com/aB9k9.jpg",alt:"facts-vs-dimensions"})))}m.isMDXComponent=!0}}]);