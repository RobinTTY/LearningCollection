"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=s,m=d["".concat(i,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={id:"constructable-stylesheets",title:"Constructable Stylesheets",sidebar_position:1},o=void 0,l={unversionedId:"web/css/advanced-concepts/constructable-stylesheets",id:"web/css/advanced-concepts/constructable-stylesheets",title:"Constructable Stylesheets",description:"Like HTML elements, CSS stylesheets can be created using JavaScript. The process has historically been to create a ` element using document.createElement('style')`, and then access its sheet property to obtain a reference to the underlying CSSStyleSheet instance. This method can produce duplicate CSS code and its attendant bloat, and the act of attaching leads to a flash of unstyled content whether there is bloat or not.",source:"@site/docs/web/css/advanced-concepts/constructable-stylesheets.md",sourceDirName:"web/css/advanced-concepts",slug:"/web/css/advanced-concepts/constructable-stylesheets",permalink:"/LearningCollection/web/css/advanced-concepts/constructable-stylesheets",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/css/advanced-concepts/constructable-stylesheets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"constructable-stylesheets",title:"Constructable Stylesheets",sidebar_position:1},sidebar:"finance",previous:{title:"Flexbox",permalink:"/LearningCollection/web/css/site-layout/flexbox"},next:{title:"JavaScript",permalink:"/LearningCollection/web/javascript/"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Constructing a stylesheet",id:"constructing-a-stylesheet",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Like HTML elements, CSS stylesheets can be created using JavaScript. The process has historically been to create a ",(0,s.kt)("inlineCode",{parentName:"p"},"<style>")," element using ",(0,s.kt)("inlineCode",{parentName:"p"},"document.createElement('style')"),", and then access its sheet property to obtain a reference to the underlying ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/CSSStyleSheet"},"CSSStyleSheet")," instance. This method can produce duplicate CSS code and its attendant bloat, and the act of attaching leads to a flash of unstyled content whether there is bloat or not."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CSSStyleSheet")," interface is the root of a collection of CSS representation interfaces referred to as the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/CSS_Object_Model"},"CSSOM"),", offering a programmatic way to manipulate stylesheets as well as eliminating the problems associated with the old method."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"CSSStyleSheet",src:n(2107).Z,width:"1252",height:"955"})),(0,s.kt)("p",null,"Constructable Stylesheets make it possible to define and prepare shared CSS styles, and then apply those styles to multiple Shadow Roots or the Document easily and without duplication. ",(0,s.kt)("strong",{parentName:"p"},"Updates to a shared ",(0,s.kt)("inlineCode",{parentName:"strong"},"CSSStyleSheet")," are applied to all roots into which it has been adopted"),", and ",(0,s.kt)("a",{parentName:"p",href:"https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets"},"adopting a stylesheet")," is fast and synchronous once the sheet has been loaded."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Constructable Stylesheets can be used:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to provide a centralized theme used by many components",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the theme can be a ",(0,s.kt)("inlineCode",{parentName:"li"},"CSSStyleSheet")," instance passed to components, with updates to the theme propagating out to components automatically"))),(0,s.kt)("li",{parentName:"ul"},"to distribute ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/css/--*"},"CSS Custom Property")," values to specific DOM subtrees without relying on the ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/css/Cascade"},"cascade")),(0,s.kt)("li",{parentName:"ul"},"as a direct interface to the browser's CSS parser, making it easy to preload stylesheets without injecting them into the DOM")),(0,s.kt)("h2",{id:"constructing-a-stylesheet"},"Constructing a stylesheet"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/cssom-1/#dom-cssstylesheet-cssstylesheet"},"Constructable StyleSheets specification")," makes it possible to create stylesheets imperatively by invoking the ",(0,s.kt)("inlineCode",{parentName:"p"},"CSSStyleSheet()")," constructor. The resulting ",(0,s.kt)("inlineCode",{parentName:"p"},"CSSStyleSheet")," object has two new methods that make it safer to add and update stylesheet rules without triggering ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content"},"Flash of Unstyled Content (FOUC)"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"replace()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"replaceSync()")," methods both replace the stylesheet with a string of CSS, and ",(0,s.kt)("inlineCode",{parentName:"p"},"replace()")," returns a Promise."))}h.isMDXComponent=!0},2107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CSSStyleSheet-17dd0570c6d71ab14ca24be7e77cd15c.webp"}}]);