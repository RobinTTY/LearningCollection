"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"queries",title:"Queries",sidebar_position:2},o=void 0,l={unversionedId:"csharp/libraries/hot-chocolate/queries",id:"csharp/libraries/hot-chocolate/queries",title:"Queries",description:"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them.",source:"@site/docs/csharp/libraries/hot-chocolate/queries.md",sourceDirName:"csharp/libraries/hot-chocolate",slug:"/csharp/libraries/hot-chocolate/queries",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/queries",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/queries.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"queries",title:"Queries",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/introduction"},next:{title:"Mutations",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/mutations"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Lists",id:"lists",level:2},{value:"Usage",id:"usage-1",level:3},{value:"<code>[GraphQLDeprecated]</code>",id:"graphqldeprecated",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them.\nA query type is required for every GraphQL server.\nQueries are expected to be side-effect free and are therefore parallelized by the execution engine."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"A query type can be defined like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'[QueryType]\npublic class Query\n{\n    public Book GetBook()\n    {\n        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };\n    }\n}\n')),(0,a.kt)("p",null,"A query type is just a regular object type, so everything that applies to an ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/object-types"},"object type")," also applies to the query type (this is true for all root types)."),(0,a.kt)("h2",{id:"lists"},"Lists"),(0,a.kt)("p",null,"GraphQL allows us to return lists of elements from our fields.\nQuerying a list field will result in an ordered list containing elements with the specified sub-selection of fields.\nMore information about lists can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#lists-and-non-null"},"official GraphQL documentation"),"."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,"If our field resolver returns a list type, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"IEnumerable<T>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"IQueryable<T>"),", it will automatically be treated as a list type in the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[QueryType]\npublic class Query\n{\n    public List<User> GetUsers()\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,a.kt)("h2",{id:"graphqldeprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"[GraphQLDeprecated]")),(0,a.kt)("p",null,"Instead of removing a field immediately and possibly breaking existing consumers of our API, fields can be marked as deprecated in our schema. This signals to consumers that the field will be removed in the future and they need to adapt before then."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    [GraphQLDeprecated("Use the `authors` field instead")]\n    public User[] GetUsers()\n    {\n        // Omitted code for brevity\n    }\n}\n')))}d.isMDXComponent=!0}}]);