"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4610],{56606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=n(74848),o=n(28453);const r={id:"server",title:"Server",sidebar_position:5},s=void 0,i={id:"apis/graphql/server",title:"Server",description:"GraphQL is often explained as a frontend-focused API technology because it enables clients to get data in a much nicer way than before. But the API itself is, of course, implemented on the server side. There are a lot of benefits to be had on the server as well because GraphQL enables the server developer to focus on describing the data available rather than implementing and optimizing specific endpoints.",source:"@site/docs/apis/graphql/server.md",sourceDirName:"apis/graphql",slug:"/apis/graphql/server",permalink:"/LearningCollection/apis/graphql/server",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/server.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"server",title:"Server",sidebar_position:5},sidebar:"docs",previous:{title:"Clients",permalink:"/LearningCollection/apis/graphql/clients"},next:{title:"Pagination",permalink:"/LearningCollection/apis/graphql/pagination"}},l={},h=[{value:"GraphQL execution",id:"graphql-execution",level:2},{value:"Batched Resolving",id:"batched-resolving",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"GraphQL is often explained as a frontend-focused API technology because it enables clients to get data in a much nicer way than before. But the API itself is, of course, implemented on the server side. There are a lot of benefits to be had on the server as well because GraphQL enables the server developer to focus on describing the data available rather than implementing and optimizing specific endpoints."}),"\n",(0,a.jsx)(t.h2,{id:"graphql-execution",children:"GraphQL execution"}),"\n",(0,a.jsx)(t.p,{children:"GraphQL doesn\u2019t just specify a way to describe schemas and a query language to retrieve data from those schemas, but an actual execution algorithm for how those queries are transformed into results. This algorithm is quite simple at its core: The query is traversed field by field, executing \u201cresolvers\u201d for each field. So, let\u2019s say we have the following schema:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type Query {\n  author(id: ID!): Author\n}\n\ntype Author {\n  posts: [Post]\n}\n\ntype Post {\n  title: String\n  content: String\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The following is a query we would be able to send to a server with that schema:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'query {\n  author(id: "abc") {\n    posts {\n      title\n      content\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The first thing to see is that every field in the query can be associated with a type:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'query: Query {\n  author(id: "abc"): Author {\n    posts: [Post] {\n      title: String\n      content: String\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now, we can easily find the resolvers in our server to run for every field. The execution starts at the query type and goes breadth-first. This means we run the resolver for Query.author first. Then, we take the result of that resolver, and pass it into its child, the resolver for Author.posts. At the next level, the result is a list, so in that case, the execution algorithm runs on one item at a time. So the execution works like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pseudo",children:"Query.author(root, { id: 'abc' }, context) -> author\nAuthor.posts(author, null, context) -> posts\nfor each post in posts\n  Post.title(post, null, context) -> title\n  Post.content(post, null, context) -> content\n"})}),"\n",(0,a.jsx)(t.p,{children:"At the end, the execution algorithm puts everything together into the correct shape for the result and returns that."}),"\n",(0,a.jsx)(t.p,{children:"One thing to note is that most GraphQL server implementations will provide \u201cdefault resolvers\u201d - so you don\u2019t have to specify a resolver function for every single field. In GraphQL.js, for example, you don\u2019t need to specify resolvers when the parent object of the resolver contains a field with the correct name."}),"\n",(0,a.jsxs)(t.p,{children:["Read more in-depth about GraphQL execution in the ",(0,a.jsx)(t.a,{href:"https://dev-blog.apollodata.com/graphql-explained-5844742f195e",children:"\u201cGraphQL Explained\u201d post"})," on the Apollo blog."]}),"\n",(0,a.jsx)(t.h2,{id:"batched-resolving",children:"Batched Resolving"}),"\n",(0,a.jsx)(t.p,{children:"One thing you might notice about the execution strategy above is that it\u2019s somewhat naive. For example, if you have a resolver that fetches from a backend API or database, that backend might get called many times during the execution of one query. Let\u2019s imagine we wanted to get the authors of several posts, like so:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"query {\n  posts {\n    title\n    author {\n      name\n      avatar\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"If these are posts on a blog, it\u2019s likely that many of the posts will have the same authors. So if we need to make an API call to get each author object, we might accidentally make multiple requests for the same one. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"fetch('/authors/1')\nfetch('/authors/2')\nfetch('/authors/1')\nfetch('/authors/2')\nfetch('/authors/1')\nfetch('/authors/2')\n"})}),"\n",(0,a.jsx)(t.p,{children:"How do we solve this? By making our fetching a bit smarter. We can wrap our fetching function in a utility that will wait for all of the resolvers to run, then make sure to only fetch each item once:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"authorLoader = new AuthorLoader()\n\n// Queue up a bunch of fetches\nauthorLoader.load(1);\nauthorLoader.load(2);\nauthorLoader.load(1);\nauthorLoader.load(2);\n\n// Then, the loader only does the minimal amount of work\nfetch('/authors/1');\nfetch('/authors/2');\n"})}),"\n",(0,a.jsx)(t.p,{children:"Can we do even better? Yes, if our API supports batched requests, we can do only one fetch to the backend, like so:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"fetch('/authors?ids=1,2')\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This can also be encapsulated in the loader above. In JavaScript, the above strategies can be implemented using a utility called ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/dataloader",children:"DataLoader"}),", and there are similar utilities for other languages."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);