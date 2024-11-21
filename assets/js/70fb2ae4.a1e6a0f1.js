"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1678],{6014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(74848),n=a(28453);const s={id:"serialization",title:"Serialization",sidebar_position:6},o=void 0,r={id:"csharp/advanced-concepts/serialization",title:"Serialization",description:"Definition",source:"@site/docs/csharp/advanced-concepts/serialization.md",sourceDirName:"csharp/advanced-concepts",slug:"/csharp/advanced-concepts/serialization",permalink:"/LearningCollection/csharp/advanced-concepts/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/advanced-concepts/serialization.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"serialization",title:"Serialization",sidebar_position:6},sidebar:"docs",previous:{title:"Unmanaged constraint",permalink:"/LearningCollection/csharp/advanced-concepts/unmanagedConstraint"},next:{title:".Net Core vs .Net Standard vs UWP",permalink:"/LearningCollection/csharp/dotnet-versions/netstandardVsNetcoreVsUwp"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Comparison Serialization and Marshalling",id:"comparison-serialization-and-marshalling",level:2},{value:"[Serializable]",id:"serializable",level:2},{value:"What is it",id:"what-is-it",level:3},{value:"Uses for attribute Serializable",id:"uses-for-attribute-serializable",level:3},{value:"Reasons to mark something as not serializable",id:"reasons-to-mark-something-as-not-serializable",level:2}];function d(e){const t={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(t.p,{children:["In computer science, in the context of data storage, serialization (or serialisation) is the process of ",(0,i.jsx)(t.strong,{children:"translating data structures or object state into a format that can be stored (for example, in a file or memory buffer) or transmitted"})," (for example, across a network connection link) and reconstructed later (possibly in a different computer environment)."]}),"\n",(0,i.jsx)(t.p,{children:"hen the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. For many complex objects, such as those that make extensive use of references, this process is not straightforward. Serialization of object-oriented objects does not include any of their associated methods with which they were previously linked."}),"\n",(0,i.jsx)(t.p,{children:"This process of serializing an object is also called marshalling an object. The opposite operation, extracting a data structure from a series of bytes, is deserialization (also called unmarshalling)."}),"\n",(0,i.jsx)(t.h2,{id:"comparison-serialization-and-marshalling",children:"Comparison Serialization and Marshalling"}),"\n",(0,i.jsx)(t.p,{children:'The term "marshal" is considered to be synonymous with "serialize" in the Python standard library,[5] but the terms are not synonymous in the Java-related RFC 2713:'}),"\n",(0,i.jsx)(t.p,{children:'To "marshal" an object means to record its state and codebase(s) in such a way that when the marshalled object\nis "unmarshalled," a copy of the original object is obtained, possibly by automatically loading the class\ndefinitions of the object.\nYou can marshal any object that is serializable or remote (that is, implements the java.rmi.Remote interface).\nMarshalling is like serialization, except marshalling also records codebases.\nMarshalling is different from serialization in that marshalling treats remote objects specially.'}),"\n",(0,i.jsx)(t.p,{children:"\u2014\u2009Schema for Representing Java(tm) Objects in an LDAP Directory (RFC 2713)"}),"\n",(0,i.jsx)(t.h2,{id:"serializable",children:"[Serializable]"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-it",children:"What is it"}),"\n",(0,i.jsx)(t.p,{children:"When you create an object in a .Net framework application, you don't need to think about how the data is stored in memory. Because the .Net Framework takes care of that for you. However, if you want to store the contents of an object to a file, send an object to another process or transmit it across the network, you do have to think about how the object is represented because you will need to convert to a different format. This conversion is called SERIALIZATION."}),"\n",(0,i.jsx)(t.h3,{id:"uses-for-attribute-serializable",children:"Uses for attribute Serializable"}),"\n",(0,i.jsx)(t.p,{children:"Apply SerializableAttribute to a type to indicate that instances of this type can be serialized. Apply the SerializableAttribute even if the class also implements the ISerializable interface to control the serialization process."}),"\n",(0,i.jsx)(t.p,{children:"All the public and private fields in a type that are marked by the SerializableAttribute are serialized by default, unless the type implements the ISerializable interface to override the serialization process. The default serialization process excludes fields that are marked with NonSerializedAttribute. If a field of a serializable type contains a pointer, a handle, or some other data structure that is specific to a particular environment, and cannot be meaningfully reconstituted in a different environment, then you might want to apply NonSerializedAttribute to that field."}),"\n",(0,i.jsx)(t.h2,{id:"reasons-to-mark-something-as-not-serializable",children:"Reasons to mark something as not serializable"}),"\n",(0,i.jsx)(t.p,{children:"When transferring or saving data, you need to send or save only the required data. So there will be less transfer delays and storage issues. So you can opt out unnecessary chunk of data when serializing."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);