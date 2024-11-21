"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8217],{11670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(74848),i=r(28453);const s={id:"queries",title:"Queries",sidebar_position:2},o=void 0,a={id:"csharp/libraries/hot-chocolate/queries",title:"Queries",description:"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them.",source:"@site/docs/csharp/libraries/hot-chocolate/queries.md",sourceDirName:"csharp/libraries/hot-chocolate",slug:"/csharp/libraries/hot-chocolate/queries",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/queries",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/queries.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"queries",title:"Queries",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/introduction"},next:{title:"Mutations",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/mutations"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Lists",id:"lists",level:2},{value:"Usage",id:"usage-1",level:3},{value:"<code>[GraphQLDeprecated]</code>",id:"graphqldeprecated",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them.\nA query type is required for every GraphQL server.\nQueries are expected to be side-effect free and are therefore parallelized by the execution engine."}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"A query type can be defined like the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'[QueryType]\npublic class Query\n{\n    public Book GetBook()\n    {\n        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["A query type is just a regular object type, so everything that applies to an ",(0,n.jsx)(t.a,{href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/object-types",children:"object type"})," also applies to the query type (this is true for all root types)."]}),"\n",(0,n.jsx)(t.h2,{id:"lists",children:"Lists"}),"\n",(0,n.jsxs)(t.p,{children:["GraphQL allows us to return lists of elements from our fields.\nQuerying a list field will result in an ordered list containing elements with the specified sub-selection of fields.\nMore information about lists can be found in the ",(0,n.jsx)(t.a,{href:"https://graphql.org/learn/schema/#lists-and-non-null",children:"official GraphQL documentation"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["If our field resolver returns a list type, e.g. ",(0,n.jsx)(t.code,{children:"IEnumerable<T>"})," or ",(0,n.jsx)(t.code,{children:"IQueryable<T>"}),", it will automatically be treated as a list type in the schema."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"[QueryType]\npublic class Query\n{\n    public List<User> GetUsers()\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"graphqldeprecated",children:(0,n.jsx)(t.code,{children:"[GraphQLDeprecated]"})}),"\n",(0,n.jsx)(t.p,{children:"Instead of removing a field immediately and possibly breaking existing consumers of our API, fields can be marked as deprecated in our schema. This signals to consumers that the field will be removed in the future and they need to adapt before then."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'public class Query\n{\n    [GraphQLDeprecated("Use the `authors` field instead")]\n    public User[] GetUsers()\n    {\n        // Omitted code for brevity\n    }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);