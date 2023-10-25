"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={id:"resolvers",title:"Resolvers",sidebar_position:5},o=void 0,l={unversionedId:"apis/graphql/hot-chocolate/resolvers",id:"apis/graphql/hot-chocolate/resolvers",title:"Resolvers",description:"Resolvers are the main building blocks when it comes to fetching data. Every field in our GraphQL schema is backed by such a resolver function, responsible for returning the field's value. Since a resolver is just a function, we can use it to retrieve data from a database, a REST service, or any other data source as needed.",source:"@site/docs/apis/graphql/hot-chocolate/resolvers.md",sourceDirName:"apis/graphql/hot-chocolate",slug:"/apis/graphql/hot-chocolate/resolvers",permalink:"/LearningCollection/apis/graphql/hot-chocolate/resolvers",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/hot-chocolate/resolvers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"resolvers",title:"Resolvers",sidebar_position:5},sidebar:"finance",previous:{title:"Subscriptions",permalink:"/LearningCollection/apis/graphql/hot-chocolate/subscriptions"},next:{title:"Data Loaders",permalink:"/LearningCollection/apis/graphql/hot-chocolate/data-loaders"}},i={},c=[{value:"Resolver Tree",id:"resolver-tree",level:2},{value:"Defining a Resolver",id:"defining-a-resolver",level:2},{value:"Properties",id:"properties",level:3},{value:"Regular Resolver",id:"regular-resolver",level:3},{value:"Async Resolver",id:"async-resolver",level:3},{value:"ResolveWith",id:"resolvewith",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Accessing Parent Values",id:"accessing-parent-values",level:3},{value:"Automatic Registration",id:"automatic-registration",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Resolvers are the main building blocks when it comes to fetching data. Every field in our GraphQL schema is backed by such a resolver function, responsible for returning the field's value. Since a resolver is just a function, we can use it to retrieve data from a database, a REST service, or any other data source as needed."),(0,r.kt)("h2",{id:"resolver-tree"},"Resolver Tree"),(0,r.kt)("p",null,"A resolver tree is a projection of a GraphQL operation that is prepared for execution. For better understanding, let's imagine we have a simple GraphQL query like the following, where we select some fields of the currently logged-in user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  me {\n    name\n    company {\n      id\n      name\n    }\n  }\n}\n")),(0,r.kt)("p",null,"In Hot Chocolate, this query results in the following resolver tree."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resolver-tree",src:n(9063).Z,width:"1350",height:"358"})),(0,r.kt)("p",null,"This tree will be traversed by the execution engine, starting with one or more root resolvers. In the above example the ",(0,r.kt)("inlineCode",{parentName:"p"},"me")," field represents the only root resolver."),(0,r.kt)("p",null,"Field resolvers that are sub-selections of a field, can only be executed after a value has been resolved for their parent field. In the case of the above example this means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"company")," resolvers can only run, after the ",(0,r.kt)("inlineCode",{parentName:"p"},"me")," resolver has finished."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Resolvers of field sub-selections can and will be executed in parallel.\nBecause of this it is important that resolvers, with the exception of top level mutation field resolvers, do not contain side-effects, since their execution order may vary.")),(0,r.kt)("p",null,"The execution of a request finishes, once each resolver of the selected fields has produced a result. This is of course an oversimplification that differs from the actual implementation."),(0,r.kt)("h2",{id:"defining-a-resolver"},"Defining a Resolver"),(0,r.kt)("p",null,"Resolvers can be defined in a way that should feel very familiar to C# developers, especially in the Annotation-based approach."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Hot Chocolate automatically converts properties with a public get accessor to a resolver that simply returns its value."),(0,r.kt)("h3",{id:"regular-resolver"},"Regular Resolver"),(0,r.kt)("p",null,"A regular resolver is just a simple method, which returns a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    public string Foo() => "Bar";\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddQueryType<Query>();\n    }\n}\n')),(0,r.kt)("h3",{id:"async-resolver"},"Async Resolver"),(0,r.kt)("p",null,"Most data fetching operations, like calling a service or communicating with a database, will be asynchronous.\nIn Hot Chocolate, we can simply mark our resolver methods and delegates as ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," or return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task<T>")," and it becomes an async-capable resolver.\nWe can also add a ",(0,r.kt)("inlineCode",{parentName:"p"},"CancellationToken")," argument to our resolver. Hot Chocolate will automatically cancel this token if the request has been aborted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Query\n{\n    public async Task<string> Foo(CancellationToken ct)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,r.kt)("p",null,"When using a delegate resolver, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CancellationToken")," is passed as second argument to the delegate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'descriptor\n    .Field("foo")\n    .Resolve((context, ct) =>\n    {\n        // Omitted code for brevity\n    });\n')),(0,r.kt)("h3",{id:"resolvewith"},"ResolveWith"),(0,r.kt)("p",null,"Thus far we have looked at two ways to specify resolvers in Code-first:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add new methods to the CLR type, e.g. the ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," type of ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectType<T>")),(0,r.kt)("li",{parentName:"ul"},"Add new fields to the schema type in the form of delegates")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'descriptor.Field("foo").Resolve(context => )\n')),(0,r.kt)("p",null,"But there's a third way. We can describe our field using the ",(0,r.kt)("inlineCode",{parentName:"p"},"descriptor"),", but instead of a resolver delegate, we can point to a method on another class, responsible for resolving this field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class FooResolvers\n{\n    public string GetFoo(string arg, [Service] FooService service)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class QueryType : ObjectType\n{\n    protected override void Configure(IObjectTypeDescriptor descriptor)\n    {\n        descriptor\n            .Field("foo")\n            .Argument("arg", a => a.Type<NonNullType<StringType>>())\n            .ResolveWith<FooResolvers>(r => r.GetFoo(default, default));\n    }\n}\n')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"We can access arguments we defined for our resolver like regular arguments of a function. There are also specific arguments that will be automatically populated by Hot Chocolate when the resolver is executed. These include ",(0,r.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#injecting-services"},"Dependency injection")," services, ",(0,r.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/dataloader"},"DataLoaders"),", state, or even context like a ",(0,r.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/fetching-data/resolvers/#accessing-parent-values"},"parent")," value."),(0,r.kt)("h3",{id:"accessing-parent-values"},"Accessing Parent Values"),(0,r.kt)("p",null,"The resolver of each field on a type has access to the value that was resolved for said type."),(0,r.kt)("p",null,"Let's look at an example. We have the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User!;\n}\n\ntype User {\n  id: ID!;\n  friends: [User!]!;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," schema type is represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," CLR type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field is an actual property on this CLR type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"friends")," on the other hand is a resolver i.e. method we defined. It depends on the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," property to compute its result. From the point of view of this ",(0,r.kt)("inlineCode",{parentName:"p"},"friends")," resolver, the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," CLR type is its parent.\nWe can access this so called parent value like the following. In the Annotation-based approach we can just access the properties using the ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n\n    public List<User> GetFriends()\n    {\n        var currentUserId = this.Id;\n\n        // Omitted code for brevity\n    }\n}\n")),(0,r.kt)("p",null,"There's also a ",(0,r.kt)("inlineCode",{parentName:"p"},"[Parent]")," attribute that injects the parent into the resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class User\n{\n    public string Id { get; set; }\n\n    public List<User> GetFriends([Parent] User parent)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,r.kt)("h2",{id:"automatic-registration"},"Automatic Registration"),(0,r.kt)("p",null,"We can automatically register all resolvers that are annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscriptionType"),". For this we use the package ",(0,r.kt)("inlineCode",{parentName:"p"},"HotChocolate.Types.Analyzers"),". It is a source generator and can be added as a private assset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title=".csproj"',title:'".csproj"'},'<PackageReference Include="HotChocolate.Types.Analyzers" Version="x.x.x">\n    <PrivateAssets>all</PrivateAssets>\n    <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>\n</PackageReference>\n')),(0,r.kt)("p",null,"Once the package is installed, we only need to add the types by adding the automatically generated ",(0,r.kt)("inlineCode",{parentName:"p"},"AddTypes")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},"builder.Services\n    .AddGraphQLServer()\n    .AddTypes();\n")),(0,r.kt)("p",null,"If we now have a type that is annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryType")," for example, it will be automatically added to the schema. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[QueryType]\npublic sealed class UserQueries\n{\n    public async Task<User> GetUserAsync(AssetContext context)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,r.kt)("p",null,"will lead to the following code being automatically generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing HotChocolate.Execution.Configuration;\n\nnamespace Microsoft.Extensions.DependencyInjection\n{\n    public static class AssetTypesRequestExecutorBuilderExtensions\n    {\n        public static IRequestExecutorBuilder AddTypes(this IRequestExecutorBuilder builder)\n        {\n            builder.AddTypeExtension<Demo.Types.Account.UserQueries>();\n            return builder;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"It registers the necessary types and adds them to the schema. This way we can easily add new types without having to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file."))}u.isMDXComponent=!0},9063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resolver-tree-4b499f0440df4510ac7f98c5331a83ad.png"}}]);