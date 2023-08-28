"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,f=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"intro",title:"Introduction",sidebar_position:1},o=void 0,s={unversionedId:"apis/graphql/intro",id:"apis/graphql/intro",title:"Introduction",description:"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. GraphQL was developed and open-sourced by Facebook.",source:"@site/docs/apis/graphql/Introduction.md",sourceDirName:"apis/graphql",slug:"/apis/graphql/intro",permalink:"/LearningCollection/apis/graphql/intro",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Introduction",sidebar_position:1},sidebar:"finance",previous:{title:"gRPC",permalink:"/LearningCollection/General Concepts/grpc"},next:{title:"Architecture",permalink:"/LearningCollection/apis/graphql/architecture"}},l={},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Why GraphQL?",id:"why-graphql",level:2},{value:"Data Fetching with REST vs GraphQL",id:"data-fetching-with-rest-vs-graphql",level:2},{value:"REST",id:"rest",level:3},{value:"GraphQL",id:"graphql",level:3}],d={toc:p},h="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. GraphQL was developed and open-sourced by Facebook."),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A GraphQL server exposes a single endpoint and responds to queries"),(0,n.kt)("li",{parentName:"ul"},"GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API"),(0,n.kt)("li",{parentName:"ul"},"GraphQL is agnostic to the database or storage engine used by the server")),(0,n.kt)("h2",{id:"why-graphql"},"Why GraphQL?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Smaller payloads:")," In GraphQL, you specify the exact types and fields that you need; and if you don\u2019t need much, that introduces the potential to make your API requests smaller."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No more versioning:")," GraphQL only returns the data that's explicitly requested, so new capabilities can be added via new types and new fields on those types without creating a breaking change."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Strictly-typed interfaces:")," GraphQL uses a strictly-typed schema. By design, the schema defines the resources available for retrieval in addition to the accepted parameters when fetching that data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Better client performance:")," GraphQL also introduces the ability to minimize round trips to the server. In a RESTful world, clients request a resource from the server, get the ID for it, then use that ID to fetch another resource (a waterfall-like series of requests to get related data). GraphQL lets you get all the data you need in a single request; no need for follow-up requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Easier documentation:")," GraphQL is already strictly-typed and declarative, so that\u2019s an immediate improvement. But for what cannot be said declaratively through types and fields alone, we can also document the GraphQL schema. It looks like code comments and leads to being outwardly accessible."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Insightful Analytics:")," GraphQL allows you to have fine-grained insights about the data that\u2019s requested on the backend. As each client specifies exactly what information it\u2019s interested in, it is possible to gain a deep understanding of how the available data is being used. With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that\u2019s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.")),(0,n.kt)("h2",{id:"data-fetching-with-rest-vs-graphql"},"Data Fetching with REST vs GraphQL"),(0,n.kt)("p",null,"To illustrate the major differences between REST and GraphQL when it comes to fetching data from an API, let\u2019s consider a simple example scenario: In a blogging application, an app needs to display the titles of the posts of a specific user. The same screen also displays the names of the last 3 followers of that user. How would that situation be solved with REST and GraphQL?"),(0,n.kt)("h3",{id:"rest"},"REST"),(0,n.kt)("p",null,"With a REST API, you would typically gather the data by accessing multiple endpoints. In the example, these could be ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/<id>")," endpoint to fetch the initial user data. Secondly, there\u2019s likely to be a ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/<id>/posts")," endpoint that returns all the posts for a user. The third endpoint will then be the ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/<id>/followers")," that returns a list of followers per user."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rest",src:a(4965).Z,width:"2078",height:"1700"})),(0,n.kt)("h3",{id:"graphql"},"GraphQL"),(0,n.kt)("p",null,"In GraphQL on the other hand, you\u2019d simply send a single query to the GraphQL server that includes the concrete data requirements. The server then responds with a JSON object where these requirements are fulfilled."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"graphql",src:a(3749).Z,width:"1566",height:"946"})))}c.isMDXComponent=!0},3749:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphql-3be14de488a56847878186b7c19fea69.png"},4965:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rest-c803d348ef06147963eece836206200d.png"}}]);