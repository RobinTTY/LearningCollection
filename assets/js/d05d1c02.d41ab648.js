"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,v=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"resolvers",title:"Resolvers",sidebar_position:5},l=void 0,s={unversionedId:"apis/graphql/hot-chocolate/resolvers",id:"apis/graphql/hot-chocolate/resolvers",title:"Resolvers",description:"Resolvers are the main building blocks when it comes to fetching data. Every field in our GraphQL schema is backed by such a resolver function, responsible for returning the field's value. Since a resolver is just a function, we can use it to retrieve data from a database, a REST service, or any other data source as needed.",source:"@site/docs/apis/graphql/hot-chocolate/resolvers.md",sourceDirName:"apis/graphql/hot-chocolate",slug:"/apis/graphql/hot-chocolate/resolvers",permalink:"/LearningCollection/apis/graphql/hot-chocolate/resolvers",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/hot-chocolate/resolvers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"resolvers",title:"Resolvers",sidebar_position:5},sidebar:"finance",previous:{title:"Subscriptions",permalink:"/LearningCollection/apis/graphql/hot-chocolate/subscriptions"},next:{title:"Data Loaders",permalink:"/LearningCollection/apis/graphql/hot-chocolate/data-loaders"}},i={},c=[{value:"Resolver Tree",id:"resolver-tree",level:2},{value:"Defining a Resolver",id:"defining-a-resolver",level:2},{value:"Properties",id:"properties",level:3},{value:"Regular Resolver",id:"regular-resolver",level:3},{value:"Async Resolver",id:"async-resolver",level:3},{value:"ResolveWith",id:"resolvewith",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Accessing Parent Values",id:"accessing-parent-values",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Resolvers are the main building blocks when it comes to fetching data. Every field in our GraphQL schema is backed by such a resolver function, responsible for returning the field's value. Since a resolver is just a function, we can use it to retrieve data from a database, a REST service, or any other data source as needed."),(0,a.kt)("h2",{id:"resolver-tree"},"Resolver Tree"),(0,a.kt)("p",null,"A resolver tree is a projection of a GraphQL operation that is prepared for execution. For better understanding, let's imagine we have a simple GraphQL query like the following, where we select some fields of the currently logged-in user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  me {\n    name\n    company {\n      id\n      name\n    }\n  }\n}\n")),(0,a.kt)("p",null,"In Hot Chocolate, this query results in the following resolver tree."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"resolver-tree",src:r(9063).Z,width:"1350",height:"358"})),(0,a.kt)("p",null,"This tree will be traversed by the execution engine, starting with one or more root resolvers. In the above example the ",(0,a.kt)("inlineCode",{parentName:"p"},"me")," field represents the only root resolver."),(0,a.kt)("p",null,"Field resolvers that are sub-selections of a field, can only be executed after a value has been resolved for their parent field. In the case of the above example this means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"company")," resolvers can only run, after the ",(0,a.kt)("inlineCode",{parentName:"p"},"me")," resolver has finished."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Resolvers of field sub-selections can and will be executed in parallel.\nBecause of this it is important that resolvers, with the exception of top level mutation field resolvers, do not contain side-effects, since their execution order may vary.")),(0,a.kt)("p",null,"The execution of a request finishes, once each resolver of the selected fields has produced a result. This is of course an oversimplification that differs from the actual implementation."),(0,a.kt)("h2",{id:"defining-a-resolver"},"Defining a Resolver"),(0,a.kt)("p",null,"Resolvers can be defined in a way that should feel very familiar to C# developers, especially in the Annotation-based approach."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Hot Chocolate automatically converts properties with a public get accessor to a resolver that simply returns its value."),(0,a.kt)("h3",{id:"regular-resolver"},"Regular Resolver"),(0,a.kt)("p",null,"A regular resolver is just a simple method, which returns a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    public string Foo() => "Bar";\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddQueryType<Query>();\n    }\n}\n')),(0,a.kt)("h3",{id:"async-resolver"},"Async Resolver"),(0,a.kt)("p",null,"Most data fetching operations, like calling a service or communicating with a database, will be asynchronous.\nIn Hot Chocolate, we can simply mark our resolver methods and delegates as ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," or return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Task<T>")," and it becomes an async-capable resolver.\nWe can also add a ",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationToken")," argument to our resolver. Hot Chocolate will automatically cancel this token if the request has been aborted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Query\n{\n    public async Task<string> Foo(CancellationToken ct)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,a.kt)("p",null,"When using a delegate resolver, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationToken")," is passed as second argument to the delegate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'descriptor\n    .Field("foo")\n    .Resolve((context, ct) =>\n    {\n        // Omitted code for brevity\n    });\n')),(0,a.kt)("h3",{id:"resolvewith"},"ResolveWith"),(0,a.kt)("p",null,"Thus far we have looked at two ways to specify resolvers in Code-first:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add new methods to the CLR type, e.g. the ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," type of ",(0,a.kt)("inlineCode",{parentName:"li"},"ObjectType<T>")),(0,a.kt)("li",{parentName:"ul"},"Add new fields to the schema type in the form of delegates")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'descriptor.Field("foo").Resolve(context => )\n')),(0,a.kt)("p",null,"But there's a third way. We can describe our field using the ",(0,a.kt)("inlineCode",{parentName:"p"},"descriptor"),", but instead of a resolver delegate, we can point to a method on another class, responsible for resolving this field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class FooResolvers\n{\n    public string GetFoo(string arg, [Service] FooService service)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class QueryType : ObjectType\n{\n    protected override void Configure(IObjectTypeDescriptor descriptor)\n    {\n        descriptor\n            .Field("foo")\n            .Argument("arg", a => a.Type<NonNullType<StringType>>())\n            .ResolveWith<FooResolvers>(r => r.GetFoo(default, default));\n    }\n}\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"We can access arguments we defined for our resolver like regular arguments of a function. There are also specific arguments that will be automatically populated by Hot Chocolate when the resolver is executed. These include ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#injecting-services"},"Dependency injection")," services, ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/dataloader"},"DataLoaders"),", state, or even context like a ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#accessing-parent-values"},"parent")," value."),(0,a.kt)("h3",{id:"accessing-parent-values"},"Accessing Parent Values"),(0,a.kt)("p",null,"The resolver of each field on a type has access to the value that was resolved for said type."),(0,a.kt)("p",null,"Let's look at an example. We have the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User!;\n}\n\ntype User {\n  id: ID!;\n  friends: [User!]!;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," schema type is represented by an ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," CLR type. The ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field is an actual property on this CLR type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"friends")," on the other hand is a resolver i.e. method we defined. It depends on the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," property to compute its result. From the point of view of this ",(0,a.kt)("inlineCode",{parentName:"p"},"friends")," resolver, the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," CLR type is its parent.\nWe can access this so called parent value like the following. In the Annotation-based approach we can just access the properties using the ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," keyword:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n\n    public List<User> GetFriends()\n    {\n        var currentUserId = this.Id;\n\n        // Omitted code for brevity\n    }\n}\n")),(0,a.kt)("p",null,"There's also a ",(0,a.kt)("inlineCode",{parentName:"p"},"[Parent]")," attribute that injects the parent into the resolver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n\n    public List<User> GetFriends([Parent] User parent)\n    {\n        // Omitted code for brevity\n    }\n}\n")))}u.isMDXComponent=!0},9063:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resolver-tree-4b499f0440df4510ac7f98c5331a83ad.png"}}]);