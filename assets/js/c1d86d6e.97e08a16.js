"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2446],{2646:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(4848),n=i(8453);const r={id:"security",title:"Security",sidebar_position:3},o=void 0,a={id:"apis/graphql/advanced-concepts/security",title:"Security",description:"Since clients have the possibility to craft very complex queries, a GraphQL server must be ready to handle them properly. These queries may be abusive queries from evil clients, or may simply be very large queries used by legitimate clients. In both of these cases, the client can potentially take your GraphQL server down.",source:"@site/docs/apis/graphql/advanced-concepts/security.md",sourceDirName:"apis/graphql/advanced-concepts",slug:"/apis/graphql/advanced-concepts/security",permalink:"/LearningCollection/apis/graphql/advanced-concepts/security",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/advanced-concepts/security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"security",title:"Security",sidebar_position:3},sidebar:"docs",previous:{title:"Introspection",permalink:"/LearningCollection/apis/graphql/advanced-concepts/introspection"},next:{title:"Interfaces",permalink:"/LearningCollection/apis/graphql/schemas-and-types/interfaces"}},l={},c=[{value:"Timeout",id:"timeout",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Maximum Query Depth",id:"maximum-query-depth",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3},{value:"Query Complexity",id:"query-complexity",level:2},{value:"Pros",id:"pros-2",level:3},{value:"Cons",id:"cons-2",level:3},{value:"Throttling",id:"throttling",level:2},{value:"Throttling Based on Server Time",id:"throttling-based-on-server-time",level:3},{value:"Throttling Based on Query Complexity",id:"throttling-based-on-query-complexity",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Since clients have the possibility to craft very complex queries, a GraphQL server must be ready to handle them properly. These queries may be abusive queries from evil clients, or may simply be very large queries used by legitimate clients. In both of these cases, the client can potentially take your GraphQL server down."}),"\n",(0,s.jsx)(t.p,{children:"There are a few strategies to mitigate these risks. We will cover them in this chapter in order from the simplest to the most complex, and look at their pros and cons."}),"\n",(0,s.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,s.jsx)(t.p,{children:"The first strategy and the simplest one is using a timeout to defend against large queries. This strategy is the simplest since it does not require the server to know anything about the incoming queries. All the server knows is the maximum time allowed for a query."}),"\n",(0,s.jsx)(t.p,{children:"For example, a server configured with a 5 seconds timeout would stop the execution of any query that is taking more than 5 seconds to execute."}),"\n",(0,s.jsx)(t.h3,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Simple to implement"}),"\n",(0,s.jsx)(t.li,{children:"Most strategies will still use a timeout as a final protection"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Damage can already be done even when the timeout kicks in"}),"\n",(0,s.jsx)(t.li,{children:"Sometimes hard to implement. Cutting connections after a certain time may result in strange behaviors"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"maximum-query-depth",children:"Maximum Query Depth"}),"\n",(0,s.jsx)(t.p,{children:"Clients using GraphQL may craft any complex query they want. Since GraphQL schemas are often cyclic graphs, this means a client could craft a query like this one:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'query IAmEvil {\n  author(id: "abc") {\n    posts {\n      author {\n        posts {\n          author {\n            posts {\n              author {\n                # that could go on as deep as the client wants!\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Knowing your schema might give you an idea of how deep a legitimate query can go. This is actually possible to implement and is often called Maximum Query Depth."}),"\n",(0,s.jsx)(t.p,{children:"By analyzing the query document\u2019s abstract syntax tree (AST), a GraphQL server is able to reject or accept a request based on its depth."}),"\n",(0,s.jsxs)(t.p,{children:["Take for example a server configured with a Maximum Query Depth of ",(0,s.jsx)(t.code,{children:"3"}),", and the following query document. Everything within the red marker is considered too deep and the query is invalid."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"query-depth",src:i(2861).A+"",width:"596",height:"562"})}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.code,{children:"graphql-ruby"})," with the max query depth setting, we get the following result:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "message": "Query has depth of 6, which exceeds max depth of 3"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"pros-1",children:"Pros"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Since the AST of the document is analyzed statically, the query does not even execute, which adds no load on your GraphQL server."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cons-1",children:"Cons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Depth alone is often not enough to cover all abusive queries. For example, a query requesting an enormous amount of nodes on the root will be very expensive but unlikely to be blocked by a query depth analyzer."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"query-complexity",children:"Query Complexity"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes, the depth of a query is not enough to truly know how large or expensive a GraphQL query will be. In a lot of cases, certain fields in our schema are known to be more complex to compute than others."}),"\n",(0,s.jsx)(t.p,{children:"Query complexity allows you to define how complex these fields are, and to restrict queries with a maximum complexity. The idea is to define how complex each field is by using a simple number. A common default is to give each field a complexity of 1. Take this query for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'query {\n  author(id: "abc") { # complexity: 1\n    posts {           # complexity: 1\n      title           # complexity: 1\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["A simple addition gives us a total of ",(0,s.jsx)(t.code,{children:"3"})," for the complexity of this query. If we were to set a max complexity of ",(0,s.jsx)(t.code,{children:"2"})," on our schema, this query would fail."]}),"\n",(0,s.jsxs)(t.p,{children:["What if the ",(0,s.jsx)(t.code,{children:"posts"})," field is actually much more complex than the ",(0,s.jsx)(t.code,{children:"author"})," field? We can set a different complexity to the field. We can even set a different complexity depending on arguments! Let\u2019s take a look at a similar query, where ",(0,s.jsx)(t.code,{children:"posts"})," has a variable complexity depending on its arguments:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'query {\n  author(id: "abc") {    # complexity: 1\n    posts(first: 5) {    # complexity: 5\n      title              # complexity: 1\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"pros-2",children:"Pros"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Covers more cases than a simple query depth"}),"\n",(0,s.jsx)(t.li,{children:"Rejects queries before executing them by statically analyzing the complexity"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cons-2",children:"Cons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Hard to implement perfectly"}),"\n",(0,s.jsx)(t.li,{children:"If complexity is estimated by developers, how do we keep it up to date? How do we find the costs in the first place?"}),"\n",(0,s.jsx)(t.li,{children:"Mutations are hard to estimate. What if they have a side effect that is hard to measure, like queuing a background job?"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"throttling",children:"Throttling"}),"\n",(0,s.jsx)(t.p,{children:"The solutions we\u2019ve seen so far are great to stop abusive queries from taking your servers down. The problem with using them alone like this is that they will stop large queries, but won\u2019t stop clients that are making a lot of medium sized queries!"}),"\n",(0,s.jsx)(t.p,{children:"In most APIs, a simple throttle is used to stop clients from requesting resources too often. GraphQL is a bit special because throttling on the number of requests does not really help us. Even a few queries might be too much if they are very large."}),"\n",(0,s.jsx)(t.p,{children:"In fact, we have no idea what amount of requests is acceptable since they are defined by the clients. So what can we use to throttle clients?"}),"\n",(0,s.jsx)(t.h3,{id:"throttling-based-on-server-time",children:"Throttling Based on Server Time"}),"\n",(0,s.jsx)(t.p,{children:"A good estimate of how expensive a query is the server time it needs to complete. We can use this heuristic to throttle queries. With a good knowledge of your system, you can come up with a maximum server time a client can use over a certain time frame."}),"\n",(0,s.jsxs)(t.p,{children:["We also decide on how much server time is added to a client over time. This is a classic ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Leaky_bucket",children:"leaky bucket algorithm"}),". Note that there are other throttling algorithms out there, but they are out of scope for this chapter. We will use a leaky bucket throttle in the next examples."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's imagine our maximum server time (Bucket Size) allowed is set to ",(0,s.jsx)(t.code,{children:"1000ms"}),", that clients gain ",(0,s.jsx)(t.code,{children:"100ms"})," of server time per second (Leak Rate) and this mutation:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'mutation {\n  createPost(input: { title: "GraphQL Security" }) {\n    post {\n      title\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["takes on average ",(0,s.jsx)(t.code,{children:"200ms"})," to complete. In reality, the time may vary but we\u2019ll assume it always takes ",(0,s.jsx)(t.code,{children:"200ms"})," to complete for the sake of this example."]}),"\n",(0,s.jsxs)(t.p,{children:["It means that a client calling this operation more than 5 times within 1 second would be blocked until more available server time is added to the client.\nAfter two seconds (",(0,s.jsx)(t.code,{children:"100ms"})," is added by second), our client could call the ",(0,s.jsx)(t.code,{children:"createPost"})," a single time."]}),"\n",(0,s.jsx)(t.p,{children:"As you can see, throttling based on time is a great way to throttle GraphQL queries since complex queries will end up consuming more time meaning you can call them less often, and smaller queries may be called more often since they will be very fast to compute."}),"\n",(0,s.jsx)(t.p,{children:"It can be good to express these throttling constraints to clients if your GraphQL API is public. In that case, server time is not always the easiest thing to express to clients, and clients cannot really estimate what time their queries will take without trying them first. That's where throttling based on complexity could make sense."}),"\n",(0,s.jsx)(t.h3,{id:"throttling-based-on-query-complexity",children:"Throttling Based on Query Complexity"}),"\n",(0,s.jsx)(t.p,{children:"Throttling based on Query Complexity is a great way to work with clients and help them respect the limits of your schema. Let\u2019s use the same complexity example we used in the Query Complexity section:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:'query {\n  author(id: "abc") {    # complexity: 1\n    posts {              # complexity: 1\n      title              # complexity: 1\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We know that this query has a cost ",(0,s.jsx)(t.code,{children:"3"})," based on complexity. Just like a time throttle, we can come up with a maximum cost (Bucket Size) per time a client can use. With a maximum cost of ",(0,s.jsx)(t.code,{children:"9"}),", our clients could run this query only three times, before the leak rate forbids them to query more."]}),"\n",(0,s.jsx)(t.p,{children:"The principles are the same as our time throttle, but now communicating these limits to clients is much nicer. Clients can even calculate the costs of their queries themselves without needing to estimate server time!"}),"\n",(0,s.jsxs)(t.p,{children:["The GitHub public API actually uses this approach to throttle their clients. Take a look at how they express these limits to users: ",(0,s.jsx)(t.a,{href:"https://developer.github.com/v4/guides/resource-limitations/",children:"Github Documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"GraphQL is great to use for clients because it gives them so much more power. But that power also gives them the possibility to abuse your GraphQL server with very expensive queries."}),"\n",(0,s.jsx)(t.p,{children:"There are many approaches to secure your GraphQL server against these queries, but none of them are bullet proof. It\u2019s important to know what options are available and know their limits so we take the best decisions!"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2861:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/query-depth-9eafb37821a8a335678fb9be20df4b6a.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);