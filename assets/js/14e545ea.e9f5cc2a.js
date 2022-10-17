"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"dotnet6",title:".Net 6",sidebar_position:2},o=void 0,l={unversionedId:"C-Sharp/DotNet Versions/dotnet6",id:"C-Sharp/DotNet Versions/dotnet6",title:".Net 6",description:"This page convers the most important updates introduced in .Net 6 (in my view).",source:"@site/docs/C-Sharp/DotNet Versions/Net 6.md",sourceDirName:"C-Sharp/DotNet Versions",slug:"/C-Sharp/DotNet Versions/dotnet6",permalink:"/LearningCollection/C-Sharp/DotNet Versions/dotnet6",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/DotNet Versions/Net 6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"dotnet6",title:".Net 6",sidebar_position:2},sidebar:"finance",previous:{title:".Net Core vs .Net Standard vs UWP",permalink:"/LearningCollection/C-Sharp/DotNet Versions/netstandardVsNetcoreVsUwp"},next:{title:"ASP.NET Intro",permalink:"/LearningCollection/C-Sharp/aspnet"}},s={},p=[{value:"New Features in .Net 6",id:"new-features-in-net-6",level:2},{value:"Performance Improvements",id:"performance-improvements",level:3},{value:"C# 10",id:"c-10",level:3},{value:"Global using directives",id:"global-using-directives",level:3},{value:"File-scoped namespaces",id:"file-scoped-namespaces",level:3},{value:"Hot Reload",id:"hot-reload",level:3},{value:"Arm64",id:"arm64",level:3},{value:"Single-file Apps",id:"single-file-apps",level:3},{value:"<code>DateOnly</code> and <code>TimeOnly</code> structs",id:"dateonly-and-timeonly-structs",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page convers the most important updates introduced in .Net 6 (in my view)."),(0,r.kt)("h2",{id:"new-features-in-net-6"},"New Features in .Net 6"),(0,r.kt)("h3",{id:"performance-improvements"},"Performance Improvements"),(0,r.kt)("p",null,"There were a lot of performance improvements introduced in .Net 6. They are documented in ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-6/"},"this blog post"),". The achievable performance improvements are dependent on the used language features. For instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStream")," class has been entirely rewritten, which results in performance gains of over 100% in reading a file (.Net 6 vs .Net 5)."),(0,r.kt)("p",null,"Overall these improvements can make a significant difference in the performance of the application. See these examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://endjin.com/blog/2022/01/how-dotnet-6-boosted-ais-dotnet-performance-by-20-percent-for-free"},"How .NET 6.0 boosted Ais.Net performance by 20%")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexyakunin.medium.com/net-6-vs-net-5-up-to-40-speedup-ceca9112d298"},".NET 6 vs .NET 5: up to 40% speedup!"))),(0,r.kt)("h3",{id:"c-10"},"C# 10"),(0,r.kt)("p",null,"Version 10 of the C# Language has been introduced with .Net 6. Changes are discussed in ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/"},"this blogpost"),". TODO: Reference own writeup"),(0,r.kt)("h3",{id:"global-using-directives"},"Global using directives"),(0,r.kt)("p",null,"Global using directives let you specify a using directive just once and have it applied to every file that you compile."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"global using System;\nglobal using static System.Console;\nglobal using Env = System.Environment;\n")),(0,r.kt)("p",null,"Commonly used namespaces can now also be included by default by including implicit usings via MSBuild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<ImplicitUsings>enable</ImplicitUsings>\n")),(0,r.kt)("h3",{id:"file-scoped-namespaces"},"File-scoped namespaces"),(0,r.kt)("p",null,"Namespaces now don't need to nest the encapsulating code in a block statement, if they apply for the whole file. Instead they can be declared like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MyNamespace;\n\nclass MyClass { ... } // Not indented\n")),(0,r.kt)("h3",{id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",null,"Hot Reload enables you to make a wide variety of code edits to a running application, collapsing the time you need to spend waiting for apps to rebuild, restart, or to re-navigate to the same spot where you were after making a code change."),(0,r.kt)("p",null,"Instead of restarting the application it will detect changes on saving a file and almost instant-reload the changed application automatically."),(0,r.kt)("h3",{id:"arm64"},"Arm64"),(0,r.kt)("p",null,".Net 6 supports development on the ARM64 architecture on Windows, Linux and MacOS. New Apple M1 chips are also supported"),(0,r.kt)("h3",{id:"single-file-apps"},"Single-file Apps"),(0,r.kt)("p",null,"In .NET 6, in-memory single file apps have been enabled for Windows and macOS. Before that they were only possible on Linux."),(0,r.kt)("h3",{id:"dateonly-and-timeonly-structs"},(0,r.kt)("inlineCode",{parentName:"h3"},"DateOnly")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"TimeOnly")," structs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each represent one half of a DateTime, either only the date part, or only the time part"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DateOnly")," is ideal for birthdays, anniversary days, and business days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TimeOnly")," is ideal for recurring meetings, alarm clocks, and weekly business hours"),(0,r.kt)("li",{parentName:"ul"},"Complements existing date/time types (",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTimeOffset"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TimeSpan"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TimeZoneInfo"),").")))}d.isMDXComponent=!0}}]);