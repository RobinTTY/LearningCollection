"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={id:"types-of-css",title:"Types of CSS",sidebar_position:1},s=void 0,i={unversionedId:"web/css/basics/types-of-css",id:"web/css/basics/types-of-css",title:"Types of CSS",description:"There are several ways to apply CSS styles to an HTML document. Those are:",source:"@site/docs/web/css/basics/types-of-css.md",sourceDirName:"web/css/basics",slug:"/web/css/basics/types-of-css",permalink:"/LearningCollection/web/css/basics/types-of-css",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/css/basics/types-of-css.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"types-of-css",title:"Types of CSS",sidebar_position:1},sidebar:"docs",previous:{title:"Interface Elements",permalink:"/LearningCollection/web/html/interface-elements"},next:{title:"Selectors",permalink:"/LearningCollection/web/css/basics/selectors"}},o={},c=[{value:"External CSS",id:"external-css",level:2},{value:"Internal CSS",id:"internal-css",level:2},{value:"Inline CSS",id:"inline-css",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are several ways to apply CSS styles to an HTML document. Those are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"External CSS"),(0,l.kt)("li",{parentName:"ul"},"Internal CSS"),(0,l.kt)("li",{parentName:"ul"},"Inline CSS")),(0,l.kt)("h2",{id:"external-css"},"External CSS"),(0,l.kt)("p",null,"CSS styles written in a separate file are called ",(0,l.kt)("strong",{parentName:"p"},"External Style Sheets"),". To include External Style Sheets in an HTML document, use an unpaired ",(0,l.kt)("inlineCode",{parentName:"p"},"<link>")," tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {6}',title:'"index.html"',"{6}":!0},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Connecting External CSS to HTML</title>\n    <link rel="stylesheet" href="style.css" />\n  </head>\n  <body></body>\n</html>\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute specifies the file's address, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"rel")," attribute with the stylesheet value tells the browser that we are connecting styles and not something else."),(0,l.kt)("p",null,"It is best to include the styles inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>"),", but it's not a strong requirement. The ",(0,l.kt)("inlineCode",{parentName:"p"},"<link>")," tag will also work fine elsewhere on the page."),(0,l.kt)("h2",{id:"internal-css"},"Internal CSS"),(0,l.kt)("p",null,"CSS styles can be written directly in HTML markup instead of a separate file. Such sets of styles are usually called ",(0,l.kt)("strong",{parentName:"p"},"Internal Style Sheets"),". They are wrapped in a paired ",(0,l.kt)("inlineCode",{parentName:"p"},"<style>")," tag and must be located inside ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {6-10}',title:'"index.html"',"{6-10}":!0},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Connecting Internal CSS to HTML</title>\n    <style>\n      body {\n        background-color: #f0f0f0;\n      }\n    </style>\n  </head>\n  <body></body>\n</html>\n')),(0,l.kt)("p",null,"This method of connection is usually only good when there are very few styles."),(0,l.kt)("h2",{id:"inline-css"},"Inline CSS"),(0,l.kt)("p",null,"You can also define a style for a single element using the HTML attribute style. In this case, CSS properties are written as attribute values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {8}',title:'"index.html"',"{8}":!0},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Connecting Internal CSS to HTML</title>\n  </head>\n  <body>\n    <p style="css property; css property;">Inline CSS</p>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"However, this way of connection is considered bad practice because it complicates project support since the code becomes more difficult to read."))}d.isMDXComponent=!0}}]);