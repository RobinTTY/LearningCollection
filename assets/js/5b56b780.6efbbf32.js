"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2576],{8947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(7462),i=(n(7294),n(3905)),o=n(2004);const r={id:"enums",title:"Enums",sidebar_position:2},a=void 0,c={unversionedId:"Web/typescript/core-concepts/enums",id:"Web/typescript/core-concepts/enums",title:"Enums",description:"Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.",source:"@site/docs/Web/typescript/core-concepts/enums.mdx",sourceDirName:"Web/typescript/core-concepts",slug:"/Web/typescript/core-concepts/enums",permalink:"/LearningCollection/Web/typescript/core-concepts/enums",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/typescript/core-concepts/enums.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"enums",title:"Enums",sidebar_position:2},sidebar:"finance",previous:{title:"Types",permalink:"/LearningCollection/Web/typescript/core-concepts/types"},next:{title:"Functions",permalink:"/LearningCollection/Web/typescript/core-concepts/functions"}},u={},p=[{value:"Numeric enums",id:"numeric-enums",level:2},{value:"String enums",id:"string-enums",level:2},{value:"Downsides of Enums",id:"downsides-of-enums",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Enums are one of the few features TypeScript has which is ",(0,i.kt)("strong",{parentName:"p"},"not a type-level extension")," of JavaScript.\nEnums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums."),(0,i.kt)("h2",{id:"numeric-enums"},"Numeric enums"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right,\n}\n")),(0,i.kt)("p",null,"Above, we have a numeric enum where ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is initialized with ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". All of the following members are auto-incremented from that point on. By default enums start numbering their members starting at ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("h2",{id:"string-enums"},"String enums"),(0,i.kt)("p",null,"In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'enum Direction {\n  Up = "UP",\n  Down = "DOWN",\n  Left = "LEFT",\n  Right = "RIGHT",\n}\n')),(0,i.kt)("h2",{id:"downsides-of-enums"},"Downsides of Enums"),(0,i.kt)("p",null,"There is some discussion about whether you should ever use enums in the first place, because they have some weird runtime behavior."),(0,i.kt)("p",null,"See the following videos for reference:"),(0,i.kt)(o.Z,{controls:!0,url:"https://www.youtube.com/watch?v=jjMbPt_H3RQ",mdxType:"ReactPlayer"}),(0,i.kt)(o.Z,{controls:!0,url:"https://www.youtube.com/watch?v=0fTdCSH_QEU",mdxType:"ReactPlayer"}))}d.isMDXComponent=!0}}]);