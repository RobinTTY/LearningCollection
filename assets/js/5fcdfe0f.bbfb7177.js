"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Introduction"},l=void 0,s={unversionedId:"csharp/core-concepts/types/introduction",id:"csharp/core-concepts/types/introduction",title:"Introduction",description:"A type defines the structure and behavior of any data in C#. The declaration of a type may include its members, base type, interfaces it implements, and operations permitted for that type. A variable is a label that refers to an instance of a specific type.",source:"@site/docs/csharp/core-concepts/types/introduction.md",sourceDirName:"csharp/core-concepts/types",slug:"/csharp/core-concepts/types/introduction",permalink:"/LearningCollection/csharp/core-concepts/types/introduction",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/types/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/csharp/introduction"},next:{title:"Enums",permalink:"/LearningCollection/csharp/core-concepts/types/enums"}},o={},p=[{value:"Type System",id:"type-system",level:2},{value:"Classes",id:"classes",level:3},{value:"Structs",id:"structs",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Delegates",id:"delegates",level:3},{value:"Enums",id:"enums",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Unified Type System",id:"unified-type-system",level:3},{value:"Variables",id:"variables",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A type defines the structure and behavior of any data in C#. The declaration of a type may include its members, base type, interfaces it implements, and operations permitted for that type. A variable is a label that refers to an instance of a specific type."),(0,r.kt)("p",null,"There are two kinds of types in C#: value types and reference types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variables of value types directly contain their data."),(0,r.kt)("li",{parentName:"ul"},"Variables of reference types store references to their data, the latter being known as objects.")),(0,r.kt)("p",null,"With reference types, it's possible for two variables to reference the same object and possible for operations on one variable to affect the object referenced by the other variable. With value types, the variables each have their own copy of the data, and it isn't possible for operations on one to affect the other (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"out")," parameter variables)."),(0,r.kt)("p",null,"C#'s value types are further divided into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simple types"),(0,r.kt)("li",{parentName:"ul"},"enum types"),(0,r.kt)("li",{parentName:"ul"},"struct types"),(0,r.kt)("li",{parentName:"ul"},"nullable value types"),(0,r.kt)("li",{parentName:"ul"},"tuple value types")),(0,r.kt)("p",null,"C#'s reference types are further divided into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"class types"),(0,r.kt)("li",{parentName:"ul"},"interface types"),(0,r.kt)("li",{parentName:"ul"},"array types"),(0,r.kt)("li",{parentName:"ul"},"delegate types.")),(0,r.kt)("h2",{id:"type-system"},"Type System"),(0,r.kt)("p",null,"The following outline provides an overview of C#'s type system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types"},"Value types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types#built-in-value-types"},"Simple types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types"},"Signed integral"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"sbyte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"short"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"long")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types"},"Unsigned integral"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"byte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ushort"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uint"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ulong")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-encoding-introduction"},"Unicode characters"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"char"),", which represents a UTF-16 code unit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types"},"IEEE binary floating-point"),": float, double"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types"},"High-precision decimal floating-point"),": decimal"),(0,r.kt)("li",{parentName:"ul"},"Boolean: ",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),", which represents Boolean values\u2014values that are either ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum"},"Enum types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"enum E {...}"),". An ",(0,r.kt)("inlineCode",{parentName:"li"},"enum")," type is a distinct type with named constants. Every ",(0,r.kt)("inlineCode",{parentName:"li"},"enum")," type has an underlying type, which must be one of the eight integral types. The set of values of an ",(0,r.kt)("inlineCode",{parentName:"li"},"enum")," type is the same as the set of values of the underlying type."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct"},"Struct types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form struct ",(0,r.kt)("inlineCode",{parentName:"li"},"S {...}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types"},"Nullable value types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Extensions of all other value types with a ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," value"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples"},"Tuple value types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"(T1, T2, ...)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types"},"Reference types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class"},"Class types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ultimate base class of all other types: ",(0,r.kt)("inlineCode",{parentName:"li"},"object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/standard/base-types/character-encoding-introduction"},"Unicode strings"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", which represents a sequence of UTF-16 code units"),(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"class C {...}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface"},"Interface types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"interface I {...}")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays"},"Array types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Single-dimensional, multi-dimensional, and jagged. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"int[]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int[,]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"int[][]")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type"},"Delegate types"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-defined types of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate int D(...)"))))))),(0,r.kt)("p",null,"C# programs use type declarations to create new types. A type declaration specifies the name and the members of the new type. Six of C#'s categories of types are user-definable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class types"),(0,r.kt)("li",{parentName:"ul"},"Struct types"),(0,r.kt)("li",{parentName:"ul"},"Interface types"),(0,r.kt)("li",{parentName:"ul"},"Enum types"),(0,r.kt)("li",{parentName:"ul"},"Delegate types"),(0,r.kt)("li",{parentName:"ul"},"Tuple value types")),(0,r.kt)("p",null,"You can also declare ",(0,r.kt)("inlineCode",{parentName:"p"},"record")," types, either ",(0,r.kt)("inlineCode",{parentName:"p"},"record struct"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"record class"),". Record types have compiler-synthesized members. You use records primarily for storing values, with minimal associated behavior."),(0,r.kt)("h3",{id:"classes"},"Classes"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," type defines a data structure that contains data members (fields) and function members (methods, properties, and others). Class types support single inheritance and polymorphism, mechanisms whereby derived classes can extend and specialize base classes."),(0,r.kt)("h3",{id:"structs"},"Structs"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," type is similar to a class type in that it represents a structure with data members and function members. However, unlike classes, structs are value types and don't typically require heap allocation. Struct types don't support user-specified inheritance, and all struct types implicitly inherit from type ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," type defines a contract as a named set of public members. A ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," that implements an ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," must provide implementations of the interface's members. An ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," may inherit from multiple base interfaces, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," may implement multiple interfaces."),(0,r.kt)("h3",{id:"delegates"},"Delegates"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," type represents references to methods with a particular parameter list and return type. Delegates make it possible to treat methods as entities that can be assigned to variables and passed as parameters. Delegates are analogous to function types provided by functional languages. They're also similar to the concept of function pointers found in some other languages. Unlike function pointers, delegates are object-oriented and type-safe."),(0,r.kt)("h3",{id:"enums"},"Enums"),(0,r.kt)("p",null,"An enumeration type (or enum type) is a value type defined by a set of named constants of the underlying integral numeric type."),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"The tuples feature provides concise syntax to group multiple data elements in a lightweight data structure."),(0,r.kt)("h3",{id:"unified-type-system"},"Unified Type System"),(0,r.kt)("p",null,"C#'s type system is unified such that a value of any type can be treated as an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". Every type in C# directly or indirectly derives from the ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," class type, and ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," is the ultimate base class of all types. Values of reference types are treated as objects simply by viewing the values as type ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". Values of value types are treated as objects by performing boxing and unboxing operations. In the following example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," value is converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," and back again to ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"int i = 123;\nobject o = i;    // Boxing\nint j = (int)o;  // Unboxing\n")),(0,r.kt)("p",null,"When a value of a value type is assigned to an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),' reference, a "box" is allocated to hold the value. That box is an instance of a reference type, and the value is copied into that box. Conversely, when an ',(0,r.kt)("inlineCode",{parentName:"p"},"object")," reference is cast to a value type, a check is made that the referenced ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," is a box of the correct value type. If the check succeeds, the value in the box is copied to the value type."),(0,r.kt)("p",null,"C#'s unified type system effectively means that value types are treated as ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),' references "on demand." Because of the unification, general-purpose libraries that use type ',(0,r.kt)("inlineCode",{parentName:"p"},"object")," can be used with all types that derive from ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", including both reference types and value types."),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("p",null,"There are several kinds of variables in C#, including fields, array elements, local variables, and parameters. Variables represent storage locations. Every variable has a type that determines what values can be stored in the variable, as shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Non-nullable value type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A value of that exact type"))),(0,r.kt)("li",{parentName:"ul"},"Nullable value type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," value or a value of that exact type"))),(0,r.kt)("li",{parentName:"ul"},"object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference, a reference to an object of any reference type, or a reference to a boxed value of any value type"))),(0,r.kt)("li",{parentName:"ul"},"Class type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference, a reference to an instance of that class type, or a reference to an instance of a class derived from that class type"))),(0,r.kt)("li",{parentName:"ul"},"Interface type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference, a reference to an instance of a class type that implements that interface type, or a reference to a boxed value of a value type that implements that interface type"))),(0,r.kt)("li",{parentName:"ul"},"Array type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference, a reference to an instance of that array type, or a reference to an instance of a compatible array type"))),(0,r.kt)("li",{parentName:"ul"},"Delegate type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference or a reference to an instance of a compatible delegate type")))))}m.isMDXComponent=!0}}]);