"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const a={id:"overview",title:"Overview",sidebar_position:1},r=void 0,l={unversionedId:"csharp/entity-framework/creating-a-model/overview",id:"csharp/entity-framework/creating-a-model/overview",title:"Overview",description:"EF Core uses a metadata model to describe how the application's entity types are mapped to the underlying database. This model is built using a set of conventions - heuristics that look for common patterns.",source:"@site/docs/csharp/entity-framework/creating-a-model/overview.md",sourceDirName:"csharp/entity-framework/creating-a-model",slug:"/csharp/entity-framework/creating-a-model/overview",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/overview",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/creating-a-model/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"docs",previous:{title:"DbContext",permalink:"/LearningCollection/csharp/entity-framework/dbcontext"},next:{title:"Entity types",permalink:"/LearningCollection/csharp/entity-framework/creating-a-model/entity-types"}},s={},p=[{value:"Use fluent API to configure a model",id:"use-fluent-api-to-configure-a-model",level:2},{value:"Grouping configuration",id:"grouping-configuration",level:2},{value:"Applying all configurations in an assembly",id:"applying-all-configurations-in-an-assembly",level:3},{value:"Using <code>EntityTypeConfigurationAttribute</code> on entity types",id:"using-entitytypeconfigurationattribute-on-entity-types",level:3},{value:"Use data annotations to configure a model",id:"use-data-annotations-to-configure-a-model",level:3},{value:"Built-in conventions",id:"built-in-conventions",level:3},{value:"Removing an existing convention",id:"removing-an-existing-convention",level:3},{value:"Example: Don&#39;t create indexes for foreign key columns",id:"example-dont-create-indexes-for-foreign-key-columns",level:4},{value:"Debug View",id:"debug-view",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"EF Core uses a metadata model to describe how the application's entity types are mapped to the underlying database. This model is built using a set of conventions - heuristics that look for common patterns."),(0,i.kt)("p",null,"The model can then be customized using ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/#use-data-annotations-to-configure-a-model"},"mapping attributes (also known as data annotations)")," and/or calls to the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.modelbuilder"},"ModelBuilder")," methods ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/#use-fluent-api-to-configure-a-model"},"(also known as fluent API)")," in ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.onmodelcreating"},"OnModelCreating"),", both of which will override the configuration performed by conventions."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Most configuration can be applied to a model targeting any data store. Providers may also enable configuration that is specific to a particular data store and they can also ignore configuration that is not supported or not applicable.")),(0,i.kt)("h2",{id:"use-fluent-api-to-configure-a-model"},"Use fluent API to configure a model"),(0,i.kt)("p",null,"You can override the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating")," method in your derived context and use the fluent API to configure your model. This is the most powerful method of configuration and ",(0,i.kt)("strong",{parentName:"p"},"allows configuration to be specified without modifying your entity classes"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fluent API configuration has the highest precedence")," and will override conventions and data annotations. The configuration is applied in the order the methods are called and if there are any conflicts the latest call will override previously specified configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{12-15}","{12-15}":!0},"using Microsoft.EntityFrameworkCore;\n\nnamespace EFModeling.EntityProperties.FluentAPI.Required;\n\ninternal class MyContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n\n    #region Required\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder\n            .Entity<Blog>()\n            .Property(b => b.Url)\n            .IsRequired();\n    }\n    #endregion\n}\n\npublic class Blog\n{\n    public int BlogId { get; set; }\n    public string Url { get; set; }\n}\n")),(0,i.kt)("h2",{id:"grouping-configuration"},"Grouping configuration"),(0,i.kt)("p",null,"To reduce the size of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating")," method all configuration for an entity type can be extracted to a separate class implementing ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.ientitytypeconfiguration-1"},(0,i.kt)("inlineCode",{parentName:"a"},"IEntityTypeConfiguration<TEntity>")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class BlogEntityTypeConfiguration : IEntityTypeConfiguration<Blog>\n{\n    public void Configure(EntityTypeBuilder<Blog> builder)\n    {\n        builder\n            .Property(b => b.Url)\n            .IsRequired();\n    }\n}\n")),(0,i.kt)("p",null,"Then just invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure")," method from ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"new BlogEntityTypeConfiguration().Configure(modelBuilder.Entity<Blog>());\n")),(0,i.kt)("h3",{id:"applying-all-configurations-in-an-assembly"},"Applying all configurations in an assembly"),(0,i.kt)("p",null,"It is possible to apply all configuration specified in types implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityTypeConfiguration")," in a given assembly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"modelBuilder.ApplyConfigurationsFromAssembly(typeof(BlogEntityTypeConfiguration).Assembly);\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The order in which the configurations will be applied is undefined, therefore this method should only be used when the order doesn't matter.")),(0,i.kt)("h3",{id:"using-entitytypeconfigurationattribute-on-entity-types"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"EntityTypeConfigurationAttribute")," on entity types"),(0,i.kt)("p",null,"Rather than explicitly calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure"),", an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entitytypeconfigurationattribute"},"EntityTypeConfigurationAttribute")," can instead be placed on the entity type such that EF Core can find and use appropriate configuration. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[EntityTypeConfiguration(typeof(BookConfiguration))]\npublic class Book\n{\n    public int Id { get; set; }\n    public string Title { get; set; }\n    public string Isbn { get; set; }\n}\n")),(0,i.kt)("p",null,"This attribute means that EF Core will use the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityTypeConfiguration")," implementation whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity type is included in a model. The entity type is included in a model using one of the normal mechanisms. For example, by creating a ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1"},(0,i.kt)("inlineCode",{parentName:"a"},"DbSet<TEntity>"))," property for the entity type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class BooksContext : DbContext\n{\n    public DbSet<Book> Books { get; set; }\n\n    //...\n}\n")),(0,i.kt)("p",null,"Or by registering it in OnModelCreating:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"protected override void OnModelCreating(ModelBuilder modelBuilder)\n{\n    modelBuilder.Entity<Book>();\n}\n")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"EntityTypeConfigurationAttribute")," types will not be automatically discovered in an assembly. Entity types must be added to the model before the attribute will be discovered on that entity type.")),(0,i.kt)("h3",{id:"use-data-annotations-to-configure-a-model"},"Use data annotations to configure a model"),(0,i.kt)("p",null,"You can also apply certain attributes (known as Data Annotations) to your classes and properties. Data annotations will override conventions, but will be overridden by Fluent API configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace EFModeling.EntityProperties.DataAnnotations.Annotations;\n\ninternal class MyContext : DbContext\n{\n    public DbSet<Blog> Blogs { get; set; }\n}\n\n[Table("Blogs")]\npublic class Blog\n{\n    public int BlogId { get; set; }\n\n    [Required]\n    public string Url { get; set; }\n}\n')),(0,i.kt)("h3",{id:"built-in-conventions"},"Built-in conventions"),(0,i.kt)("p",null,"EF Core includes many model building conventions that are enabled by default. You can find all of them in the list of classes that implement the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.metadata.conventions.iconvention"},"IConvention")," interface. However, that list doesn't include conventions introduced by third-party database providers and plugins."),(0,i.kt)("p",null,"Applications can remove or replace any of these conventions, as well as add new ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/bulk-configuration#conventions"},"custom conventions")," that apply configuration for patterns that are not recognized by EF out of the box."),(0,i.kt)("h3",{id:"removing-an-existing-convention"},"Removing an existing convention"),(0,i.kt)("p",null,"Sometimes one of the built-in conventions may not appropriate for your application, in which case it can be removed."),(0,i.kt)("h4",{id:"example-dont-create-indexes-for-foreign-key-columns"},"Example: Don't create indexes for foreign key columns"),(0,i.kt)("p",null,"It usually makes sense to create indexes for foreign key (FK) columns, and hence there is a built-in convention for this: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.metadata.conventions.foreignkeyindexconvention"},"ForeignKeyIndexConvention"),". Looking at the model ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/#debug-view"},"debug view")," for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," entity type with relationships to ",(0,i.kt)("inlineCode",{parentName:"p"},"Blog")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),", we can see two indexes are created--one for the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlogId")," FK, and the other for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorId")," FK."),(0,i.kt)("p",null,"However, indexes have overhead, and it may not always be appropriate to create them for all FK columns. To achieve this, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForeignKeyIndexConvention")," can be removed when building the model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)\n{\n    configurationBuilder.Conventions.Remove(typeof(ForeignKeyIndexConvention));\n}\n")),(0,i.kt)("p",null,"When desired, indexes can still be explicitly created for foreign key columns, either using the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.indexattribute"},"IndexAttribute")," or with configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating"),"."),(0,i.kt)("h2",{id:"debug-view"},"Debug View"),(0,i.kt)("p",null,"The model builder debug view can be accessed in the debugger of your IDE. For example, with Visual Studio:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"debug-view",src:n(4204).Z,width:"1324",height:"814"})),(0,i.kt)("p",null,"It can also be accessed directly from code, for example to send the debug view to the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(context.Model.ToDebugString());\n")),(0,i.kt)("p",null,"The debug view has a short form and a long form. The long form also includes all the annotations, which could be useful if you need to view relational or provider-specific metadata. The long view can be accessed from code as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(context.Model.ToDebugString(MetadataDebugStringOptions.LongDefault));\n")))}u.isMDXComponent=!0},4204:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debug-view-6d7026eb0a39e7b37d634dd01fdde88d.png"}}]);