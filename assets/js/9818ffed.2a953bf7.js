"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={id:"clients",title:"Clients",sidebar_position:4},r=void 0,l={unversionedId:"apis/graphql/clients",id:"apis/graphql/clients",title:"Clients",description:"Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let\u2019s consider some \u201cinfrastructure\u201d features that you probably want to have in your app:",source:"@site/docs/apis/graphql/clients.md",sourceDirName:"apis/graphql",slug:"/apis/graphql/clients",permalink:"/LearningCollection/apis/graphql/clients",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/clients.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"clients",title:"Clients",sidebar_position:4},sidebar:"finance",previous:{title:"Core Concepts",permalink:"/LearningCollection/apis/graphql/core-concepts"},next:{title:"Server",permalink:"/LearningCollection/apis/graphql/server"}},s={},p=[{value:"Send Queries and Mutations Directly",id:"send-queries-and-mutations-directly",level:2},{value:"View Layer Integrations &amp; UI updates",id:"view-layer-integrations--ui-updates",level:2},{value:"Caching Query Results: Concepts and Strategies",id:"caching-query-results-concepts-and-strategies",level:2},{value:"Build-time Schema Validation &amp; Optimizations",id:"build-time-schema-validation--optimizations",level:2},{value:"Colocating Views and Data Dependencies",id:"colocating-views-and-data-dependencies",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Working with a GraphQL API on the frontend is a great opportunity to develop new abstractions and help implement common functionality on the client-side. Let\u2019s consider some \u201cinfrastructure\u201d features that you probably want to have in your app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"send queries and mutations directly without constructing HTTP requests"),(0,i.kt)("li",{parentName:"ul"},"view-layer integration"),(0,i.kt)("li",{parentName:"ul"},"caching"),(0,i.kt)("li",{parentName:"ul"},"validation and optimization of queries based on the schema")),(0,i.kt)("p",null,"Of course, nothing stops you from using plain HTTP to fetch your data and then shifting all the bits yourself until the right information ends up in your UI. But, GraphQL provides the ability to abstract away a lot of the manual work you\u2019d usually have to do during that process and lets you focus on the real important parts of your app! In the following, we\u2019ll discuss in a bit more detail what these tasks are."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There are two major GraphQL clients available at the moment. The first one is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client"},"Apollo Client"),", which is a community-driven effort to build a powerful and flexible GraphQL client for all major development platforms. The second one is called ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/"},"Relay")," and it is Facebook\u2019s homegrown GraphQL client that heavily optimizes for performance and is only available on the web.")),(0,i.kt)("h2",{id:"send-queries-and-mutations-directly"},"Send Queries and Mutations Directly"),(0,i.kt)("p",null,"One major benefit of GraphQL is that it allows you to fetch and update data in a declarative manner. Put differently, we climb up one step higher on the API abstraction ladder and don\u2019t have to deal with low-level networking tasks ourselves anymore."),(0,i.kt)("p",null,"Where you previously used plain HTTP (like ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," in Javascript or ",(0,i.kt)("inlineCode",{parentName:"p"},"NSURLSession")," on iOS) to load data from an API, all you need with GraphQL is a query where you declare your data requirements and let the system take care of sending the request and handling the response for you. This is precisely what a GraphQL client will do."),(0,i.kt)("h2",{id:"view-layer-integrations--ui-updates"},"View Layer Integrations & UI updates"),(0,i.kt)("p",null,"Once the server response is received and handled by the GraphQL client, the requested data somehow needs to end up in your UI. Depending on the platforms and frameworks you\u2019re developing with, there will be different approaches to how UI updates are handled in general."),(0,i.kt)("p",null,"Taking React as an example, GraphQL clients use the concept of ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/higher-order-components.html"},"higher-order components")," to fetch the needed data under the hood and make it available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," of your components. In general, the declarative nature of GraphQL ties in particularly well with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_reactive_programming"},"functional reactive programming")," techniques. These two form a powerful combination where a view simply declares its data dependencies and the UI is wired up with an FRP layer of your choice."),(0,i.kt)("h2",{id:"caching-query-results-concepts-and-strategies"},"Caching Query Results: Concepts and Strategies"),(0,i.kt)("p",null,"In the majority of applications, you\u2019ll want to maintain a cache of the data that was previously fetched from the server. Caching information locally is essential to provide a fluent user experience and also takes the load off your users\u2019 data plans."),(0,i.kt)("p",null,"Generally, when caching data, the intuition is to put information that\u2019s fetched remotely into a local store from where it can be retrieved later on. With GraphQL, the naive approach would be to simply put the results of GraphQL queries into the store and simply return them whenever the same query is sent. It turns out this approach is very inefficient for most applications."),(0,i.kt)("p",null,"A more beneficial approach is to normalize the data beforehand. That means that the (potentially nested) query result gets flattened and the store will only contain individual records that can be referenced with a globally unique ID. If you want to learn more about this, the ",(0,i.kt)("a",{parentName:"p",href:"https://dev-blog.apollodata.com/the-concepts-of-graphql-bc68bd819be3"},"Apollo blog")," has a great write-up on the topic."),(0,i.kt)("h2",{id:"build-time-schema-validation--optimizations"},"Build-time Schema Validation & Optimizations"),(0,i.kt)("p",null,"Since the schema contains all information about what a client can potentially do with a GraphQL API, there is a great opportunity to validate and potentially optimize the queries that a client wants to send already at build-time."),(0,i.kt)("p",null,"When the build environment has access to the schema, it can essentially parse all the GraphQL code that\u2019s located in the project and compare it against the information from the schema. This catches typos and other errors before an application gets into the hands of actual users where the consequences of an error would be a lot more drastic."),(0,i.kt)("h2",{id:"colocating-views-and-data-dependencies"},"Colocating Views and Data Dependencies"),(0,i.kt)("p",null,"A powerful concept of GraphQL is that it allows you to have UI code and data requirements side-by-side. The tight coupling of views and their data dependencies greatly improves the developer experience. The mental overhead of thinking about how the right data ends up in the right parts of the UI is eliminated."),(0,i.kt)("p",null,"How well colocation works depends on the platform you\u2019re developing on. For example in Javascript applications, it\u2019s possible to actually put data dependencies and UI code into the same file. In Xcode, the Assistant Editor can be used to work on view controllers and graphql code at the same time."))}h.isMDXComponent=!0}}]);