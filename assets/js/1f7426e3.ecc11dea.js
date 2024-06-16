"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4087],{4782:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var a=A(4848),s=A(8453);const i={id:"architecture",title:"Architecture",sidebar_position:2},r=void 0,n={id:"apis/graphql/architecture",title:"Architecture",description:"GraphQL has been released only as a specification. This means that GraphQL is in fact not more than a long document that describes in detail the behavior of a GraphQL server.",source:"@site/docs/apis/graphql/architecture.md",sourceDirName:"apis/graphql",slug:"/apis/graphql/architecture",permalink:"/LearningCollection/apis/graphql/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"architecture",title:"Architecture",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/apis/graphql/intro"},next:{title:"Core Concepts",permalink:"/LearningCollection/apis/graphql/core-concepts"}},o={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"GraphQL server with a connected database",id:"graphql-server-with-a-connected-database",level:3},{value:"GraphQL layer that integrates existing systems",id:"graphql-layer-that-integrates-existing-systems",level:3},{value:"Hybrid approach with connected database and integration of existing system",id:"hybrid-approach-with-connected-database-and-integration-of-existing-system",level:3},{value:"Resolver Functions",id:"resolver-functions",level:2},{value:"GraphQL Client Libraries",id:"graphql-client-libraries",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["GraphQL has been released only as a specification. This means that GraphQL is in fact not more than a ",(0,a.jsx)(t.a,{href:"https://spec.graphql.org/",children:"long document"})," that describes in detail the behavior of a GraphQL server."]}),"\n",(0,a.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,a.jsx)(t.p,{children:"In this section, we\u2019ll walk you through 3 different kinds of architectures that include a GraphQL server:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"GraphQL server with a connected database"}),"\n",(0,a.jsx)(t.li,{children:"GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API"}),"\n",(0,a.jsx)(t.li,{children:"A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"All three architectures represent major use cases of GraphQL and demonstrate the flexibility in terms of the context where it can be used."}),"\n",(0,a.jsx)(t.h3,{id:"graphql-server-with-a-connected-database",children:"GraphQL server with a connected database"}),"\n",(0,a.jsxs)(t.p,{children:["This architecture will be the most common for greenfield projects. In the setup, you have a single (web) server that implements the GraphQL specification. When a query arrives at the GraphQL server, the server reads the query\u2019s payload and fetches the required information from the database. This is called resolving the query. It then constructs the response object as described in the ",(0,a.jsx)(t.a,{href:"https://spec.graphql.org/June2018/#sec-Response",children:"official specification"})," and returns it to the client."]}),"\n",(0,a.jsx)(t.p,{children:"It\u2019s important to note that GraphQL is actually transport-layer agnostic. This means it can potentially be used with any available network protocol. So, it is potentially possible to implement a GraphQL server based on TCP, WebSockets, etc."}),"\n",(0,a.jsx)(t.p,{children:"GraphQL also doesn\u2019t care about the database or the format that is used to store the data. You could use a SQL database like AWS Aurora or a NoSQL database like MongoDB."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"greenfield",src:A(3970).A+"",width:"783",height:"187"})}),"\n",(0,a.jsx)(t.h3,{id:"graphql-layer-that-integrates-existing-systems",children:"GraphQL layer that integrates existing systems"}),"\n",(0,a.jsx)(t.p,{children:"Another major use case for GraphQL is the integration of multiple existing systems behind a single, coherent GraphQL API. This is particularly compelling for companies with legacy infrastructures and many different APIs that have grown over years and now impose a high maintenance burden. One major problem with these legacy systems is that they make it practically impossible to build innovative products that need access to multiple systems."}),"\n",(0,a.jsx)(t.p,{children:"In that context, GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API. This way, new client applications can be developed that simply talk to the GraphQL server to fetch the data they need. The GraphQL server is then responsible for fetching the data from the existing systems and package it up in the GraphQL response format."}),"\n",(0,a.jsx)(t.p,{children:"Just like in the previous architecture where the GraphQL server didn\u2019t care about the type of database being used, this time it doesn\u2019t care about the data sources that it needs to fetch the data that\u2019s needed to resolve a query."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"legacy",src:A(9276).A+"",width:"906",height:"686"})}),"\n",(0,a.jsx)(t.h3,{id:"hybrid-approach-with-connected-database-and-integration-of-existing-system",children:"Hybrid approach with connected database and integration of existing system"}),"\n",(0,a.jsx)(t.p,{children:"Finally, it\u2019s possible to combine the two approaches and build a GraphQL server that has a connected database but still talks to legacy or third\u2014party systems."}),"\n",(0,a.jsx)(t.p,{children:"When a query is received by the server, it will resolve it and either retrieve the required data from the connected database or some of the integrated APIs."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"hybrid",src:A(7687).A+"",width:"723",height:"711"})}),"\n",(0,a.jsx)(t.h2,{id:"resolver-functions",children:"Resolver Functions"}),"\n",(0,a.jsx)(t.p,{children:"The payload of a GraphQL query (or mutation) consists of a set of fields. In the GraphQL server implementation, each of these fields actually corresponds to exactly one function that\u2019s called a resolver. The sole purpose of a resolver function is to fetch the data for its field."}),"\n",(0,a.jsx)(t.p,{children:"When the server receives a query, it will call all the functions for the fields that are specified in the query\u2019s payload. It thus resolves the query and is able to retrieve the correct data for each field. Once all resolvers returned, the server will package data up in the format that was described by the query and send it back to the client."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"resolvers",src:A(8428).A+"",width:"1054",height:"257"})}),"\n",(0,a.jsx)(t.h2,{id:"graphql-client-libraries",children:"GraphQL Client Libraries"}),"\n",(0,a.jsx)(t.p,{children:"GraphQL is particularly great for frontend developers since it completely eliminates many of the inconveniences and shortcomings that are experienced with REST APIs, such as over- and underfetching. Complexity is pushed to the server-side where powerful machines can take care of the heavy computation work. The client doesn\u2019t have to know where the data that it fetches is actually coming from and can use a single, coherent and flexible API."}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s consider the major change that\u2019s introduced with GraphQL in going from a rather imperative data fetching approach to a purely declarative one. When fetching data from a REST API, most applications will have to go through the following steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["construct and send HTTP request (e.g. with ",(0,a.jsx)(t.code,{children:"fetch"})," in Javascript)"]}),"\n",(0,a.jsx)(t.li,{children:"receive and parse server response"}),"\n",(0,a.jsx)(t.li,{children:"store data locally (either simply in memory or persistent)"}),"\n",(0,a.jsx)(t.li,{children:"display data in the UI"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With the ideal declarative data fetching approach, a client shouldn\u2019t be doing more than the following two steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"describe data requirements"}),"\n",(0,a.jsx)(t.li,{children:"display data in the UI"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"All the lower-level networking tasks as well as storing the data should be abstracted away and the declaration of data dependencies should be the dominant part."}),"\n",(0,a.jsx)(t.p,{children:"This is precisely what GraphQL client libraries like Relay or Apollo will enable you to do. They provide the abstraction that you need to be able to focus on the important parts of your application rather than having to deal with the repetitive implementation of infrastructure."})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3970:(e,t,A)=>{A.d(t,{A:()=>a});const a="data:image/png;base64,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"},7687:(e,t,A)=>{A.d(t,{A:()=>a});const a=A.p+"assets/images/hybrid-1ab05ad61b7428d7b1bc34e2369afab2.png"},9276:(e,t,A)=>{A.d(t,{A:()=>a});const a=A.p+"assets/images/legacy-65335a295fe61b726213975345231040.png"},8428:(e,t,A)=>{A.d(t,{A:()=>a});const a=A.p+"assets/images/resolvers-839963c022df2b4d293c1f0f3f3813e5.png"},8453:(e,t,A)=>{A.d(t,{R:()=>r,x:()=>n});var a=A(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);