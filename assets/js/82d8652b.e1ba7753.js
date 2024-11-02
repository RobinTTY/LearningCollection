"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8574],{5437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(4848),o=t(8453);const r={title:"Overview"},a=void 0,s={id:"csharp/entity-framework/creating-a-model/overview",title:"Overview",description:"EF Core uses a metadata model to describe how the application's entity types are mapped to the underlying database. This model is built using a set of conventions - heuristics that look for common patterns.",source:"@site/docs/csharp/entity-framework/creating-a-model/overview.md",sourceDirName:"csharp/entity-framework/creating-a-model",slug:"/csharp/entity-framework/creating-a-model/overview",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/creating-a-model/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Migrations",permalink:"/LearningCollection/csharp/entity-framework/migrations"},next:{title:"Entity types",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/entity-types"}},l={},c=[{value:"Use fluent API to configure a model",id:"use-fluent-api-to-configure-a-model",level:2},{value:"Grouping configuration",id:"grouping-configuration",level:2},{value:"Applying all configurations in an assembly",id:"applying-all-configurations-in-an-assembly",level:3},{value:"Using <code>EntityTypeConfigurationAttribute</code> on entity types",id:"using-entitytypeconfigurationattribute-on-entity-types",level:3},{value:"Use data annotations to configure a model",id:"use-data-annotations-to-configure-a-model",level:3},{value:"Built-in conventions",id:"built-in-conventions",level:3},{value:"Removing an existing convention",id:"removing-an-existing-convention",level:3},{value:"Example: Don&#39;t create indexes for foreign key columns",id:"example-dont-create-indexes-for-foreign-key-columns",level:4},{value:"Debug View",id:"debug-view",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"EF Core uses a metadata model to describe how the application's entity types are mapped to the underlying database. This model is built using a set of conventions - heuristics that look for common patterns."}),"\n",(0,i.jsxs)(n.p,{children:["The model can then be customized using ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/#use-data-annotations-to-configure-a-model",children:"mapping attributes (also known as data annotations)"})," and/or calls to the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.modelbuilder",children:"ModelBuilder"})," methods ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/#use-fluent-api-to-configure-a-model",children:"(also known as fluent API)"})," in ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.onmodelcreating",children:"OnModelCreating"}),", both of which will override the configuration performed by conventions."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Most configuration can be applied to a model targeting any data store. Providers may also enable configuration that is specific to a particular data store and they can also ignore configuration that is not supported or not applicable."})}),"\n",(0,i.jsx)(n.h2,{id:"use-fluent-api-to-configure-a-model",children:"Use fluent API to configure a model"}),"\n",(0,i.jsxs)(n.p,{children:["You can override the ",(0,i.jsx)(n.code,{children:"OnModelCreating"})," method in your derived context and use the fluent API to configure your model. This is the most powerful method of configuration and ",(0,i.jsx)(n.strong,{children:"allows configuration to be specified without modifying your entity classes"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fluent API configuration has the highest precedence"})," and will override conventions and data annotations. The configuration is applied in the order the methods are called and if there are any conflicts the latest call will override previously specified configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"{12-15}",children:"using Microsoft.EntityFrameworkCore;\n\nnamespace EFModeling.EntityProperties.FluentAPI.Required;\n\ninternal class MyContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n\n    #region Required\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder\n            .Entity<Blog>()\n            .Property(b => b.Url)\n            .IsRequired();\n    }\n    #endregion\n}\n\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"grouping-configuration",children:"Grouping configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To reduce the size of the ",(0,i.jsx)(n.code,{children:"OnModelCreating"})," method all configuration for an entity type can be extracted to a separate class implementing ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.ientitytypeconfiguration-1",children:(0,i.jsx)(n.code,{children:"IEntityTypeConfiguration<TEntity>"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class BlogEntityTypeConfiguration : IEntityTypeConfiguration<Blog>\n{\n    public void Configure(EntityTypeBuilder<Blog> builder)\n    {\n        builder\n            .Property(b => b.Url)\n            .IsRequired();\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then just invoke the ",(0,i.jsx)(n.code,{children:"Configure"})," method from ",(0,i.jsx)(n.code,{children:"OnModelCreating"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"new BlogEntityTypeConfiguration().Configure(modelBuilder.Entity<Blog>());\n"})}),"\n",(0,i.jsx)(n.h3,{id:"applying-all-configurations-in-an-assembly",children:"Applying all configurations in an assembly"}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to apply all configuration specified in types implementing ",(0,i.jsx)(n.code,{children:"IEntityTypeConfiguration"})," in a given assembly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"modelBuilder.ApplyConfigurationsFromAssembly(typeof(BlogEntityTypeConfiguration).Assembly);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The order in which the configurations will be applied is undefined, therefore this method should only be used when the order doesn't matter."})}),"\n",(0,i.jsxs)(n.h3,{id:"using-entitytypeconfigurationattribute-on-entity-types",children:["Using ",(0,i.jsx)(n.code,{children:"EntityTypeConfigurationAttribute"})," on entity types"]}),"\n",(0,i.jsxs)(n.p,{children:["Rather than explicitly calling ",(0,i.jsx)(n.code,{children:"Configure"}),", an ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entitytypeconfigurationattribute",children:"EntityTypeConfigurationAttribute"})," can instead be placed on the entity type such that EF Core can find and use appropriate configuration. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[EntityTypeConfiguration(typeof(BookConfiguration))]\npublic class Book\n{\n    public int Id { get; set; }\n    public string Title { get; set; }\n    public string Isbn { get; set; }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This attribute means that EF Core will use the specified ",(0,i.jsx)(n.code,{children:"IEntityTypeConfiguration"})," implementation whenever the ",(0,i.jsx)(n.code,{children:"Book"})," entity type is included in a model. The entity type is included in a model using one of the normal mechanisms. For example, by creating a ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1",children:(0,i.jsx)(n.code,{children:"DbSet<TEntity>"})})," property for the entity type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class BooksContext : DbContext\n{\n    public DbSet<Book> Books { get; set; }\n\n    //...\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or by registering it in OnModelCreating:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<Book>();\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EntityTypeConfigurationAttribute"})," types will not be automatically discovered in an assembly. Entity types must be added to the model before the attribute will be discovered on that entity type."]})}),"\n",(0,i.jsx)(n.h3,{id:"use-data-annotations-to-configure-a-model",children:"Use data annotations to configure a model"}),"\n",(0,i.jsx)(n.p,{children:"You can also apply certain attributes (known as Data Annotations) to your classes and properties. Data annotations will override conventions, but will be overridden by Fluent API configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace EFModeling.EntityProperties.DataAnnotations.Annotations;\n\ninternal class MyContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n}\n\n[Table("Blogs")]\npublic class Blog\n{\n    public int BlogId { get; set; }\n\n    [Required]\n    public string Url { get; set; }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"built-in-conventions",children:"Built-in conventions"}),"\n",(0,i.jsxs)(n.p,{children:["EF Core includes many model building conventions that are enabled by default. You can find all of them in the list of classes that implement the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.metadata.conventions.iconvention",children:"IConvention"})," interface. However, that list doesn't include conventions introduced by third-party database providers and plugins."]}),"\n",(0,i.jsxs)(n.p,{children:["Applications can remove or replace any of these conventions, as well as add new ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/bulk-configuration#conventions",children:"custom conventions"})," that apply configuration for patterns that are not recognized by EF out of the box."]}),"\n",(0,i.jsx)(n.h3,{id:"removing-an-existing-convention",children:"Removing an existing convention"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes one of the built-in conventions may not appropriate for your application, in which case it can be removed."}),"\n",(0,i.jsx)(n.h4,{id:"example-dont-create-indexes-for-foreign-key-columns",children:"Example: Don't create indexes for foreign key columns"}),"\n",(0,i.jsxs)(n.p,{children:["It usually makes sense to create indexes for foreign key (FK) columns, and hence there is a built-in convention for this: ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.metadata.conventions.foreignkeyindexconvention",children:"ForeignKeyIndexConvention"}),". Looking at the model ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/ef/core/modeling/#debug-view",children:"debug view"})," for a ",(0,i.jsx)(n.code,{children:"Post"})," entity type with relationships to ",(0,i.jsx)(n.code,{children:"Blog"})," and ",(0,i.jsx)(n.code,{children:"Author"}),", we can see two indexes are created--one for the ",(0,i.jsx)(n.code,{children:"BlogId"})," FK, and the other for the ",(0,i.jsx)(n.code,{children:"AuthorId"})," FK."]}),"\n",(0,i.jsxs)(n.p,{children:["However, indexes have overhead, and it may not always be appropriate to create them for all FK columns. To achieve this, the ",(0,i.jsx)(n.code,{children:"ForeignKeyIndexConvention"})," can be removed when building the model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)\n{\n    configurationBuilder.Conventions.Remove(typeof(ForeignKeyIndexConvention));\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When desired, indexes can still be explicitly created for foreign key columns, either using the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.indexattribute",children:"IndexAttribute"})," or with configuration in ",(0,i.jsx)(n.code,{children:"OnModelCreating"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"debug-view",children:"Debug View"}),"\n",(0,i.jsx)(n.p,{children:"The model builder debug view can be accessed in the debugger of your IDE. For example, with Visual Studio:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"debug-view",src:t(9035).A+"",width:"1324",height:"814"})}),"\n",(0,i.jsx)(n.p,{children:"It can also be accessed directly from code, for example to send the debug view to the console:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"Console.WriteLine(context.Model.ToDebugString());\n"})}),"\n",(0,i.jsx)(n.p,{children:"The debug view has a short form and a long form. The long form also includes all the annotations, which could be useful if you need to view relational or provider-specific metadata. The long view can be accessed from code as well:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"Console.WriteLine(context.Model.ToDebugString(MetadataDebugStringOptions.LongDefault));\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9035:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/debug-view-6d7026eb0a39e7b37d634dd01fdde88d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);