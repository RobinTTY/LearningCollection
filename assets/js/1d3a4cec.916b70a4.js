"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8179],{3273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(4848),s=t(8453);const o={id:"introspection",title:"Introspection",sidebar_position:2},i=void 0,r={id:"apis/graphql/advanced-concepts/introspection",title:"Introspection",description:"The designers of the schema already know what the schema looks like but how can clients discover what is accessible through a GraphQL API? We can ask GraphQL for this information by querying the schema meta-field, which is always available on the root type of a Query per the spec.",source:"@site/docs/apis/graphql/advanced-concepts/introspection.md",sourceDirName:"apis/graphql/advanced-concepts",slug:"/apis/graphql/advanced-concepts/introspection",permalink:"/LearningCollection/apis/graphql/advanced-concepts/introspection",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/advanced-concepts/introspection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"introspection",title:"Introspection",sidebar_position:2},sidebar:"docs",previous:{title:"Miscellaneous Concepts",permalink:"/LearningCollection/apis/graphql/advanced-concepts/miscellaneous-concepts"},next:{title:"Security",permalink:"/LearningCollection/apis/graphql/advanced-concepts/security"}},c={},l=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The designers of the schema already know what the schema looks like but how can clients discover what is accessible through a GraphQL API? We can ask GraphQL for this information by querying the ",(0,a.jsx)(n.code,{children:"__schema"})," meta-field, which is always available on the root type of a Query per the spec."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query {\n  __schema {\n    types {\n      name\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Take this schema definition for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  author(id: ID!): Author\n}\n\ntype Author {\n  posts: [Post!]!\n}\n\ntype Post {\n  title: String!\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"If we were to send the introspection query mentioned above, we would get the following result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "__schema": {\n      "types": [\n        {\n          "name": "Query"\n        },\n        {\n          "name": "Author"\n        },\n        {\n          "name": "Post"\n        },\n        {\n          "name": "ID"\n        },\n        {\n          "name": "String"\n        },\n        {\n          "name": "__Schema"\n        },\n        {\n          "name": "__Type"\n        },\n        {\n          "name": "__TypeKind"\n        },\n        {\n          "name": "__Field"\n        },\n        {\n          "name": "__InputValue"\n        },\n        {\n          "name": "__EnumValue"\n        },\n        {\n          "name": "__Directive"\n        },\n        {\n          "name": "__DirectiveLocation"\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"As you can see, we queried for all types on the schema. We get both the object types we defined and scalar types. We can even introspect the introspection types!"}),"\n",(0,a.jsx)(n.p,{children:"There\u2019s much more than name available on introspection types. Here\u2019s another example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'{\n  __type(name: "Author") {\n    name\n    description\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we query a single type using the ",(0,a.jsx)(n.code,{children:"__type"})," meta-field and we ask for its name and description. Here\u2019s the result for this query:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "__type": {\n      "name": "Author",\n      "description": "The author of a post.",\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Introspection is an extremely powerful feature of GraphQL. The specification goes into much more detail about what fields and types are available in the introspection schema."}),"\n",(0,a.jsx)(n.p,{children:"A lot of tools available in the GraphQL ecosystem use the introspection system to provide amazing features. For example documentation browsers, autocomplete and code generation."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);