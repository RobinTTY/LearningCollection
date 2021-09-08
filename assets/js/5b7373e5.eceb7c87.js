"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[231],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"resiliency",title:"Resiliency",sidebar_position:6},s=void 0,c={unversionedId:"Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",id:"Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",isDocsHomePage:!1,title:"Resiliency",description:"Connection pooling",source:"@site/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Resiliency.md",sourceDirName:"Databases/MongoDB/M220N MongoDB for .NET Developers",slug:"/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Resiliency.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"resiliency",title:"Resiliency",sidebar_position:6},sidebar:"mySidebar",previous:{title:"Admin Backend",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/adminBackend"},next:{title:"Notes on MongoDB",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB"}},p=[{value:"Connection pooling",id:"connection-pooling",children:[{value:"Example",id:"example",children:[]}]},{value:"Write timeouts",id:"write-timeouts",children:[{value:"Example",id:"example-1",children:[]}]},{value:"ServerSelectionTimeout",id:"serverselectiontimeout",children:[{value:"Example",id:"example-2",children:[]}]},{value:"Principle of Least Privilege",id:"principle-of-least-privilege",children:[{value:"User management at the database level",id:"user-management-at-the-database-level",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"connection-pooling"},"Connection pooling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A way of reusing database connections"),(0,a.kt)("li",{parentName:"ul"},"Creating a connection to the database requires time and computing resources"),(0,a.kt)("li",{parentName:"ul"},"Connection Pooling helps reduce the overhead of creating database connections"),(0,a.kt)("li",{parentName:"ul"},"By default the driver will create a pool of 100 connections to share"),(0,a.kt)("li",{parentName:"ul"},"Subsequent requests appear faster to the client")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connection pool",src:n(7913).Z})),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?maxPoolSize=50\n")),(0,a.kt)("p",null,"For more options see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Docs")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"_client = new MongoClient(new MongoClientSettings(){ MaxConnectionPoolSize = 50});\n")),(0,a.kt)("h2",{id:"write-timeouts"},"Write timeouts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We should always expect application external resources like queues, networks and databases to take more time than expected"),(0,a.kt)("li",{parentName:"ul"},"We can configure a write timeout to handle theses instances appropriately"),(0,a.kt)("li",{parentName:"ul"},'Especially when we use the WriteConcern "majority" we should always configure an appropriate timeout'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"By default"),", when using Write Concern more durable than w: 1, ",(0,a.kt)("strong",{parentName:"li"},"there is no wtimeout"),", so ",(0,a.kt)("strong",{parentName:"li"},"the server will wait indefinitely")," for operations to complete")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?wtimeoutMS=2500\n")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"_client = new MongoClient(Constants.MongoDbConnectionUriWithMaxPoolSize).WithWriteConcern(\n                new WriteConcern(wTimeout: TimeSpan.FromMilliseconds(2500))) as MongoClient;\n")),(0,a.kt)("h2",{id:"serverselectiontimeout"},"ServerSelectionTimeout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is important to always handle the ServerSelectionTimeout"),(0,a.kt)("li",{parentName:"ul"},"By handling the error we can also passively monitor the health of our application stack"),(0,a.kt)("li",{parentName:"ul"},"E.g. if a database server goes down we can identify what happened through handling the error"),(0,a.kt)("li",{parentName:"ul"},"By default the driver waits 30 seconds before raising a ServerSelectionTimeout exception but this time can be changed")),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?serverSelectionTimeoutMS=5000\n")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"_client = new MongoClient(new MongoClientSettings(){ ServerSelectionTimeout = TimeSpan.FromMilliseconds(5000)});\n")),(0,a.kt)("h2",{id:"principle-of-least-privilege"},"Principle of Least Privilege"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.")),(0,a.kt)("p",null,"Jerome Saltzer, Communications of the ACM"),(0,a.kt)("h3",{id:"user-management-at-the-database-level"},"User management at the database level"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MongoDB offers user management at the database level"),(0,a.kt)("li",{parentName:"ul"},"by creating a database user specifically for the application, we can in a more granular way select the privileges and resources that mFlix should have access to"),(0,a.kt)("li",{parentName:"ul"},"this kind of forces us to ask the question, should the application be able to create indexes or create new collections, or should the application be able to drop an entire database?"),(0,a.kt)("li",{parentName:"ul"},"very important in order to prevent the application from accessing a resource that it should never need"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If the application has permission to use an important collection that it's not programmed to ever use, than that permission exists only as a vulnerability in our application, and we should remove it"))),(0,a.kt)("p",null,"More resources on security within MongoDB see: ",(0,a.kt)("a",{parentName:"p",href:"https://university.mongodb.com/courses/M310/about"},"MongoDB University"),"."),(0,a.kt)("p",null,"Course was retired to push Atlas... \ud83d\ude44",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/security/"},"Documentation")," instead."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always use connection pooling"),(0,a.kt)("li",{parentName:"ul"},'Always specify a wtimeout with majority writes (or even a write concern more durable than "1")'),(0,a.kt)("li",{parentName:"ul"},"Always handle serverSelectionTimeout errors"),(0,a.kt)("li",{parentName:"ul"},"Always handle errors like with any C# application"),(0,a.kt)("li",{parentName:"ul"},"Engineer systems with the principle of least privilege in mind")))}m.isMDXComponent=!0},7913:function(e,t,n){t.Z=n.p+"assets/images/connectionPool-8caa20728134a848beb11974938109a2.PNG"}}]);