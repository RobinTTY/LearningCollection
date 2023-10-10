"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"class-decorators",title:"Class Decorators",sidebar_position:2},s=void 0,c={unversionedId:"web/typescript/decorators/class-decorators",id:"web/typescript/decorators/class-decorators",title:"Class Decorators",description:"A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).",source:"@site/docs/web/typescript/decorators/class-decorators.md",sourceDirName:"web/typescript/decorators",slug:"/web/typescript/decorators/class-decorators",permalink:"/LearningCollection/web/typescript/decorators/class-decorators",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/decorators/class-decorators.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"class-decorators",title:"Class Decorators",sidebar_position:2},sidebar:"finance",previous:{title:"Introduction",permalink:"/LearningCollection/web/typescript/decorators/introduction"},next:{title:"Method Decorators",permalink:"/LearningCollection/web/typescript/decorators/method-decorators"}},i={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be ",(0,o.kt)("strong",{parentName:"p"},"used to observe, modify, or replace a class definition"),". A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a ",(0,o.kt)("inlineCode",{parentName:"p"},"declare")," class)."),(0,o.kt)("p",null,"The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument. If the class decorator returns a value, it will replace the class declaration with the provided constructor function."),(0,o.kt)("p",null,"he following is an example of a class decorator (",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed"),") applied to a ",(0,o.kt)("inlineCode",{parentName:"p"},"BugReport")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@sealed\nclass BugReport {\n  type = "report";\n  title: string;\n\n  constructor(t: string) {\n    this.title = t;\n  }\n}\n')),(0,o.kt)("p",null,"We can define the ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," decorator using the following function declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"@sealed")," is executed, it will seal both the constructor and its prototype, and will therefore prevent any further functionality from being added to or removed from this class during runtime by accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"BugReport.prototype")," or by defining properties on ",(0,o.kt)("inlineCode",{parentName:"p"},"BugReport")," itself (note that ES2015 classes are really just syntactic sugar to prototype-based constructor functions). This decorator does not prevent classes from sub-classing ",(0,o.kt)("inlineCode",{parentName:"p"},"BugReport"),"."),(0,o.kt)("p",null,"Next we have an example of how to override the constructor to set new defaults:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function reportableClassDecorator<T extends { new (...args: any[]): {} }>(\n  constructor: T\n) {\n  return class extends constructor {\n    reportingURL = "http://www...";\n  };\n}\n\n@reportableClassDecorator\nclass BugReport {\n  type = "report";\n  title: string;\n\n  constructor(t: string) {\n    this.title = t;\n  }\n}\n\nconst bug = new BugReport("Needs dark mode");\nconsole.log(bug.title); // Prints "Needs dark mode"\nconsole.log(bug.type); // Prints "report"\n\n// Note that the decorator _does not_ change the TypeScript type\n// and so the new property `reportingURL` is not known\n// to the type system:\nbug.reportingURL; // Property \'reportingURL\' does not exist on type \'BugReport\'.\n')))}u.isMDXComponent=!0}}]);