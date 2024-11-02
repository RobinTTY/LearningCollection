"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9372],{40:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(4848),i=s(8453),r=s(3554),o=s.n(r);const c={id:"enums",title:"Enums",sidebar_position:2},a=void 0,l={id:"web/typescript/core-concepts/enums",title:"Enums",description:"Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.",source:"@site/docs/web/typescript/core-concepts/enums.mdx",sourceDirName:"web/typescript/core-concepts",slug:"/web/typescript/core-concepts/enums",permalink:"/LearningCollection/web/typescript/core-concepts/enums",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/core-concepts/enums.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"enums",title:"Enums",sidebar_position:2},sidebar:"docs",previous:{title:"Types",permalink:"/LearningCollection/web/typescript/core-concepts/types"},next:{title:"Functions",permalink:"/LearningCollection/web/typescript/core-concepts/functions"}},u={},d=[{value:"Numeric enums",id:"numeric-enums",level:2},{value:"String enums",id:"string-enums",level:2},{value:"Downsides of Enums",id:"downsides-of-enums",level:2}];function m(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Enums are one of the few features TypeScript has which is ",(0,t.jsx)(n.strong,{children:"not a type-level extension"})," of JavaScript.\nEnums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums."]}),"\n",(0,t.jsx)(n.h2,{id:"numeric-enums",children:"Numeric enums"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Above, we have a numeric enum where ",(0,t.jsx)(n.code,{children:"Up"})," is initialized with ",(0,t.jsx)(n.code,{children:"1"}),". All of the following members are auto-incremented from that point on. By default enums start numbering their members starting at ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"string-enums",children:"String enums"}),"\n",(0,t.jsx)(n.p,{children:"In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'enum Direction {\n  Up = "UP",\n  Down = "DOWN",\n  Left = "LEFT",\n  Right = "RIGHT",\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"downsides-of-enums",children:"Downsides of Enums"}),"\n",(0,t.jsx)(n.p,{children:"There is some discussion about whether you should ever use enums in the first place, because they have some weird runtime behavior."}),"\n",(0,t.jsx)(n.p,{children:"See the following videos for reference:"}),"\n",(0,t.jsx)(o(),{controls:!0,url:"https://www.youtube.com/watch?v=jjMbPt_H3RQ"}),"\n",(0,t.jsx)(o(),{controls:!0,url:"https://www.youtube.com/watch?v=0fTdCSH_QEU"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);