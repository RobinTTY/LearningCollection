"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"importingExportingData",title:"Importing and Exporting data",sidebar_position:3},l=void 0,p={unversionedId:"Databases/MongoDB/M001 MongoDB Basics/importingExportingData",id:"Databases/MongoDB/M001 MongoDB Basics/importingExportingData",title:"Importing and Exporting data",description:"Example",source:"@site/docs/Databases/MongoDB/M001 MongoDB Basics/Importing and Exporting data.md",sourceDirName:"Databases/MongoDB/M001 MongoDB Basics",slug:"/Databases/MongoDB/M001 MongoDB Basics/importingExportingData",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/importingExportingData",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M001 MongoDB Basics/Importing and Exporting data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"importingExportingData",title:"Importing and Exporting data",sidebar_position:3},sidebar:"mySidebar",previous:{title:"Documents and Collections",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/documentsAndCollections"},next:{title:"Querying, Creating, Updating and Deleting documents with Mongo shell",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/queryingCreatingUpdatingDeleting"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"The URI string",id:"the-uri-string",children:[],level:2}],u={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'mongoimport --uri "<AtlasClusterURI>       // import json\n            --drop=<filename>.json\nmongoexport --uri "<AtlasClusterURI>       // export json\n            --collection=<collectionName>\n            --out=<filename>.json\nmongorestore --uri "<AtlasClusterURI>      // import bson\n             --drop dump\nmongodump --uri "<AtlasClusterURI>         // export bson\n\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'mongoimport --uri "mongodb+srv://<user>:<password>@cluster0.9mv1n.mongodb.net:27017,cluster0-shard-00-00.9mv1n.mongodb.net:27017,cluster0-shard-00-02.9mv1n.mongodb.net:27017/<dbName>?ssl=true&replicaSet=atlas-ojxaoh-shard-0&authSource=admin" --collection <collectionName> --drop --file C:/.../<exportedData>.json\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--drop:")," Modifies the import process so that the target instance drops the collection before importing the data from the input.",(0,a.kt)("br",{parentName:"p"}),"\n","More options see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/database-tools/mongoimport/"},"MongoDB Docs")),(0,a.kt)("h2",{id:"the-uri-string"},"The URI string"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The connection string is a srv-string"),(0,a.kt)("li",{parentName:"ul"},"srv is used to establish a secure connection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/<database>\n")))}g.isMDXComponent=!0}}]);