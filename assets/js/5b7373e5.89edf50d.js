"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"resiliency",title:"Resiliency",sidebar_position:6},i=void 0,l={unversionedId:"Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",id:"Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",title:"Resiliency",description:"Connection pooling",source:"@site/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Resiliency.md",sourceDirName:"Databases/MongoDB/M220N MongoDB for .NET Developers",slug:"/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Resiliency.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"resiliency",title:"Resiliency",sidebar_position:6},sidebar:"mySidebar",previous:{title:"Admin Backend",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/adminBackend"},next:{title:"Notes on MongoDB",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB"}},s={},c=[{value:"Connection pooling",id:"connection-pooling",level:2},{value:"Example",id:"example",level:3},{value:"Write timeouts",id:"write-timeouts",level:2},{value:"Example",id:"example-1",level:3},{value:"ServerSelectionTimeout",id:"serverselectiontimeout",level:2},{value:"Example",id:"example-2",level:3},{value:"Principle of Least Privilege",id:"principle-of-least-privilege",level:2},{value:"User management at the database level",id:"user-management-at-the-database-level",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"connection-pooling"},"Connection pooling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A way of reusing database connections"),(0,a.kt)("li",{parentName:"ul"},"Creating a connection to the database requires time and computing resources"),(0,a.kt)("li",{parentName:"ul"},"Connection Pooling helps reduce the overhead of creating database connections"),(0,a.kt)("li",{parentName:"ul"},"By default the driver will create a pool of 100 connections to share"),(0,a.kt)("li",{parentName:"ul"},"Subsequent requests appear faster to the client")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connection pool",src:n(3640).Z,width:"821",height:"476"})),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?maxPoolSize=50\n")),(0,a.kt)("p",null,"For more options see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB Docs")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"_client = new MongoClient(new MongoClientSettings(){ MaxConnectionPoolSize = 50});\n")),(0,a.kt)("h2",{id:"write-timeouts"},"Write timeouts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We should always expect application external resources like queues, networks and databases to take more time than expected"),(0,a.kt)("li",{parentName:"ul"},"We can configure a write timeout to handle theses instances appropriately"),(0,a.kt)("li",{parentName:"ul"},'Especially when we use the WriteConcern "majority" we should always configure an appropriate timeout'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"By default"),", when using Write Concern more durable than w: 1, ",(0,a.kt)("strong",{parentName:"li"},"there is no wtimeout"),", so ",(0,a.kt)("strong",{parentName:"li"},"the server will wait indefinitely")," for operations to complete")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?wtimeoutMS=2500\n")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"_client = new MongoClient(Constants.MongoDbConnectionUriWithMaxPoolSize).WithWriteConcern(\n                new WriteConcern(wTimeout: TimeSpan.FromMilliseconds(2500))) as MongoClient;\n")),(0,a.kt)("h2",{id:"serverselectiontimeout"},"ServerSelectionTimeout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is important to always handle the ServerSelectionTimeout"),(0,a.kt)("li",{parentName:"ul"},"By handling the error we can also passively monitor the health of our application stack"),(0,a.kt)("li",{parentName:"ul"},"E.g. if a database server goes down we can identify what happened through handling the error"),(0,a.kt)("li",{parentName:"ul"},"By default the driver waits 30 seconds before raising a ServerSelectionTimeout exception but this time can be changed")),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("p",null,"Defined in the connection string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"mongodb+srv://user:password@server.net?serverSelectionTimeoutMS=5000\n")),(0,a.kt)("p",null,"Defined in code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"_client = new MongoClient(new MongoClientSettings(){ ServerSelectionTimeout = TimeSpan.FromMilliseconds(5000)});\n")),(0,a.kt)("h2",{id:"principle-of-least-privilege"},"Principle of Least Privilege"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.")),(0,a.kt)("p",null,"Jerome Saltzer, Communications of the ACM"),(0,a.kt)("h3",{id:"user-management-at-the-database-level"},"User management at the database level"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MongoDB offers user management at the database level"),(0,a.kt)("li",{parentName:"ul"},"by creating a database user specifically for the application, we can in a more granular way select the privileges and resources that mFlix should have access to"),(0,a.kt)("li",{parentName:"ul"},"this kind of forces us to ask the question, should the application be able to create indexes or create new collections, or should the application be able to drop an entire database?"),(0,a.kt)("li",{parentName:"ul"},"very important in order to prevent the application from accessing a resource that it should never need"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If the application has permission to use an important collection that it's not programmed to ever use, than that permission exists only as a vulnerability in our application, and we should remove it"))),(0,a.kt)("p",null,"More resources on security within MongoDB see: ",(0,a.kt)("a",{parentName:"p",href:"https://university.mongodb.com/courses/M310/about"},"MongoDB University"),"."),(0,a.kt)("p",null,"Course was retired to push Atlas... \ud83d\ude44",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/security/"},"Documentation")," instead."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always use connection pooling"),(0,a.kt)("li",{parentName:"ul"},'Always specify a wtimeout with majority writes (or even a write concern more durable than "1")'),(0,a.kt)("li",{parentName:"ul"},"Always handle serverSelectionTimeout errors"),(0,a.kt)("li",{parentName:"ul"},"Always handle errors like with any C# application"),(0,a.kt)("li",{parentName:"ul"},"Engineer systems with the principle of least privilege in mind")))}u.isMDXComponent=!0},3640:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connectionPool-8caa20728134a848beb11974938109a2.PNG"}}]);