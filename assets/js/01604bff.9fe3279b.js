"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1022],{6963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const c={id:"nullish-coalescing",title:"Nullish Coalescing",sidebar_position:6},s=void 0,a={id:"web/typescript/advanced-concepts/nullish-coalescing",title:"Nullish Coalescing",description:"The nullish coalescing operator is a feature that goes hand-in-hand with optional chaining. You can think of this feature - the ?? operator - as a way to \u201cfall back\u201d to a default value when dealing with null or undefined. When we write code like:",source:"@site/docs/web/typescript/advanced-concepts/nullish-coalescing.md",sourceDirName:"web/typescript/advanced-concepts",slug:"/web/typescript/advanced-concepts/nullish-coalescing",permalink:"/LearningCollection/web/typescript/advanced-concepts/nullish-coalescing",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/advanced-concepts/nullish-coalescing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"nullish-coalescing",title:"Nullish Coalescing",sidebar_position:6},sidebar:"docs",previous:{title:"Optional Chaining",permalink:"/LearningCollection/web/typescript/advanced-concepts/optional-chaining"},next:{title:"Generics",permalink:"/LearningCollection/web/typescript/advanced-concepts/generics"}},l={},d=[{value:"Advanced Usage",id:"advanced-usage",level:2}];function r(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The nullish coalescing operator is a feature that goes hand-in-hand with optional chaining. You can think of this feature - the ",(0,i.jsx)(n.code,{children:"??"})," operator - as a way to \u201cfall back\u201d to a default value when dealing with ",(0,i.jsx)(n.code,{children:"null"})," or ",(0,i.jsx)(n.code,{children:"undefined"}),". When we write code like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"let x = foo ?? bar();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["this is a new way to say that the value ",(0,i.jsx)(n.code,{children:"foo"})," will be used when it\u2019s \u201cpresent\u201d; but when it\u2019s ",(0,i.jsx)(n.code,{children:"null"})," or ",(0,i.jsx)(n.code,{children:"undefined"}),", calculate ",(0,i.jsx)(n.code,{children:"bar()"})," in its place."]}),"\n",(0,i.jsx)(n.p,{children:"The above code is equivalent to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"let x = foo !== null && foo !== undefined ? foo : bar();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"??"})," operator can replace uses of ",(0,i.jsx)(n.code,{children:"||"})," when trying to use a default value. For example, the following code snippet tries to fetch the volume that was last saved in ",(0,i.jsx)(n.code,{children:"localStorage"})," (if it ever was); however, it has a bug because it uses ",(0,i.jsx)(n.code,{children:"||"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function initializeAudio() {\n  let volume = localStorage.volume || 0.5;\n  // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"localStorage.volume"})," is set to ",(0,i.jsx)(n.code,{children:"0"}),", the page will set the volume to ",(0,i.jsx)(n.code,{children:"0.5"})," which is unintended. ",(0,i.jsx)(n.code,{children:"??"})," avoids some unintended behavior from ",(0,i.jsx)(n.code,{children:"0"}),", ",(0,i.jsx)(n.code,{children:"NaN"})," and ",(0,i.jsx)(n.code,{children:'""'})," being treated as falsy values."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},c=i.createContext(o);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);