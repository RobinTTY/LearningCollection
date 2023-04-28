"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(p,".").concat(c)]||u[c]||g[c]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={id:"margin-padding",title:"Margin and Padding",sidebar_position:1},o=void 0,l={unversionedId:"Web/CSS/element-styling/margin-padding",id:"Web/CSS/element-styling/margin-padding",title:"Margin and Padding",description:"Margin and Padding are the properties that are used to add space around the element.",source:"@site/docs/Web/CSS/element-styling/margin-padding.md",sourceDirName:"Web/CSS/element-styling",slug:"/Web/CSS/element-styling/margin-padding",permalink:"/LearningCollection/Web/CSS/element-styling/margin-padding",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/CSS/element-styling/margin-padding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"margin-padding",title:"Margin and Padding",sidebar_position:1},sidebar:"finance",previous:{title:"Relative Units",permalink:"/LearningCollection/Web/CSS/basics/relative-units"},next:{title:"Width/Height Properties",permalink:"/LearningCollection/Web/CSS/element-styling/width-height"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"Usage",id:"usage",level:2}],s={toc:d},u="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Margin and Padding are the properties that are used to add space around the element."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Margin")," is a distance from one package to another, it's an interblock space"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Padding")," refers to a shift from content to rim package")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"margin",src:n(4606).Z,width:"1474",height:"602"})),(0,i.kt)("p",null,"We therefore use margin for outside shifts and padding for inside shifts."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"There are four properties for setting margins/padding for each side of the element: top, right, bottom, left. Definitions can be stated in any CSS unit (px, em, etc.)."),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"padding-right: 5%")),(0,i.kt)("p",null,"Also, there is a contracted notation for margin and padding in CSS. It is possible to state one, two, three, or all four values at once:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4 values: top, right, bottom, left (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"padding: 2px 5px 10px 5px"),")"),(0,i.kt)("li",{parentName:"ul"},"3 values: top, left/right, bottom (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"padding: 2px 5px 10px"),")"),(0,i.kt)("li",{parentName:"ul"},"2 values: top/bottom, left/right (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"padding: 2px 5px"),")"),(0,i.kt)("li",{parentName:"ul"},"1 value: top/right/bottom/left (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"padding: 2px"),")")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Negative values like ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-left: -5%")," are also possible.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Margin should be used when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to center an element. If that element has a fixed width, it will be centered horizontally by ",(0,i.kt)("inlineCode",{parentName:"li"},"margin: auto")," (will only work if the block width is set)"),(0,i.kt)("li",{parentName:"ul"},"You need to make some content stand out by putting it separately without other elements touching it")),(0,i.kt)("p",null,"Padding should be used when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You want to increase the size of the element. Padding will increase the size to accommodate the gap"),(0,i.kt)("li",{parentName:"ul"},"You need the element to have a background in the produced gap"),(0,i.kt)("li",{parentName:"ul"},"You need some space around the content")))}g.isMDXComponent=!0},4606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/margin-3e1a76830df8cee912912350d7f0023d.png"}}]);