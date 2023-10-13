"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return n?o.createElement(u,i(i({ref:t},m),{},{components:n})):o.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={id:"importingExportingData",title:"Importing and Exporting data",sidebar_position:3},i=void 0,s={unversionedId:"databases/mongodb/m001-mongodb-basics/importingExportingData",id:"databases/mongodb/m001-mongodb-basics/importingExportingData",title:"Importing and Exporting data",description:"Example",source:"@site/docs/databases/mongodb/m001-mongodb-basics/Importing and Exporting data.md",sourceDirName:"databases/mongodb/m001-mongodb-basics",slug:"/databases/mongodb/m001-mongodb-basics/importingExportingData",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/importingExportingData",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/mongodb/m001-mongodb-basics/Importing and Exporting data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"importingExportingData",title:"Importing and Exporting data",sidebar_position:3},sidebar:"finance",previous:{title:"Documents and Collections",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/documentsAndCollections"},next:{title:"Querying, Creating, Updating and Deleting documents with Mongo shell",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/queryingCreatingUpdatingDeleting"}},l={},p=[{value:"Example",id:"example",level:2},{value:"The URI string",id:"the-uri-string",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},'mongoimport --uri "<AtlasClusterURI>       // import json\n            --drop=<filename>.json\nmongoexport --uri "<AtlasClusterURI>       // export json\n            --collection=<collectionName>\n            --out=<filename>.json\nmongorestore --uri "<AtlasClusterURI>      // import bson\n             --drop dump\nmongodump --uri "<AtlasClusterURI>         // export bson\n\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},'mongoimport --uri "mongodb+srv://<user>:<password>@cluster0.9mv1n.mongodb.net:27017,cluster0-shard-00-00.9mv1n.mongodb.net:27017,cluster0-shard-00-02.9mv1n.mongodb.net:27017/<dbName>?ssl=true&replicaSet=atlas-ojxaoh-shard-0&authSource=admin" --collection <collectionName> --drop --file C:/.../<exportedData>.json\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--drop:")," Modifies the import process so that the target instance drops the collection before importing the data from the input.",(0,r.kt)("br",{parentName:"p"}),"\n","More options see: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/database-tools/mongoimport/"},"MongoDB Docs")),(0,r.kt)("h2",{id:"the-uri-string"},"The URI string"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The connection string is a srv-string"),(0,r.kt)("li",{parentName:"ul"},"srv is used to establish a secure connection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/<database>\n")))}d.isMDXComponent=!0}}]);