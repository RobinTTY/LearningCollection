"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"generics",title:"Generics"},c=void 0,l={unversionedId:"C-Sharp/generics",id:"C-Sharp/generics",isDocsHomePage:!1,title:"Generics",description:"- Use generic types to maximize code reuse, type safety, and performance",source:"@site/docs/C-Sharp/Generics.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/generics",permalink:"/LearningCollection/C-Sharp/generics",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Generics.md",version:"current",frontMatter:{id:"generics",title:"Generics"},sidebar:"mySidebar",previous:{title:".NET Framework",permalink:"/LearningCollection/C-Sharp/netFramework"},next:{title:"IEnumerable",permalink:"/LearningCollection/C-Sharp/ienumerable"}},p=[{value:"Introduction to Generics",id:"introduction-to-generics",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use generic types to maximize code reuse, type safety, and performance"),(0,i.kt)("li",{parentName:"ul"},"The most common use of generics is to create collection classes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The .NET Framework class library contains several new generic collection classes in the System.Collections.Generic namespace. These should be used whenever possible instead of classes such as ArrayList in the System.Collections namespace.")),(0,i.kt)("li",{parentName:"ul"},"You can create your own generic interfaces, classes, methods, events and delegates"),(0,i.kt)("li",{parentName:"ul"},"Generic classes may be constrained to enable access to methods on particular data types"),(0,i.kt)("li",{parentName:"ul"},"Information on the types that are used in a generic data type may be obtained at run-time by using reflection"),(0,i.kt)("li",{parentName:"ul"},"Generics introduce to the .NET Framework the concept of type parameters, which make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code"),(0,i.kt)("li",{parentName:"ul"},"by using a generic type parameter T you can write a single class that other client code can use without incurring the cost or risk of runtime casts or boxing operations")),(0,i.kt)("h2",{id:"introduction-to-generics"},"Introduction to Generics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generics are most frequently used with collections and the methods that operate on them"),(0,i.kt)("li",{parentName:"ul"},"The following code example shows a simple generic linked-list class for demonstration purposes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In most cases, you should use the ",(0,i.kt)("inlineCode",{parentName:"li"},"List<T>")," class provided by the .NET Framework class library instead of creating your own"),(0,i.kt)("li",{parentName:"ul"},"The type parameter T is used in several locations where a concrete type would ordinarily be used to indicate the type of the item stored in the list. It is used in the following ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As the type of a method parameter in the AddHead method"),(0,i.kt)("li",{parentName:"ul"},"As the return type of the Data property in the nested Node class"),(0,i.kt)("li",{parentName:"ul"},"As the type of the private member data in the nested class"))),(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericList<T>")," is instantiated with a concrete type, for example as a ",(0,i.kt)("inlineCode",{parentName:"li"},"GenericList<int>"),", each occurrence of T will be replaced with int")))))}m.isMDXComponent=!0}}]);