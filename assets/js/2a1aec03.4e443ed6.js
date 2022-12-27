"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"discriminated-unions",title:"Discriminated Unions",sidebar_position:3},o=void 0,c={unversionedId:"Web/typescript/advanced-concepts/discriminated-unions",id:"Web/typescript/advanced-concepts/discriminated-unions",title:"Discriminated Unions",description:"If you have a class with a literal member (e.g. string literal) then you can use that property to discriminate between union members.",source:"@site/docs/Web/typescript/advanced-concepts/discriminated-unions.md",sourceDirName:"Web/typescript/advanced-concepts",slug:"/Web/typescript/advanced-concepts/discriminated-unions",permalink:"/LearningCollection/Web/typescript/advanced-concepts/discriminated-unions",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/typescript/advanced-concepts/discriminated-unions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"discriminated-unions",title:"Discriminated Unions",sidebar_position:3},sidebar:"finance",previous:{title:"Type Guards",permalink:"/LearningCollection/Web/typescript/advanced-concepts/type-guards"},next:{title:"Index Signatures",permalink:"/LearningCollection/Web/typescript/advanced-concepts/index-signatures"}},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you have a class with a literal member (e.g. string literal) then you can use that property to discriminate between union members."),(0,i.kt)("p",null,"As an example consider the union of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Square")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle"),", here we have a member ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," that exists on both union members and is of a particular literal type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface Square {\n  kind: "square";\n  size: number;\n}\n\ninterface Rectangle {\n  kind: "rectangle";\n  width: number;\n  height: number;\n}\n\ntype Shape = Square | Rectangle;\n')),(0,i.kt)("p",null,"If you use a type guard style check (==, ===, !=, !==) or switch on the discriminant property (here ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),") TypeScript will realize that the object must be of the type that has that specific literal and do a type narrowing for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'function area(s: Shape) {\n  if (s.kind === "square") {\n    // Now TypeScript *knows* that `s` must be a square\n    return s.size * s.size;\n  } else {\n    // Wasn\'t a square? So TypeScript will figure out that it must be a Rectangle\n    return s.width * s.height;\n  }\n}\n')))}u.isMDXComponent=!0}}]);