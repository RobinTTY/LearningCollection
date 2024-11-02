"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4757],{3763:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var n=t(4848),s=t(8453);const l={id:"rulesOfHooks",title:"Rules of Hooks",sidebar_position:6},r=void 0,a={id:"web/react/hooks/rulesOfHooks",title:"Rules of Hooks",description:"Hooks are JavaScript functions, but you need to follow two rules when using them. The React team provides a linter plugin to enforce them automatically.",source:"@site/docs/web/react/hooks/Rules of Hooks.md",sourceDirName:"web/react/hooks",slug:"/web/react/hooks/rulesOfHooks",permalink:"/LearningCollection/web/react/hooks/rulesOfHooks",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/hooks/Rules of Hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"rulesOfHooks",title:"Rules of Hooks",sidebar_position:6},sidebar:"docs",previous:{title:"useRef",permalink:"/LearningCollection/web/react/hooks/useRef"},next:{title:"useImperativeHandle",permalink:"/LearningCollection/web/react/hooks/advanced-hooks/useImperativeHandle"}},c={},i=[{value:"Only call hooks at the top level",id:"only-call-hooks-at-the-top-level",level:2},{value:"Only call hooks from React functions",id:"only-call-hooks-from-react-functions",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Hooks are JavaScript functions, but you need to follow two rules when using them. The React team provides a ",(0,n.jsx)(o.a,{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",children:"linter plugin"})," to enforce them automatically."]}),"\n",(0,n.jsx)(o.h2,{id:"only-call-hooks-at-the-top-level",children:"Only call hooks at the top level"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Don\u2019t call Hooks inside loops, conditions, or nested functions."})," Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That\u2019s what allows React to correctly preserve the state of Hooks between multiple ",(0,n.jsx)(o.code,{children:"useState"})," and ",(0,n.jsx)(o.code,{children:"useEffect"})," calls."]}),"\n",(0,n.jsx)(o.h2,{id:"only-call-hooks-from-react-functions",children:"Only call hooks from React functions"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Don\u2019t call Hooks from regular JavaScript functions."})," Instead, you can:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Call Hooks from React function components"}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://reactjs.org/docs/hooks-custom.html",children:"Call Hooks from custom Hooks"})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code."})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var n=t(6540);const s={},l=n.createContext(s);function r(e){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:o},e.children)}}}]);