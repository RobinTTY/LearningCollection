"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2663],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?i.createElement(m,l(l({ref:t},c),{},{components:r})):i.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8677:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],a={id:"trustedDeveloperUtilities",title:"Trusted Developer Utilities Proxy Execution",sidebar_position:2},u=void 0,s={unversionedId:"Security/trustedDeveloperUtilities",id:"Security/trustedDeveloperUtilities",isDocsHomePage:!1,title:"Trusted Developer Utilities Proxy Execution",description:"- Category: Execution",source:"@site/docs/Security/Trusted Developer Utilities.md",sourceDirName:"Security",slug:"/Security/trustedDeveloperUtilities",permalink:"/LearningCollection/Security/trustedDeveloperUtilities",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Security/Trusted Developer Utilities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"trustedDeveloperUtilities",title:"Trusted Developer Utilities Proxy Execution",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Data Obfuscation",permalink:"/LearningCollection/Security/dataObfuscation"},next:{title:"DLL Side-Loading",permalink:"/LearningCollection/Security/dllSideLoading"}},c=[{value:"Examples of developer utilities",id:"examples-of-developer-utilities",children:[{value:"MSBuild",id:"msbuild",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Category: Execution"),(0,o.kt)("li",{parentName:"ul"},"Goal: Execute malicious payload")),(0,o.kt)("p",null,"There are many utilities used for software development related tasks that can be used to execute code in various forms to assist in development, debugging, and reverse engineering. These utilities are often signed with legitimate certificates that allow them to execute on a system.\nThis fact can be abused to proxy execute malicious code through a trusted process that effectively bypasses application control solutions."),(0,o.kt)("h2",{id:"examples-of-developer-utilities"},"Examples of developer utilities"),(0,o.kt)("h3",{id:"msbuild"},"MSBuild"),(0,o.kt)("p",null,"MSBuild.exe (Microsoft Build Engine) is a ",(0,o.kt)("strong",{parentName:"p"},"build tool")," used by Visual Studio but can also be used independently. It is used to control how the build platform processes and builds software (including compilation, packaging, testing, deployment, etc.)."),(0,o.kt)("p",null,"MSBuild can be used to build different types of projects, like C++ and C#."),(0,o.kt)("script",{src:"https://gist.github.com/RobinTTY/822fcc1e97c4bae37fcb77d03b43ad8f.js"}))}d.isMDXComponent=!0}}]);