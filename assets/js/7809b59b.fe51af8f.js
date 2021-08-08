"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8717],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5744:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={id:"nullConditionalOperator",title:"Null-conditional operator"},c=void 0,u={unversionedId:"C-Sharp/nullConditionalOperator",id:"C-Sharp/nullConditionalOperator",isDocsHomePage:!1,title:"Null-conditional operator",description:"- Tests the value of the left-hand operand for null before performing a member access (?.) or index (?[]) operation",source:"@site/docs/C-Sharp/null-conditional operator.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/nullConditionalOperator",permalink:"/LearningCollection/C-Sharp/nullConditionalOperator",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/null-conditional operator.md",version:"current",frontMatter:{id:"nullConditionalOperator",title:"Null-conditional operator"},sidebar:"mySidebar",previous:{title:"Null-coalescing operator",permalink:"/LearningCollection/C-Sharp/nullCoalescingOperator"},next:{title:"Private protected vs protected internal access modifier",permalink:"/LearningCollection/C-Sharp/privateProtectedVsProtectedInternal"}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tests the value of the left-hand operand for null before performing a member access (?.) or index (?[]) operation"),(0,a.kt)("li",{parentName:"ul"},"returns null if the left-hand operand evaluates to null"),(0,a.kt)("li",{parentName:"ul"},"Syntax:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"int? length = customers?.Length; // null if customers is null"),(0,a.kt)("li",{parentName:"ul"},"int? count = customers?","[0]","?.Orders?.Count(); // null if customers, the first customer, or Orders is null")))))}f.isMDXComponent=!0}}]);