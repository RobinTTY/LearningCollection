"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5453],{1822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={id:"introduction",title:"Introduction",sidebar_position:1},r=void 0,a={id:"csharp/entity-framework/introduction",title:"Introduction",description:"Entity Framework (EF) Core is a lightweight, extensible, open source and cross-platform version of the Entity Framework data access technology. EF Core can serve as an object-relational mapper (O/RM), which:",source:"@site/docs/csharp/entity-framework/introduction.md",sourceDirName:"csharp/entity-framework",slug:"/csharp/entity-framework/introduction",permalink:"/LearningCollection/csharp/entity-framework/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"Logging",permalink:"/LearningCollection/csharp/asp-net/advanced-concepts/logging"},next:{title:"DbContext",permalink:"/LearningCollection/csharp/entity-framework/dbcontext"}},l={},c=[{value:"The model",id:"the-model",level:2},{value:"Querying",id:"querying",level:2},{value:"Saving data",id:"saving-data",level:2},{value:"EF O/RM considerations",id:"ef-orm-considerations",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Entity Framework (EF) Core is a lightweight, extensible, ",(0,s.jsx)(n.a,{href:"https://github.com/dotnet/efcore",children:"open source"})," and cross-platform version of the Entity Framework data access technology. EF Core can serve as an object-relational mapper (O/RM), which:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enables .NET developers to work with a database using .NET objects."}),"\n",(0,s.jsx)(n.li,{children:"Eliminates the need for most of the data-access code that typically needs to be written."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["EF Core supports many database engines, see ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/providers/",children:"Database Providers"})," for details."]}),"\n",(0,s.jsx)(n.h2,{id:"the-model",children:"The model"}),"\n",(0,s.jsx)(n.p,{children:"With EF Core, data access is performed using a model. A model is made up of entity classes and a context object that represents a session with the database. The context object allows querying and saving data."}),"\n",(0,s.jsx)(n.p,{children:"EF supports the following model development approaches:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate a model from an existing database."}),"\n",(0,s.jsx)(n.li,{children:"Hand code a model to match the database."}),"\n",(0,s.jsxs)(n.li,{children:["Once a model is created, use ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/",children:"EF Migrations"})," to create a database from the model. Migrations allow evolving the database as the model changes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using System.Collections.Generic;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Intro;\n\npublic class BloggingContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n    public DbSet<Post> Posts { get; set; }\n\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n        optionsBuilder.UseSqlServer(\n            @"Server=(localdb)\\mssqllocaldb;Database=Blogging;Trusted_Connection=True");\n    }\n}\n\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n    public int Rating { get; set; }\n    public List<Post> Posts { get; set; }\n}\n\npublic class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"querying",children:"Querying"}),"\n",(0,s.jsxs)(n.p,{children:["Instances of your entity classes are retrieved from the database using ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/",children:"Language Integrated Query (LINQ)"}),". For more information, see ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/querying/",children:"Querying Data"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using (var db = new BloggingContext())\n{\n    var blogs = db.Blogs\n        .Where(b => b.Rating > 3)\n        .OrderBy(b => b.Url)\n        .ToList();\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"saving-data",children:"Saving data"}),"\n",(0,s.jsxs)(n.p,{children:["Data is created, deleted, and modified in the database using instances of your entity classes. See ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/saving/",children:"Saving Data"})," to learn more."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using (var db = new BloggingContext())\n{\n    var blog = new Blog { Url = "http://sample.com" };\n    db.Blogs.Add(blog);\n    db.SaveChanges();\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ef-orm-considerations",children:"EF O/RM considerations"}),"\n",(0,s.jsx)(n.p,{children:"While EF Core is good at abstracting many programming details, there are some best practices applicable to any O/RM that help to avoid common pitfalls in production apps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Knowledge of the underlying database server is essential"})," to architect, debug, profile, and migrate data in high performance production apps. For example, knowledge of primary and foreign keys, constraints, indexes, normalization, DML and DDL statements, data types, profiling, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Functional and integration testing is important"})," to replicate the production environment as closely as possible to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Find issues in the app that only show up when using a specific versions or edition of the database server."}),"\n",(0,s.jsx)(n.li,{children:"Catch breaking changes when upgrading EF Core and other dependencies. For example, adding or upgrading frameworks like ASP.NET Core, OData, or AutoMapper. These dependencies can affect EF Core in unexpected ways."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance and stress testing with representative loads."})," The na\xefve usage of some features doesn't scale well. For example, multiple collections Includes, heavy use of lazy loading, conditional queries on non-indexed columns, massive updates and inserts with store-generated values, lack of concurrency handling, large models or an inadequate cache policy."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"More advanced considerations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security review"}),": For example, handling of connection strings and other secrets, database permissions for non-deployment operation, input validation for raw SQL, encryption for sensitive data."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure ",(0,s.jsx)(n.strong,{children:"logging and diagnostics"})," are sufficient and usable. For example, appropriate logging configuration, query tags, and Application Insights."]}),"\n",(0,s.jsxs)(n.li,{children:["Error recovery. Prepare ",(0,s.jsx)(n.strong,{children:"contingencies for common failure scenarios"})," such as version rollback, fallback servers, scale-out and load balancing, DoS mitigation, and data backups."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plan out how migrations are going to be applied during deployment;"})," doing it at application start can suffer from concurrency issues and requires higher permissions than necessary for normal operation. Use staging to facilitate recovery from fatal errors during migration. For more information, see Applying Migrations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Migrations should be thoroughly tested before being applied to production data."})," The shape of the schema and the column types cannot be easily changed once the tables contain production data. For example, on SQL Server, ",(0,s.jsx)(n.code,{children:"nvarchar(max)"})," and ",(0,s.jsx)(n.code,{children:"decimal(18, 2)"})," are rarely the best types for columns mapped to string and decimal properties, but those are the defaults that EF uses because it doesn't have knowledge of your specific scenario."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);