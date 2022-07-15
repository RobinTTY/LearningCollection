"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5662],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7866:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"nullConditionalOperator",title:"Null-conditional operator (?)",sidebar_position:1},p=void 0,c={unversionedId:"C-Sharp/Core Concepts/Operators/nullConditionalOperator",id:"C-Sharp/Core Concepts/Operators/nullConditionalOperator",title:"Null-conditional operator (?)",description:"- Tests the value of the left-hand operand for null before performing a member access (?.) or index (?[]) operation",source:"@site/docs/C-Sharp/Core Concepts/Operators/NullConditionalOperator.md",sourceDirName:"C-Sharp/Core Concepts/Operators",slug:"/C-Sharp/Core Concepts/Operators/nullConditionalOperator",permalink:"/LearningCollection/C-Sharp/Core Concepts/Operators/nullConditionalOperator",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Core Concepts/Operators/NullConditionalOperator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"nullConditionalOperator",title:"Null-conditional operator (?)",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Record Types",permalink:"/LearningCollection/C-Sharp/Core Concepts/Types/recordTypes"},next:{title:"Null-coalescing operator (??)",permalink:"/LearningCollection/C-Sharp/Core Concepts/Operators/nullCoalescingOperator"}},u={},s=[],f={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tests the value of the left-hand operand for null before performing a member access ",(0,a.kt)("inlineCode",{parentName:"li"},"(?.)")," or index ",(0,a.kt)("inlineCode",{parentName:"li"},"(?[])")," operation"),(0,a.kt)("li",{parentName:"ul"},"returns null if the left-hand operand evaluates to null")),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"int? length = customers?.Length; // null if customers is null\nint? count = customers?[0]?.Orders?.Count(); // null if customers, the first customer, or Orders is null\n")))}d.isMDXComponent=!0}}]);