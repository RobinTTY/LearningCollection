"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,b=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"subscriptions",title:"Subscriptions",sidebar_position:4},s=void 0,a={unversionedId:"c-sharp/libraries/hot-chocolate/subscriptions",id:"c-sharp/libraries/hot-chocolate/subscriptions",title:"Subscriptions",description:"GraphQL subscriptions provide real-time functionality to applications by allowing clients to subscribe to specific events. When these events trigger, the server immediately sends updates to the subscribed clients.",source:"@site/docs/c-sharp/libraries/hot-chocolate/subscriptions.md",sourceDirName:"c-sharp/libraries/hot-chocolate",slug:"/c-sharp/libraries/hot-chocolate/subscriptions",permalink:"/LearningCollection/c-sharp/libraries/hot-chocolate/subscriptions",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/c-sharp/libraries/hot-chocolate/subscriptions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"subscriptions",title:"Subscriptions",sidebar_position:4},sidebar:"finance",previous:{title:"Mutations",permalink:"/LearningCollection/c-sharp/libraries/hot-chocolate/mutations"},next:{title:"Resolvers",permalink:"/LearningCollection/c-sharp/libraries/hot-chocolate/resolvers"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Setup",id:"setup",level:3},{value:"In-Memory Provider",id:"in-memory-provider",level:4},{value:"Redis Provider",id:"redis-provider",level:4},{value:"Publishing Events",id:"publishing-events",level:3},{value:"Dynamic Topics",id:"dynamic-topics",level:3},{value:"Transport Mechanisms",id:"transport-mechanisms",level:2},{value:"GraphQL over WebSockets",id:"graphql-over-websockets",level:3},{value:"GraphQL over Server-Sent Events (SSE)",id:"graphql-over-server-sent-events-sse",level:3},{value:"Deciding between WebSockets and SSE",id:"deciding-between-websockets-and-sse",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL subscriptions provide real-time functionality to applications by allowing clients to subscribe to specific events. When these events trigger, the server immediately sends updates to the subscribed clients."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Subscribing to an event is like writing a standard query. The only difference is the operation keyword and that we are only allowed to have one root field. A subscription type can be defined like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Subscription\n{\n    [Subscribe]\n    public Book BookAdded([EventMessage] Book book) => book;\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddSubscriptionType<Subscription>();\n    }\n\n    // Omitted code for brevity\n}\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Only one subscription type can be registered using ",(0,o.kt)("inlineCode",{parentName:"p"},"AddSubscriptionType()"),". If we want to split up our subscription type into multiple classes, we can do so using ",(0,o.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types"},"type extensions"),".")),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"After defining the subscription type, we need to add the WebSockets middleware to our request pipeline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Startup\n{\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        app.UseRouting();\n\n        app.UseWebSockets();\n\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapGraphQL();\n        });\n    }\n\n    // Omitted code for brevity\n}\n")),(0,o.kt)("p",null,"To make pub/sub work, we also have to register a subscription provider. A subscription provider represents a pub/sub implementation used to handle events. Out of the box two subscription providers are supported."),(0,o.kt)("h4",{id:"in-memory-provider"},"In-Memory Provider"),(0,o.kt)("p",null,"The In-Memory subscription provider does not need any configuration and is easily setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"services\n    .AddGraphQLServer()\n    .AddInMemorySubscriptions();\n")),(0,o.kt)("h4",{id:"redis-provider"},"Redis Provider"),(0,o.kt)("p",null,"The Redis subscription provider enables us to run multiple instances of our Hot Chocolate GraphQL server and handle subscription events reliably. In order to use the Redis provider we have to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"HotChocolate.Subscriptions.Redis")," package. After we have added the package we can setup the Redis subscription provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'services\n    .AddGraphQLServer()\n    .AddRedisSubscriptions((sp) => ConnectionMultiplexer.Connect("host:port"));\n')),(0,o.kt)("h3",{id:"publishing-events"},"Publishing Events"),(0,o.kt)("p",null,"To publish events and trigger subscriptions, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITopicEventSender"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ITopicEventSender")," is an abstraction for the registered event publishing provider. Using this abstraction allows us to seamlessly switch between subscription providers, when necessary."),(0,o.kt)("p",null,"Most of the time we will be publishing events for successful mutations. Therefore we can simply inject the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITopicEventSender")," into our mutations like we would with every other ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),". Of course we can not only publish events from mutations, but everywhere we have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITopicEventSender")," through the DI Container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    public async Book AddBook(Book book, [Service] ITopicEventSender sender)\n    {\n        await sender.SendAsync(nameof(Subscription.BookAdded), book);\n\n        // Omitted code for brevity\n    }\n}\n")),(0,o.kt)("p",null,"In the example the ",(0,o.kt)("inlineCode",{parentName:"p"},'"BookAdded"')," is the topic we want to publish to, and ",(0,o.kt)("inlineCode",{parentName:"p"},"book")," is our payload. Even though we have used a string as the topic, we do not have to. Any other type works just fine. If we do not want to use the method name, we could use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Topic")," attribute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Subscription\n{\n    [Subscribe]\n    [Topic("ExampleTopic")]\n    public Book BookAdded([EventMessage] Book book) => book;\n}\n\npublic async Book AddBook(Book book, [Service] ITopicEventSender sender)\n{\n    await sender.SendAsync("ExampleTopic", book);\n\n    // Omitted code for brevity\n}\n')),(0,o.kt)("h3",{id:"dynamic-topics"},"Dynamic Topics"),(0,o.kt)("p",null,"You can even use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Topic")," attribute on dynamic arguments of the subscription field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Subscription\n{\n    [Subscribe]\n    public Book BookPublished([Topic] string author, [EventMessage] Book book)\n        => book;\n}\n\npublic async Book PublishBook(Book book, [Service] ITopicEventSender sender)\n{\n    await sender.SendAsync(book.Author, book);\n\n    // Omitted code for brevity\n}\n")),(0,o.kt)("h2",{id:"transport-mechanisms"},"Transport Mechanisms"),(0,o.kt)("p",null,"The method of how these updates are delivered is determined by the transport mechanism. In this section, we will discuss two popular transport mechanisms: GraphQL over WebSockets and GraphQL over Server-Sent Events (SSE)."),(0,o.kt)("h3",{id:"graphql-over-websockets"},"GraphQL over WebSockets"),(0,o.kt)("p",null,"Key features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full-duplex: Both the client and server can initiate communication, allowing real-time bidirectional communication."),(0,o.kt)("li",{parentName:"ul"},"Persistent connection: The connection between client and server remains open, allowing for real-time data transfer."),(0,o.kt)("li",{parentName:"ul"},"Well-supported: There are several libraries available for managing WebSocket connections and GraphQL subscriptions.")),(0,o.kt)("p",null,"WebSockets are widely supported in browsers and have been the de facto standard for real-time data transport in GraphQL. There are two popular protocols for GraphQL over WebSockets: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},"graphql-ws")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws"},"subscription-transport-ws"),". Hot Chocolate, supports both protocols."),(0,o.kt)("p",null,"In terms of specific protocols, ",(0,o.kt)("strong",{parentName:"p"},"the recommendation is to use graphql-ws or graphql-sse")," over the legacy subscription-transport-ws."),(0,o.kt)("h3",{id:"graphql-over-server-sent-events-sse"},"GraphQL over Server-Sent Events (SSE)"),(0,o.kt)("p",null,"Key Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Efficient for one-way real-time data: The server can push updates to the client as soon as they occur."),(0,o.kt)("li",{parentName:"ul"},"Built on HTTP: SSE is built on HTTP, simplifying handling and compatibility. It benefits from HTTP features such as automatic reconnection, HTTP/2 multiplexing, and headers/cookies support."),(0,o.kt)("li",{parentName:"ul"},"Less Complex: SSE is less complex than WebSockets as it only allows for one-way communication."),(0,o.kt)("li",{parentName:"ul"},"Better Firewall Compatibility: SSE generally encounters fewer issues with firewalls.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-sse"},"graphql-sse")," is a popular library for GraphQL over SSE."),(0,o.kt)("h3",{id:"deciding-between-websockets-and-sse"},"Deciding between WebSockets and SSE"),(0,o.kt)("p",null,"Choosing between GraphQL over WebSockets and GraphQL over SSE depends on the specific needs of your application. If you need full-duplex, real-time communication, WebSockets may be the best choice. If you only need server-to-client real-time communication and want to take advantage of existing HTTP infrastructure, SSE could be a better option."))}d.isMDXComponent=!0}}]);