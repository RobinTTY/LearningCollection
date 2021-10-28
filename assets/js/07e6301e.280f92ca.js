"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7092],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"limit",title:"Limit",sidebar_position:1},c=void 0,u={unversionedId:"Databases/MongoDB/C-Sharp Driver/limit",id:"Databases/MongoDB/C-Sharp Driver/limit",isDocsHomePage:!1,title:"Limit",description:"The Limit method operates on the IFindFluent interface. It limits the number of documents to query from the database.",source:"@site/docs/Databases/MongoDB/C-Sharp Driver/Limit.md",sourceDirName:"Databases/MongoDB/C-Sharp Driver",slug:"/Databases/MongoDB/C-Sharp Driver/limit",permalink:"/LearningCollection/Databases/MongoDB/C-Sharp Driver/limit",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/C-Sharp Driver/Limit.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"limit",title:"Limit",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Authentication",permalink:"/LearningCollection/Databases/MongoDB/authentication"},next:{title:"Distinct",permalink:"/LearningCollection/Databases/MongoDB/C-Sharp Driver/distinct"}},s=[{value:"Syntax",id:"syntax",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Example",id:"example",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Limit")," method operates on the ",(0,o.kt)("inlineCode",{parentName:"p"},"IFindFluent")," interface. It limits the number of documents to query from the database."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"IFindFluent<TDocument, TProjection> Limit(int? limit);\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"limit---int"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},"limit"))," - ",(0,o.kt)("inlineCode",{parentName:"h4"},"int?")),(0,o.kt)("p",null,"The limit to enforce on the number of documents to return. A limit of 0 will return all documents."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("h4",{id:"ifindfluenttdocument-tprojection"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},"IFindFluent<TDocument, TProjection>"))),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"TODO"))}m.isMDXComponent=!0}}]);