"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,b=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(b,l(l({ref:t},p),{},{components:n})):o.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"notesOnMongoDB",title:"Notes on MongoDB",sidebar_position:7},l=void 0,i={unversionedId:"Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",id:"Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",title:"Notes on MongoDB",description:"ObjectId",source:"@site/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/ObjectId, BsonId, BsonRepresentation and BsonElement.md",sourceDirName:"Databases/MongoDB/M220N MongoDB for .NET Developers",slug:"/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/ObjectId, BsonId, BsonRepresentation and BsonElement.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"notesOnMongoDB",title:"Notes on MongoDB",sidebar_position:7},sidebar:"finance",previous:{title:"Resiliency",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency"},next:{title:"Tags",permalink:"/LearningCollection/Tools/git/tags"}},s={},c=[{value:"ObjectId",id:"objectid",level:2},{value:"The BsonId attribute",id:"the-bsonid-attribute",level:2},{value:"The BsonRepresentation attribute",id:"the-bsonrepresentation-attribute",level:2},{value:"The BsonElement attribute",id:"the-bsonelement-attribute",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"objectid"},"ObjectId"),(0,r.kt)("p",null,"If you have a column named Id, id or ","_",'id, in your strongly typed TDocument class (the item type in a collection), then a column named "',"_",'id" will be generated in Mongo. It will also create an index for that column. You get a duplicate key error exception if trying to insert an item with a key that already exists.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId Id { get; set; }\n")),(0,r.kt)("p",null,"will use the type generator for ObjectId and it will look like ","_",'id: ObjectId("57ade20771e59f422cc652d9").'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Guid _id { get; set; }\n")),(0,r.kt)("p",null,'will use the Guid generator to produce something like "',"_",'id" : BinData(3,"s2Td7qdghkywlfMSWMPzaA==").'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public int Id { get; set; }\npublic string id { get; set; }\npublic byte[] _id { get; set; }\n")),(0,r.kt)("p",null,"will also be index columns using the defaults for each type if not specified."),(0,r.kt)("p",null,"The Id property is required for mapping the Common Language Runtime (CLR) object to the MongoDB collection."),(0,r.kt)("h2",{id:"the-bsonid-attribute"},"The ","[BsonId]"," attribute"),(0,r.kt)("p",null,"Designates this property as the document's primary key.\nGives you the flexibility of naming that index any way you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId] public Guid SmthElseOtherThanId { get; set; }\n[BsonId] public string StringId { get; set; }\n")),(0,r.kt)("p",null,"will be indexes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Guid SmthElseOtherThanId { get; set; }\npublic string StringId { get; set; }\n")),(0,r.kt)("p",null,"won't be indexes. MongoDB will still use ","_","id internally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId SmthElseOtherThanId {get; set;}\n")),(0,r.kt)("p",null,"with no ","[BsonId]"," decoration also won't be an index column."),(0,r.kt)("h2",{id:"the-bsonrepresentation-attribute"},"The ","[BsonRepresentation]"," attribute"),(0,r.kt)("p",null,"Lets you juggle with the Mongo type vs the internal .Net type, if there's a conversion between them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic ObjectId Id { get; set; }\n")),(0,r.kt)("p",null,"is identical to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId Id { get; set; }\n")),(0,r.kt)("p",null,"This is different however:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic string Id { get; set; }\n")),(0,r.kt)("p",null,"Mongo will auto generate object ids by itself, however you will be able to use strings in .net, filter queries etc., because there is a conversion between object id and string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic byte[] Id { get; set; }\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic int Id { get; set; }\n")),(0,r.kt)("p",null,"will fail with a ObjectId not a valid representation for a ByteArraySerializer / Int32Serializer message."),(0,r.kt)("p",null,"But"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.String)]\npublic int StringId { get; set; }\n")),(0,r.kt)("p",null,"will be just fine."),(0,r.kt)("h2",{id:"the-bsonelement-attribute"},"The ","[BsonElement]"," attribute"),(0,r.kt)("p",null,"If we want to use a different property name than what is used in the database we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"[BsonElement]")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class MyClass\n{\n    [BsonElement("sp")]\n    public string SomeProperty { get; set; }\n}\n')))}d.isMDXComponent=!0}}]);