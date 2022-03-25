"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"grpc",title:"gRPC"},l=void 0,u={unversionedId:"General Concepts/grpc",id:"General Concepts/grpc",title:"gRPC",description:"Resource:",source:"@site/docs/General Concepts/What is grpc.md",sourceDirName:"General Concepts",slug:"/General Concepts/grpc",permalink:"/LearningCollection/General Concepts/grpc",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/What is grpc.md",tags:[],version:"current",frontMatter:{id:"grpc",title:"gRPC"},sidebar:"mySidebar",previous:{title:"Stack vs Heap",permalink:"/LearningCollection/General Concepts/stackVsHeap"},next:{title:"Attributes",permalink:"/LearningCollection/C-Sharp/Advanced Concepts/attributes"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"What is a protocol buffer",id:"what-is-a-protocol-buffer",level:2},{value:"How do they work",id:"how-do-they-work",level:3},{value:"Why not just use XML",id:"why-not-just-use-xml",level:3},{value:"Why the name &quot;Protocol Buffers&quot;",id:"why-the-name-protocol-buffers",level:2}],m={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Resource: ",(0,r.kt)("a",{parentName:"p",href:"https://www.grpc.io/docs/guides/"},"https://www.grpc.io/docs/guides/")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In gRPC a ",(0,r.kt)("strong",{parentName:"p"},"client application can directly call methods on a server application on a different machine as if it was a local object"),",\nmaking it easier for you to create distributed applications and services. As in many RPC systems, ",(0,r.kt)("strong",{parentName:"p"},"gRPC is based around the idea of\ndefining a service, specifying the methods that can be called remotely with their parameters and return types"),". On the server side,\nthe server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub\n(referred to as just a client in some languages) that provides the same methods as the server."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grpcOverview",src:n(8622).Z,width:"643",height:"417"})),(0,r.kt)("p",null,"gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own\ndesktop - and can be written in any of gRPC\u2019s supported languages. So, for example, you can easily create a gRPC server in Java with\nclients in Go, Python, or Ruby. ",(0,r.kt)("strong",{parentName:"p"},"In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily\nbuild Google functionality into your applications"),"."),(0,r.kt)("h2",{id:"what-is-a-protocol-buffer"},"What is a protocol buffer"),(0,r.kt)("p",null,"Resource: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/overview"},"https://developers.google.com/protocol-buffers/docs/overview")),(0,r.kt)("p",null,'Protocol buffers are a flexible, efficient, automated mechanism for serializing structured data \u2013 think XML, but smaller, faster, and simpler.\nYou define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured\ndata to and from a variety of data streams and using a variety of languages. You can even update your data structure without breaking deployed\nprograms that are compiled against the "old" format.'),(0,r.kt)("h3",{id:"how-do-they-work"},"How do they work"),(0,r.kt)("p",null,"You specify how you want the information you're serializing to be structured by defining protocol buffer message types in .proto files.\nEach protocol buffer message is a small logical record of information, containing a series of name-value pairs. Here's a very basic example of a\n.proto file that defines a message containing information about a person:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message Person {\n  required string name = 1;\n  required int32 id = 2;\n  optional string email = 3;\n\n  enum PhoneType {\n    MOBILE = 0;\n    HOME = 1;\n    WORK = 2;\n  }\n\n  message PhoneNumber {\n    required string number = 1;\n    optional PhoneType type = 2 [default = HOME];\n  }\n\n  repeated PhoneNumber phone = 4;\n}\n")),(0,r.kt)("p",null,"Each message type has one or more uniquely numbered fields, and each field has a name and a value type, where value types can be numbers\n(integer or floating-point), booleans, strings, raw bytes, or even (as in the example above) other protocol buffer message types, allowing you\nto structure your data hierarchically. You can specify optional fields, required fields, and repeated fields. You can find more information about\nwriting .proto files in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto"},"Protocol Buffer Language Guide"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Once you've defined your messages, you run the protocol buffer compiler for your application's language on your .proto file to generate data\naccess classes.")," These provide simple accessors for each field (like name() and set_name()) as well as methods to serialize/parse the whole\nstructure to/from raw bytes \u2013 so, for instance, if your chosen language is C++, running the compiler on the above example will generate a class\ncalled Person. You can then use this class in your application to populate, serialize, and retrieve Person protocol buffer messages. You might\nthen write some code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'Person person;\nperson.set_name("John Doe");\nperson.set_id(1234);\nperson.set_email("jdoe@example.com");\nfstream output("myfile", ios::out | ios::binary);\nperson.SerializeToOstream(&output);\n')),(0,r.kt)("p",null,"Then, later on, you could read your message back in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'fstream input("myfile", ios::in | ios::binary);\nPerson person;\nperson.ParseFromIstream(&input);\ncout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n')),(0,r.kt)("p",null,"You can add new fields to your message formats without breaking backwards-compatibility; old binaries simply ignore the new field when parsing. So\nif you have a communications protocol that uses protocol buffers as its data format, you can extend your protocol without having to worry about\nbreaking existing code."),(0,r.kt)("h3",{id:"why-not-just-use-xml"},"Why not just use XML"),(0,r.kt)("p",null,"Protocol buffers have many advantages over XML for serializing structured data. Protocol buffers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"are simpler"),(0,r.kt)("li",{parentName:"ul"},"are 3 to 10 times smaller"),(0,r.kt)("li",{parentName:"ul"},"are 20 to 100 times faster"),(0,r.kt)("li",{parentName:"ul"},"are less ambiguous"),(0,r.kt)("li",{parentName:"ul"},"generate data access classes that are easier to use programmatically")),(0,r.kt)("p",null,"For example, let's say you want to model a person with a name and an email. In XML, you need to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},"<person>\n  <name>John Doe</name>\n  <email>jdoe@example.com</email>\n</person\n")),(0,r.kt)("p",null,"while the corresponding protocol buffer message (in protocol buffer text format) is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'# Textual representation of a protocol buffer.\n# This is *not* the binary format used on the wire.\nperson {\n  name: "John Doe"\n  email: "jdoe@example.com"\n}\n')),(0,r.kt)("p",null,"When this message is encoded to the protocol buffer binary format (the text format above is just a convenient human-readable representation for\ndebugging and editing), it would probably be 28 bytes long and take around 100-200 nanoseconds to parse. The XML version is at least 69 bytes if\nyou remove whitespace, and would take around 5,000-10,000 nanoseconds to parse."),(0,r.kt)("p",null,"Also, manipulating a protocol buffer is much easier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'cout << "Name: " << person.name() << endl;\ncout << "E-mail: " << person.email() << endl;\n')),(0,r.kt)("p",null,"Whereas with XML you would have to do something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'cout << "Name: "\n   << person.getElementsByTagName("name")->item(0)->innerText()\n   << endl;\ncout << "E-mail: "\n   << person.getElementsByTagName("email")->item(0)->innerText()\n   << endl;\n')),(0,r.kt)("p",null,"However, protocol buffers are not always a better solution than XML \u2013 for instance, protocol buffers would not be a good way to model a text-based\ndocument with markup (e.g. HTML), since you cannot easily interleave structure with text. n addition, XML is human-readable and human-editable;\nprotocol buffers, at least in their native format, are not. XML is also \u2013 to some extent \u2013 self-describing. A protocol buffer is only meaningful if\nyou have the message definition (the .proto file)."),(0,r.kt)("h2",{id:"why-the-name-protocol-buffers"},'Why the name "Protocol Buffers"'),(0,r.kt)("p",null,"Resource: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/faq"},"grpc.io/protocolBuffers")),(0,r.kt)("p",null,"The name originates from the early days of the format, before we had the protocol buffer compiler to generate classes for us. At the time, there was a class called ProtocolBuffer which actually acted as a buffer for an individual method. Users would add tag/value pairs to this buffer individually by calling methods like AddValue(tag, value). The raw bytes were stored in a buffer which could then be written out once the message had been constructed."),(0,r.kt)("p",null,'Since that time, the "buffers" part of the name has lost its meaning, but it is still the name we use. Today, people usually use the term "protocol message" to refer to a message in an abstract sense, "protocol buffer" to refer to a serialized copy of a message, and "protocol message object" to refer to an in-memory object representing the parsed message.'))}d.isMDXComponent=!0},8622:function(e,t,n){t.Z=n.p+"assets/images/grpcOverview-e887f42e3afb2833fd6a0887eb79bf5b.PNG"}}]);