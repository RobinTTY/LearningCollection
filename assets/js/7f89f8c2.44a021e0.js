"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7922],{6320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(5893),i=r(1151);const a={id:"introduction",title:"Introduction"},s=void 0,o={id:"csharp/asp-net/introduction",title:"Introduction",description:"ASP.NET extends the .NET platform with tools and libraries specifically for building web apps.",source:"@site/docs/csharp/asp-net/introduction.md",sourceDirName:"csharp/asp-net",slug:"/csharp/asp-net/introduction",permalink:"/LearningCollection/csharp/asp-net/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",previous:{title:"Repository Pattern",permalink:"/LearningCollection/csharp/architectural-patterns/repository-pattern"},next:{title:"ASP.NET REST APIs",permalink:"/LearningCollection/csharp/asp-net/asp-net-rest-apis"}},l={},c=[{value:"Basic ASP.NET application",id:"basic-aspnet-application",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"ASP.NET extends the .NET platform with tools and libraries specifically for building web apps."}),"\n",(0,t.jsx)(n.p,{children:"These are some things that ASP.NET adds to the .NET platform:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Base framework for processing web requests"}),"\n",(0,t.jsx)(n.li,{children:"Libraries for common web patterns, such as Model View Controller (MVC)"}),"\n",(0,t.jsx)(n.li,{children:"Authentication system that includes libraries, a database, and template pages for handling logins, including multi-factor authentication and external authentication with Google, X, and more."}),"\n",(0,t.jsx)(n.li,{children:"Web-page templating syntax, known as Razor, for building dynamic web pages using C#"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"ASP.NET apps can be developed and run on Windows, Linux, macOS, and Docker."}),"\n",(0,t.jsx)(n.h2,{id:"basic-aspnet-application",children:"Basic ASP.NET application"}),"\n",(0,t.jsxs)(n.p,{children:["A basic ASP.NET application ",(0,t.jsx)(n.code,{children:"Program.cs"})," has the following method calls:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// Initializes the WebApplicationBuilder class with preconfigured defaults\r\nvar builder = WebApplication.CreateBuilder(args);\r\n\r\n// Registers everything that is needed for Web API Development\r\nbuilder.Services.AddControllers();\r\n\r\n// Required for minimal APIs\r\nbuilder.Services.AddEndpointsApiExplorer();\r\n\r\n// Adds service for Swagger generation\r\nbuilder.Services.AddSwaggerGen();\r\n\r\n// WebApplicationBuilder implements IApplicationBuilder, which defines a class\r\n// that provides the mechanisms to configure an application's request pipeline\r\nvar app = builder.Build();\r\n\r\n// Configure the HTTP request pipeline.\r\nif (app.Environment.IsDevelopment())\r\n{\r\n    // Creates the swagger spec (json)\r\n    app.UseSwagger();\r\n\r\n    // Enables an embedded version of the Swagger UI tool\r\n    app.UseSwaggerUI();\r\n}\r\n\r\n// Redirect all HTTP requests to HTTPS\r\napp.UseHttpsRedirection();\r\n\r\n// Can be used to authorize a user to access secure resources\r\napp.UseAuthorization();\r\n\r\n// Maps attribute routed controllers\r\napp.MapControllers();\r\n\r\n// Start the app\r\napp.Run();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);