"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6385],{87918:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var n=s(74848),o=s(28453);const a={id:"constructable-stylesheets",title:"Constructable Stylesheets",sidebar_position:1},c=void 0,i={id:"web/css/advanced-concepts/constructable-stylesheets",title:"Constructable Stylesheets",description:"Like HTML elements, CSS stylesheets can be created using JavaScript. The process has historically been to create a ` element using document.createElement('style')`, and then access its sheet property to obtain a reference to the underlying CSSStyleSheet instance. This method can produce duplicate CSS code and its attendant bloat, and the act of attaching leads to a flash of unstyled content whether there is bloat or not.",source:"@site/docs/web/css/advanced-concepts/constructable-stylesheets.md",sourceDirName:"web/css/advanced-concepts",slug:"/web/css/advanced-concepts/constructable-stylesheets",permalink:"/LearningCollection/web/css/advanced-concepts/constructable-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/css/advanced-concepts/constructable-stylesheets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"constructable-stylesheets",title:"Constructable Stylesheets",sidebar_position:1},sidebar:"docs",previous:{title:"Flexbox",permalink:"/LearningCollection/web/css/site-layout/flexbox"},next:{title:"JavaScript",permalink:"/LearningCollection/web/javascript/"}},l={},r=[{value:"Usage",id:"usage",level:2},{value:"Constructing a stylesheet",id:"constructing-a-stylesheet",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Like HTML elements, CSS stylesheets can be created using JavaScript. The process has historically been to create a ",(0,n.jsx)(t.code,{children:"<style>"})," element using ",(0,n.jsx)(t.code,{children:"document.createElement('style')"}),", and then access its sheet property to obtain a reference to the underlying ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/API/CSSStyleSheet",children:"CSSStyleSheet"})," instance. This method can produce duplicate CSS code and its attendant bloat, and the act of attaching leads to a flash of unstyled content whether there is bloat or not."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"CSSStyleSheet"})," interface is the root of a collection of CSS representation interfaces referred to as the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/API/CSS_Object_Model",children:"CSSOM"}),", offering a programmatic way to manipulate stylesheets as well as eliminating the problems associated with the old method."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CSSStyleSheet",src:s(55192).A+"",width:"1252",height:"955"})}),"\n",(0,n.jsxs)(t.p,{children:["Constructable Stylesheets make it possible to define and prepare shared CSS styles, and then apply those styles to multiple Shadow Roots or the Document easily and without duplication. ",(0,n.jsxs)(t.strong,{children:["Updates to a shared ",(0,n.jsx)(t.code,{children:"CSSStyleSheet"})," are applied to all roots into which it has been adopted"]}),", and ",(0,n.jsx)(t.a,{href:"https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets",children:"adopting a stylesheet"})," is fast and synchronous once the sheet has been loaded."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"Constructable Stylesheets can be used:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["to provide a centralized theme used by many components","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the theme can be a ",(0,n.jsx)(t.code,{children:"CSSStyleSheet"})," instance passed to components, with updates to the theme propagating out to components automatically"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["to distribute ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/css/--*",children:"CSS Custom Property"})," values to specific DOM subtrees without relying on the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/docs/Web/css/Cascade",children:"cascade"})]}),"\n",(0,n.jsx)(t.li,{children:"as a direct interface to the browser's CSS parser, making it easy to preload stylesheets without injecting them into the DOM"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"constructing-a-stylesheet",children:"Constructing a stylesheet"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/cssom-1/#dom-cssstylesheet-cssstylesheet",children:"Constructable StyleSheets specification"})," makes it possible to create stylesheets imperatively by invoking the ",(0,n.jsx)(t.code,{children:"CSSStyleSheet()"})," constructor. The resulting ",(0,n.jsx)(t.code,{children:"CSSStyleSheet"})," object has two new methods that make it safer to add and update stylesheet rules without triggering ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content",children:"Flash of Unstyled Content (FOUC)"}),". The ",(0,n.jsx)(t.code,{children:"replace()"})," and ",(0,n.jsx)(t.code,{children:"replaceSync()"})," methods both replace the stylesheet with a string of CSS, and ",(0,n.jsx)(t.code,{children:"replace()"})," returns a Promise."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},55192:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/CSSStyleSheet-17dd0570c6d71ab14ca24be7e77cd15c.webp"},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var n=s(96540);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);