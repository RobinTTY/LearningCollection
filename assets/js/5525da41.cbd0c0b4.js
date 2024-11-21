"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[210],{85156:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(74848),a=o(28453);const r={id:"grpc",title:"gRPC"},s=void 0,i={id:"general-concepts/grpc",title:"gRPC",description:"Resource: gRPC Guides",source:"@site/docs/general-concepts/What is grpc.md",sourceDirName:"general-concepts",slug:"/general-concepts/grpc",permalink:"/LearningCollection/general-concepts/grpc",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/general-concepts/What is grpc.md",tags:[],version:"current",frontMatter:{id:"grpc",title:"gRPC"},sidebar:"docs",previous:{title:"Stack vs Heap",permalink:"/LearningCollection/general-concepts/stackVsHeap"},next:{title:"Cloud Overview",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/cloud-overview"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"What is a protocol buffer",id:"what-is-a-protocol-buffer",level:2},{value:"How do they work",id:"how-do-they-work",level:3},{value:"Why not just use XML",id:"why-not-just-use-xml",level:3},{value:"Why the name &quot;Protocol Buffers&quot;",id:"why-the-name-protocol-buffers",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Resource: ",(0,t.jsx)(n.img,{src:"https://www.grpc.io/docs/guides/",alt:"gRPC Guides"})]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["In gRPC a ",(0,t.jsx)(n.strong,{children:"client application can directly call methods on a server application on a different machine as if it was a local object"}),",\nmaking it easier for you to create distributed applications and services. As in many RPC systems, ",(0,t.jsx)(n.strong,{children:"gRPC is based around the idea of\ndefining a service, specifying the methods that can be called remotely with their parameters and return types"}),". On the server side,\nthe server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub\n(referred to as just a client in some languages) that provides the same methods as the server."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"grpcOverview",src:o(24502).A+"",width:"643",height:"417"})}),"\n",(0,t.jsxs)(n.p,{children:["gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own\ndesktop - and can be written in any of gRPC\u2019s supported languages. So, for example, you can easily create a gRPC server in Java with\nclients in Go, Python, or Ruby. ",(0,t.jsx)(n.strong,{children:"In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily\nbuild Google functionality into your applications"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-protocol-buffer",children:"What is a protocol buffer"}),"\n",(0,t.jsxs)(n.p,{children:["Resource: ",(0,t.jsx)(n.img,{src:"https://developers.google.com/protocol-buffers/docs/overview",alt:"gRPC Overview"})]}),"\n",(0,t.jsx)(n.p,{children:'Protocol buffers are a flexible, efficient, automated mechanism for serializing structured data \u2013 think XML, but smaller, faster, and simpler.\nYou define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured\ndata to and from a variety of data streams and using a variety of languages. You can even update your data structure without breaking deployed\nprograms that are compiled against the "old" format.'}),"\n",(0,t.jsx)(n.h3,{id:"how-do-they-work",children:"How do they work"}),"\n",(0,t.jsx)(n.p,{children:"You specify how you want the information you're serializing to be structured by defining protocol buffer message types in .proto files.\nEach protocol buffer message is a small logical record of information, containing a series of name-value pairs. Here's a very basic example of a\n.proto file that defines a message containing information about a person:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-proto",children:"message Person {\n  required string name = 1;\n  required int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message PhoneNumber {\n    required string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phone = 4;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each message type has one or more uniquely numbered fields, and each field has a name and a value type, where value types can be numbers\n(integer or floating-point), booleans, strings, raw bytes, or even (as in the example above) other protocol buffer message types, allowing you\nto structure your data hierarchically. You can specify optional fields, required fields, and repeated fields. You can find more information about\nwriting .proto files in the ",(0,t.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/proto",children:"Protocol Buffer Language Guide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Once you've defined your messages, you run the protocol buffer compiler for your application's language on your .proto file to generate data\naccess classes."})," These provide simple accessors for each field (like name() and set_name()) as well as methods to serialize/parse the whole\nstructure to/from raw bytes \u2013 so, for instance, if your chosen language is C++, running the compiler on the above example will generate a class\ncalled Person. You can then use this class in your application to populate, serialize, and retrieve Person protocol buffer messages. You might\nthen write some code like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:'Person person;\nperson.set_name("John Doe");\nperson.set_id(1234);\nperson.set_email("jdoe@example.com");\nfstream output("myfile", ios::out | ios::binary);\nperson.SerializeToOstream(&output);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then, later on, you could read your message back in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:'fstream input("myfile", ios::in | ios::binary);\nPerson person;\nperson.ParseFromIstream(&input);\ncout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can add new fields to your message formats without breaking backwards-compatibility; old binaries simply ignore the new field when parsing. So\nif you have a communications protocol that uses protocol buffers as its data format, you can extend your protocol without having to worry about\nbreaking existing code."}),"\n",(0,t.jsx)(n.h3,{id:"why-not-just-use-xml",children:"Why not just use XML"}),"\n",(0,t.jsx)(n.p,{children:"Protocol buffers have many advantages over XML for serializing structured data. Protocol buffers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"are simpler"}),"\n",(0,t.jsx)(n.li,{children:"are 3 to 10 times smaller"}),"\n",(0,t.jsx)(n.li,{children:"are 20 to 100 times faster"}),"\n",(0,t.jsx)(n.li,{children:"are less ambiguous"}),"\n",(0,t.jsx)(n.li,{children:"generate data access classes that are easier to use programmatically"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, let's say you want to model a person with a name and an email. In XML, you need to do:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:"<person>\n  <name>John Doe</name>\n  <email>jdoe@example.com</email>\n</person\n"})}),"\n",(0,t.jsx)(n.p,{children:"while the corresponding protocol buffer message (in protocol buffer text format) is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'# Textual representation of a protocol buffer.\n# This is *not* the binary format used on the wire.\nperson {\n  name: "John Doe"\n  email: "jdoe@example.com"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"When this message is encoded to the protocol buffer binary format (the text format above is just a convenient human-readable representation for\ndebugging and editing), it would probably be 28 bytes long and take around 100-200 nanoseconds to parse. The XML version is at least 69 bytes if\nyou remove whitespace, and would take around 5,000-10,000 nanoseconds to parse."}),"\n",(0,t.jsx)(n.p,{children:"Also, manipulating a protocol buffer is much easier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:'cout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n'})}),"\n",(0,t.jsx)(n.p,{children:"Whereas with XML you would have to do something like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:'cout << "Name: "\n   << person.getElementsByTagName("name")->item(0)->innerText()\n   << endl;\ncout << "E-mail: "\n   << person.getElementsByTagName("email")->item(0)->innerText()\n   << endl;\n'})}),"\n",(0,t.jsx)(n.p,{children:"However, protocol buffers are not always a better solution than XML \u2013 for instance, protocol buffers would not be a good way to model a text-based\ndocument with markup (e.g. HTML), since you cannot easily interleave structure with text. n addition, XML is human-readable and human-editable;\nprotocol buffers, at least in their native format, are not. XML is also \u2013 to some extent \u2013 self-describing. A protocol buffer is only meaningful if\nyou have the message definition (the .proto file)."}),"\n",(0,t.jsx)(n.h2,{id:"why-the-name-protocol-buffers",children:'Why the name "Protocol Buffers"'}),"\n",(0,t.jsxs)(n.p,{children:["Resource: ",(0,t.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/faq",children:"grpc.io/protocolBuffers"})]}),"\n",(0,t.jsx)(n.p,{children:"The name originates from the early days of the format, before we had the protocol buffer compiler to generate classes for us. At the time, there was a class called ProtocolBuffer which actually acted as a buffer for an individual method. Users would add tag/value pairs to this buffer individually by calling methods like AddValue(tag, value). The raw bytes were stored in a buffer which could then be written out once the message had been constructed."}),"\n",(0,t.jsx)(n.p,{children:'Since that time, the "buffers" part of the name has lost its meaning, but it is still the name we use. Today, people usually use the term "protocol message" to refer to a message in an abstract sense, "protocol buffer" to refer to a serialized copy of a message, and "protocol message object" to refer to an in-memory object representing the parsed message.'})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},24502:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/grpcOverview-e887f42e3afb2833fd6a0887eb79bf5b.PNG"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);