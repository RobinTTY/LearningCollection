"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"introduction",title:"Introduction",sidebar_position:1},i=void 0,s={unversionedId:"c-sharp/entity-framework/introduction",id:"c-sharp/entity-framework/introduction",title:"Introduction",description:"Entity Framework (EF) Core is a lightweight, extensible, open source and cross-platform version of the Entity Framework data access technology. EF Core can serve as an object-relational mapper (O/RM), which:",source:"@site/docs/c-sharp/entity-framework/introduction.md",sourceDirName:"c-sharp/entity-framework",slug:"/c-sharp/entity-framework/introduction",permalink:"/LearningCollection/c-sharp/entity-framework/introduction",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/c-sharp/entity-framework/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1},sidebar:"finance",previous:{title:"ASP.NET REST APIs",permalink:"/LearningCollection/c-sharp/asp-net/aspnet"},next:{title:"DbContext",permalink:"/LearningCollection/c-sharp/entity-framework/dbcontext"}},l={},c=[{value:"The model",id:"the-model",level:2},{value:"Querying",id:"querying",level:2},{value:"Saving data",id:"saving-data",level:2},{value:"EF O/RM considerations",id:"ef-orm-considerations",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Entity Framework (EF) Core is a lightweight, extensible, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/efcore"},"open source")," and cross-platform version of the Entity Framework data access technology. EF Core can serve as an object-relational mapper (O/RM), which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enables .NET developers to work with a database using .NET objects."),(0,r.kt)("li",{parentName:"ul"},"Eliminates the need for most of the data-access code that typically needs to be written.")),(0,r.kt)("p",null,"EF Core supports many database engines, see ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/providers/"},"Database Providers")," for details."),(0,r.kt)("h2",{id:"the-model"},"The model"),(0,r.kt)("p",null,"With EF Core, data access is performed using a model. A model is made up of entity classes and a context object that represents a session with the database. The context object allows querying and saving data."),(0,r.kt)("p",null,"EF supports the following model development approaches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a model from an existing database."),(0,r.kt)("li",{parentName:"ul"},"Hand code a model to match the database."),(0,r.kt)("li",{parentName:"ul"},"Once a model is created, use ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/"},"EF Migrations")," to create a database from the model. Migrations allow evolving the database as the model changes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Intro;\n\npublic class BloggingContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n        optionsBuilder.UseSqlServer(\n            @"Server=(localdb)\\mssqllocaldb;Database=Blogging;Trusted_Connection=True");\n    }\n}\n\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n    public int Rating { get; set; }\n    public List<Post> Posts { get; set; }\n}\n\npublic class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n}\n')),(0,r.kt)("h2",{id:"querying"},"Querying"),(0,r.kt)("p",null,"Instances of your entity classes are retrieved from the database using ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/"},"Language Integrated Query (LINQ)"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/querying/"},"Querying Data"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using (var db = new BloggingContext())\n{\n    var blogs = db.Blogs\n        .Where(b => b.Rating > 3)\n        .OrderBy(b => b.Url)\n        .ToList();\n}\n")),(0,r.kt)("h2",{id:"saving-data"},"Saving data"),(0,r.kt)("p",null,"Data is created, deleted, and modified in the database using instances of your entity classes. See ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/saving/"},"Saving Data")," to learn more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using (var db = new BloggingContext())\n{\n    var blog = new Blog { Url = "http://sample.com" };\n    db.Blogs.Add(blog);\n    db.SaveChanges();\n}\n')),(0,r.kt)("h2",{id:"ef-orm-considerations"},"EF O/RM considerations"),(0,r.kt)("p",null,"While EF Core is good at abstracting many programming details, there are some best practices applicable to any O/RM that help to avoid common pitfalls in production apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Knowledge of the underlying database server is essential")," to architect, debug, profile, and migrate data in high performance production apps. For example, knowledge of primary and foreign keys, constraints, indexes, normalization, DML and DDL statements, data types, profiling, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Functional and integration testing is important")," to replicate the production environment as closely as possible to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Find issues in the app that only show up when using a specific versions or edition of the database server."),(0,r.kt)("li",{parentName:"ul"},"Catch breaking changes when upgrading EF Core and other dependencies. For example, adding or upgrading frameworks like ASP.NET Core, OData, or AutoMapper. These dependencies can affect EF Core in unexpected ways."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance and stress testing with representative loads.")," The na\xefve usage of some features doesn't scale well. For example, multiple collections Includes, heavy use of lazy loading, conditional queries on non-indexed columns, massive updates and inserts with store-generated values, lack of concurrency handling, large models or an inadequate cache policy.")),(0,r.kt)("p",null,"More advanced considerations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security review"),": For example, handling of connection strings and other secrets, database permissions for non-deployment operation, input validation for raw SQL, encryption for sensitive data."),(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("strong",{parentName:"li"},"logging and diagnostics")," are sufficient and usable. For example, appropriate logging configuration, query tags, and Application Insights."),(0,r.kt)("li",{parentName:"ul"},"Error recovery. Prepare ",(0,r.kt)("strong",{parentName:"li"},"contingencies for common failure scenarios")," such as version rollback, fallback servers, scale-out and load balancing, DoS mitigation, and data backups."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Plan out how migrations are going to be applied during deployment;")," doing it at application start can suffer from concurrency issues and requires higher permissions than necessary for normal operation. Use staging to facilitate recovery from fatal errors during migration. For more information, see Applying Migrations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Migrations should be thoroughly tested before being applied to production data.")," The shape of the schema and the column types cannot be easily changed once the tables contain production data. For example, on SQL Server, ",(0,r.kt)("inlineCode",{parentName:"li"},"nvarchar(max)")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"decimal(18, 2)")," are rarely the best types for columns mapped to string and decimal properties, but those are the defaults that EF uses because it doesn't have knowledge of your specific scenario.")))}u.isMDXComponent=!0}}]);