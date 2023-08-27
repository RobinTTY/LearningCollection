"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"auto-increment",title:"Auto Increment",sidebar_position:7},o=void 0,s={unversionedId:"Databases/sql/core-concepts/auto-increment",id:"Databases/sql/core-concepts/auto-increment",title:"Auto Increment",description:"Many dialects of SQL support an AUTO INCREMENT feature. When inserting records into a table with AUTO INCREMENT enabled, the database will assign the next value automatically. In SQLite an integer id field that has the PRIMARY KEY constraint will auto increment by default! Different dialects of SQL will implement this feature differently.",source:"@site/docs/Databases/sql/core-concepts/auto-increment.md",sourceDirName:"Databases/sql/core-concepts",slug:"/Databases/sql/core-concepts/auto-increment",permalink:"/LearningCollection/Databases/sql/core-concepts/auto-increment",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/sql/core-concepts/auto-increment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"auto-increment",title:"Auto Increment",sidebar_position:7},sidebar:"finance",previous:{title:"Functions",permalink:"/LearningCollection/Databases/sql/core-concepts/functions"},next:{title:"Object-Relational Mapping (ORM)",permalink:"/LearningCollection/Databases/sql/advanced-concepts/object-relational-mapping"}},l={},c=[{value:"ID&#39;s",id:"ids",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many dialects of SQL support an ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," feature. When inserting records into a table with ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTO INCREMENT")," enabled, the database will assign the next value automatically. In SQLite an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field that has the ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," constraint will auto increment by default! Different dialects of SQL will implement this feature differently."),(0,a.kt)("h2",{id:"ids"},"ID's"),(0,a.kt)("p",null,"Depending on how your database is set up, you may be using traditional ids or you may be using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUIDs"),". SQL doesn't support auto incrementing a ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," so if your database is using them your server will have to handle the changing uuid's for each record."))}d.isMDXComponent=!0}}]);