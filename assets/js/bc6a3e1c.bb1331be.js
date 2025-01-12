"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8101],{35933:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=i(74848),r=i(28453);const n={id:"scalars",title:"Scalars",sidebar_position:1},t=void 0,c={id:"csharp/libraries/hot-chocolate/types/scalars",title:"Scalars",description:"Scalar types are the primitives of our schema and can hold a specific type of data. They are leaf types, meaning we cannot use e.g. { fieldName } to further drill down into the type. The main purpose of a scalar is to define how a value is serialized and deserialized.",source:"@site/docs/csharp/libraries/hot-chocolate/types/scalars.md",sourceDirName:"csharp/libraries/hot-chocolate/types",slug:"/csharp/libraries/hot-chocolate/types/scalars",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/scalars",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/types/scalars.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"scalars",title:"Scalars",sidebar_position:1},sidebar:"docs",previous:{title:"Errors",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/errors"},next:{title:"Enums",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/enums"}},o={},l=[{value:"GraphQL scalars",id:"graphql-scalars",level:2},{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Int",id:"int",level:3},{value:"Float",id:"float",level:3},{value:"ID",id:"id",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Scalar types are the primitives of our schema and can hold a specific type of data. They are leaf types, meaning we cannot use e.g. ",(0,a.jsx)(s.code,{children:"{ fieldName }"})," to further drill down into the type. The main purpose of a scalar is to define how a value is serialized and deserialized."]}),"\n",(0,a.jsxs)(s.p,{children:["Besides basic scalars like ",(0,a.jsx)(s.code,{children:"String"})," and ",(0,a.jsx)(s.code,{children:"Int"}),", we can also create custom scalars like ",(0,a.jsx)(s.code,{children:"CreditCardNumber"})," or ",(0,a.jsx)(s.code,{children:"SocialSecurityNumber"}),". These custom scalars can greatly enhance the expressiveness of our schema and help new developers to get a grasp of our API."]}),"\n",(0,a.jsx)(s.h2,{id:"graphql-scalars",children:"GraphQL scalars"}),"\n",(0,a.jsx)(s.p,{children:"The GraphQL specification defines the following scalars."}),"\n",(0,a.jsx)(s.h3,{id:"string",children:"String"}),"\n",(0,a.jsxs)(s.p,{children:["This scalar represents an UTF-8 character sequence. It is automatically inferred from the usage of the .NET ",(0,a.jsx)(s.code,{children:"string"})," type."]}),"\n",(0,a.jsx)(s.h3,{id:"boolean",children:"Boolean"}),"\n",(0,a.jsxs)(s.p,{children:["This scalar represents a Boolean value, which can be either ",(0,a.jsx)(s.code,{children:"true"})," or ",(0,a.jsx)(s.code,{children:"false"}),". It is automatically inferred from the usage of the .NET ",(0,a.jsx)(s.code,{children:"bool"})," type."]}),"\n",(0,a.jsx)(s.h3,{id:"int",children:"Int"}),"\n",(0,a.jsxs)(s.p,{children:["This scalar represents a signed 32-bit numeric non-fractional value. It is automatically inferred from the usage of the .NET ",(0,a.jsx)(s.code,{children:"int"})," type."]}),"\n",(0,a.jsx)(s.h3,{id:"float",children:"Float"}),"\n",(0,a.jsxs)(s.p,{children:["This scalar represents double-precision fractional values, as specified by IEEE 754. It is automatically inferred from the usage of the .NET ",(0,a.jsx)(s.code,{children:"float"})," or ",(0,a.jsx)(s.code,{children:"double"})," type."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["There is a separate ",(0,a.jsx)(s.code,{children:"Decimal"})," scalar to handle ",(0,a.jsx)(s.code,{children:"decimal"})," values."]})}),"\n",(0,a.jsx)(s.h3,{id:"id",children:"ID"}),"\n",(0,a.jsxs)(s.p,{children:["This scalar is used to facilitate technology-specific Ids, like ",(0,a.jsx)(s.code,{children:"int"}),", ",(0,a.jsx)(s.code,{children:"string"})," or ",(0,a.jsx)(s.code,{children:"Guid"}),". It is not automatically inferred and the ",(0,a.jsx)(s.code,{children:"IdType"})," needs to be ",(0,a.jsx)(s.a,{href:"https://chillicream.com/docs/hotchocolate/defining-a-schema/object-types#explicit-types",children:"explicitly specified"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"ID"})," values are always represented as a String in client-server communication, but can be coerced to their expected type on the server."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"public class Product\n{\n    [GraphQLType(typeof(IdType))]\n    public int Id { get; set; }\n}\n\npublic class Query\n{\n    public Product GetProduct([GraphQLType(typeof(IdType))] int id)\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Notice how our code uses ",(0,a.jsx)(s.code,{children:"int"})," for the ",(0,a.jsx)(s.code,{children:"Id"}),", but in a request/response it would be serialized as a ",(0,a.jsx)(s.code,{children:"string"}),". This allows us to switch the CLR type of our ",(0,a.jsx)(s.code,{children:"Id"}),", without affecting the schema and our clients."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>c});var a=i(96540);const r={},n=a.createContext(r);function t(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);