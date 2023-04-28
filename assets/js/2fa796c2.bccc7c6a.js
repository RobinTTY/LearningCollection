"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(f,o(o({ref:t},d),{},{components:a})):i.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={id:"serialization",title:"Serialization",sidebar_position:6},o=void 0,s={unversionedId:"C-Sharp/Advanced Concepts/serialization",id:"C-Sharp/Advanced Concepts/serialization",title:"Serialization",description:"Definition",source:"@site/docs/C-Sharp/Advanced Concepts/Serialization.md",sourceDirName:"C-Sharp/Advanced Concepts",slug:"/C-Sharp/Advanced Concepts/serialization",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/serialization",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Advanced Concepts/Serialization.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"serialization",title:"Serialization",sidebar_position:6},sidebar:"finance",previous:{title:"Unmanaged constraint",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/unmanagedConstraint"},next:{title:".Net Core vs .Net Standard vs UWP",permalink:"/LearningCollection/C-Sharp/DotNet Versions/netstandardVsNetcoreVsUwp"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Comparison Serialization and Marshalling",id:"comparison-serialization-and-marshalling",level:2},{value:"Serializable",id:"serializable",level:2},{value:"What is it",id:"what-is-it",level:3},{value:"Uses for attribute Serializable",id:"uses-for-attribute-serializable",level:3},{value:"Reasons to mark something as not serializable",id:"reasons-to-mark-something-as-not-serializable",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"In computer science, in the context of data storage, serialization (or serialisation) is the process of ",(0,n.kt)("strong",{parentName:"p"},"translating data structures or object state into a format that can be stored (for example, in a file or memory buffer) or transmitted")," (for example, across a network connection link) and reconstructed later (possibly in a different computer environment)."),(0,n.kt)("p",null,"hen the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. For many complex objects, such as those that make extensive use of references, this process is not straightforward. Serialization of object-oriented objects does not include any of their associated methods with which they were previously linked."),(0,n.kt)("p",null,"This process of serializing an object is also called marshalling an object. The opposite operation, extracting a data structure from a series of bytes, is deserialization (also called unmarshalling)."),(0,n.kt)("h2",{id:"comparison-serialization-and-marshalling"},"Comparison Serialization and Marshalling"),(0,n.kt)("p",null,'The term "marshal" is considered to be synonymous with "serialize" in the Python standard library,',"[5]"," but the terms are not synonymous in the Java-related RFC 2713:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'To "marshal" an object means to record its state and codebase(s) in such a way that when the marshalled object\nis "unmarshalled," a copy of the original object is obtained, possibly by automatically loading the class\ndefinitions of the object.\nYou can marshal any object that is serializable or remote (that is, implements the java.rmi.Remote interface).\nMarshalling is like serialization, except marshalling also records codebases.\nMarshalling is different from serialization in that marshalling treats remote objects specially.\n\n\u2014\u2009Schema for Representing Java(tm) Objects in an LDAP Directory (RFC 2713)\n')),(0,n.kt)("h2",{id:"serializable"},"[Serializable]"),(0,n.kt)("h3",{id:"what-is-it"},"What is it"),(0,n.kt)("p",null,"When you create an object in a .Net framework application, you don't need to think about how the data is stored in memory. Because the .Net Framework takes care of that for you. However, if you want to store the contents of an object to a file, send an object to another process or transmit it across the network, you do have to think about how the object is represented because you will need to convert to a different format. This conversion is called SERIALIZATION."),(0,n.kt)("h3",{id:"uses-for-attribute-serializable"},"Uses for attribute Serializable"),(0,n.kt)("p",null,"Apply SerializableAttribute to a type to indicate that instances of this type can be serialized. Apply the SerializableAttribute even if the class also implements the ISerializable interface to control the serialization process."),(0,n.kt)("p",null,"All the public and private fields in a type that are marked by the SerializableAttribute are serialized by default, unless the type implements the ISerializable interface to override the serialization process. The default serialization process excludes fields that are marked with NonSerializedAttribute. If a field of a serializable type contains a pointer, a handle, or some other data structure that is specific to a particular environment, and cannot be meaningfully reconstituted in a different environment, then you might want to apply NonSerializedAttribute to that field."),(0,n.kt)("h2",{id:"reasons-to-mark-something-as-not-serializable"},"Reasons to mark something as not serializable"),(0,n.kt)("p",null,"When transferring or saving data, you need to send or save only the required data. So there will be less transfer delays and storage issues. So you can opt out unnecessary chunk of data when serializing."))}u.isMDXComponent=!0}}]);