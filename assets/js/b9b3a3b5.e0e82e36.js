"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2402],{8605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(4848),a=t(8453);const i={title:"Introduction"},s=void 0,o={id:"csharp/introduction",title:"Introduction",description:'C# (pronounced "See Sharp") is an object-oriented, and type-safe programming language, which means that everything has a type at compile-time. Several C# features help create robust and durable applications:',source:"@site/docs/csharp/introduction.md",sourceDirName:"csharp",slug:"/csharp/introduction",permalink:"/LearningCollection/csharp/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Fragments",permalink:"/LearningCollection/apis/graphql/schemas-and-types/fragments"},next:{title:"Introduction",permalink:"/LearningCollection/csharp/core-concepts/types/introduction"}},c={},l=[{value:".NET Architecture",id:"net-architecture",level:2},{value:"Interoperability",id:"interoperability",level:3},{value:"Libraries",id:"libraries",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'C# (pronounced "See Sharp") is an object-oriented, and type-safe programming language, which means that everything has a type at compile-time. Several C# features help create robust and durable applications:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/",children:"Garbage collection"})," automatically reclaims memory occupied by unreachable unused objects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references",children:"Nullable types"})," guard against variables that don't refer to allocated objects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/",children:"Exception handling"})," provides a structured and extensible approach to error detection and recovery."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions",children:"Lambda expressions"})," support functional programming techniques"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/linq/",children:"Language Integrated Query (LINQ)"})," syntax creates a common pattern for working with data from any source."]}),"\n",(0,r.jsxs)(n.li,{children:["Language support for ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/",children:"asynchronous operations"})," provides syntax for building distributed systems."]}),"\n",(0,r.jsxs)(n.li,{children:["C# has a ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/",children:"unified type system"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All C# types, including primitive types such as ",(0,r.jsx)(n.code,{children:"int"})," and ",(0,r.jsx)(n.code,{children:"double"}),", inherit from a single root ",(0,r.jsx)(n.code,{children:"object"})," type. All types share a set of common operations. Values of any type can be stored, transported, and operated upon in a consistent manner."]}),"\n",(0,r.jsxs)(n.li,{children:["C# supports both user-defined ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types",children:"reference types"})," and ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types",children:"value types"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"C# allows dynamic allocation of objects and in-line storage of lightweight structures."}),"\n",(0,r.jsx)(n.li,{children:"C# supports generic methods and types, which provide increased type safety and performance."}),"\n",(0,r.jsx)(n.li,{children:"C# provides iterators, which enable implementers of collection classes to define custom behaviors for client code."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"net-architecture",children:".NET Architecture"}),"\n",(0,r.jsx)(n.p,{children:"C# programs run on .NET, a virtual execution system called the common language runtime (CLR) and a set of class libraries. The CLR is the implementation by Microsoft of the common language infrastructure (CLI), an international standard. The CLI is the basis for creating execution and development environments in which languages and libraries work together seamlessly."}),"\n",(0,r.jsxs)(n.p,{children:["Source code written in C# is compiled into an ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/managed-code",children:"intermediate language (IL)"})," that conforms to the CLI specification. The IL code and resources, such as bitmaps and strings, are stored in an assembly, typically with an extension of .dll. An assembly contains a manifest that provides information about the assembly's types, version, and culture."]}),"\n",(0,r.jsx)(n.p,{children:'When the C# program is executed, the assembly is loaded into the CLR. The CLR performs Just-In-Time (JIT) compilation to convert the IL code to native machine instructions. The CLR provides other services related to automatic garbage collection, exception handling, and resource management. Code that\'s executed by the CLR is sometimes referred to as "managed code." "Unmanaged code," is compiled into native machine language that targets a specific platform.'}),"\n",(0,r.jsx)(n.h3,{id:"interoperability",children:"Interoperability"}),"\n",(0,r.jsx)(n.p,{children:"Language interoperability is a key feature of .NET. IL code produced by the C# compiler conforms to the Common Type Specification (CTS). IL code generated from C# can interact with code that was generated from the .NET versions of F#, Visual Basic, C++. There are more than 20 other CTS-compliant languages. A single assembly may contain multiple modules written in different .NET languages. The types can reference each other as if they were written in the same language."}),"\n",(0,r.jsx)(n.h3,{id:"libraries",children:"Libraries"}),"\n",(0,r.jsx)(n.p,{children:'In addition to the runtime services, .NET also includes extensive libraries. These libraries support many different workloads. They\'re organized into namespaces that provide a wide variety of useful functionality. The libraries include everything from file input and output to string manipulation to XML parsing, to web application frameworks to Windows Forms controls. The typical C# application uses the .NET class library extensively to handle common "plumbing" chores.'})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);