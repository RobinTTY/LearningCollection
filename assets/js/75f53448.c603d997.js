"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"constraints",title:"Constratints",sidebar_position:6},i=void 0,s={unversionedId:"Databases/sql/constraints",id:"Databases/sql/constraints",title:"Constratints",description:"A constraint is a rule we create on a database that enforces some specific behavior. For example, setting a NOT NULL constraint on a column ensures that the column will not accept NULL values.",source:"@site/docs/Databases/sql/constraints.md",sourceDirName:"Databases/sql",slug:"/Databases/sql/constraints",permalink:"/LearningCollection/Databases/sql/constraints",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/constraints.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"constraints",title:"Constratints",sidebar_position:6},sidebar:"finance",previous:{title:"Schema Migration",permalink:"/LearningCollection/Databases/sql/schema-migration"},next:{title:"Important Mongo Shell Commands",permalink:"/LearningCollection/Databases/MongoDB/mongoShellCommands"}},l={},c=[{value:"Defining a NOT NULL constraint",id:"defining-a-not-null-constraint",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"constraint")," is a rule we create on a database that enforces some specific behavior. For example, setting a ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint on a column ensures that the column will not accept ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," values."),(0,a.kt)("p",null,"If we try to insert a ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," value into a column with the ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint, the insert will fail with an error message. Constraints are extremely useful when we need to ensure that certain kinds of data exist within our database."),(0,a.kt)("h2",{id:"defining-a-not-null-constraint"},"Defining a NOT NULL constraint"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint can be added directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees(\n    id INTEGER PRIMARY KEY,\n    name TEXT UNIQUE,\n    title TEXT NOT NULL\n);\n")))}m.isMDXComponent=!0}}]);