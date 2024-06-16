"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2270],{9295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(4848),s=t(8453),o=t(3554),c=t.n(o);const r={id:"extending-types",title:"Extending Types",sidebar_position:1},a=void 0,l={id:"csharp/libraries/hot-chocolate/advanced-concepts/extending-types",title:"Extending Types",description:"Type extensions allow us to add, remove or replace fields on existing types, without necessarily needing access to these types. Because of these capabilities, they also allow for better organization of our types. We could for example have classes that encapsulate part of our domain and extend our Query type with these functionalities.",source:"@site/docs/csharp/libraries/hot-chocolate/advanced-concepts/extending-types.mdx",sourceDirName:"csharp/libraries/hot-chocolate/advanced-concepts",slug:"/csharp/libraries/hot-chocolate/advanced-concepts/extending-types",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/extending-types",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/advanced-concepts/extending-types.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"extending-types",title:"Extending Types",sidebar_position:1},sidebar:"docs",previous:{title:"Pagination",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/pagination"},next:{title:"Errors",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/errors"}},d={},p=[{value:"Object Types",id:"object-types",level:2},{value:"Adding fields",id:"adding-fields",level:3},{value:"Removing fields",id:"removing-fields",level:3},{value:"Replacing fields",id:"replacing-fields",level:3},{value:"Extending by name",id:"extending-by-name",level:3},{value:"Extending base types",id:"extending-base-types",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Type extensions allow us to add, remove or replace fields on existing types, without necessarily needing access to these types. Because of these capabilities, they also allow for better organization of our types. We could for example have classes that encapsulate part of our domain and extend our ",(0,i.jsx)(n.code,{children:"Query"})," type with these functionalities."]}),"\n",(0,i.jsx)(c(),{controls:!0,url:"https://www.youtube.com/watch?v=EHTr4Fq6GlA",style:{marginBottom:"20px"}}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Type extensions do not produce the extend type syntax that GraphQL offers, since it would unnecessarily complicate the resulting schema. Instead, Hot Chocolate's type extensions are directly merged with the original type definition to create a single type at runtime."})}),"\n",(0,i.jsx)(n.h2,{id:"object-types",children:"Object Types"}),"\n",(0,i.jsx)(n.p,{children:"Consider we have the following entity that we want to extend with functionality:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Book\n{\n    public int Id { get; set; }\n    public string Title { get; set; }\n    public int AuthorId { get; set; }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"adding-fields",children:"Adding fields"}),"\n",(0,i.jsxs)(n.p,{children:["We can easily add new fields to our existing ",(0,i.jsx)(n.code,{children:"Book"})," type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[ExtendObjectType(typeof(Book))]\npublic class BookExtensions\n{\n    public IEnumerable<string> GetGenres([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"One of the most common use-cases for this would be adding new resolvers to one of our root types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[ExtendObjectType(typeof(Query))]\npublic class QueryBookResolvers\n{\n    public IEnumerable<Book> GetBooks()\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<QueryBookResolvers>();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"removing-fields",children:"Removing fields"}),"\n",(0,i.jsx)(n.p,{children:"We can also ignore fields of the type we are extending:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[ExtendObjectType(typeof(Book),\n    IgnoreProperties = new[] { nameof(Book.AuthorId) })]\npublic class BookExtensions\n{\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"replacing-fields",children:"Replacing fields"}),"\n",(0,i.jsxs)(n.p,{children:["We might have an ",(0,i.jsx)(n.code,{children:"Id"})," field, which we want to replace with a field that resolves the actual type the ",(0,i.jsx)(n.code,{children:"Id"})," is pointing to.\nIn this example we replace the ",(0,i.jsx)(n.code,{children:"authorId"})," field with an ",(0,i.jsx)(n.code,{children:"author"})," field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[ExtendObjectType(typeof(Book))]\npublic class BookExtensions\n{\n    [BindMember(nameof(Book.AuthorId))]\n    public Author GetAuthor([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"extending-by-name",children:"Extending by name"}),"\n",(0,i.jsx)(n.p,{children:"If we can not reference a type, we can still extend it by specifying its name:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'[ExtendObjectType("Foo")]\npublic class FooExtensions\n{\n    // Omitted code for brevity\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When extending root types, we can make use of the constants in ",(0,i.jsx)(n.code,{children:"OperationTypeNames"}),".\nWe can for example use ",(0,i.jsx)(n.code,{children:"OperationTypeNames.Query"}),' instead of writing "Query" everywhere.']}),"\n",(0,i.jsx)(n.h3,{id:"extending-base-types",children:"Extending base types"}),"\n",(0,i.jsx)(n.p,{children:"We can also extend multiple types at once, but still dedicate specific resolvers to specific types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// this extends every type that inherits from object (essentially every type)\n[ExtendObjectType(typeof(object))]\npublic class ObjectExtensions\n{\n    // this field is added to every object type\n    public string NewField()\n    {\n        // Omitted code for brevity\n    }\n\n    // this field is only added to the Book type\n    public Author GetAuthor([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n\n    // this field is only added to the Author type\n    public IEnumerable<Book> GetBooks([Parent] Author author)\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"We can also modify all object types that are connected by a base type, like an interface:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[InterfaceType]\npublic interface IPost\n{\n    string Title { get; set; }\n}\n\n// this extends every type that implements the IPost interface,\n// not the interface type itself\n[ExtendObjectType(typeof(IPost))]\npublic class PostExtensions\n{\n    public string NewField([Parent] IPost post)\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IPost"})," is annotated with ",(0,i.jsx)(n.code,{children:"[InterfaceType]"})," to include it in the GraphQL schema, but that isn't necessary for the type extension to work. We can use any base type, like ",(0,i.jsx)(n.code,{children:"object"})," or an ",(0,i.jsx)(n.code,{children:"abstract"})," base class, as an extension point without necessarily exposing the base type in our GraphQL schema."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);