"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4992],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={id:"docusaurus",title:"Docusaurus",sidebar_position:1},c=void 0,s={unversionedId:"Web/Static Site Generators/docusaurus",id:"Web/Static Site Generators/docusaurus",title:"Docusaurus",description:"What is Docusaurus",source:"@site/docs/Web/Static Site Generators/Docusaurus.md",sourceDirName:"Web/Static Site Generators",slug:"/Web/Static Site Generators/docusaurus",permalink:"/LearningCollection/Web/Static Site Generators/docusaurus",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/Static Site Generators/Docusaurus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docusaurus",title:"Docusaurus",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Scheduling Updates",permalink:"/LearningCollection/Web/React/React Internals/schedulingUpdates"},next:{title:"Jekyll",permalink:"/LearningCollection/Web/Static Site Generators/jekyll"}},l={},p=[{value:"What is Docusaurus",id:"what-is-docusaurus",level:2},{value:"Deploying to Github Pages",id:"deploying-to-github-pages",level:2}],d={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-docusaurus"},"What is Docusaurus"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Docusaurus is a static-site generator. It builds a single-page application with a fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out-of-the-box documentation features, but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).")),(0,a.kt)("p",null,"The site your looking at right now is powered by Docusaurus."),(0,a.kt)("h2",{id:"deploying-to-github-pages"},"Deploying to Github Pages"),(0,a.kt)("p",null,"Sync current commit with deployed branch on Github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"cmd /C 'set \"GIT_USER=RobinTTY\" && yarn deploy'\n")))}b.isMDXComponent=!0}}]);