"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6975],{41330:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var r=o(74848),i=o(28453);const s={id:"logging",title:"Logging"},l=void 0,t={id:"csharp/asp-net/advanced-concepts/logging",title:"Logging",description:"Logging providers store logs, except for the Console provider which displays logs. For example, the Azure Application Insights provider stores logs in Azure Application Insights. Multiple providers can be enabled.",source:"@site/docs/csharp/asp-net/advanced-concepts/logging.md",sourceDirName:"csharp/asp-net/advanced-concepts",slug:"/csharp/asp-net/advanced-concepts/logging",permalink:"/LearningCollection/csharp/asp-net/advanced-concepts/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/advanced-concepts/logging.md",tags:[],version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"docs",previous:{title:"Formatters",permalink:"/LearningCollection/csharp/asp-net/advanced-concepts/formatters"},next:{title:"Introduction",permalink:"/LearningCollection/csharp/entity-framework/introduction"}},c={},a=[{value:"Configure logging",id:"configure-logging",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Logging providers store logs, except for the ",(0,r.jsx)(n.code,{children:"Console"})," provider which displays logs. For example, the Azure Application Insights provider stores logs in ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",children:"Azure Application Insights"}),". Multiple providers can be enabled."]}),"\n",(0,r.jsxs)(n.p,{children:["The default ASP.NET Core web app templates call ",(0,r.jsx)(n.code,{children:"WebApplication.CreateBuilder"}),", which adds the following logging providers:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-8.0#console",children:"Console"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-8.0#debug",children:"Debug"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-8.0#event-source",children:"EventSource"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-8.0#welog",children:"EventLog"}),": Windows only"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:"{1}",children:"var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nvar app = builder.Build();\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The following code overrides the default set of logging providers added by ",(0,r.jsx)(n.code,{children:"WebApplication.CreateBuilder"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:"{2-3}",children:"var builder = WebApplication.CreateBuilder(args);\nbuilder.Logging.ClearProviders();\nbuilder.Logging.AddConsole();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, the preceding logging code can be written as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"var builder = WebApplication.CreateBuilder();\nbuilder.Host.ConfigureLogging(logging =>\n{\n    logging.ClearProviders();\n    logging.AddConsole();\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-logging",children:"Configure logging"}),"\n",(0,r.jsxs)(n.p,{children:["Logging configuration is commonly provided by the ",(0,r.jsx)(n.code,{children:"Logging"})," section of ",(0,r.jsx)(n.code,{children:"appsettings.{ENVIRONMENT}.json"})," files, where the ",(0,r.jsx)(n.code,{children:"{ENVIRONMENT}"})," placeholder is the environment. The following ",(0,r.jsx)(n.code,{children:"appsettings.Development.json"})," file is generated by the ASP.NET Core web app templates:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the preceding JSON:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:'"Microsoft.AspNetCore"'})," category applies to all categories that start with ",(0,r.jsx)(n.code,{children:'"Microsoft.AspNetCore"'}),". For example, this setting applies to the ",(0,r.jsx)(n.code,{children:'"Microsoft.AspNetCore.Routing.EndpointMiddleware"'})," category."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:'"Microsoft.AspNetCore"'})," category logs at log level ",(0,r.jsx)(n.code,{children:"Warning"})," and higher."]}),"\n",(0,r.jsxs)(n.li,{children:["A specific log provider is not specified, so ",(0,r.jsx)(n.code,{children:"LogLevel"})," applies to all the enabled logging providers (except for the Windows EventLog)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"LogLevel"})," specifies the minimum level to log for selected categories. ",(0,r.jsx)(n.code,{children:"LogLevel"})," indicates the severity of the log and ranges from 0 to 6:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Trace"})," = 0, ",(0,r.jsx)(n.code,{children:"Debug"})," = 1, ",(0,r.jsx)(n.code,{children:"Information"})," = 2, ",(0,r.jsx)(n.code,{children:"Warning"})," = 3, ",(0,r.jsx)(n.code,{children:"Error"})," = 4, ",(0,r.jsx)(n.code,{children:"Critical"})," = 5, and ",(0,r.jsx)(n.code,{children:"None"})," = 6."]}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.code,{children:"LogLevel"})," is specified, logging defaults to the ",(0,r.jsx)(n.code,{children:"Information"})," level. A provider property can specify a ",(0,r.jsx)(n.code,{children:"LogLevel"})," property. ",(0,r.jsx)(n.code,{children:"LogLevel"})," under a provider specifies levels to log for that provider, and overrides the non-provider log settings. A more complex ",(0,r.jsx)(n.code,{children:"appsettings.json"})," file can look like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Logging": {\n    "LogLevel": {\n      // All providers, LogLevel applies to all the enabled providers.\n      "Default": "Error", // Default logging, Error and higher.\n      "Microsoft": "Warning" // All Microsoft* categories, Warning and higher.\n    },\n    "Debug": {\n      // Debug provider.\n      "LogLevel": {\n        "Default": "Information", // Overrides preceding LogLevel:Default setting.\n        "Microsoft.Hosting": "Trace" // Debug:Microsoft.Hosting category.\n      }\n    },\n    "EventSource": {\n      // EventSource provider\n      "LogLevel": {\n        "Default": "Warning" // All categories of EventSource provider.\n      }\n    }\n  }\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>t});var r=o(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);