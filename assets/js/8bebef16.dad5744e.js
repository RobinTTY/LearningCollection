"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9692],{68548:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(74848),o=s(28453);const t={id:"subscriptions",title:"Subscriptions",sidebar_position:4},r=void 0,c={id:"csharp/libraries/hot-chocolate/subscriptions",title:"Subscriptions",description:"GraphQL subscriptions provide real-time functionality to applications by allowing clients to subscribe to specific events. When these events trigger, the server immediately sends updates to the subscribed clients.",source:"@site/docs/csharp/libraries/hot-chocolate/subscriptions.md",sourceDirName:"csharp/libraries/hot-chocolate",slug:"/csharp/libraries/hot-chocolate/subscriptions",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/subscriptions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"subscriptions",title:"Subscriptions",sidebar_position:4},sidebar:"docs",previous:{title:"Mutations",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/mutations"},next:{title:"Resolvers",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/resolvers"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Setup",id:"setup",level:3},{value:"In-Memory Provider",id:"in-memory-provider",level:4},{value:"Redis Provider",id:"redis-provider",level:4},{value:"Publishing Events",id:"publishing-events",level:3},{value:"Dynamic Topics",id:"dynamic-topics",level:3},{value:"Transport Mechanisms",id:"transport-mechanisms",level:2},{value:"GraphQL over WebSockets",id:"graphql-over-websockets",level:3},{value:"GraphQL over Server-Sent Events (SSE)",id:"graphql-over-server-sent-events-sse",level:3},{value:"Deciding between WebSockets and SSE",id:"deciding-between-websockets-and-sse",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"GraphQL subscriptions provide real-time functionality to applications by allowing clients to subscribe to specific events. When these events trigger, the server immediately sends updates to the subscribed clients."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Subscribing to an event is like writing a standard query. The only difference is the operation keyword and that we are only allowed to have one root field. A subscription type can be defined like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Subscription\n{\n    [Subscribe]\n    public Book BookAdded([EventMessage] Book book) => book;\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddSubscriptionType<Subscription>();\n    }\n\n    // Omitted code for brevity\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Only one subscription type can be registered using ",(0,i.jsx)(n.code,{children:"AddSubscriptionType()"}),". If we want to split up our subscription type into multiple classes, we can do so using ",(0,i.jsx)(n.a,{href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types",children:"type extensions"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"After defining the subscription type, we need to add the WebSockets middleware to our request pipeline:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Startup\n{\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        app.UseRouting();\n\n        app.UseWebSockets();\n\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapGraphQL();\n        });\n    }\n\n    // Omitted code for brevity\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"To make pub/sub work, we also have to register a subscription provider. A subscription provider represents a pub/sub implementation used to handle events. Out of the box two subscription providers are supported."}),"\n",(0,i.jsx)(n.h4,{id:"in-memory-provider",children:"In-Memory Provider"}),"\n",(0,i.jsx)(n.p,{children:"The In-Memory subscription provider does not need any configuration and is easily setup:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"services\n    .AddGraphQLServer()\n    .AddInMemorySubscriptions();\n"})}),"\n",(0,i.jsx)(n.h4,{id:"redis-provider",children:"Redis Provider"}),"\n",(0,i.jsxs)(n.p,{children:["The Redis subscription provider enables us to run multiple instances of our Hot Chocolate GraphQL server and handle subscription events reliably. In order to use the Redis provider we have to add the ",(0,i.jsx)(n.code,{children:"HotChocolate.Subscriptions.Redis"})," package. After we have added the package we can setup the Redis subscription provider:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'services\n    .AddGraphQLServer()\n    .AddRedisSubscriptions((sp) => ConnectionMultiplexer.Connect("host:port"));\n'})}),"\n",(0,i.jsx)(n.h3,{id:"publishing-events",children:"Publishing Events"}),"\n",(0,i.jsxs)(n.p,{children:["To publish events and trigger subscriptions, we can use the ",(0,i.jsx)(n.code,{children:"ITopicEventSender"}),". The ",(0,i.jsx)(n.code,{children:"ITopicEventSender"})," is an abstraction for the registered event publishing provider. Using this abstraction allows us to seamlessly switch between subscription providers, when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["Most of the time we will be publishing events for successful mutations. Therefore we can simply inject the ",(0,i.jsx)(n.code,{children:"ITopicEventSender"})," into our mutations like we would with every other ",(0,i.jsx)(n.code,{children:"Service"}),". Of course we can not only publish events from mutations, but everywhere we have access to the ",(0,i.jsx)(n.code,{children:"ITopicEventSender"})," through the DI Container."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Mutation\n{\n    public async Book AddBook(Book book, [Service] ITopicEventSender sender)\n    {\n        await sender.SendAsync(nameof(Subscription.BookAdded), book);\n\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the example the ",(0,i.jsx)(n.code,{children:'"BookAdded"'})," is the topic we want to publish to, and ",(0,i.jsx)(n.code,{children:"book"})," is our payload. Even though we have used a string as the topic, we do not have to. Any other type works just fine. If we do not want to use the method name, we could use the ",(0,i.jsx)(n.code,{children:"Topic"})," attribute:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class Subscription\n{\n    [Subscribe]\n    [Topic("ExampleTopic")]\n    public Book BookAdded([EventMessage] Book book) => book;\n}\n\npublic async Book AddBook(Book book, [Service] ITopicEventSender sender)\n{\n    await sender.SendAsync("ExampleTopic", book);\n\n    // Omitted code for brevity\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-topics",children:"Dynamic Topics"}),"\n",(0,i.jsxs)(n.p,{children:["You can even use the ",(0,i.jsx)(n.code,{children:"Topic"})," attribute on dynamic arguments of the subscription field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Subscription\n{\n    [Subscribe]\n    public Book BookPublished([Topic] string author, [EventMessage] Book book)\n        => book;\n}\n\npublic async Book PublishBook(Book book, [Service] ITopicEventSender sender)\n{\n    await sender.SendAsync(book.Author, book);\n\n    // Omitted code for brevity\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"transport-mechanisms",children:"Transport Mechanisms"}),"\n",(0,i.jsx)(n.p,{children:"The method of how these updates are delivered is determined by the transport mechanism. In this section, we will discuss two popular transport mechanisms: GraphQL over WebSockets and GraphQL over Server-Sent Events (SSE)."}),"\n",(0,i.jsx)(n.h3,{id:"graphql-over-websockets",children:"GraphQL over WebSockets"}),"\n",(0,i.jsx)(n.p,{children:"Key features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Full-duplex: Both the client and server can initiate communication, allowing real-time bidirectional communication."}),"\n",(0,i.jsx)(n.li,{children:"Persistent connection: The connection between client and server remains open, allowing for real-time data transfer."}),"\n",(0,i.jsx)(n.li,{children:"Well-supported: There are several libraries available for managing WebSocket connections and GraphQL subscriptions."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["WebSockets are widely supported in browsers and have been the de facto standard for real-time data transport in GraphQL. There are two popular protocols for GraphQL over WebSockets: ",(0,i.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-ws",children:"graphql-ws"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/apollographql/subscriptions-transport-ws",children:"subscription-transport-ws"}),". Hot Chocolate, supports both protocols."]}),"\n",(0,i.jsxs)(n.p,{children:["In terms of specific protocols, ",(0,i.jsx)(n.strong,{children:"the recommendation is to use graphql-ws or graphql-sse"})," over the legacy subscription-transport-ws."]}),"\n",(0,i.jsx)(n.h3,{id:"graphql-over-server-sent-events-sse",children:"GraphQL over Server-Sent Events (SSE)"}),"\n",(0,i.jsx)(n.p,{children:"Key Features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Efficient for one-way real-time data: The server can push updates to the client as soon as they occur."}),"\n",(0,i.jsx)(n.li,{children:"Built on HTTP: SSE is built on HTTP, simplifying handling and compatibility. It benefits from HTTP features such as automatic reconnection, HTTP/2 multiplexing, and headers/cookies support."}),"\n",(0,i.jsx)(n.li,{children:"Less Complex: SSE is less complex than WebSockets as it only allows for one-way communication."}),"\n",(0,i.jsx)(n.li,{children:"Better Firewall Compatibility: SSE generally encounters fewer issues with firewalls."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-sse",children:"graphql-sse"})," is a popular library for GraphQL over SSE."]}),"\n",(0,i.jsx)(n.h3,{id:"deciding-between-websockets-and-sse",children:"Deciding between WebSockets and SSE"}),"\n",(0,i.jsx)(n.p,{children:"Choosing between GraphQL over WebSockets and GraphQL over SSE depends on the specific needs of your application. If you need full-duplex, real-time communication, WebSockets may be the best choice. If you only need server-to-client real-time communication and want to take advantage of existing HTTP infrastructure, SSE could be a better option."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);