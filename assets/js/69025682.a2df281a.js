"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8437],{1616:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(4848),r=s(8453);const a={title:"Tuples"},o=void 0,i={id:"csharp/core-concepts/types/tuples",title:"Tuples",description:"In C#, a tuple is a data structure which organizes data, holding two or more fields of any type. A tuple is typically created by placing 2 or more expressions separated by commas, within a set of parentheses:",source:"@site/docs/csharp/core-concepts/types/tuples.md",sourceDirName:"csharp/core-concepts/types",slug:"/csharp/core-concepts/types/tuples",permalink:"/LearningCollection/csharp/core-concepts/types/tuples",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/types/tuples.md",tags:[],version:"current",frontMatter:{title:"Tuples"},sidebar:"docs",previous:{title:"Enums",permalink:"/LearningCollection/csharp/core-concepts/types/enums"},next:{title:"DateTimes",permalink:"/LearningCollection/csharp/core-concepts/types/datetimes"}},c={},l=[{value:"Use cases of tuples",id:"use-cases-of-tuples",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In C#, a tuple is a data structure which organizes data, holding two or more fields of any type. A tuple is typically created by placing 2 or more expressions separated by commas, within a set of parentheses:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'string boast = "All you need to know";\nbool success = !string.IsNullOrWhiteSpace(boast);\n\n// A tuple with three fields (triple)\n(bool, int, string) triple = (success, 42, boast);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A tuple can be used in assignment and initialization operations, as a return value or a method argument. Fields are extracted using dot syntax. By default, the first field is ",(0,t.jsx)(n.code,{children:"Item1"}),", the second ",(0,t.jsx)(n.code,{children:"Item2"}),", etc. Non-default names are discussed below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// initialization\n(int, int, int) vertices = (90, 45, 45);\n\n// assignment\nvertices = (60, 60, 60);\n\n//  return value\n(bool, int) GetSameOrBigger(int num1, int num2)\n{\n    return (num1 == num2, num1 > num2 ? num1 : num2);\n}\n\n// method argument\nint Add((int, int) operands)\n{\n    return operands.Item1 + operands.Item2;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Field names Item1 etc. do not make for readable code. The code below shows 2 ways to name the fields of tuples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// name items in declaration\n(bool success, string message) results = (true, "well done!");\nbool mySuccess = results.success;\nstring myMessage = results.message;\n\n// name items in creating expression\nvar results2 = (success: true, message: "well done!");\nbool mySuccess2 = results2.success;\nstring myMessage2 = results2.message;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"use-cases-of-tuples",children:"Use cases of tuples"}),"\n",(0,t.jsxs)(n.p,{children:["One of the most common use cases of tuples is as a method return type. That is, instead of defining ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters#out-parameter-modifier",children:"out method parameters"}),", you can group method results in a tuple return type, as the following example shows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'(int min, int max) FindMinMax(int[] input)\n{\n    ...\n}\n\nvar xs = new[] { 4, 7, 9 };\nvar limits = FindMinMax(xs);\nConsole.WriteLine($"Limits of [{string.Join(" ", xs)}] are {limits.min} and {limits.max}");\n\nvar ys = new[] { -9, 0, 67, 100 };\nvar (minimum, maximum) = FindMinMax(ys);\nConsole.WriteLine($"Limits of [{string.Join(" ", ys)}] are {minimum} and {maximum}");\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["As the preceding example shows, you can work with the returned tuple instance directly or ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples#tuple-assignment-and-deconstruction",children:"deconstruct"})," it into separate variables."]}),"\n",(0,t.jsxs)(n.li,{children:["You can also use tuple types instead of ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/anonymous-types",children:"anonymous types"}),"; for example, in LINQ queries. For more information, see ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/base-types/choosing-between-anonymous-and-tuple",children:"Choosing between anonymous and tuple types"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Typically, you use tuples to group loosely related data elements. In public APIs, consider defining a ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class",children:"class"})," or a ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct",children:"structure"})," type."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);