"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5886],{8232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(4848),o=n(8453);const s={id:"formatters",title:"Formatters"},a=void 0,i={id:"csharp/asp-net/advanced-concepts/formatters",title:"Formatters",description:"ASP.NET Core MVC supports data exchange in Web APIs using input and output formatters. Input formatters are used by Model Binding. Output formatters are used to format responses.",source:"@site/docs/csharp/asp-net/advanced-concepts/formatters.md",sourceDirName:"csharp/asp-net/advanced-concepts",slug:"/csharp/asp-net/advanced-concepts/formatters",permalink:"/LearningCollection/csharp/asp-net/advanced-concepts/formatters",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/advanced-concepts/formatters.md",tags:[],version:"current",frontMatter:{id:"formatters",title:"Formatters"},sidebar:"docs",previous:{title:"Handling Files",permalink:"/LearningCollection/csharp/asp-net/core-concepts/handling-files"},next:{title:"Introduction",permalink:"/LearningCollection/csharp/entity-framework/introduction"}},d={},c=[{value:"Output Formatters",id:"output-formatters",level:3},{value:"Content negotiation",id:"content-negotiation",level:4},{value:"Supporting additional content types",id:"supporting-additional-content-types",level:3},{value:"Input Formatters",id:"input-formatters",level:3}];function l(e){const t={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"ASP.NET Core MVC supports data exchange in Web APIs using input and output formatters. Input formatters are used by Model Binding. Output formatters are used to format responses."}),"\n",(0,r.jsx)(t.h3,{id:"output-formatters",children:"Output Formatters"}),"\n",(0,r.jsx)(t.p,{children:"Output formatters deal with transforming the models of the application to the chosen representation. The user choses the representation through content negotiation. The default representation is JSON."}),"\n",(0,r.jsx)(t.p,{children:"The default representation can be changed by modifying the order of the formatters in the configuration. The first formatter in the list will be used by default:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"builder.Services.AddControllers(options => {\n    options.OutputFormatters.Clear();\n    options.OutputFormatters.Add(new XmlMediaTypeFormatter());\n    config.Formatters.Add(new JsonMediaTypeFormatter());\n})\n"})}),"\n",(0,r.jsx)(t.h4,{id:"content-negotiation",children:"Content negotiation"}),"\n",(0,r.jsx)(t.p,{children:"Content negotiation is the process of selecting the best representation for a given response when there are multiple representations available."}),"\n",(0,r.jsx)(t.p,{children:"The media type(s) is/are passed through via the Accept header of the request, e.g.:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"application/json"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"application/xml"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"By default, if the consumer of the API requests a content type that isn't supported, the application will still return a response but not with the content type that was requested. This is often unwanted behavior and can be changed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"builder.Services.AddControllers(options => {\n    options.ReturnHttpNotAcceptable = true;\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"When the API consumer now requests a non supported content type, the API will respond with a 406 (Not Acceptable) status code."}),"\n",(0,r.jsx)(t.h3,{id:"supporting-additional-content-types",children:"Supporting additional content types"}),"\n",(0,r.jsx)(t.p,{children:"Serialization for additional content types can be added through custom output formatters. For XML ASP.NET already provides such a formatter. It can be added through the following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"builder.Services.AddControllers().\n    AddXmlDataContractSerializerFormatters();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"input-formatters",children:"Input Formatters"}),"\n",(0,r.jsx)(t.p,{children:"Input formatters deal with transforming the input to requests to the models in the application through a process called model binding. It:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Retrieves data from various sources such as route data, form fields, and query strings."}),"\n",(0,r.jsx)(t.li,{children:"Provides the data to controllers in method parameters and public properties."}),"\n",(0,r.jsx)(t.li,{children:"Converts string data to .NET types."}),"\n",(0,r.jsx)(t.li,{children:"Updates properties of complex types."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);