"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6345],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={id:"mutations",title:"Mutations",sidebar_position:3},s=void 0,i={unversionedId:"apis/graphql/hot-chocolate/mutations",id:"apis/graphql/hot-chocolate/mutations",title:"Mutations",description:"The mutation type in GraphQL is used to mutate/change data.",source:"@site/docs/apis/graphql/hot-chocolate/mutations.md",sourceDirName:"apis/graphql/hot-chocolate",slug:"/apis/graphql/hot-chocolate/mutations",permalink:"/LearningCollection/apis/graphql/hot-chocolate/mutations",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/hot-chocolate/mutations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"mutations",title:"Mutations",sidebar_position:3},sidebar:"finance",previous:{title:"Queries",permalink:"/LearningCollection/apis/graphql/hot-chocolate/queries"},next:{title:"Resolvers",permalink:"/LearningCollection/apis/graphql/hot-chocolate/resolvers"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Conventions",id:"conventions",level:2},{value:"Input and Payload",id:"input-and-payload",level:2},{value:"Errors",id:"errors",level:2},{value:"Map exceptions directly",id:"map-exceptions-directly",level:3},{value:"Map with a factory method",id:"map-with-a-factory-method",level:3},{value:"Map with a constructor",id:"map-with-a-constructor",level:3},{value:"Customization",id:"customization",level:2},{value:"Naming",id:"naming",level:3},{value:"Opting out",id:"opting-out",level:3},{value:"Custom error interface",id:"custom-error-interface",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=c("Tabs"),m=c("TabItem"),d={toc:p},h="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The mutation type in GraphQL is used to mutate/change data.\nThis means that when we are doing mutations, we are intending to cause side-effects in the system."),(0,r.kt)("p",null,"GraphQL defines mutations as top-level fields on the mutation type.\nMeaning only the fields on the mutation root type itself are mutations.\nEverything that is returned from a mutation field represents the changed state of the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  addBook(input: AddBookInput!): AddBookPayload!\n  publishBook(input: PublishBookInput!): PublishBookPayload!\n}\n")),(0,r.kt)("p",null,"Clients can execute one or more mutations through the mutation type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  addBook(input: { title: "C# in depth" }) {\n    book {\n      id\n      title\n    }\n  }\n  publishBook(input: { id: 1 }) {\n    book {\n      publishDate\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Each of these mutations is executed serially one by one whereas their child selection sets are executed possibly in parallel since only top-level mutation fields (those directly under ",(0,r.kt)("inlineCode",{parentName:"p"},"mutation"),") are allowed to cause side-effects in GraphQL."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"A mutation type can be defined like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    public async Task<BookAddedPayload> AddBook(Book book)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddMutationType<Mutation>();\n    }\n\n    // Omitted code for brevity\n}\n\n")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only one mutation type can be registered using ",(0,r.kt)("inlineCode",{parentName:"p"},"AddMutationType()"),". If we want to split up our mutation type into multiple classes, we can do so using ",(0,r.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types"},"type extensions"),".")),(0,r.kt)("p",null,"A mutation type is just a regular object type, so everything that applies to an ",(0,r.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/object-types"},"object type")," also applies to the mutation type (this is true for all root types)."),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"With multiple mutations executed serially in one request it can be useful to wrap these in a transaction that we can control. Hot Chocolate provides for this the ",(0,r.kt)("inlineCode",{parentName:"p"},"ITransactionScopeHandler")," which is used by the operation execution middleware to create transaction scopes for mutation requests."),(0,r.kt)("p",null,"Hot Chocolate provides a default implementation based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Transactions.TransactionScope")," which works with Microsoft ADO.NET data provider and hence can be used in combination with Entity Framework. The default transaction scope handler can be added like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"services\n    .AddGraphQLServer()\n    .AddDefaultTransactionScopeHandler();\n")),(0,r.kt)("p",null,"This is how the default implementation looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// Represents the default mutation transaction scope handler implementation.\n/// </summary>\npublic class DefaultTransactionScopeHandler : ITransactionScopeHandler\n{\n    /// <summary>\n    /// Creates a new transaction scope for the current\n    /// request represented by the <see cref="IRequestContext"/>.\n    /// </summary>\n    /// <param name="context">\n    /// The GraphQL request context.\n    /// </param>\n    /// <returns>\n    /// Returns a new <see cref="ITransactionScope"/>.\n    /// </returns>\n    public virtual ITransactionScope Create(IRequestContext context)\n    {\n        return new DefaultTransactionScope(\n            context,\n            new TransactionScope(\n            TransactionScopeOption.Required,\n            new TransactionOptions\n            {\n                IsolationLevel = IsolationLevel.ReadCommitted\n            }));\n    }\n}\n')),(0,r.kt)("p",null,"If we implement a custom transaction scope handler or if we choose to extend upon the default transaction scope handler, we can add it like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"services\n    .AddGraphQLServer()\n    .AddTransactionScopeHandler<CustomTransactionScopeHandler>();\n")),(0,r.kt)("h2",{id:"conventions"},"Conventions"),(0,r.kt)("p",null,"In GraphQL, it is best practice to have a single argument on mutations called ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", and each mutation should return a payload object. The payload object allows to read the changes of the mutation or to access the domain errors caused by a mutation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(input: UpdateUserNameInput!): UpdateUserNamePayload!\n}\n\ninput UpdateUserNameInput {\n  userId: ID!\n  username: String!\n}\n\ntype UpdateUserNamePayload {\n  user: User\n}\n")),(0,r.kt)("p",null,"Following this pattern helps to keep the schema evolvable but requires a lot of boilerplate code to realize."),(0,r.kt)("h2",{id:"input-and-payload"},"Input and Payload"),(0,r.kt)("p",null,"HotChocolate has built-in conventions for mutations to minimize boilerplate code. The HotChocolate mutation conventions are opt-in and can be enabled like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"service\n    .AddGraphQLServer()\n    .AddMutationConventions()\n    ...\n")),(0,r.kt)("p",null,"With the mutation conventions enabled, we can define the described mutation pattern with minimal code by just annotating a field with ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMutationConvention"),"."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [UseMutationConvention]\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n    //...\n    }\n}\n"))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Mutation\n{\n    public User UpdateUserNameAsync(\n        Guid userId,\n        string username)\n        => ...;\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n            .Field(f => f.UpdateUserNameAsync(default, default))\n            .Argument("userId", a => a.ID())\n            .UseMutationConvention();\n    }\n}\n'))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User @useMutationConvention\n}\n")))),(0,r.kt)("p",null,"We also can configure the mutation conventions to be applied to all mutations by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"service\n    .AddGraphQLServer()\n    .AddMutationConventions(applyToAllMutations: true)\n    ...\n")),(0,r.kt)("p",null,"In the case that the conventions are applied by default we no longer need any annotation:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n    //...\n    }\n}\n\n"))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Mutation\n{\n    public User UpdateUserNameAsync(\n        Guid userId,\n        string username)\n        => ...;\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n            .Field(f => f.UpdateUserNameAsync(default, default))\n            .Argument("userId", a => a.ID());\n    }\n}\n'))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User\n}\n")))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"The mutation conventions also allow you to create mutations that follow the error ",(0,r.kt)("a",{parentName:"p",href:"https://xuorig.medium.com/a-guide-to-graphql-errors-bb9ba9f15f85"},"stage 6a Pattern Marc-Andre Giroux layed out")," with minimal effort."),(0,r.kt)("p",null,"The basic concept here is to keep the resolver clean of any error handling code and use exceptions to signal an error state. The field will simply expose which exceptions are domain errors that shall be exposed to the schema. All other exceptions will still cause runtime errors."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [Error(typeof(UserNameTakenException))]\n    [Error(typeof(InvalidUserNameException))]\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n        //...\n    }\n}\n"))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n       // ...\n    }\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n          .Field(f => f.UpdateUserNameAsync(default))\n          .Error<UserNameTakenException>()\n          .Error<InvalidUserNameException>();\n    }\n}\n"))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [Error(typeof(UserNameTakenException))]\n    [Error(typeof(InvalidUserNameException))]\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n        //...\n    }\n}\n")))),(0,r.kt)("p",null,"The HotChocolate schema is automatically rewritten, and an error middleware will catch all the exceptions that represent domain errors and rewrite them into the correct error object. The configuration above emits the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(input: UpdateUserNameInput!): UpdateUserNamePayload!\n}\n\ninput UpdateUserNameInput {\n  userId: ID!\n  username: String!\n}\n\ntype UpdateUserNamePayload {\n  user: User\n  errors: [UpdateUserNameError!]\n}\n\ntype User {\n  username: String\n}\n\ninterface Error {\n  message: String!\n}\n\ntype UserNameTakenError implements Error {\n  message: String!\n}\n\ntype InvalidUserNameError implements Error {\n  message: String!\n}\n\nunion UpdateUserNameError = UserNameTakenError | InvalidUserNameError\n")),(0,r.kt)("p",null,"There are three ways to map an exception to a user error:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Map the exception directly"),(0,r.kt)("li",{parentName:"ol"},"Map with a factory method (",(0,r.kt)("inlineCode",{parentName:"li"},"CreateErrorFrom"),")"),(0,r.kt)("li",{parentName:"ol"},"Map with a constructor")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use AggregateExceptions to return multiple errors at once.")),(0,r.kt)("h3",{id:"map-exceptions-directly"},"Map exceptions directly"),(0,r.kt)("p",null,"The quickest way to define a user error, is to map the exception directly into the graph. You can just annotate the exception directly on the resolver. If the exception is thrown and is caught in the error middleware, it will be rewritten into an user error that is exposed on the mutation payload. The name of the exception will be rewritten. ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," to follow the common GraphQL naming conventions."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n        : base($"The username {username} is already taken.")\n    {\n    }\n}\n\npublic class Mutation\n{\n    [Error(typeof(UserNameTakenException))]\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n        //...\n    }\n}\n'))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n        : base($"The username {username} is already taken.")\n    {\n    }\n}\n\npublic class Mutation\n{\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n       // ...\n    }\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n          .Field(f => f.UpdateUserNameAsync(default))\n          .Error<UserNameTakenException>();\n    }\n}\n'))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n        : base($"The username {username} is already taken.")\n    {\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [Error(typeof(UserNameTakenException))]\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n        //...\n    }\n}\n")))),(0,r.kt)("h3",{id:"map-with-a-factory-method"},"Map with a factory method"),(0,r.kt)("p",null,"Often there is a need to control the error shape and ensure that not too many details are exposed. In these cases, we can use a custom error class representing the user error in our schema. The error instance and the translation of the exception can be done by an error factory. The error factory method receives an exception and returns the error object."),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," method called ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateErrorFrom")," that takes an exception and returns the error object:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(string username)\n    {\n        Message = $"The username {username} is already taken.";\n    }\n\n    public static UserNameTakenError CreateErrorFrom(UserNameTakenException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public static UserNameTakenError CreateErrorFrom(OtherException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public string Message { get; }\n}\n\npublic class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n    {\n        Username = username;\n    }\n\n    public string Username { get; }\n}\n\npublic class Mutation\n{\n    [Error(typeof(UserNameTakenError))]\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n        //...\n    }\n}\n'))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(string username)\n    {\n        Message = $"The username {username} is already taken.";\n    }\n\n    public static UserNameTakenError CreateErrorFrom(UserNameTakenException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public static UserNameTakenError CreateErrorFrom(OtherException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public string Message { get; }\n}\n\npublic class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n    {\n        Username = username;\n    }\n\n    public string Username { get; }\n}\n\npublic class Mutation\n{\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n       // ...\n    }\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n          .Field(f => f.UpdateUserNameAsync(default))\n          .Error<UserNameTakenError>();\n    }\n}\n'))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(string username)\n    {\n        Message = $"The username {username} is already taken.";\n    }\n\n    public static UserNameTakenError CreateErrorFrom(UserNameTakenException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public static UserNameTakenError CreateErrorFrom(OtherException ex)\n    {\n        return new UserNameTakenError(ex.Username);\n    }\n\n    public string Message { get; }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [Error(typeof(UserNameTakenError))]\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n        //...\n    }\n}\n")))),(0,r.kt)("p",null,"Error factories can also be located in a dedicated class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class CreateUserErrorFactory\n{\n    public static UserNameTakenError CreateErrorFrom(DomainExceptionA ex)\n    {\n        return new UserNameTakenError();\n    }\n\n    public static UserNameTakenError CreateErrorFrom(DomainExceptionB ex)\n    {\n        return new UserNameTakenError();\n    }\n}\n\npublic class Mutation\n{\n    [Error(typeof(CreateUserErrorFactory))]\n    public CreateUserPayload CreateUser(CreateUserInput input)\n    {\n       // ...\n    }\n}\n")),(0,r.kt)("p",null,"Further the error factory methods do not have to be static. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPayloadErrorFactory<TError, TException>")," interface, to define instance error factory methods. This also enables you to use dependency injection with your factory class."),(0,r.kt)("h3",{id:"map-with-a-constructor"},"Map with a constructor"),(0,r.kt)("p",null,"Lastly, we can also use the constructor of an error class to consume an exception. Essentially the constructor in this case represents the factory that we described earlier:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(UserNameTakenException ex)\n    {\n        Message = $"The username {ex.Username} is already taken.";\n    }\n\n    public string Message { get; }\n}\n\npublic class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n    {\n        Username = username;\n    }\n\n    public string Username { get; }\n}\n\npublic class Mutation\n{\n    [Error(typeof(UserNameTakenError))]\n    public User? UpdateUserNameAsync([ID] Guid userId, string username)\n    {\n        //...\n    }\n}\n'))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(UserNameTakenException ex)\n    {\n        Message = $"The username {ex.Username} is already taken.";\n    }\n\n    public string Message { get; }\n}\n\npublic class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n    {\n        Username = username;\n    }\n\n    public string Username { get; }\n}\n\npublic class Mutation\n{\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n       // ...\n    }\n}\n\npublic class MutationType : ObjectType<Mutation>\n{\n    protected override void Configure(\n        IObjectTypeDescriptor<Mutation> descriptor)\n    {\n        descriptor\n          .Field(f => f.UpdateUserNameAsync(default))\n          .Error<UserNameTakenError>();\n    }\n}\n'))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class UserNameTakenError\n{\n    private UserNameTakenError(UserNameTakenException ex)\n    {\n        Message = $"The username {ex.Username} is already taken.";\n    }\n\n    public string Message { get; }\n}\n\npublic class UserNameTakenException : Exception\n{\n    public UserNameTakenException(string username)\n    {\n        Username = username;\n    }\n\n    public string Username { get; }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  updateUserName(userId: ID!, username: String!): User\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Mutation\n{\n    [Error(typeof(UserNameTakenError))]\n    public User? UpdateUserNameAsync(Guid userId, string username)\n    {\n        //...\n    }\n}\n")))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Errors and error factories can be shared between multiple mutations.")),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"While the mutation conventions strictly follow the outlined mutation and error patterns they still can be customized."),(0,r.kt)("h3",{id:"naming"},"Naming"),(0,r.kt)("p",null,"The naming patterns for inputs, payloads and errors can be adjusted globally as well as on a per mutation basis.\nIn order to change the global mutation naming patterns you can pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MutationConventionOptions")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"AddMutationConventions")," configuration method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'services\n    .AddGraphQL()\n    .AddMutationConventions(\n        new MutationConventionOptions\n        {\n            InputArgumentName = "input",\n            InputTypeNamePattern = "{MutationName}Input",\n            PayloadTypeNamePattern = "{MutationName}Payload",\n            PayloadErrorTypeNamePattern = "{MutationName}Error",\n            PayloadErrorsFieldName = "errors",\n            ApplyToAllMutations = true\n        })\n    ...\n')),(0,r.kt)("p",null,"To override the global mutation settings on a mutation use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMutationConvention")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[UseMutationConvention(\n    InputTypeName = "FooInput",\n    InputArgumentName = "foo",\n    PayloadTypeName = "FooPayload",\n    PayloadFieldName = "bar")]\npublic User? UpdateUserNameAsync(Guid userId, string username)\n{\n    //...\n}\n')),(0,r.kt)("h3",{id:"opting-out"},"Opting out"),(0,r.kt)("p",null,"Often we want to infer everything and only opt-out for exceptional cases, and the mutation convention allows us to do that in an effortless way.\nThe first way to opt out of the global conventions is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMutationConvention")," annotation. With ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMutationConvention")," we can tell the type system initialization to disable the convention on certain mutations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[UseMutationConvention(Disable = true)]\npublic User? UpdateUserNameAsync(Guid userId, string username)\n{\n    //...\n}\n")),(0,r.kt)("p",null,"In many cases, we do not want to entirely opt-out but rather override the global settings since we wish for a more complex payload or input. We can simply add our own payload or input type in these cases, and the schema initialization will recognize that. Essentially if we follow the naming pattern for either input or payload, the initialization will not rewrite that part that already follows the global convention."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public UpdateUserNamePayload UpdateUserNameAsync(UpdateUserNameInput input)\n{\n    //...\n}\n\n// You can also partially opt-out:\n\npublic User UpdateUserNameAsync(UpdateUserNameInput input)\n{\n    //...\n}\n")),(0,r.kt)("h3",{id:"custom-error-interface"},"Custom error interface"),(0,r.kt)("p",null,"Lastly, we can customize the error interface we want to use with our mutation convention. The error interface is shared across all error types that the schema defines and provides the minimum shape that all errors have to fulfill."),(0,r.kt)("p",null,"By default, this error interface type is called ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," and defines a non-nullable field ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Error {\n  message: String!\n}\n")),(0,r.kt)("p",null,"Often we also want to provide an error code so that the GUI components can more easily implement error handling logic. In such a case, we could provide our own error interface:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[GraphQLName("UserError")]\npublic interface IUserError\n{\n  string Message { get; }\n\n  string Code { get; }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            // ... Omitted code for brevity\n            .AddErrorInterfaceType<IUserError>();\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserError {\n  message: String!\n  code: String!\n}\n"))),(0,r.kt)(m,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class CustomErrorInterfaceType : InterfaceType\n{\n    protected override void Configure(IInterfaceTypeDescriptor descriptor)\n    {\n        descriptor.Name("UserError");\n        descriptor.Field("message").Type<NonNullType<StringType>>();\n        descriptor.Field("code").Type<NonNullType<StringType>>();\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            // ... Omitted code for brevity\n            .AddErrorInterfaceType<CustomErrorInterfaceType>();\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserError {\n  message: String!\n  code: String!\n}\n"))),(0,r.kt)(m,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserError @errorInterface {\n  message: String!\n  code: String!\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserError {\n  message: String!\n  code: String!\n}\n")))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All your error types have to implement the contract that the interface declares! Your errors/exceptions do not have to implement the common interface, but they have to declare all the interface's members.")))}g.isMDXComponent=!0}}]);