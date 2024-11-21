"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2224],{91239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const s={id:"distinct",title:"Distinct",sidebar_position:2},d=void 0,r={id:"databases/mongodb/c-sharp-driver/distinct",title:"Distinct",description:"The Limit method operates on the IFindFluent interface. It limits the number of documents to query from the database.",source:"@site/docs/databases/mongodb/c-sharp-driver/Distinct.md",sourceDirName:"databases/mongodb/c-sharp-driver",slug:"/databases/mongodb/c-sharp-driver/distinct",permalink:"/LearningCollection/databases/mongodb/c-sharp-driver/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/mongodb/c-sharp-driver/Distinct.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"distinct",title:"Distinct",sidebar_position:2},sidebar:"docs",previous:{title:"Limit",permalink:"/LearningCollection/databases/mongodb/c-sharp-driver/limit"},next:{title:"Data Type Limitations",permalink:"/LearningCollection/databases/mongodb/c-sharp-driver/dataTypeLimitations"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<strong><code>field</code></strong> - <code>FieldDefinition&lt;TDocument, TField&gt;</code>",id:"field---fielddefinitiontdocument-tfield",level:4},{value:"<strong><code>filter</code></strong> - <code>FilterDefinition&lt;TDocument&gt;</code>",id:"filter---filterdefinitiontdocument",level:4},{value:"<strong><code>options</code></strong> - <code>DistinctOptions</code> <em>(optional)</em>",id:"options---distinctoptions-optional",level:4},{value:"<strong><code>cancellationToken</code></strong> - <code>CancellationToken</code> <em>(optional)</em>",id:"cancellationtoken---cancellationtoken-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"<strong><code>IAsyncCursor&lt;TField&gt;</code></strong>",id:"iasynccursortfield",level:4},{value:"DistinctOptions",id:"distinctoptions",level:3},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Limit"})," method operates on the ",(0,i.jsx)(n.code,{children:"IFindFluent"})," interface. It limits the number of documents to query from the database."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Results must not be larger than the ",(0,i.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/limits/#std-label-limit-bson-document-size",children:"maximum BSON size"})," (16 MB). If your results exceed the maximum BSON size, use the aggregation pipeline to retrieve distinct values using the ",(0,i.jsx)(n.code,{children:"$group"})," operator, as described in ",(0,i.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/#std-label-aggregation-group-distinct-values",children:"Retrieve Distinct Values with the Aggregation Pipeline"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"IAsyncCursor<TField> Distinct<TField>(\n    FieldDefinition<TDocument, TField> field,\n    FilterDefinition<TDocument> filter,\n    DistinctOptions options = null,\n    CancellationToken cancellationToken = null\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.h4,{id:"field---fielddefinitiontdocument-tfield",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"field"})})," - ",(0,i.jsx)(n.code,{children:"FieldDefinition<TDocument, TField>"})]}),"\n",(0,i.jsx)(n.p,{children:"The field of the document to operate on."}),"\n",(0,i.jsxs)(n.h4,{id:"filter---filterdefinitiontdocument",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"filter"})})," - ",(0,i.jsx)(n.code,{children:"FilterDefinition<TDocument>"})]}),"\n",(0,i.jsxs)(n.p,{children:["The filter to apply to the documents. Same as with the ",(0,i.jsx)(n.code,{children:"Find"})," method."]}),"\n",(0,i.jsxs)(n.h4,{id:"options---distinctoptions-optional",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"options"})})," - ",(0,i.jsx)(n.code,{children:"DistinctOptions"})," ",(0,i.jsx)(n.em,{children:"(optional)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Options to apply to the ",(0,i.jsx)(n.code,{children:"Distinct"})," operation."]}),"\n",(0,i.jsxs)(n.h4,{id:"cancellationtoken---cancellationtoken-optional",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"cancellationToken"})})," - ",(0,i.jsx)(n.code,{children:"CancellationToken"})," ",(0,i.jsx)(n.em,{children:"(optional)"})]}),"\n",(0,i.jsx)(n.p,{children:"A cancellation token can be provided to the operation to cancel it prematurely."}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.h4,{id:"iasynccursortfield",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"IAsyncCursor<TField>"})})}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h3,{id:"distinctoptions",children:"DistinctOptions"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"_myCollection.Distinct(document => document.Name, _ => true);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);