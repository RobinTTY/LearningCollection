"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return a?i.createElement(d,o(o({ref:t},p),{},{components:a})):i.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const r={id:"security",title:"Security",sidebar_position:3},o=void 0,l={unversionedId:"apis/graphql/advanced-concepts/security",id:"apis/graphql/advanced-concepts/security",title:"Security",description:"Since clients have the possibility to craft very complex queries, a GraphQL server must be ready to handle them properly. These queries may be abusive queries from evil clients, or may simply be very large queries used by legitimate clients. In both of these cases, the client can potentially take your GraphQL server down.",source:"@site/docs/apis/graphql/advanced-concepts/security.md",sourceDirName:"apis/graphql/advanced-concepts",slug:"/apis/graphql/advanced-concepts/security",permalink:"/LearningCollection/apis/graphql/advanced-concepts/security",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/advanced-concepts/security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"security",title:"Security",sidebar_position:3},sidebar:"finance",previous:{title:"Introspection",permalink:"/LearningCollection/apis/graphql/advanced-concepts/introspection"},next:{title:"Record Types",permalink:"/LearningCollection/C-Sharp/Core Concepts/Types/recordTypes"}},s={},u=[{value:"Timeout",id:"timeout",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Maximum Query Depth",id:"maximum-query-depth",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3},{value:"Query Complexity",id:"query-complexity",level:2},{value:"Pros",id:"pros-2",level:3},{value:"Cons",id:"cons-2",level:3},{value:"Throttling",id:"throttling",level:2},{value:"Throttling Based on Server Time",id:"throttling-based-on-server-time",level:3},{value:"Throttling Based on Query Complexity",id:"throttling-based-on-query-complexity",level:3},{value:"Summary",id:"summary",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Since clients have the possibility to craft very complex queries, a GraphQL server must be ready to handle them properly. These queries may be abusive queries from evil clients, or may simply be very large queries used by legitimate clients. In both of these cases, the client can potentially take your GraphQL server down."),(0,n.kt)("p",null,"There are a few strategies to mitigate these risks. We will cover them in this chapter in order from the simplest to the most complex, and look at their pros and cons."),(0,n.kt)("h2",{id:"timeout"},"Timeout"),(0,n.kt)("p",null,"The first strategy and the simplest one is using a timeout to defend against large queries. This strategy is the simplest since it does not require the server to know anything about the incoming queries. All the server knows is the maximum time allowed for a query."),(0,n.kt)("p",null,"For example, a server configured with a 5 seconds timeout would stop the execution of any query that is taking more than 5 seconds to execute."),(0,n.kt)("h3",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simple to implement"),(0,n.kt)("li",{parentName:"ul"},"Most strategies will still use a timeout as a final protection")),(0,n.kt)("h3",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Damage can already be done even when the timeout kicks in"),(0,n.kt)("li",{parentName:"ul"},"Sometimes hard to implement. Cutting connections after a certain time may result in strange behaviors")),(0,n.kt)("h2",{id:"maximum-query-depth"},"Maximum Query Depth"),(0,n.kt)("p",null,"Clients using GraphQL may craft any complex query they want. Since GraphQL schemas are often cyclic graphs, this means a client could craft a query like this one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'query IAmEvil {\n  author(id: "abc") {\n    posts {\n      author {\n        posts {\n          author {\n            posts {\n              author {\n                # that could go on as deep as the client wants!\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Knowing your schema might give you an idea of how deep a legitimate query can go. This is actually possible to implement and is often called Maximum Query Depth."),(0,n.kt)("p",null,"By analyzing the query document\u2019s abstract syntax tree (AST), a GraphQL server is able to reject or accept a request based on its depth."),(0,n.kt)("p",null,"Take for example a server configured with a Maximum Query Depth of ",(0,n.kt)("inlineCode",{parentName:"p"},"3"),", and the following query document. Everything within the red marker is considered too deep and the query is invalid."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"query-depth",src:a(9495).Z,width:"596",height:"562"})),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql-ruby")," with the max query depth setting, we get the following result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Query has depth of 6, which exceeds max depth of 3"\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"pros-1"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since the AST of the document is analyzed statically, the query does not even execute, which adds no load on your GraphQL server.")),(0,n.kt)("h3",{id:"cons-1"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Depth alone is often not enough to cover all abusive queries. For example, a query requesting an enormous amount of nodes on the root will be very expensive but unlikely to be blocked by a query depth analyzer.")),(0,n.kt)("h2",{id:"query-complexity"},"Query Complexity"),(0,n.kt)("p",null,"Sometimes, the depth of a query is not enough to truly know how large or expensive a GraphQL query will be. In a lot of cases, certain fields in our schema are known to be more complex to compute than others."),(0,n.kt)("p",null,"Query complexity allows you to define how complex these fields are, and to restrict queries with a maximum complexity. The idea is to define how complex each field is by using a simple number. A common default is to give each field a complexity of 1. Take this query for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  author(id: "abc") { # complexity: 1\n    posts {           # complexity: 1\n      title           # complexity: 1\n    }\n  }\n}\n')),(0,n.kt)("p",null,"A simple addition gives us a total of ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," for the complexity of this query. If we were to set a max complexity of ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," on our schema, this query would fail."),(0,n.kt)("p",null,"What if the ",(0,n.kt)("inlineCode",{parentName:"p"},"posts")," field is actually much more complex than the ",(0,n.kt)("inlineCode",{parentName:"p"},"author")," field? We can set a different complexity to the field. We can even set a different complexity depending on arguments! Let\u2019s take a look at a similar query, where ",(0,n.kt)("inlineCode",{parentName:"p"},"posts")," has a variable complexity depending on its arguments:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  author(id: "abc") {    # complexity: 1\n    posts(first: 5) {    # complexity: 5\n      title              # complexity: 1\n    }\n  }\n}\n')),(0,n.kt)("h3",{id:"pros-2"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Covers more cases than a simple query depth"),(0,n.kt)("li",{parentName:"ul"},"Rejects queries before executing them by statically analyzing the complexity")),(0,n.kt)("h3",{id:"cons-2"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hard to implement perfectly"),(0,n.kt)("li",{parentName:"ul"},"If complexity is estimated by developers, how do we keep it up to date? How do we find the costs in the first place?"),(0,n.kt)("li",{parentName:"ul"},"Mutations are hard to estimate. What if they have a side effect that is hard to measure, like queuing a background job?")),(0,n.kt)("h2",{id:"throttling"},"Throttling"),(0,n.kt)("p",null,"The solutions we\u2019ve seen so far are great to stop abusive queries from taking your servers down. The problem with using them alone like this is that they will stop large queries, but won\u2019t stop clients that are making a lot of medium sized queries!"),(0,n.kt)("p",null,"In most APIs, a simple throttle is used to stop clients from requesting resources too often. GraphQL is a bit special because throttling on the number of requests does not really help us. Even a few queries might be too much if they are very large."),(0,n.kt)("p",null,"In fact, we have no idea what amount of requests is acceptable since they are defined by the clients. So what can we use to throttle clients?"),(0,n.kt)("h3",{id:"throttling-based-on-server-time"},"Throttling Based on Server Time"),(0,n.kt)("p",null,"A good estimate of how expensive a query is the server time it needs to complete. We can use this heuristic to throttle queries. With a good knowledge of your system, you can come up with a maximum server time a client can use over a certain time frame."),(0,n.kt)("p",null,"We also decide on how much server time is added to a client over time. This is a classic ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Leaky_bucket"},"leaky bucket algorithm"),". Note that there are other throttling algorithms out there, but they are out of scope for this chapter. We will use a leaky bucket throttle in the next examples."),(0,n.kt)("p",null,"Let's imagine our maximum server time (Bucket Size) allowed is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"1000ms"),", that clients gain ",(0,n.kt)("inlineCode",{parentName:"p"},"100ms")," of server time per second (Leak Rate) and this mutation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createPost(input: { title: "GraphQL Security" }) {\n    post {\n      title\n    }\n  }\n}\n')),(0,n.kt)("p",null,"takes on average ",(0,n.kt)("inlineCode",{parentName:"p"},"200ms")," to complete. In reality, the time may vary but we\u2019ll assume it always takes ",(0,n.kt)("inlineCode",{parentName:"p"},"200ms")," to complete for the sake of this example."),(0,n.kt)("p",null,"It means that a client calling this operation more than 5 times within 1 second would be blocked until more available server time is added to the client.\nAfter two seconds (",(0,n.kt)("inlineCode",{parentName:"p"},"100ms")," is added by second), our client could call the ",(0,n.kt)("inlineCode",{parentName:"p"},"createPost")," a single time."),(0,n.kt)("p",null,"As you can see, throttling based on time is a great way to throttle GraphQL queries since complex queries will end up consuming more time meaning you can call them less often, and smaller queries may be called more often since they will be very fast to compute."),(0,n.kt)("p",null,"It can be good to express these throttling constraints to clients if your GraphQL API is public. In that case, server time is not always the easiest thing to express to clients, and clients cannot really estimate what time their queries will take without trying them first. That's where throttling based on complexity could make sense."),(0,n.kt)("h3",{id:"throttling-based-on-query-complexity"},"Throttling Based on Query Complexity"),(0,n.kt)("p",null,"Throttling based on Query Complexity is a great way to work with clients and help them respect the limits of your schema. Let\u2019s use the same complexity example we used in the Query Complexity section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  author(id: "abc") {    # complexity: 1\n    posts {              # complexity: 1\n      title              # complexity: 1\n    }\n  }\n}\n')),(0,n.kt)("p",null,"We know that this query has a cost ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," based on complexity. Just like a time throttle, we can come up with a maximum cost (Bucket Size) per time a client can use. With a maximum cost of ",(0,n.kt)("inlineCode",{parentName:"p"},"9"),", our clients could run this query only three times, before the leak rate forbids them to query more."),(0,n.kt)("p",null,"The principles are the same as our time throttle, but now communicating these limits to clients is much nicer. Clients can even calculate the costs of their queries themselves without needing to estimate server time!"),(0,n.kt)("p",null,"The GitHub public API actually uses this approach to throttle their clients. Take a look at how they express these limits to users: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.github.com/v4/guides/resource-limitations/"},"Github Documentation"),"."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"GraphQL is great to use for clients because it gives them so much more power. But that power also gives them the possibility to abuse your GraphQL server with very expensive queries."),(0,n.kt)("p",null,"There are many approaches to secure your GraphQL server against these queries, but none of them are bullet proof. It\u2019s important to know what options are available and know their limits so we take the best decisions!"))}m.isMDXComponent=!0},9495:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/query-depth-9eafb37821a8a335678fb9be20df4b6a.png"}}]);