"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7991],{4904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905)),a=n(2004);const s={id:"extending-types",title:"Extending Types",sidebar_position:1},r=void 0,l={unversionedId:"csharp/libraries/hot-chocolate/advanced-concepts/extending-types",id:"csharp/libraries/hot-chocolate/advanced-concepts/extending-types",title:"Extending Types",description:"Type extensions allow us to add, remove or replace fields on existing types, without necessarily needing access to these types. Because of these capabilities, they also allow for better organization of our types. We could for example have classes that encapsulate part of our domain and extend our Query type with these functionalities.",source:"@site/docs/csharp/libraries/hot-chocolate/advanced-concepts/extending-types.mdx",sourceDirName:"csharp/libraries/hot-chocolate/advanced-concepts",slug:"/csharp/libraries/hot-chocolate/advanced-concepts/extending-types",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/extending-types",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/advanced-concepts/extending-types.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"extending-types",title:"Extending Types",sidebar_position:1},sidebar:"docs",previous:{title:"Pagination",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/pagination"},next:{title:"Errors",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/errors"}},c={},p=[{value:"Object Types",id:"object-types",level:2},{value:"Adding fields",id:"adding-fields",level:3},{value:"Removing fields",id:"removing-fields",level:3},{value:"Replacing fields",id:"replacing-fields",level:3},{value:"Extending by name",id:"extending-by-name",level:3},{value:"Extending base types",id:"extending-base-types",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Type extensions allow us to add, remove or replace fields on existing types, without necessarily needing access to these types. Because of these capabilities, they also allow for better organization of our types. We could for example have classes that encapsulate part of our domain and extend our ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," type with these functionalities."),(0,o.kt)(a.Z,{controls:!0,url:"https://www.youtube.com/watch?v=EHTr4Fq6GlA",style:{marginBottom:"20px"},mdxType:"ReactPlayer"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Type extensions do not produce the extend type syntax that GraphQL offers, since it would unnecessarily complicate the resulting schema. Instead, Hot Chocolate's type extensions are directly merged with the original type definition to create a single type at runtime.")),(0,o.kt)("h2",{id:"object-types"},"Object Types"),(0,o.kt)("p",null,"Consider we have the following entity that we want to extend with functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Book\n{\n    public int Id { get; set; }\n    public string Title { get; set; }\n    public int AuthorId { get; set; }\n}\n")),(0,o.kt)("h3",{id:"adding-fields"},"Adding fields"),(0,o.kt)("p",null,"We can easily add new fields to our existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExtendObjectType(typeof(Book))]\npublic class BookExtensions\n{\n    public IEnumerable<string> GetGenres([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n")),(0,o.kt)("p",null,"One of the most common use-cases for this would be adding new resolvers to one of our root types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExtendObjectType(typeof(Query))]\npublic class QueryBookResolvers\n{\n    public IEnumerable<Book> GetBooks()\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<QueryBookResolvers>();\n    }\n}\n")),(0,o.kt)("h3",{id:"removing-fields"},"Removing fields"),(0,o.kt)("p",null,"We can also ignore fields of the type we are extending:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExtendObjectType(typeof(Book),\n    IgnoreProperties = new[] { nameof(Book.AuthorId) })]\npublic class BookExtensions\n{\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n")),(0,o.kt)("h3",{id:"replacing-fields"},"Replacing fields"),(0,o.kt)("p",null,"We might have an ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," field, which we want to replace with a field that resolves the actual type the ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," is pointing to.\nIn this example we replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorId")," field with an ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExtendObjectType(typeof(Book))]\npublic class BookExtensions\n{\n    [BindMember(nameof(Book.AuthorId))]\n    public Author GetAuthor([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddTypeExtension<BookExtensions>();\n    }\n}\n")),(0,o.kt)("h3",{id:"extending-by-name"},"Extending by name"),(0,o.kt)("p",null,"If we can not reference a type, we can still extend it by specifying its name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[ExtendObjectType("Foo")]\npublic class FooExtensions\n{\n    // Omitted code for brevity\n}\n')),(0,o.kt)("p",null,"When extending root types, we can make use of the constants in ",(0,o.kt)("inlineCode",{parentName:"p"},"OperationTypeNames"),".\nWe can for example use ",(0,o.kt)("inlineCode",{parentName:"p"},"OperationTypeNames.Query"),' instead of writing "Query" everywhere.'),(0,o.kt)("h3",{id:"extending-base-types"},"Extending base types"),(0,o.kt)("p",null,"We can also extend multiple types at once, but still dedicate specific resolvers to specific types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// this extends every type that inherits from object (essentially every type)\n[ExtendObjectType(typeof(object))]\npublic class ObjectExtensions\n{\n    // this field is added to every object type\n    public string NewField()\n    {\n        // Omitted code for brevity\n    }\n\n    // this field is only added to the Book type\n    public Author GetAuthor([Parent] Book book)\n    {\n        // Omitted code for brevity\n    }\n\n    // this field is only added to the Author type\n    public IEnumerable<Book> GetBooks([Parent] Author author)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,o.kt)("p",null,"We can also modify all object types that are connected by a base type, like an interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[InterfaceType]\npublic interface IPost\n{\n    string Title { get; set; }\n}\n\n// this extends every type that implements the IPost interface,\n// not the interface type itself\n[ExtendObjectType(typeof(IPost))]\npublic class PostExtensions\n{\n    public string NewField([Parent] IPost post)\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IPost")," is annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"[InterfaceType]")," to include it in the GraphQL schema, but that isn't necessary for the type extension to work. We can use any base type, like ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," base class, as an extension point without necessarily exposing the base type in our GraphQL schema.")))}h.isMDXComponent=!0}}]);