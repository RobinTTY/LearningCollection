"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6984],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5218:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={id:"grpc",title:"gRPC"},s=void 0,i={unversionedId:"general-concepts/grpc",id:"general-concepts/grpc",title:"gRPC",description:"Resource:",source:"@site/docs/general-concepts/What is grpc.md",sourceDirName:"general-concepts",slug:"/general-concepts/grpc",permalink:"/LearningCollection/general-concepts/grpc",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/general-concepts/What is grpc.md",tags:[],version:"current",frontMatter:{id:"grpc",title:"gRPC"},sidebar:"docs",previous:{title:"Stack vs Heap",permalink:"/LearningCollection/general-concepts/stackVsHeap"},next:{title:"Introduction",permalink:"/LearningCollection/apis/graphql/intro"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"What is a protocol buffer",id:"what-is-a-protocol-buffer",level:2},{value:"How do they work",id:"how-do-they-work",level:3},{value:"Why not just use XML",id:"why-not-just-use-xml",level:3},{value:"Why the name &quot;Protocol Buffers&quot;",id:"why-the-name-protocol-buffers",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Resource: ",(0,a.kt)("a",{parentName:"p",href:"https://www.grpc.io/docs/guides/"},"https://www.grpc.io/docs/guides/")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In gRPC a ",(0,a.kt)("strong",{parentName:"p"},"client application can directly call methods on a server application on a different machine as if it was a local object"),",\nmaking it easier for you to create distributed applications and services. As in many RPC systems, ",(0,a.kt)("strong",{parentName:"p"},"gRPC is based around the idea of\ndefining a service, specifying the methods that can be called remotely with their parameters and return types"),". On the server side,\nthe server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub\n(referred to as just a client in some languages) that provides the same methods as the server."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grpcOverview",src:o(8622).Z,width:"643",height:"417"})),(0,a.kt)("p",null,"gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own\ndesktop - and can be written in any of gRPC\u2019s supported languages. So, for example, you can easily create a gRPC server in Java with\nclients in Go, Python, or Ruby. ",(0,a.kt)("strong",{parentName:"p"},"In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily\nbuild Google functionality into your applications"),"."),(0,a.kt)("h2",{id:"what-is-a-protocol-buffer"},"What is a protocol buffer"),(0,a.kt)("p",null,"Resource: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/overview"},"https://developers.google.com/protocol-buffers/docs/overview")),(0,a.kt)("p",null,'Protocol buffers are a flexible, efficient, automated mechanism for serializing structured data \u2013 think XML, but smaller, faster, and simpler.\nYou define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured\ndata to and from a variety of data streams and using a variety of languages. You can even update your data structure without breaking deployed\nprograms that are compiled against the "old" format.'),(0,a.kt)("h3",{id:"how-do-they-work"},"How do they work"),(0,a.kt)("p",null,"You specify how you want the information you're serializing to be structured by defining protocol buffer message types in .proto files.\nEach protocol buffer message is a small logical record of information, containing a series of name-value pairs. Here's a very basic example of a\n.proto file that defines a message containing information about a person:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"message Person {\n  required string name = 1;\n  required int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message PhoneNumber {\n    required string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phone = 4;\n}\n")),(0,a.kt)("p",null,"Each message type has one or more uniquely numbered fields, and each field has a name and a value type, where value types can be numbers\n(integer or floating-point), booleans, strings, raw bytes, or even (as in the example above) other protocol buffer message types, allowing you\nto structure your data hierarchically. You can specify optional fields, required fields, and repeated fields. You can find more information about\nwriting .proto files in the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto"},"Protocol Buffer Language Guide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Once you've defined your messages, you run the protocol buffer compiler for your application's language on your .proto file to generate data\naccess classes.")," These provide simple accessors for each field (like name() and set_name()) as well as methods to serialize/parse the whole\nstructure to/from raw bytes \u2013 so, for instance, if your chosen language is C++, running the compiler on the above example will generate a class\ncalled Person. You can then use this class in your application to populate, serialize, and retrieve Person protocol buffer messages. You might\nthen write some code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'Person person;\nperson.set_name("John Doe");\nperson.set_id(1234);\nperson.set_email("jdoe@example.com");\nfstream output("myfile", ios::out | ios::binary);\nperson.SerializeToOstream(&output);\n')),(0,a.kt)("p",null,"Then, later on, you could read your message back in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'fstream input("myfile", ios::in | ios::binary);\nPerson person;\nperson.ParseFromIstream(&input);\ncout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n')),(0,a.kt)("p",null,"You can add new fields to your message formats without breaking backwards-compatibility; old binaries simply ignore the new field when parsing. So\nif you have a communications protocol that uses protocol buffers as its data format, you can extend your protocol without having to worry about\nbreaking existing code."),(0,a.kt)("h3",{id:"why-not-just-use-xml"},"Why not just use XML"),(0,a.kt)("p",null,"Protocol buffers have many advantages over XML for serializing structured data. Protocol buffers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"are simpler"),(0,a.kt)("li",{parentName:"ul"},"are 3 to 10 times smaller"),(0,a.kt)("li",{parentName:"ul"},"are 20 to 100 times faster"),(0,a.kt)("li",{parentName:"ul"},"are less ambiguous"),(0,a.kt)("li",{parentName:"ul"},"generate data access classes that are easier to use programmatically")),(0,a.kt)("p",null,"For example, let's say you want to model a person with a name and an email. In XML, you need to do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},"<person>\n  <name>John Doe</name>\n  <email>jdoe@example.com</email>\n</person\n")),(0,a.kt)("p",null,"while the corresponding protocol buffer message (in protocol buffer text format) is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},'# Textual representation of a protocol buffer.\n# This is *not* the binary format used on the wire.\nperson {\n  name: "John Doe"\n  email: "jdoe@example.com"\n}\n')),(0,a.kt)("p",null,"When this message is encoded to the protocol buffer binary format (the text format above is just a convenient human-readable representation for\ndebugging and editing), it would probably be 28 bytes long and take around 100-200 nanoseconds to parse. The XML version is at least 69 bytes if\nyou remove whitespace, and would take around 5,000-10,000 nanoseconds to parse."),(0,a.kt)("p",null,"Also, manipulating a protocol buffer is much easier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'cout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n')),(0,a.kt)("p",null,"Whereas with XML you would have to do something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'cout << "Name: "\n   << person.getElementsByTagName("name")->item(0)->innerText()\n   << endl;\ncout << "E-mail: "\n   << person.getElementsByTagName("email")->item(0)->innerText()\n   << endl;\n')),(0,a.kt)("p",null,"However, protocol buffers are not always a better solution than XML \u2013 for instance, protocol buffers would not be a good way to model a text-based\ndocument with markup (e.g. HTML), since you cannot easily interleave structure with text. n addition, XML is human-readable and human-editable;\nprotocol buffers, at least in their native format, are not. XML is also \u2013 to some extent \u2013 self-describing. A protocol buffer is only meaningful if\nyou have the message definition (the .proto file)."),(0,a.kt)("h2",{id:"why-the-name-protocol-buffers"},'Why the name "Protocol Buffers"'),(0,a.kt)("p",null,"Resource: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/faq"},"grpc.io/protocolBuffers")),(0,a.kt)("p",null,"The name originates from the early days of the format, before we had the protocol buffer compiler to generate classes for us. At the time, there was a class called ProtocolBuffer which actually acted as a buffer for an individual method. Users would add tag/value pairs to this buffer individually by calling methods like AddValue(tag, value). The raw bytes were stored in a buffer which could then be written out once the message had been constructed."),(0,a.kt)("p",null,'Since that time, the "buffers" part of the name has lost its meaning, but it is still the name we use. Today, people usually use the term "protocol message" to refer to a message in an abstract sense, "protocol buffer" to refer to a serialized copy of a message, and "protocol message object" to refer to an in-memory object representing the parsed message.'))}d.isMDXComponent=!0},8622:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/grpcOverview-e887f42e3afb2833fd6a0887eb79bf5b.PNG"}}]);