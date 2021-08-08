"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2625],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1501:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"privateProtectedVsProtectedInternal",title:"Private protected vs protected internal access modifier"},l=void 0,s={unversionedId:"C-Sharp/privateProtectedVsProtectedInternal",id:"C-Sharp/privateProtectedVsProtectedInternal",isDocsHomePage:!1,title:"Private protected vs protected internal access modifier",description:"Before C# 7.2 we had protected internal modifier:",source:"@site/docs/C-Sharp/protected internal.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/privateProtectedVsProtectedInternal",permalink:"/LearningCollection/C-Sharp/privateProtectedVsProtectedInternal",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/protected internal.md",version:"current",frontMatter:{id:"privateProtectedVsProtectedInternal",title:"Private protected vs protected internal access modifier"},sidebar:"mySidebar",previous:{title:"Null-conditional operator",permalink:"/LearningCollection/C-Sharp/nullConditionalOperator"},next:{title:"Unmanaged constraint",permalink:"/LearningCollection/C-Sharp/unmanagedConstraint"}},p=[],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before C# 7.2 we had ",(0,a.kt)("inlineCode",{parentName:"p"},"protected internal")," modifier:"),(0,a.kt)("p",null,"This really means ",(0,a.kt)("strong",{parentName:"p"},"protected OR internal"),", that is - member A is ",(0,a.kt)("strong",{parentName:"p"},"accessible to child classes and also to any class in the current assembly"),', even if that class is not child of class A (so restriction implied by "protected" is relaxed). The internal modifier is also relaxed.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"private protected")," really means protected AND internal:"),(0,a.kt)("p",null,'That is - member is accessible only to child classes which are in the same assembly, but not to child classes which are outside assembly (so restriction implied by "protected" is narrowed - becomes even more restrictive). That is useful if you build hierarchy of classes in your assembly and do not want any child classes from other assemblies to access certain parts of that hierarchy.'))}u.isMDXComponent=!0}}]);