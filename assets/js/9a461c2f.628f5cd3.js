"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9651],{82561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const o={id:"input-objects",title:"Input Objects",sidebar_position:3},c=void 0,a={id:"csharp/libraries/hot-chocolate/types/input-objects",title:"Input Objects",description:"GraphQL defines input object types to allow us to use objects as arguments on our fields.",source:"@site/docs/csharp/libraries/hot-chocolate/types/input-objects.md",sourceDirName:"csharp/libraries/hot-chocolate/types",slug:"/csharp/libraries/hot-chocolate/types/input-objects",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/input-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/types/input-objects.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"input-objects",title:"Input Objects",sidebar_position:3},sidebar:"docs",previous:{title:"Enums",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/enums"},next:{title:"Interfaces",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/interfaces"}},r={},l=[{value:"<code>OneOf</code> Input Objects",id:"oneof-input-objects",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"GraphQL defines input object types to allow us to use objects as arguments on our fields."}),"\n",(0,i.jsx)(n.p,{children:"Input object types can be defined like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class BookInput\n{\n    public string Title { get; set; }\n\n    public string Author { get; set; }\n}\n\npublic class Mutation\n{\n    public async Task<Book> AddBook(BookInput input)\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If a class is used as an argument to a resolver and it does not end in Input, Hot Chocolate (by default) will append Input to the type name in the resulting schema."})}),"\n",(0,i.jsx)(n.p,{children:"We can also use a class both as an output- and an input-type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class Book\n{\n    public string Title { get; set; }\n\n    public string Author { get; set; }\n}\n\npublic class Mutation\n{\n    public async Task<Book> AddBook(Book input)\n    {\n        // Omitted code for brevity\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will produce the following schema:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-gql",children:"type Book {\n  title: String\n  author: String\n}\n\ninput BookInput {\n  title: String\n  author: String\n}\n\ntype Mutation {\n  addBook(input: BookInput): Book\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"While it is possible, it is not encouraged, as it complicates future extensions of either type."})}),"\n",(0,i.jsxs)(n.h2,{id:"oneof-input-objects",children:[(0,i.jsx)(n.code,{children:"OneOf"})," Input Objects"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OneOf"})," Input Objects are a special variant of Input Objects where the type system asserts that exactly one of the fields must be set and non-null, all others being omitted. This is represented in introspection with the ",(0,i.jsx)(n.code,{children:"__Type.oneField: Boolean"})," field, and in SDL via the ",(0,i.jsx)(n.code,{children:"@oneOf"})," directive on the input object."]}),"\n",(0,i.jsxs)(n.p,{children:["This introduces a form of input polymorphism to GraphQL. For example, the following ",(0,i.jsx)(n.code,{children:"PetInput"})," input object lets you choose between a number of potential input types:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-gql",children:"input PetInput @oneOf {\n  cat: CatInput\n  dog: DogInput\n  fish: FishInput\n}\n\ninput CatInput {\n  name: String!\n  numberOfLives: Int\n}\ninput DogInput {\n  name: String!\n  wagsTail: Boolean\n}\ninput FishInput {\n  name: String!\n  bodyLengthInMm: Int\n}\n\ntype Mutation {\n  addPet(pet: PetInput!): Pet\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Since the OneOf Input Objects RFC is not yet in the draft stage it is still an opt-in feature. In order to activate it set the schema options to enable it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"builder.Services\n    .AddGraphQLServer()\n    ...\n    .ModifyOptions(o => o.EnableOneOf = true);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once activate you can create ",(0,i.jsx)(n.code,{children:"Oneof"})," Input Objects like the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[OneOf]\npublic class PetInput\n{\n    public Dog? Dog { get; set; }\n\n    public Cat? Cat { get; set; }\n}\n\npublic interface IPet\n{\n    string Name { get; }\n}\n\npublic class Dog : IPet\n{\n    public string Name { get; set; }\n}\n\npublic class Cat : IPet\n{\n    public string Name { get; set; }\n}\n\npublic class Mutation\n{\n    public Task<IPet> CreatePetAsync(PetInput input)\n    {\n        // Omitted code for brevity\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);