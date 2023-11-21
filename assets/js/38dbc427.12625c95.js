"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6322],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),c=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},b=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),b=r,y=s["".concat(p,".").concat(b)]||s[b]||m[b]||a;return t?l.createElement(y,o(o({ref:n},u),{},{components:t})):l.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=t(7462),r=(t(7294),t(3905));const a={title:"Nullability"},o=void 0,i={unversionedId:"csharp/core-concepts/nullability",id:"csharp/core-concepts/nullability",title:"Nullability",description:"In C#, the null literal is used to denote the absence of a value. A nullable type is a type that allows for null values.",source:"@site/docs/csharp/core-concepts/nullability.md",sourceDirName:"csharp/core-concepts",slug:"/csharp/core-concepts/nullability",permalink:"/LearningCollection/csharp/core-concepts/nullability",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/nullability.md",tags:[],version:"current",frontMatter:{title:"Nullability"},sidebar:"docs",previous:{title:"IEnumerable",permalink:"/LearningCollection/csharp/core-concepts/interfaces/ienumerable"},next:{title:"Generics",permalink:"/LearningCollection/csharp/core-concepts/generics"}},p={},c=[],u={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In C#, the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," literal is used to denote the absence of a value. A nullable type is a type that allows for ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Prior to C# 8.0, reference types were always nullable and value types were not. A value type can be made nullable though by appending it with a question mark (",(0,r.kt)("inlineCode",{parentName:"p"},"?"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string nullableReferenceType = "hello";\nnullableReferenceType = null;   // Valid as type is nullable\n\nint nonNullableValueType = 5;\nnonNullableValueType = null;    // Compile error as type is not nullable\n\nint? nullableValueType = 5;     // Define nullable value type\nnullableValueType = null;       // Valid as type is nullable\n')),(0,r.kt)("p",null,"Accessing a member of a variable which value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will compile fine, but result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"NullReferenceException")," being thrown at runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"string sentence = null;\n\n// Throws NullReferenceException at runtime\nsentence.Length;\n")),(0,r.kt)("p",null,"To counter this common type of mistake, C# 8 allows one to opt-into a feature that makes reference types non-nullable by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string nonNullableReferenceType = "book";\nnonNullableReferenceType = null;  // Compile warning (no error!)\n\nstring? nullableReferenceType = "movie";\nnullableReferenceType = null;     // Valid as type is nullable\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"??")," operator allows one to return a default value when the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string? name1 = "John";\nname1 ?? "Paul"; // => "John"\n\nstring? name2 = null;\nname2 ?? "George"; // => "George"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"?.")," operator allows one to call members safely on a possibly ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string? fruit = "apple";\nfruit?.Length; // => 5\n\nstring? vegetable = null;\nvegetable?.Length; // => null\n')))}m.isMDXComponent=!0}}]);