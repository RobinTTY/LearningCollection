"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=s,b=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"assemblyClass",title:"Assembly Class"},i=void 0,m={unversionedId:"C-Sharp/assemblyClass",id:"C-Sharp/assemblyClass",title:"Assembly Class",description:"- Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application (in more simple terms: A chunk of (precompiled) code that can be executed by the .NET runtime environment. A .NET program consists of one or more assemblies)",source:"@site/docs/C-Sharp/Assembly class.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/assemblyClass",permalink:"/LearningCollection/C-Sharp/assemblyClass",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Assembly class.md",tags:[],version:"current",frontMatter:{id:"assemblyClass",title:"Assembly Class"},sidebar:"mySidebar",previous:{title:"ASP.NET",permalink:"/LearningCollection/C-Sharp/aspnet"},next:{title:"Asynchronous Programming",permalink:"/LearningCollection/C-Sharp/asyncProgramming"}},c={},p=[{value:"Remarks",id:"remarks",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represents an assembly, which is a reusable, versionable, and self-describing building block of a common language runtime application (in more simple terms: A chunk of (precompiled) code that can be executed by the .NET runtime environment. A .NET program consists of one or more assemblies)"),(0,r.kt)("li",{parentName:"ul"},"The following code example shows how to obtain the currently executing assembly, create an instance of a type contained in that assembly, and invoke one of the type's methods with late binding. For this purpose, the code example defines a class named Example, with a method named SampleMethod",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The constructor of the class accepts an integer, which is used to compute the return value of the method"),(0,r.kt)("li",{parentName:"ul"},"The code example also demonstrates the use of the GetName method to obtain an AssemblyName object that can be used to parse the full name of the assembly"),(0,r.kt)("li",{parentName:"ul"},"The example displays the version number of the assembly, the CodeBase property, and the EntryPoint property")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Reflection;\nusing System.Security.Permissions;\n\n[assembly:AssemblyVersionAttribute("1.0.2000.0")]\n\npublic class Example\n{\n    private int factor;\n    public Example(int f)\n    {\n        factor = f;\n    }\n\n    public int SampleMethod(int x)\n    {\n        Console.WriteLine("\\nExample.SampleMethod({0}) executes.", x);\n        return x * factor;\n    }\n\n    public static void Main()\n    {\n        Assembly assem = typeof(Example).Assembly;\n\n        Console.WriteLine("Assembly Full Name:");\n        Console.WriteLine(assem.FullName);\n\n        // The AssemblyName type can be used to parse the full name.\n        AssemblyName assemName = assem.GetName();\n        Console.WriteLine("\\nName: {0}", assemName.Name);\n        Console.WriteLine("Version: {0}.{1}",\n            assemName.Version.Major, assemName.Version.Minor);\n\n        Console.WriteLine("\\nAssembly CodeBase:");\n        Console.WriteLine(assem.CodeBase);\n\n        // Create an object from the assembly, passing in the correct number\n        // and type of arguments for the constructor.\n        Object o = assem.CreateInstance("Example", false,\n            BindingFlags.ExactBinding,\n            null, new Object[] { 2 }, null, null);\n\n        // Make a late-bound call to an instance method of the object.\n        MethodInfo m = assem.GetType("Example").GetMethod("SampleMethod");\n        Object ret = m.Invoke(o, new Object[] { 42 });\n        Console.WriteLine("SampleMethod returned {0}.", ret);\n\n        Console.WriteLine("\\nAssembly entry point:");\n        Console.WriteLine(assem.EntryPoint);\n    }\n}\n\n/* This code example produces output similar to the following:\n\nAssembly Full Name:\nsource, Version=1.0.2000.0, Culture=neutral, PublicKeyToken=null\n\nName: source\nVersion: 1.0\n\nAssembly CodeBase:\nfile:///C:/sdtree/AssemblyClass/cs/source.exe\n\nExample.SampleMethod(42) executes.\nSampleMethod returned 84.\n\nAssembly entry point:\nVoid Main()\n */\n\n')),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the Assembly class to load assemblies, to explore the metadata and constituent parts of assemblies, to discover the types contained in assemblies, and to create instances of those types"),(0,r.kt)("li",{parentName:"ul"},"To load assemblies dynamically, the Assembly class provides the following static methods. Assemblies are loaded into the application domain where the load operation occurs.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The recommended way to load assemblies is to use the Load method, which identifies the assembly to be loaded by its display name (for example, "System.Windows.Forms, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")'),(0,r.kt)("li",{parentName:"ul"},"The ReflectionOnlyLoad and ReflectionOnlyLoadFrom methods enable you to load an assembly for reflection, but not for execution. For example, an assembly that targets a 64-bit platform can be examined by code that is running on a 32-bit platform"),(0,r.kt)("li",{parentName:"ul"},"The LoadFile and LoadFrom methods are provided for rare scenarios in which an assembly must be identified by path"))),(0,r.kt)("li",{parentName:"ul"},"To get an Assembly object for the currently executing assembly, use the GetExecutingAssembly method"),(0,r.kt)("li",{parentName:"ul"},"Many members of the Assembly class provide information about an assembly. For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The GetName method returns an AssemblyName object that provides access to the parts of the assembly display name"),(0,r.kt)("li",{parentName:"ul"},"The GetCustomAttributes method lists the attributes applied to the assembly"),(0,r.kt)("li",{parentName:"ul"},"The GetFiles method provides access to the files in the assembly manifest"),(0,r.kt)("li",{parentName:"ul"},"The GetManifestResourceNames method provides the names of the resources in the assembly manifest"))),(0,r.kt)("li",{parentName:"ul"},"The GetTypes method lists all the types in the assembly."),(0,r.kt)("li",{parentName:"ul"},"The GetExportedTypes method lists the types that are visible to callers outside the assembly."),(0,r.kt)("li",{parentName:"ul"},"The GetType method can be used to search for a particular type in the assembly."),(0,r.kt)("li",{parentName:"ul"},"The CreateInstance method can be used to search for and create instances of types in the assembly.")),(0,r.kt)("p",null,"Taken from: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly?view=netframework-4.7.2"},"https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly?view=netframework-4.7.2")))}d.isMDXComponent=!0}}]);