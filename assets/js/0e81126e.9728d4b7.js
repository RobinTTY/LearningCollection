"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9306],{5788:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=s(5893),o=s(1151);const i={id:"type-assertions",title:"Type Assertions",sidebar_position:6},r=void 0,a={id:"web/typescript/core-concepts/type-assertions",title:"Type Assertions",description:'TypeScript allows you to override its inferred and analyzed view of types in any way you want to. This is done by a mechanism called "type assertion". TypeScript\'s type assertion is purely you telling the compiler that you know about the types better than it does, and that it should not second guess you.',source:"@site/docs/web/typescript/core-concepts/type-assertions.md",sourceDirName:"web/typescript/core-concepts",slug:"/web/typescript/core-concepts/type-assertions",permalink:"/LearningCollection/web/typescript/core-concepts/type-assertions",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/core-concepts/type-assertions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"type-assertions",title:"Type Assertions",sidebar_position:6},sidebar:"docs",previous:{title:"Interfaces",permalink:"/LearningCollection/web/typescript/core-concepts/interfaces"},next:{title:"Intersection Types",permalink:"/LearningCollection/web/typescript/advanced-concepts/intersections"}},c={},p=[{value:"Type Assertion vs. Casting",id:"type-assertion-vs-casting",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'TypeScript allows you to override its inferred and analyzed view of types in any way you want to. This is done by a mechanism called "type assertion". TypeScript\'s type assertion is purely you telling the compiler that you know about the types better than it does, and that it should not second guess you.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'let someValue: any = "this is a string";\n// We assert that someValue is a string\nlet strLength: number = (<string>someValue).length;\n'})}),"\n",(0,n.jsxs)(t.p,{children:["However, there is an ambiguity in the language grammar when using ",(0,n.jsx)(t.code,{children:"<assertion>"})," style assertions in JSX:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"var foo = <string>bar;\n</string>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Therefore it is now recommended that you just use the ",(0,n.jsx)(t.code,{children:"as"})," keyword for consistency:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"var foo = {} as string;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Type assertions can be useful when we for instance reference HTML elements in our code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'// Typescript only knows that input is of type HTMLElement\nconst input = document.getElementById("input") as HTMLInputElement;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"type-assertion-vs-casting",children:"Type Assertion vs. Casting"}),"\n",(0,n.jsx)(t.p,{children:'The reason why it\'s not called "type casting" is that casting generally implies some sort of runtime support. However, type assertions are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.'})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);