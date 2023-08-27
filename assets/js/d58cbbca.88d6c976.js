"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5376],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const r={id:"functions",title:"Functions",sidebar_position:6},i=void 0,c={unversionedId:"Databases/sql/core-concepts/functions",id:"Databases/sql/core-concepts/functions",title:"Functions",description:"SQL has many built-in functions for performing calculations on data. The names of these functions are not standardized across different dialects of SQL.",source:"@site/docs/Databases/sql/core-concepts/functions.md",sourceDirName:"Databases/sql/core-concepts",slug:"/Databases/sql/core-concepts/functions",permalink:"/LearningCollection/Databases/sql/core-concepts/functions",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/functions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"functions",title:"Functions",sidebar_position:6},sidebar:"finance",previous:{title:"Altering Tables",permalink:"/LearningCollection/Databases/sql/core-concepts/altering-tables"},next:{title:"Object-Relational Mapping (ORM)",permalink:"/LearningCollection/Databases/sql/advanced-concepts/object-relational-mapping"}},l={},s=[{value:"Aggregate functions",id:"aggregate-functions",level:2},{value:"<code>AVG</code> function",id:"avg-function",level:3},{value:"<code>COUNT</code> function",id:"count-function",level:3},{value:"<code>SUM</code> function",id:"sum-function",level:3},{value:"<code>MIN</code> function",id:"min-function",level:3},{value:"<code>MAX</code> function",id:"max-function",level:3},{value:"Window Functions",id:"window-functions",level:2},{value:"Other Functions",id:"other-functions",level:2},{value:"<code>ROUND</code> function",id:"round-function",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SQL has many built-in functions for performing calculations on data. The names of these functions are not standardized across different dialects of SQL."),(0,a.kt)("h2",{id:"aggregate-functions"},"Aggregate functions"),(0,a.kt)("p",null,"An aggregate function performs a calculation on a set of values, and returns a single value."),(0,a.kt)("h3",{id:"avg-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"AVG")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AVG()")," function returns the average value of a numeric column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT AVG(Price)\nFROM Products;\n")),(0,a.kt)("h3",{id:"count-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"COUNT")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"COUNT()")," function returns the number of rows that matches a specified criterion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM employees;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," in this case refers to a column name. We don't care about the count of a specific column - we want to know the number of total records so we can use the wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},"(*)"),"."),(0,a.kt)("h3",{id:"sum-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"SUM")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM()")," function returns the total sum of a numeric column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SUM(Quantity)\nFROM OrderDetails;\n")),(0,a.kt)("h3",{id:"min-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"MIN")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MIN()")," function returns the smallest value of the selected column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(Price)\nFROM Products;\n")),(0,a.kt)("h3",{id:"max-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"MAX")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX()")," function returns the largest value of the selected column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MAX(Price)\nFROM Products;\n")),(0,a.kt)("h2",{id:"window-functions"},"Window Functions"),(0,a.kt)("p",null,"A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function."),(0,a.kt)("p",null,"But unlike regular aggregate functions, use of a window function does not cause rows to become grouped into a single output row \u2014 the rows retain their separate identities. Behind the scenes, the window function is able to access more than just the current row of the query result."),(0,a.kt)("p",null,"The most practical example of this is a running total:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT duration_seconds,\nSUM(duration_seconds) OVER (ORDER BY start_time) AS running_total\nFROM films;\n")),(0,a.kt)("h2",{id:"other-functions"},"Other Functions"),(0,a.kt)("h3",{id:"round-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"ROUND")," function"),(0,a.kt)("p",null,"The ROUND() function rounds a number to a specified number of decimal places."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ROUND(235.415, 2) AS RoundValue;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"235.42"),"."))}d.isMDXComponent=!0}}]);