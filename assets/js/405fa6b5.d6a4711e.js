"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3540],{4450:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=s(4848),t=s(8453);const i={id:"miscellaneous-concepts",title:"Miscellaneous Concepts",sidebar_position:1},r=void 0,l={id:"apis/graphql/advanced-concepts/miscellaneous-concepts",title:"Miscellaneous Concepts",description:"There are many more concepts in GraphQL, this page introduces some of them.",source:"@site/docs/apis/graphql/advanced-concepts/miscellaneous-concepts.md",sourceDirName:"apis/graphql/advanced-concepts",slug:"/apis/graphql/advanced-concepts/miscellaneous-concepts",permalink:"/LearningCollection/apis/graphql/advanced-concepts/miscellaneous-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/advanced-concepts/miscellaneous-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"miscellaneous-concepts",title:"Miscellaneous Concepts",sidebar_position:1},sidebar:"docs",previous:{title:"Pagination",permalink:"/LearningCollection/apis/graphql/pagination"},next:{title:"Introspection",permalink:"/LearningCollection/apis/graphql/advanced-concepts/introspection"}},c={},o=[{value:"Enhancing Reusability with Fragments",id:"enhancing-reusability-with-fragments",level:2},{value:"Parameterizing Fields with Arguments",id:"parameterizing-fields-with-arguments",level:2},{value:"Named Query Results with Aliases",id:"named-query-results-with-aliases",level:2},{value:"Advanced SDL",id:"advanced-sdl",level:2},{value:"Object &amp; Scalar Types",id:"object--scalar-types",level:3},{value:"Enums",id:"enums",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Union types",id:"union-types",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"There are many more concepts in GraphQL, this page introduces some of them."}),"\n",(0,a.jsx)(n.h2,{id:"enhancing-reusability-with-fragments",children:"Enhancing Reusability with Fragments"}),"\n",(0,a.jsx)(n.p,{children:"Fragments are a handy feature to help to improve the structure and reusability of your GraphQL code. A fragment is a collection of fields on a specific type."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s assume we have the following type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type User {\n  name: String!\n  age: Int!\n  email: String!\n  street: String!\n  zipcode: String!\n  city: String!\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here, we could represent all the information that relates to the user\u2019s physical address into a fragment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"fragment addressDetails on User {\n  name\n  street\n  zipcode\n  city\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, when writing a query to access the address information of a user, we can use the following syntax to refer to the fragment and save the work to actually spell out the four fields:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  allUsers {\n    ...addressDetails\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This query is equivalent to writing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  allUsers {\n    name\n    street\n    zipcode\n    city\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameterizing-fields-with-arguments",children:"Parameterizing Fields with Arguments"}),"\n",(0,a.jsx)(n.p,{children:"In GraphQL type definitions, each field can take zero or more arguments. Similar to arguments that are passed into functions in typed programming languages, each argument needs to have a name and a type. In GraphQL, it\u2019s also possible to specify default values for arguments."}),"\n",(0,a.jsx)(n.p,{children:"As an example, let\u2019s consider a part of the schema that we saw in the beginning:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  allUsers: [User!]!\n}\n\ntype User {\n  name: String!\n  age: Int!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We could now add an argument to the ",(0,a.jsx)(n.code,{children:"allUsers"})," field that allows us to pass an argument to filter users and include only those above a certain age. We also specify a default value so that by default all users will be returned:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  allUsers(olderThan: Int = -1): [User!]!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This ",(0,a.jsx)(n.code,{children:"olderThan"})," argument can now be passed into the query using the following syntax:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  allUsers(olderThan: 30) {\n    name\n    age\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"named-query-results-with-aliases",children:"Named Query Results with Aliases"}),"\n",(0,a.jsx)(n.p,{children:"One of GraphQL\u2019s major strengths is that it lets you send multiple queries in a single request. However, since the response data is shaped after the structure of the fields being requested, you might run into naming issues when you\u2019re sending multiple queries asking for the same fields:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'{\n  User(id: "1") {\n    name\n  }\n  User(id: "2") {\n    name\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"In fact, this will produce an error with a GraphQL server, since it\u2019s the same field but different arguments. The only way to send a query like that would be to use aliases, i.e. specifying names for the query results:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'{\n  first: User(id: "1") {\n    name\n  }\n  second: User(id: "2") {\n    name\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In the result, the server would now name each ",(0,a.jsx)(n.code,{children:"User"})," object according to the specified alias:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "first": {\n    "name": "Alice"\n  },\n  "second": {\n    "name": "Sarah"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"advanced-sdl",children:"Advanced SDL"}),"\n",(0,a.jsx)(n.p,{children:"The SDL offers a couple of language features that weren\u2019t discussed in the previous chapter. In the following, we\u2019ll discuss those by practical examples."}),"\n",(0,a.jsx)(n.h3,{id:"object--scalar-types",children:"Object & Scalar Types"}),"\n",(0,a.jsx)(n.p,{children:"In GraphQL, there are two different kinds of types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Scalar types"})," represent concrete units of data. The GraphQL spec has five predefined scalars: as ",(0,a.jsx)(n.code,{children:"String"}),", ",(0,a.jsx)(n.code,{children:"Int"}),", ",(0,a.jsx)(n.code,{children:"Float"}),", ",(0,a.jsx)(n.code,{children:"Boolean"}),", and ",(0,a.jsx)(n.code,{children:"ID"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Object types"})," have fields that express the properties of that type and are composable. Examples of object types are the ",(0,a.jsx)(n.code,{children:"User"})," or ",(0,a.jsx)(n.code,{children:"Post"})," types we saw in the previous section."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In every GraphQL schema, you can define your own scalar and object types. An often cited example for a custom scalar would be a ",(0,a.jsx)(n.code,{children:"Date"})," type where the implementation needs to define how that type is validated, serialized, and deserialized."]}),"\n",(0,a.jsx)(n.h3,{id:"enums",children:"Enums"}),"\n",(0,a.jsxs)(n.p,{children:["GraphQL allows you to define enumerations types (short enums), a language feature to express the semantics of a type that has a fixed set of values. We could thus define a type called ",(0,a.jsx)(n.code,{children:"Weekday"})," to represent all the days of a week:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum Weekday {\n  MONDAY\n  TUESDAY\n  WEDNESDAY\n  THURSDAY\n  FRIDAY\n  SATURDAY\n  SUNDAY\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that technically enums are special kinds of scalar types."}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.p,{children:["An interface can be used to describe a type in an abstract way. It allows you to specify a set of fields that any concrete type, which implements this interface, needs to have. In many GraphQL schemas, every type is required to have an ",(0,a.jsx)(n.code,{children:"id"})," field. Using interfaces, this requirement can be expressed by defining an interface with this field and then making sure that all custom types implement it:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"interface Node {\n  id: ID!\n}\n\ntype User implements Node {\n  id: ID!\n  name: String!\n  age: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"union-types",children:"Union types"}),"\n",(0,a.jsx)(n.p,{children:"Union types can be used to express that a type should be either of a collection of other types. They are best understood by means of an example. Let\u2019s consider the following types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Adult {\n  name: String!\n  work: String!\n}\n\ntype Child {\n  name: String!\n  school: String!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now, we could define a ",(0,a.jsx)(n.code,{children:"Person"})," type to be the union of ",(0,a.jsx)(n.code,{children:"Adult"})," and ",(0,a.jsx)(n.code,{children:"Child"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"union Person = Adult | Child\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This brings up a different problem: In a GraphQL query where we ask to retrieve information about a ",(0,a.jsx)(n.code,{children:"Child"})," but only have a ",(0,a.jsx)(n.code,{children:"Person"})," type to work with, how do we know whether we can actually access this field?"]}),"\n",(0,a.jsx)(n.p,{children:"If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type. It's easiest to see with an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",metastring:"title=Query",children:"query HeroForEpisode($ep: Episode!) {\n  hero(episode: $ep) {\n    name\n    ... on Droid {\n      primaryFunction\n    }\n    ... on Human {\n      height\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"title=Variables",children:'{\n  "ep": "JEDI"\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:"title=Response",children:'{\n  "data": {\n    "hero": {\n      "name": "R2-D2",\n      "primaryFunction": "Astromech"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this query, the ",(0,a.jsx)(n.code,{children:"hero"})," field returns the type ",(0,a.jsx)(n.code,{children:"Character"}),", which might be either a ",(0,a.jsx)(n.code,{children:"Human"})," or a ",(0,a.jsx)(n.code,{children:"Droid"})," depending on the ",(0,a.jsx)(n.code,{children:"episode"})," argument. In the direct selection, you can only ask for fields that exist on the ",(0,a.jsx)(n.code,{children:"Character"})," interface, such as ",(0,a.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To ask for a field on the concrete type, you need to use an inline fragment with a type condition. Because the first fragment is labeled as ",(0,a.jsx)(n.code,{children:"... on Droid"}),", the ",(0,a.jsx)(n.code,{children:"primaryFunction"})," field will only be executed if the ",(0,a.jsx)(n.code,{children:"Character"})," returned from ",(0,a.jsx)(n.code,{children:"hero"})," is of the ",(0,a.jsx)(n.code,{children:"Droid"})," type. Similarly for the ",(0,a.jsx)(n.code,{children:"height"})," field for the ",(0,a.jsx)(n.code,{children:"Human"})," type."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var a=s(6540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);