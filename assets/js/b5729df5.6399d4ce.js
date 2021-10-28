"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2119],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,b=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?o.createElement(b,i(i({ref:t},u),{},{components:n})):o.createElement(b,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"notesOnMongoDB",title:"Notes on MongoDB",sidebar_position:7},s=void 0,c={unversionedId:"Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",id:"Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",isDocsHomePage:!1,title:"Notes on MongoDB",description:"ObjectId",source:"@site/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/ObjectId, BsonId, BsonRepresentation and BsonElement.md",sourceDirName:"Databases/MongoDB/M220N MongoDB for .NET Developers",slug:"/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/notesOnMongoDB",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/ObjectId, BsonId, BsonRepresentation and BsonElement.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"notesOnMongoDB",title:"Notes on MongoDB",sidebar_position:7},sidebar:"mySidebar",previous:{title:"Resiliency",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/resiliency"},next:{title:"Important Mongo Shell Commands",permalink:"/LearningCollection/Databases/MongoDB/mongoShellCommands"}},u=[{value:"ObjectId",id:"objectid",children:[]},{value:"The BsonId attribute",id:"the-bsonid-attribute",children:[]},{value:"The BsonRepresentation attribute",id:"the-bsonrepresentation-attribute",children:[]},{value:"The BsonElement attribute",id:"the-bsonelement-attribute",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"objectid"},"ObjectId"),(0,a.kt)("p",null,"If you have a column named Id, id or ","_",'id, in your strongly typed TDocument class (the item type in a collection), then a column named "',"_",'id" will be generated in Mongo. It will also create an index for that column. You get a duplicate key error exception if trying to insert an item with a key that already exists.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId Id { get; set; }\n")),(0,a.kt)("p",null,"will use the type generator for ObjectId and it will look like ","_",'id: ObjectId("57ade20771e59f422cc652d9").'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Guid _id { get; set; }\n")),(0,a.kt)("p",null,'will use the Guid generator to produce something like "',"_",'id" : BinData(3,"s2Td7qdghkywlfMSWMPzaA==").'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public int Id { get; set; }\npublic string id { get; set; }\npublic byte[] _id { get; set; }\n")),(0,a.kt)("p",null,"will also be index columns using the defaults for each type if not specified."),(0,a.kt)("p",null,"The Id property is required for mapping the Common Language Runtime (CLR) object to the MongoDB collection."),(0,a.kt)("h2",{id:"the-bsonid-attribute"},"The ","[BsonId]"," attribute"),(0,a.kt)("p",null,"Designates this property as the document's primary key.\nGives you the flexibility of naming that index any way you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId] public Guid SmthElseOtherThanId { get; set; }\n[BsonId] public string StringId { get; set; }\n")),(0,a.kt)("p",null,"will be indexes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Guid SmthElseOtherThanId { get; set; }\npublic string StringId { get; set; }\n")),(0,a.kt)("p",null,"won't be indexes. MongoDB will still use ","_","id internally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId SmthElseOtherThanId {get; set;}\n")),(0,a.kt)("p",null,"with no ","[BsonId]"," decoration also won't be an index column."),(0,a.kt)("h2",{id:"the-bsonrepresentation-attribute"},"The ","[BsonRepresentation]"," attribute"),(0,a.kt)("p",null,"Lets you juggle with the Mongo type vs the internal .Net type, if there's a conversion between them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic ObjectId Id { get; set; }\n")),(0,a.kt)("p",null,"is identical to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public ObjectId Id { get; set; }\n")),(0,a.kt)("p",null,"This is different however:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic string Id { get; set; }\n")),(0,a.kt)("p",null,"Mongo will auto generate object ids by itself, however you will be able to use strings in .net, filter queries etc., because there is a conversion between object id and string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic byte[] Id { get; set; }\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.ObjectId)]\npublic int Id { get; set; }\n")),(0,a.kt)("p",null,"will fail with a ObjectId not a valid representation for a ByteArraySerializer / Int32Serializer message."),(0,a.kt)("p",null,"But"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[BsonId]\n[BsonRepresentation(BsonType.String)]\npublic int StringId { get; set; }\n")),(0,a.kt)("p",null,"will be just fine."),(0,a.kt)("h2",{id:"the-bsonelement-attribute"},"The ","[BsonElement]"," attribute"),(0,a.kt)("p",null,"If we want to use a different property name than what is used in the database we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"[BsonElement]")," attribute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class MyClass\n{\n    [BsonElement("sp")]\n    public string SomeProperty { get; set; }\n}\n')))}d.isMDXComponent=!0}}]);