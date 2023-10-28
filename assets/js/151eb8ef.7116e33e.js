"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),A=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=A(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=A(r),b=n,h=c["".concat(i,".").concat(b)]||c[b]||s[b]||l;return r?o.createElement(h,p(p({ref:t},d),{},{components:r})):o.createElement(h,p({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=b;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:n,p[1]=a;for(var A=2;A<l;A++)p[A]=r[A];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>A});var o=r(7462),n=(r(7294),r(3905));const l={id:"border",title:"Border",sidebar_position:3},p=void 0,a={unversionedId:"web/css/element-styling/border",id:"web/css/element-styling/border",title:"Border",description:"CSS provides several properties that allow you to define style, width and color of the element border. Setting the borders can be useful as a decoration, and can perform more practical functions, such as highlighting important or interactive elements on a web page.",source:"@site/docs/web/css/element-styling/border.mdx",sourceDirName:"web/css/element-styling",slug:"/web/css/element-styling/border",permalink:"/LearningCollection/web/css/element-styling/border",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/css/element-styling/border.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"border",title:"Border",sidebar_position:3},sidebar:"docs",previous:{title:"Width/Height Properties",permalink:"/LearningCollection/web/css/element-styling/width-height"},next:{title:"Document Flow and Positioning",permalink:"/LearningCollection/web/css/site-layout/position"}},i={},A=[{value:"Border style",id:"border-style",level:2},{value:"Border color",id:"border-color",level:2},{value:"Border width",id:"border-width",level:2},{value:"The <code>border</code> property",id:"the-border-property",level:2},{value:"Border for one side of an element",id:"border-for-one-side-of-an-element",level:2},{value:"Example",id:"example",level:3},{value:"Result:",id:"result",level:4}],d={toc:A},c="wrapper";function s(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CSS provides several properties that allow you to define style, width and color of the element border. Setting the borders can be useful as a decoration, and can perform more practical functions, such as highlighting important or interactive elements on a web page."),(0,n.kt)("h2",{id:"border-style"},"Border style"),(0,n.kt)("p",null,"To change the style of the border, the ",(0,n.kt)("inlineCode",{parentName:"p"},"border-style")," property is used. Possible types are for instance: dotted, dashed, solid, etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"border",src:r(6472).Z,width:"519",height:"49"})),(0,n.kt)("h2",{id:"border-color"},"Border color"),(0,n.kt)("p",null,"The color of the border can be set with the ",(0,n.kt)("inlineCode",{parentName:"p"},"border-color")," property. If it is not specified, the border color will be the text color of the element."),(0,n.kt)("h2",{id:"border-width"},"Border width"),(0,n.kt)("p",null,"The border width is defined with the ",(0,n.kt)("inlineCode",{parentName:"p"},"border-width")," property and any length unit in CSS."),(0,n.kt)("h2",{id:"the-border-property"},"The ",(0,n.kt)("inlineCode",{parentName:"h2"},"border")," property"),(0,n.kt)("p",null,"To set the style for the border, it is not necessary to use all three of the above properties in turn. Instead the ",(0,n.kt)("inlineCode",{parentName:"p"},"border")," property can be used to set everything at once:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"p {\n  border: 2px solid gray;\n}\n")),(0,n.kt)("h2",{id:"border-for-one-side-of-an-element"},"Border for one side of an element"),(0,n.kt)("p",null,"It is also possible to set a border for one side of the element only. There are ",(0,n.kt)("inlineCode",{parentName:"p"},"border-top"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"border-right"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"border-bottom"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"border-left")," properties for setting the border on the top, right, bottom and left sides of the element respectively."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},"<p>News</p>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=index.css",title:"index.css"},"p {\n  border-bottom: 2px solid brown;\n  border-left: 2px solid brown;\n}\n")),(0,n.kt)("h4",{id:"result"},"Result:"),(0,n.kt)("p",{style:{borderBottom:"2px solid brown",borderLeft:"2px solid brown"}},"News"))}s.isMDXComponent=!0},6472:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"}}]);