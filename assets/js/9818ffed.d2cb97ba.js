"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4684],{2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(4848),i=n(8453);const o={id:"clients",title:"Clients",sidebar_position:4},r=void 0,s={id:"apis/graphql/clients",title:"Clients",description:"Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let\u2019s consider some \u201cinfrastructure\u201d features that you probably want to have in your app:",source:"@site/docs/apis/graphql/clients.md",sourceDirName:"apis/graphql",slug:"/apis/graphql/clients",permalink:"/LearningCollection/apis/graphql/clients",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/clients.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"clients",title:"Clients",sidebar_position:4},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/LearningCollection/apis/graphql/core-concepts"},next:{title:"Server",permalink:"/LearningCollection/apis/graphql/server"}},l={},h=[{value:"Send Queries and Mutations Directly",id:"send-queries-and-mutations-directly",level:2},{value:"View Layer Integrations &amp; UI updates",id:"view-layer-integrations--ui-updates",level:2},{value:"Caching Query Results: Concepts and Strategies",id:"caching-query-results-concepts-and-strategies",level:2},{value:"Build-time Schema Validation &amp; Optimizations",id:"build-time-schema-validation--optimizations",level:2},{value:"Colocating Views and Data Dependencies",id:"colocating-views-and-data-dependencies",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let\u2019s consider some \u201cinfrastructure\u201d features that you probably want to have in your app:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"send queries and mutations directly without constructing HTTP requests"}),"\n",(0,a.jsx)(t.li,{children:"view-layer integration"}),"\n",(0,a.jsx)(t.li,{children:"caching"}),"\n",(0,a.jsx)(t.li,{children:"validation and optimization of queries based on the schema"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Of course, nothing stops you from using plain HTTP to fetch your data and then shifting all the bits yourself until the right information ends up in your UI. But, GraphQL provides the ability to abstract away a lot of the manual work you\u2019d usually have to do during that process and lets you focus on the real important parts of your app! In the following, we\u2019ll discuss in a bit more detail what these tasks are."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["There are two major GraphQL clients available at the moment. The first one is ",(0,a.jsx)(t.a,{href:"https://github.com/apollographql/apollo-client",children:"Apollo Client"}),", which is a community-driven effort to build a powerful and flexible GraphQL client for all major development platforms. The second one is called ",(0,a.jsx)(t.a,{href:"https://facebook.github.io/relay/",children:"Relay"})," and it is Facebook\u2019s homegrown GraphQL client that heavily optimizes for performance and is only available on the web."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"send-queries-and-mutations-directly",children:"Send Queries and Mutations Directly"}),"\n",(0,a.jsx)(t.p,{children:"One major benefit of GraphQL is that it allows you to fetch and update data in a declarative manner. Put differently, we climb up one step higher on the API abstraction ladder and don\u2019t have to deal with low-level networking tasks ourselves anymore."}),"\n",(0,a.jsxs)(t.p,{children:["Where you previously used plain HTTP (like ",(0,a.jsx)(t.code,{children:"fetch"})," in Javascript or ",(0,a.jsx)(t.code,{children:"NSURLSession"})," on iOS) to load data from an API, all you need with GraphQL is a query where you declare your data requirements and let the system take care of sending the request and handling the response for you. This is precisely what a GraphQL client will do."]}),"\n",(0,a.jsx)(t.h2,{id:"view-layer-integrations--ui-updates",children:"View Layer Integrations & UI updates"}),"\n",(0,a.jsx)(t.p,{children:"Once the server response is received and handled by the GraphQL client, the requested data somehow needs to end up in your UI. Depending on the platforms and frameworks you\u2019re developing with, there will be different approaches to how UI updates are handled in general."}),"\n",(0,a.jsxs)(t.p,{children:["Taking React as an example, GraphQL clients use the concept of ",(0,a.jsx)(t.a,{href:"https://facebook.github.io/react/docs/higher-order-components.html",children:"higher-order components"})," to fetch the needed data under the hood and make it available in the ",(0,a.jsx)(t.code,{children:"props"})," of your components. In general, the declarative nature of GraphQL ties in particularly well with ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Functional_reactive_programming",children:"functional reactive programming"})," techniques. These two form a powerful combination where a view simply declares its data dependencies and the UI is wired up with an FRP layer of your choice."]}),"\n",(0,a.jsx)(t.h2,{id:"caching-query-results-concepts-and-strategies",children:"Caching Query Results: Concepts and Strategies"}),"\n",(0,a.jsx)(t.p,{children:"In the majority of applications, you\u2019ll want to maintain a cache of the data that was previously fetched from the server. Caching information locally is essential to provide a fluent user experience and also takes the load off your users\u2019 data plans."}),"\n",(0,a.jsx)(t.p,{children:"Generally, when caching data, the intuition is to put information that\u2019s fetched remotely into a local store from where it can be retrieved later on. With GraphQL, the naive approach would be to simply put the results of GraphQL queries into the store and simply return them whenever the same query is sent. It turns out this approach is very inefficient for most applications."}),"\n",(0,a.jsxs)(t.p,{children:["A more beneficial approach is to normalize the data beforehand. That means that the (potentially nested) query result gets flattened and the store will only contain individual records that can be referenced with a globally unique ID. If you want to learn more about this, the ",(0,a.jsx)(t.a,{href:"https://dev-blog.apollodata.com/the-concepts-of-graphql-bc68bd819be3",children:"Apollo blog"})," has a great write-up on the topic."]}),"\n",(0,a.jsx)(t.h2,{id:"build-time-schema-validation--optimizations",children:"Build-time Schema Validation & Optimizations"}),"\n",(0,a.jsx)(t.p,{children:"Since the schema contains all information about what a client can potentially do with a GraphQL API, there is a great opportunity to validate and potentially optimize the queries that a client wants to send already at build-time."}),"\n",(0,a.jsx)(t.p,{children:"When the build environment has access to the schema, it can essentially parse all the GraphQL code that\u2019s located in the project and compare it against the information from the schema. This catches typos and other errors before an application gets into the hands of actual users where the consequences of an error would be a lot more drastic."}),"\n",(0,a.jsx)(t.h2,{id:"colocating-views-and-data-dependencies",children:"Colocating Views and Data Dependencies"}),"\n",(0,a.jsx)(t.p,{children:"A powerful concept of GraphQL is that it allows you to have UI code and data requirements side-by-side. The tight coupling of views and their data dependencies greatly improves the developer experience. The mental overhead of thinking about how the right data ends up in the right parts of the UI is eliminated."}),"\n",(0,a.jsx)(t.p,{children:"How well colocation works depends on the platform you\u2019re developing on. For example in Javascript applications, it\u2019s possible to actually put data dependencies and UI code into the same file. In Xcode, the Assistant Editor can be used to work on view controllers and graphql code at the same time."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(6540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);