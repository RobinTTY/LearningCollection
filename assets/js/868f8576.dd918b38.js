"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[413],{3729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(4848),a=t(8453);const l={title:"Entity types"},s=void 0,o={id:"csharp/entity-framework/creating-a-model/entity-types",title:"Entity types",description:"Including a DbSet of a type on your context means that it is included in EF Core's model; we usually refer to such a type as an entity. EF Core can read and write entity instances from/to the database, and if you're using a relational database, EF Core can create tables for your entities via migrations.",source:"@site/docs/csharp/entity-framework/creating-a-model/entity-types.md",sourceDirName:"csharp/entity-framework/creating-a-model",slug:"/csharp/entity-framework/creating-a-model/entity-types",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/entity-types",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/creating-a-model/entity-types.md",tags:[],version:"current",frontMatter:{title:"Entity types"},sidebar:"docs",previous:{title:"Overview",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/overview"},next:{title:"Relationships",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/relationships"}},r={},d=[{value:"Including types in the model",id:"including-types-in-the-model",level:2},{value:"Table name",id:"table-name",level:3},{value:"Table schema",id:"table-schema",level:3},{value:"Table comments",id:"table-comments",level:3},{value:"Excluding types from the model",id:"excluding-types-from-the-model",level:2},{value:"View mapping",id:"view-mapping",level:3},{value:"Excluding from migrations",id:"excluding-from-migrations",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Including a DbSet of a type on your context means that it is included in EF Core's model; we usually refer to such a type as an entity. EF Core can read and write entity instances from/to the database, and if you're using a relational database, EF Core can create tables for your entities via migrations."}),"\n",(0,i.jsx)(n.h2,{id:"including-types-in-the-model",children:"Including types in the model"}),"\n",(0,i.jsxs)(n.p,{children:["By convention, types that are exposed in DbSet properties on your context are included in the model as entities. Entity types that are specified in the ",(0,i.jsx)(n.code,{children:"OnModelCreating"})," method are also included, as are any types that are found by recursively exploring the navigation properties of other discovered entity types."]}),"\n",(0,i.jsx)(n.p,{children:"In the code sample below, all types are included:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Blog"})," is included because it's exposed in a DbSet property on the context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Post"})," is included because it's discovered via the ",(0,i.jsx)(n.code,{children:"Blog.Posts"})," navigation property."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AuditEntry"})," because it is specified in OnModelCreating."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"internal class MyContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<AuditEntry>();\n    }\n}\n\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n\n    public List<Post> Posts { get; set; }\n}\n\npublic class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    public Blog Blog { get; set; }\n}\n\npublic class AuditEntry\n{\n    public int AuditEntryId { get; set; }\n    public string Username { get; set; }\n    public string Action { get; set; }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"table-name",children:"Table name"}),"\n",(0,i.jsxs)(n.p,{children:["By convention, each entity type will be set up to map to a database table with the same name as the ",(0,i.jsx)(n.code,{children:"DbSet"})," property that exposes the entity. If no ",(0,i.jsx)(n.code,{children:"DbSet"})," exists for the given entity, the class name is used."]}),"\n",(0,i.jsx)(n.p,{children:"You can manually configure the table name:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"{2,12-13}",children:'/// via annotations\n[Table("blogs")]\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n}\n\n/// via fluent API\nprotected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<Blog>()\n        .ToTable("blogs");\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"table-schema",children:"Table schema"}),"\n",(0,i.jsxs)(n.p,{children:["When using a relational database, tables are by convention created in your database's default schema. For example, Microsoft SQL Server will use the ",(0,i.jsx)(n.code,{children:"dbo"})," schema (SQLite does not support schemas)."]}),"\n",(0,i.jsx)(n.p,{children:"You can configure tables to be created in a specific schema as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"{2,12-13}",children:'/// via annotations\n[Table("blogs", Schema = "blogging")]\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n}\n\n/// via fluent API\nprotected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<Blog>()\n        .ToTable("blogs", schema: "blogging");\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Rather than specifying the schema for each table, you can also define the default schema at the model level with the fluent API:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"{3}",children:'protected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.HasDefaultSchema("blogging");\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"table-comments",children:"Table comments"}),"\n",(0,i.jsx)(n.p,{children:"You can set an arbitrary text comment that gets set on the database table, allowing you to document your schema in the database:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"{2,12-13}",children:'/// via annotations\n[Comment("Blogs managed on the website")]\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n}\n\n/// via fluent API\nprotected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<Blog>().ToTable(\n        tableBuilder => tableBuilder.HasComment("Blogs managed on the website"));\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"excluding-types-from-the-model",children:"Excluding types from the model"}),"\n",(0,i.jsx)(n.p,{children:"If you don't want a type to be included in the model, you can exclude it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"/// via annotations\n[NotMapped]\npublic class BlogMetadata\n{\n    public DateTime LoadedFromDatabase { get; set; }\n}\n\n/// via fluent API\nprotected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Ignore<BlogMetadata>();\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-mapping",children:"View mapping"}),"\n",(0,i.jsx)(n.p,{children:"Entity types can be mapped to database views using the Fluent API. EF will assume that the referenced view already exists in the database, it will not create it automatically in a migration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'modelBuilder.Entity<Blog>()\n    .ToView("blogsView", schema: "blogging");\n'})}),"\n",(0,i.jsx)(n.p,{children:"Mapping to a view will remove the default table mapping, but the entity type can also be mapped to a table explicitly. In this case the query mapping will be used for queries and the table mapping will be used for updates."}),"\n",(0,i.jsx)(n.h2,{id:"excluding-from-migrations",children:"Excluding from migrations"}),"\n",(0,i.jsxs)(n.p,{children:["It is sometimes useful to have the same entity type mapped in multiple ",(0,i.jsx)(n.code,{children:"DbContext"})," types. This is especially true when using ",(0,i.jsx)(n.a,{href:"https://www.martinfowler.com/bliki/BoundedContext.html",children:"bounded contexts"}),", for which it is common to have a different ",(0,i.jsx)(n.code,{children:"DbContext"})," type for each bounded context."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'protected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<IdentityUser>()\n        .ToTable("AspNetUsers", t => t.ExcludeFromMigrations());\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["With this configuration migrations will not create the ",(0,i.jsx)(n.code,{children:"AspNetUsers"})," table, but ",(0,i.jsx)(n.code,{children:"IdentityUser"})," is still included in the model and can be used normally."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to start managing the table using migrations again then a new migration should be created where ",(0,i.jsx)(n.code,{children:"AspNetUsers"})," is not excluded. The next migration will now contain any changes made to the table."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);