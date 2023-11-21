"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3805],{4578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(5893),i=t(1151);const r={id:"generics",title:"Generics",sidebar_position:4},o=void 0,c={id:"csharp/core-concepts/generics",title:"Generics",description:"- Use generic types to maximize code reuse, type safety, and performance",source:"@site/docs/csharp/core-concepts/Generics.md",sourceDirName:"csharp/core-concepts",slug:"/csharp/core-concepts/generics",permalink:"/LearningCollection/csharp/core-concepts/generics",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/Generics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"generics",title:"Generics",sidebar_position:4},sidebar:"docs",previous:{title:"Nullability",permalink:"/LearningCollection/csharp/core-concepts/nullability"},next:{title:"Closures",permalink:"/LearningCollection/csharp/core-concepts/closures"}},a={},l=[{value:"Introduction to Generics",id:"introduction-to-generics",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use generic types to maximize code reuse, type safety, and performance"}),"\n",(0,s.jsx)(n.li,{children:"The most common use of generics is to create collection classes"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"The .NET Framework class library contains several new generic collection classes in the System.Collections.Generic namespace. These should be used whenever possible instead of classes such as ArrayList in the System.Collections namespace."})}),"\n",(0,s.jsx)(n.li,{children:"You can create your own generic interfaces, classes, methods, events and delegates"}),"\n",(0,s.jsx)(n.li,{children:"Generic classes may be constrained to enable access to methods on particular data types"}),"\n",(0,s.jsx)(n.li,{children:"Information on the types that are used in a generic data type may be obtained at run-time by using reflection"}),"\n",(0,s.jsx)(n.li,{children:"Generics introduce to the .NET Framework the concept of type parameters, which make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code"}),"\n",(0,s.jsx)(n.li,{children:"by using a generic type parameter T you can write a single class that other client code can use without incurring the cost or risk of runtime casts or boxing operations"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-generics",children:"Introduction to Generics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generics are most frequently used with collections and the methods that operate on them"}),"\n",(0,s.jsxs)(n.li,{children:["The following code example shows a simple generic linked-list class for demonstration purposes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In most cases, you should use the ",(0,s.jsx)(n.code,{children:"List<T>"})," class provided by the .NET Framework class library instead of creating your own"]}),"\n",(0,s.jsxs)(n.li,{children:["The type parameter T is used in several locations where a concrete type would ordinarily be used to indicate the type of the item stored in the list. It is used in the following ways:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As the type of a method parameter in the AddHead method"}),"\n",(0,s.jsx)(n.li,{children:"As the return type of the Data property in the nested Node class"}),"\n",(0,s.jsx)(n.li,{children:"As the type of the private member data in the nested class"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"GenericList<T>"})," is instantiated with a concrete type, for example as a ",(0,s.jsx)(n.code,{children:"GenericList<int>"}),", each occurrence of T will be replaced with int"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);