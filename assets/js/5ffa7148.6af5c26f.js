"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2954],{1528:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(5893),a=n(1151);const o={id:"assemblyClass",title:"Assembly",sidebar_position:1},l=void 0,i={id:"csharp/advanced-concepts/classes/assemblyClass",title:"Assembly",description:"- Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application (in more simple terms: A chunk of (precompiled) code that can be executed by the .NET runtime environment. A .NET program consists of one or more assemblies)",source:"@site/docs/csharp/advanced-concepts/classes/AssemblyClass.md",sourceDirName:"csharp/advanced-concepts/classes",slug:"/csharp/advanced-concepts/classes/assemblyClass",permalink:"/LearningCollection/csharp/advanced-concepts/classes/assemblyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/advanced-concepts/classes/AssemblyClass.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assemblyClass",title:"Assembly",sidebar_position:1},sidebar:"docs",previous:{title:"Events",permalink:"/LearningCollection/csharp/core-concepts/events"},next:{title:"ManualResetEvent",permalink:"/LearningCollection/csharp/advanced-concepts/classes/manResetEvent"}},r={},c=[{value:"Remarks",id:"remarks",level:2}];function m(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application (in more simple terms: A chunk of (precompiled) code that can be executed by the .NET runtime environment. A .NET program consists of one or more assemblies)"}),"\n",(0,t.jsxs)(s.li,{children:["The following code example shows how to obtain the currently executing assembly, create an instance of a type contained in that assembly, and invoke one of the type's methods with late binding. For this purpose, the code example defines a class named Example, with a method named SampleMethod","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The constructor of the class accepts an integer, which is used to compute the return value of the method"}),"\n",(0,t.jsx)(s.li,{children:"The code example also demonstrates the use of the GetName method to obtain an AssemblyName object that can be used to parse the full name of the assembly"}),"\n",(0,t.jsx)(s.li,{children:"The example displays the version number of the assembly, the CodeBase property, and the EntryPoint property"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cs",children:'using System;\nusing System.Reflection;\nusing System.Security.Permissions;\n\n[assembly:AssemblyVersionAttribute("1.0.2000.0")]\n\npublic class Example\n{\n    private int factor;\n    public Example(int f)\n    {\n        factor = f;\n    }\n\n    public int SampleMethod(int x)\n    {\n        Console.WriteLine("\\nExample.SampleMethod({0}) executes.", x);\n        return x * factor;\n    }\n\n    public static void Main()\n    {\n        Assembly assem = typeof(Example).Assembly;\n\n        Console.WriteLine("Assembly Full Name:");\n        Console.WriteLine(assem.FullName);\n\n        // The AssemblyName type can be used to parse the full name.\n        AssemblyName assemName = assem.GetName();\n        Console.WriteLine("\\nName: {0}", assemName.Name);\n        Console.WriteLine("Version: {0}.{1}",\n            assemName.Version.Major, assemName.Version.Minor);\n\n        Console.WriteLine("\\nAssembly CodeBase:");\n        Console.WriteLine(assem.CodeBase);\n\n        // Create an object from the assembly, passing in the correct number\n        // and type of arguments for the constructor.\n        Object o = assem.CreateInstance("Example", false,\n            BindingFlags.ExactBinding,\n            null, new Object[] { 2 }, null, null);\n\n        // Make a late-bound call to an instance method of the object.\n        MethodInfo m = assem.GetType("Example").GetMethod("SampleMethod");\n        Object ret = m.Invoke(o, new Object[] { 42 });\n        Console.WriteLine("SampleMethod returned {0}.", ret);\n\n        Console.WriteLine("\\nAssembly entry point:");\n        Console.WriteLine(assem.EntryPoint);\n    }\n}\n\n/* This code example produces output similar to the following:\n\nAssembly Full Name:\nsource, Version=1.0.2000.0, Culture=neutral, PublicKeyToken=null\n\nName: source\nVersion: 1.0\n\nAssembly CodeBase:\nfile:///C:/sdtree/AssemblyClass/cs/source.exe\n\nExample.SampleMethod(42) executes.\nSampleMethod returned 84.\n\nAssembly entry point:\nVoid Main()\n */\n\n'})}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Use the Assembly class to load assemblies, to explore the metadata and constituent parts of assemblies, to discover the types contained in assemblies, and to create instances of those types"}),"\n",(0,t.jsxs)(s.li,{children:["To load assemblies dynamically, the Assembly class provides the following static methods. Assemblies are loaded into the application domain where the load operation occurs.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'The recommended way to load assemblies is to use the Load method, which identifies the assembly to be loaded by its display name (for example, "System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")'}),"\n",(0,t.jsx)(s.li,{children:"The ReflectionOnlyLoad and ReflectionOnlyLoadFrom methods enable you to load an assembly for reflection, but not for execution. For example, an assembly that targets a 64-bit platform can be examined by code that is running on a 32-bit platform"}),"\n",(0,t.jsx)(s.li,{children:"The LoadFile and LoadFrom methods are provided for rare scenarios in which an assembly must be identified by path"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"To get an Assembly object for the currently executing assembly, use the GetExecutingAssembly method"}),"\n",(0,t.jsxs)(s.li,{children:["Many members of the Assembly class provide information about an assembly. For example:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The GetName method returns an AssemblyName object that provides access to the parts of the assembly display name"}),"\n",(0,t.jsx)(s.li,{children:"The GetCustomAttributes method lists the attributes applied to the assembly"}),"\n",(0,t.jsx)(s.li,{children:"The GetFiles method provides access to the files in the assembly manifest"}),"\n",(0,t.jsx)(s.li,{children:"The GetManifestResourceNames method provides the names of the resources in the assembly manifest"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"The GetTypes method lists all the types in the assembly."}),"\n",(0,t.jsx)(s.li,{children:"The GetExportedTypes method lists the types that are visible to callers outside the assembly."}),"\n",(0,t.jsx)(s.li,{children:"The GetType method can be used to search for a particular type in the assembly."}),"\n",(0,t.jsx)(s.li,{children:"The CreateInstance method can be used to search for and create instances of types in the assembly."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Source: ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly?view=netframework-4.7.2",children:"Microsoft Docs"})]})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var t=n(7294);const a={},o=t.createContext(a);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);