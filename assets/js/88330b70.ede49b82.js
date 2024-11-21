"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7770],{62999:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=s(74848),t=s(28453);const c={id:"dependency-injection",title:"Dependency Injection"},r=void 0,d={id:"csharp/asp-net/core-concepts/dependency-injection",title:"Dependency Injection",description:"ASP.NET Core supports the dependency injection (DI) software design pattern, which is a technique for achieving Inversion of Control (IoC) between classes and their dependencies.",source:"@site/docs/csharp/asp-net/core-concepts/dependency-injection.md",sourceDirName:"csharp/asp-net/core-concepts",slug:"/csharp/asp-net/core-concepts/dependency-injection",permalink:"/LearningCollection/csharp/asp-net/core-concepts/dependency-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/core-concepts/dependency-injection.md",tags:[],version:"current",frontMatter:{id:"dependency-injection",title:"Dependency Injection"},sidebar:"docs",previous:{title:"Handling Files",permalink:"/LearningCollection/csharp/asp-net/core-concepts/handling-files"},next:{title:"Formatters",permalink:"/LearningCollection/csharp/asp-net/advanced-concepts/formatters"}},o={},a=[{value:"How it works in ASP.NET",id:"how-it-works-in-aspnet",level:2},{value:"Using dependency injection",id:"using-dependency-injection",level:3},{value:"Lifetime and registration options",id:"lifetime-and-registration-options",level:2},{value:"Transient",id:"transient",level:3},{value:"Scoped",id:"scoped",level:3},{value:"Singleton",id:"singleton",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["ASP.NET Core supports the dependency injection (DI) software design pattern, which is a technique for achieving ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#dependency-inversion",children:"Inversion of Control (IoC)"})," between classes and their dependencies."]}),"\n",(0,i.jsx)(n.p,{children:"Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out. Dependencies can be injected into objects by many means (such as constructor injection or setter injection)."}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works-in-aspnet",children:"How it works in ASP.NET"}),"\n",(0,i.jsxs)(n.p,{children:["Examine the following ",(0,i.jsx)(n.code,{children:"MyDependency"})," class with a ",(0,i.jsx)(n.code,{children:"WriteMessage"})," method that other classes depend on:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class MyDependency\n{\n    public void WriteMessage(string message)\n    {\n        Console.WriteLine($"MyDependency.WriteMessage called. Message: {message}");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["A class can create an instance of the ",(0,i.jsx)(n.code,{children:"MyDependency"})," class to make use of its ",(0,i.jsx)(n.code,{children:"WriteMessage"})," method. In the following example, the ",(0,i.jsx)(n.code,{children:"MyDependency"})," class is a dependency of the ",(0,i.jsx)(n.code,{children:"IndexModel"})," class:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class IndexModel : PageModel\n{\n    private readonly MyDependency _dependency = new MyDependency();\n\n    public void OnGet()\n    {\n        _dependency.WriteMessage("IndexModel.OnGet");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The class creates and directly depends on the ",(0,i.jsx)(n.code,{children:"MyDependency"})," class. Code dependencies, such as in the previous example, are problematic and should be avoided for the following reasons:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To replace ",(0,i.jsx)(n.code,{children:"MyDependency"})," with a different implementation, the ",(0,i.jsx)(n.code,{children:"IndexModel"})," class must be modified."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"MyDependency"})," has dependencies, they must also be configured by the ",(0,i.jsx)(n.code,{children:"IndexModel"})," class. In a large project with multiple classes depending on ",(0,i.jsx)(n.code,{children:"MyDependency"}),", the configuration code becomes scattered across the app."]}),"\n",(0,i.jsx)(n.li,{children:"This implementation is difficult to unit test."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Dependency injection addresses these problems through:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The use of an interface or base class to abstract the dependency implementation."}),"\n",(0,i.jsxs)(n.li,{children:["Registration of the dependency in a service container. ASP.NET Core provides a built-in service container, ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.iserviceprovider",children:(0,i.jsx)(n.code,{children:"IServiceProvider"})}),". Services are typically registered in the app's ",(0,i.jsx)(n.code,{children:"Program.cs"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Injection of the service into the constructor of the class where it's used. The framework takes on the responsibility of creating an instance of the dependency and disposing of it when it's no longer needed."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-dependency-injection",children:"Using dependency injection"}),"\n",(0,i.jsxs)(n.p,{children:["In the sample app, the ",(0,i.jsx)(n.code,{children:"IMyDependency"})," interface defines the ",(0,i.jsx)(n.code,{children:"WriteMessage"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public interface IMyDependency\n{\n    void WriteMessage(string message);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This interface is implemented by a concrete type, ",(0,i.jsx)(n.code,{children:"MyDependency"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class MyDependency : IMyDependency\n{\n    public void WriteMessage(string message)\n    {\n        Console.WriteLine($"MyDependency.WriteMessage Message: {message}");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The sample app registers the ",(0,i.jsx)(n.code,{children:"IMyDependency"})," service with the concrete type ",(0,i.jsx)(n.code,{children:"MyDependency"}),". The ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicecollectionserviceextensions.addscoped",children:(0,i.jsx)(n.code,{children:"AddScoped"})})," method registers the service with a scoped lifetime. Service lifetimes are described in the following section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using DependencyInjectionSample.Interfaces;\nusing DependencyInjectionSample.Services;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddRazorPages();\n\nbuilder.Services.AddScoped<IMyDependency, MyDependency>();\n\nvar app = builder.Build();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the sample app, the ",(0,i.jsx)(n.code,{children:"IMyDependency"})," service is requested and used to call the ",(0,i.jsx)(n.code,{children:"WriteMessage"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class Index2Model : PageModel\n{\n    private readonly IMyDependency _myDependency;\n\n    public Index2Model(IMyDependency myDependency)\n    {\n        _myDependency = myDependency;\n    }\n\n    public void OnGet()\n    {\n        _myDependency.WriteMessage("Index2Model.OnGet");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It's not unusual to use dependency injection in a chained fashion. Each requested dependency in turn requests its own dependencies. The container resolves the dependencies in the graph and returns the fully resolved service. The collective set of dependencies that must be resolved is typically referred to as a ",(0,i.jsx)(n.strong,{children:"dependency tree"}),", ",(0,i.jsx)(n.strong,{children:"dependency graph"}),", or object graph."]}),"\n",(0,i.jsx)(n.h2,{id:"lifetime-and-registration-options",children:"Lifetime and registration options"}),"\n",(0,i.jsx)(n.p,{children:"Services can be registered with one of the following lifetimes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transient"}),"\n",(0,i.jsx)(n.li,{children:"Scoped"}),"\n",(0,i.jsx)(n.li,{children:"Singleton"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, in the development environment, resolving a service from another service with a longer lifetime throws an exception. For more information, see ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#scope-validation",children:"Scope validation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"transient",children:"Transient"}),"\n",(0,i.jsxs)(n.p,{children:["Transient lifetime services are ",(0,i.jsx)(n.strong,{children:"created each time they're requested"})," from the service container. To register a service as transient, call ",(0,i.jsx)(n.code,{children:"AddTransient"}),". In apps that process requests, transient services are disposed at the end of the request. This lifetime incurs per/request allocations, as services are resolved and constructed every time."]}),"\n",(0,i.jsx)(n.p,{children:"These services are useful when each operation requires a clean and independent instance."}),"\n",(0,i.jsx)(n.h3,{id:"scoped",children:"Scoped"}),"\n",(0,i.jsxs)(n.p,{children:["For web applications, a scoped lifetime indicates that services are created once per client request (connection). Register scoped services with ",(0,i.jsx)(n.code,{children:"AddScoped"}),". In apps that process requests, scoped services are disposed at the end of the request."]}),"\n",(0,i.jsxs)(n.p,{children:["When using Entity Framework Core, the ",(0,i.jsx)(n.code,{children:"AddDbContext"})," extension method registers ",(0,i.jsx)(n.code,{children:"DbContext"})," types with a scoped lifetime by default."]}),"\n",(0,i.jsx)(n.h3,{id:"singleton",children:"Singleton"}),"\n",(0,i.jsx)(n.p,{children:"Singleton lifetime services are created either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first time they're requested."}),"\n",(0,i.jsx)(n.li,{children:"By the developer, when providing an implementation instance directly to the container. This approach is rarely needed."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Every subsequent request of the service implementation from the dependency injection container uses the same instance. Register singleton services with ",(0,i.jsx)(n.code,{children:"AddSingleton"}),". Singleton services must be thread safe and are often used in stateless services."]}),"\n",(0,i.jsx)(n.p,{children:"In apps that process requests, singleton services are disposed when the ServiceProvider is disposed on application shutdown. Because memory is not released until the app is shut down, consider memory use with a singleton service"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(96540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);