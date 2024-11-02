"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7811],{9678:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(4848),o=r(8453);const s={id:"errors",title:"Errors",sidebar_position:2},i=void 0,a={id:"csharp/libraries/hot-chocolate/advanced-concepts/errors",title:"Errors",description:"There are several ways to handle errors with HotChocolate. They are passed to the query result by returning an instance of IError or an enumerable of IError in a field resolver. This can be done in two ways:",source:"@site/docs/csharp/libraries/hot-chocolate/advanced-concepts/errors.md",sourceDirName:"csharp/libraries/hot-chocolate/advanced-concepts",slug:"/csharp/libraries/hot-chocolate/advanced-concepts/errors",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/errors",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/advanced-concepts/errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"errors",title:"Errors",sidebar_position:2},sidebar:"docs",previous:{title:"Extending Types",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/extending-types"},next:{title:"Scalars",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/types/scalars"}},c={},l=[{value:"Error Builder",id:"error-builder",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Error Annotation",id:"error-annotation",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["There are several ways to handle errors with HotChocolate. They are passed to the query result by returning an instance of ",(0,t.jsx)(n.code,{children:"IError"})," or an enumerable of ",(0,t.jsx)(n.code,{children:"IError"})," in a field resolver. This can be done in two ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the Error Builder"}),"\n",(0,t.jsx)(n.li,{children:"Throwing an exception"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"error-builder",children:"Error Builder"}),"\n",(0,t.jsx)(n.p,{children:"The Errror Builder is a fluent API that allows you to create errors:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'return ErrorBuilder.New()\n    .SetMessage("This is my error.")\n    .SetCode("FOO_BAR")\n    .Build();\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,t.jsxs)(n.p,{children:["If some other exception is thrown during the query execution, then the execution engine will create an instance of ",(0,t.jsx)(n.code,{children:"IError"})," with the message Unexpected Execution Error and the actual exception assigned to the error. However, the exception details will not be serialized so by default the user will only see the error message Unexpected Execution Error."]}),"\n",(0,t.jsx)(n.h3,{id:"error-annotation",children:"Error Annotation"}),"\n",(0,t.jsxs)(n.p,{children:["Resolvers can be annotated with the ",(0,t.jsx)(n.code,{children:"Error"})," attribute to specify which exceptions should be exposed to the user. The following example shows how to expose the ",(0,t.jsx)(n.code,{children:"NotAuthenticatedException"})," and ",(0,t.jsx)(n.code,{children:"UnknownAssetException"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"{1-2}",children:"    [Error<NotAuthenticatedException>]\n    [Error<UnknownAssetException>]\n    public async Task<AddAssetToWatchlistPayload> AddAssetToWatchlistAsync(\n        string symbol,\n        [GlobalState] string? username,\n        AssetContext context,\n        CancellationToken cancellationToken)\n    {\n      var errors = new List<IError>();\n\n      if (username is null)\n      {\n        errors.Add(new NotAuthenticatedException());\n      }\n\n      if (!context.Assets.TryGetValue(symbol, out Asset? asset))\n      {\n        errors.Add(new UnknownAssetException(symbol));\n      }\n\n      if (errors.Count > 0)\n      {\n        throw new AggregateException(errors);\n      }\n    }\n"})}),"\n",(0,t.jsx)(n.p,{children:"to query the errors, the following query can be used:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"mutation ($input: AddAssetToWatchlistInput!) {\n  addAssetToWatchlist(input: $input) {\n    watchlist {\n      id\n      name\n      assets {\n        nodes {\n          symbol\n        }\n      }\n    }\n    errors {\n      code: __typename\n      ... on NotAuthenticatedError {\n        message\n      }\n      ... on UnknownAssetError {\n        symbols\n      }\n    }\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);