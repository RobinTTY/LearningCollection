"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5476],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5645:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"unmanagedConstraint",title:"Unmanaged constraint"},l=void 0,u={unversionedId:"C-Sharp/unmanagedConstraint",id:"C-Sharp/unmanagedConstraint",isDocsHomePage:!1,title:"Unmanaged constraint",description:'The unmanaged constraint feature will give language enforcement to the class of types known as "unmanaged types" in the C# language spec. This is defined in section 18.2 as a type which is not a reference type and doesn\'t contain reference type fields at any level of nesting.',source:"@site/docs/C-Sharp/unmanaged constraint.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/unmanagedConstraint",permalink:"/LearningCollection/C-Sharp/unmanagedConstraint",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/unmanaged constraint.md",version:"current",frontMatter:{id:"unmanagedConstraint",title:"Unmanaged constraint"},sidebar:"mySidebar",previous:{title:"Private protected vs protected internal access modifier",permalink:"/LearningCollection/C-Sharp/privateProtectedVsProtectedInternal"},next:{title:"Unmanaged vs managed resources",permalink:"/LearningCollection/C-Sharp/unmanagedVsManagedResources"}},c=[{value:"What is an unmanaged Type",id:"what-is-an-unmanaged-type",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The unmanaged constraint feature ",(0,o.kt)("strong",{parentName:"p"},'will give language enforcement to the class of types known as "unmanaged types"')," in the C# language spec. This is defined in section 18.2 as a ",(0,o.kt)("strong",{parentName:"p"},"type which is not a reference type and doesn't contain reference type fields at any level of nesting.")),(0,o.kt)("p",null,"The primary motivation is to make it easier to author low level interop code in C#."),(0,o.kt)("p",null,"Interoperability enables you to preserve and take advantage of existing investments in unmanaged code. Code that runs under the control of the common language runtime (CLR) is called managed code, and code that runs outside the CLR is called unmanaged code. COM, COM+, C++ components, ActiveX components, and Microsoft Windows API are examples of unmanaged code."),(0,o.kt)("p",null,"Unmanaged types are one of the core building blocks for interop code, yet the lack of support in generics makes it impossible to create re-usable routines across all unmanaged types. Instead developers are forced to author the same boiler plate code for every unmanaged type in their library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"int Hash(Point point) { ... }\nint Hash(TimeSpan timeSpan) { ... }\n")),(0,o.kt)("p",null,"To enable this type of scenario the language will be introducing a new constraint: unmanaged:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"void Hash<T>(T value) where T : unmanaged\n{\n    ...\n}\n")),(0,o.kt)("p",null,"This constraint can only be met by types which fit into the unmanaged type definition in the C# language spec. Another way of looking at it is that a type satisfies the unmanaged constraint iff it can also be used as a pointer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},'Hash(new Point()); // Okay\nHash(42); // Okay\nHash("hello") // Error: Type string does not satisfy the unmanaged constraint\n')),(0,o.kt)("p",null,"Type parameters with the unmanaged constraint can use all the features available to unmanaged types: pointers, fixed, etc ..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"void Hash<T>(T value) where T : unmanaged\n{\n    // Okay\n    fixed (T* p = &value)\n    {\n        ...\n    }\n}\n")),(0,o.kt)("p",null,"This constraint will also make it possible to have efficient conversions between structured data and streams of bytes. This is an operation that is common in networking stacks and serialization layers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"Span<byte> Convert<T>(ref T value) where T : unmanaged\n{\n    ...\n}\n")),(0,o.kt)("p",null,"Such routines are advantageous because they are provably safe at compile time and allocation free."),(0,o.kt)("h2",{id:"what-is-an-unmanaged-type"},"What is an unmanaged Type"),(0,o.kt)("p",null,"The language will introduce a new constraint named unmanaged. In order to satisfy this constraint a type must be a struct and all the fields of the type must fall into one of the following categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have the type sbyte, byte, short, ushort, int, uint, long, ulong, char, float, double, decimal, bool, IntPtr or UIntPtr"),(0,o.kt)("li",{parentName:"ul"},"Be any enum type"),(0,o.kt)("li",{parentName:"ul"},"Be a pointer type"),(0,o.kt)("li",{parentName:"ul"},"e a user defined struct that satisfies the unmanaged constraint")),(0,o.kt)("p",null,"Compiler generated instance fields, such as those backing auto-implemented properties, must also meet these constraints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"// Unmanaged type\nstruct Point\n{\n    int X;\n    int Y {get; set;}\n}\n\n// Not an unmanaged type\nstruct Student\n{\n    string FirstName;\n    string LastName;\n}\n")),(0,o.kt)("p",null,"The unmanaged constraint cannot be combined with struct, class or new(). This restriction derives from the fact that unmanaged implies struct hence the other constraints do not make sense."),(0,o.kt)("p",null,"The unmanaged constraint is not enforced by CLR, only by the language. To prevent mis-use by other languages, methods which have this constraint will be protected by a mod-req. This will prevent other languages from using type arguments which are not unmanaged types."),(0,o.kt)("p",null,"The token unmanaged in the constraint is not a keyword, nor a contextual keyword. Instead it is like var in that it is evaluated at that location and will either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bind to user defined or referenced type named unmanaged: This will be treated just as any other named type constraint is treated"),(0,o.kt)("li",{parentName:"ul"},"Bind to no type: This will be interpreted as the unmanaged constraint")),(0,o.kt)("p",null,"Another Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"unsafe public static byte[] ToByteArray<T>(this T argument) where T : unmanaged\n{\n    var size = sizeof(T);\n    var result = new Byte[size];\n    Byte* p = (byte*)&argument;\n    for (var i = 0; i < size; i++)\n        result[i] = *p++;\n    return result;\n}\n")),(0,o.kt)("p",null,"The preceding method must be compiled in an unsafe context because it uses the sizeof operator on a type not known to be a built-in type. Without the unmanaged constraint, the sizeof operator is unavailable."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-7.3/blittable"},"Reference 1"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters#unmanaged-constraint"},"Reference 2")))}d.isMDXComponent=!0}}]);