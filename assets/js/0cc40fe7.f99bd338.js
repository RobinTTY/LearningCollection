"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8273],{4768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=r(5893),n=r(1151);const a={id:"property-decorators",title:"Property Decorators",sidebar_position:5},s=void 0,c={id:"web/typescript/decorators/property-decorators",title:"Property Decorators",description:"A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).",source:"@site/docs/web/typescript/decorators/property-decorators.md",sourceDirName:"web/typescript/decorators",slug:"/web/typescript/decorators/property-decorators",permalink:"/LearningCollection/web/typescript/decorators/property-decorators",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/decorators/property-decorators.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"property-decorators",title:"Property Decorators",sidebar_position:5},sidebar:"docs",previous:{title:"Accessor Decorators",permalink:"/LearningCollection/web/typescript/decorators/accessor-decorators"},next:{title:"Parameter Decorators",permalink:"/LearningCollection/web/typescript/decorators/parameter-decorators"}},i={},d=[];function l(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a ",(0,o.jsx)(t.code,{children:"declare"})," class)."]}),"\n",(0,o.jsx)(t.p,{children:"The expression for the property decorator will be called as a function at runtime, with the following two arguments:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Either the constructor function of the class for a static member, or the prototype of the class for an instance member"}),"\n",(0,o.jsx)(t.li,{children:"The name of the member"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"We can use this information to record metadata about the property, as in the following example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'class Greeter {\n  @format("Hello, %s")\n  greeting: string;\n  constructor(message: string) {\n    this.greeting = message;\n  }\n  greet() {\n    let formatString = getFormat(this, "greeting");\n    return formatString.replace("%s", this.greeting);\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["We can then define the ",(0,o.jsx)(t.code,{children:"@format"})," decorator and ",(0,o.jsx)(t.code,{children:"getFormat"})," functions using the following function declarations:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'import "reflect-metadata";\nconst formatMetadataKey = Symbol("format");\nfunction format(formatString: string) {\n  return Reflect.metadata(formatMetadataKey, formatString);\n}\nfunction getFormat(target: any, propertyKey: string) {\n  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:'@format("Hello, %s")'})," decorator here is a decorator factory. When ",(0,o.jsx)(t.code,{children:'@format("Hello, %s")'})," is called, it adds a metadata entry for the property using the ",(0,o.jsx)(t.code,{children:"Reflect.metadata"})," function from the ",(0,o.jsx)(t.code,{children:"reflect-metadata"})," library. When ",(0,o.jsx)(t.code,{children:"getFormat"})," is called, it reads the metadata value for the format."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var o=r(7294);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);