"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8140],{8416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>u,toc:()=>x});var s=t(4848),i=t(8453),a=t(3554),r=t.n(a),c=t(1432);const l="interface Animal {\n  name: string;\n}\n\ninterface Bear extends Animal {\n  honey: boolean;\n}\n\nconst bear = getBear();\nbear.name;\nbear.honey;\n",o="type Animal = {\n  name: string;\n};\n\ntype Bear = Animal & {\n  honey: boolean;\n};\n\nconst bear = getBear();\nbear.name;\nbear.honey;\n",d="interface Window {\n  title: string;\n}\n\ninterface Window {\n  ts: TypeScriptAPI;\n}\n\nconst src = 'const a = \"Hello World\"';\nwindow.ts.transpileModule(src, {});\n",p="type Window = {\n  title: string;\n};\n\ntype Window = {\n  ts: TypeScriptAPI;\n};\n\n// Error: Duplicate identifier 'Window'.\n\n",f={id:"interfaces",title:"Interfaces",sidebar_position:5},y=void 0,u={id:"web/typescript/core-concepts/interfaces",title:"Interfaces",description:"An interface declaration is another way to name an object type:",source:"@site/docs/web/typescript/core-concepts/interfaces.mdx",sourceDirName:"web/typescript/core-concepts",slug:"/web/typescript/core-concepts/interfaces",permalink:"/LearningCollection/web/typescript/core-concepts/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/core-concepts/interfaces.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"interfaces",title:"Interfaces",sidebar_position:5},sidebar:"docs",previous:{title:"Classes",permalink:"/LearningCollection/web/typescript/core-concepts/classes"},next:{title:"Type Assertions",permalink:"/LearningCollection/web/typescript/core-concepts/type-assertions"}},h={},x=[{value:"Differences Between Type Aliases and Interfaces",id:"differences-between-type-aliases-and-interfaces",level:2},{value:"Extending Types vs Interfaces",id:"extending-types-vs-interfaces",level:3},{value:"Adding new fields",id:"adding-new-fields",level:3},{value:"Thoughts about Types vs Interfaces",id:"thoughts-about-types-vs-interfaces",level:3},{value:"Interfaces as Function Types",id:"interfaces-as-function-types",level:2}];function b(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"An interface declaration is another way to name an object type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'interface Point {\n  x: number;\n  y: number;\n}\n\nfunction printCoord(pt: Point) {\n  console.log("The coordinate\'s x value is " + pt.x);\n  console.log("The coordinate\'s y value is " + pt.y);\n}\n\nprintCoord({ x: 100, y: 100 });\n'})}),"\n",(0,s.jsx)(n.h2,{id:"differences-between-type-aliases-and-interfaces",children:"Differences Between Type Aliases and Interfaces"}),"\n",(0,s.jsxs)(n.p,{children:["Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an ",(0,s.jsx)(n.code,{children:"interface"})," are available in ",(0,s.jsx)(n.code,{children:"type"}),", the key distinction is that it can be extended."]}),"\n",(0,s.jsx)(n.p,{children:"Interfaces are often used to share common functionality between classes. So they are similar to abstract classes but without any implementation."}),"\n",(0,s.jsx)(n.h3,{id:"extending-types-vs-interfaces",children:"Extending Types vs Interfaces"}),"\n",(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{flex:"45%"},children:(0,s.jsx)(c.A,{language:"ts",title:"Extending an interface",children:l})}),(0,s.jsx)("div",{style:{flex:"0 0 5%"}}),(0,s.jsx)("div",{style:{flex:"45%"},children:(0,s.jsx)(c.A,{language:"ts",title:"Extending a type via intersections",children:o})})]}),"\n",(0,s.jsx)(n.h3,{id:"adding-new-fields",children:"Adding new fields"}),"\n",(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{flex:"45%"},children:(0,s.jsx)(c.A,{language:"ts",title:"Adding new fields to an existing interface",children:d})}),(0,s.jsx)("div",{style:{flex:"0 0 5%"}}),(0,s.jsx)("div",{style:{flex:"45%"},children:(0,s.jsx)(c.A,{language:"ts",title:"A type cannot be changed after being created",children:p})})]}),"\n",(0,s.jsx)(n.h3,{id:"thoughts-about-types-vs-interfaces",children:"Thoughts about Types vs Interfaces"}),"\n",(0,s.jsx)(r(),{style:{marginBottom:"1.5em"},controls:!0,url:"https://www.youtube.com/watch?v=zM9UPcIyyhQ"}),"\n",(0,s.jsx)(n.p,{children:"Main takeaways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use types unless you need a specific feature of interfaces"}),"\n",(0,s.jsx)(n.li,{children:"If you need a type that extends another type => Use an interface"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces-as-function-types",children:"Interfaces as Function Types"}),"\n",(0,s.jsx)(n.p,{children:"Interfaces can also describe function types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// type AddFn = (a: number, b: number) => number;\ninterface AddFn {\n  (a: number, b: number): number;\n}\n\nlet add: AddFn;\n\nadd = (n1: number, n2: number) => {\n  return n1 + n2;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Usually we use type aliases for function types, but interfaces can also be used."})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}}}]);