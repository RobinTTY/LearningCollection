"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"introduction",title:"Introduction",sidebar_position:1},i=void 0,l={unversionedId:"Web/typescript/decorators/introduction",id:"Web/typescript/decorators/introduction",title:"Introduction",description:"With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.",source:"@site/docs/Web/typescript/decorators/introduction.md",sourceDirName:"Web/typescript/decorators",slug:"/Web/typescript/decorators/introduction",permalink:"/LearningCollection/Web/typescript/decorators/introduction",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/typescript/decorators/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1},sidebar:"finance",previous:{title:"Readonly<Type>",permalink:"/LearningCollection/Web/typescript/utility-types/readonly"},next:{title:"Class Decorators",permalink:"/LearningCollection/Web/typescript/decorators/class-decorators"}},s={},c=[{value:"Capabilities",id:"capabilities",level:2},{value:"Decorator Factories",id:"decorator-factories",level:2},{value:"Decorator Composition",id:"decorator-composition",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. ",(0,a.kt)("strong",{parentName:"p"},"Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Decorators are an experimental feature that may change in future releases.\nTo use the feature set the ",(0,a.kt)("inlineCode",{parentName:"p"},"experimentalDecorators")," compiler option to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," either on the command line or in your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".")),(0,a.kt)("h2",{id:"capabilities"},"Capabilities"),(0,a.kt)("p",null,"A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form ",(0,a.kt)("inlineCode",{parentName:"p"},"@expression"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"expression")," must evaluate to a function that will be called at runtime with information about the decorated declaration."),(0,a.kt)("p",null,"For example, given the decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"@sealed")," we might write the ",(0,a.kt)("inlineCode",{parentName:"p"},"sealed")," function as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function sealed(target) {\n  // do something with 'target' ...\n}\n")),(0,a.kt)("p",null,"Decorators have three primary capabilities:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"They can replace the value that is being decorated with a matching value that has the same semantics. (e.g. a decorator can replace a method with another method, a field with another field, a class with another class, and so on)."),(0,a.kt)("li",{parentName:"ol"},"They can provide access to the value that is being decorated via accessor functions which they can then choose to share."),(0,a.kt)("li",{parentName:"ol"},"They can initialize the value that is being decorated, running additional code after the value has been fully defined. In cases where the value is a member of class, then initialization occurs once per instance.")),(0,a.kt)("p",null,"Essentially, decorators can be used to metaprogram and add functionality to a value, without fundamentally changing its external behavior."),(0,a.kt)("h2",{id:"decorator-factories"},"Decorator Factories"),(0,a.kt)("p",null,"If we want to ",(0,a.kt)("strong",{parentName:"p"},"customize how a decorator is applied to a declaration"),", we can write a decorator factory. A Decorator Factory is simply a ",(0,a.kt)("strong",{parentName:"p"},"function that returns the expression that will be called")," by the decorator at runtime."),(0,a.kt)("p",null,"We can write a decorator factory in the following fashion:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// this is the decorator factory, it sets up\n// the returned decorator function\nfunction color(value: string) {\n  return function (target) {\n    // this is the decorator\n    // do something with 'target' and 'value'...\n  };\n}\n")),(0,a.kt)("h2",{id:"decorator-composition"},"Decorator Composition"),(0,a.kt)("p",null,"Multiple decorators can be applied to a declaration, for example on a single line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@f @g x\n")),(0,a.kt)("p",null,"On multiple lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@f\n@g\nx\n")),(0,a.kt)("p",null,"The following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The expressions for each decorator are evaluated top-to-bottom"),(0,a.kt)("li",{parentName:"ol"},"The results are then called as functions from bottom-to-top")),(0,a.kt)("p",null,"If we were to use decorator factories, we can observe this evaluation order with the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function first() {\n  console.log("first(): factory evaluated");\n  return function (\n    target: any,\n    propertyKey: string,\n    descriptor: PropertyDescriptor\n  ) {\n    console.log("first(): called");\n  };\n}\n\nfunction second() {\n  console.log("second(): factory evaluated");\n  return function (\n    target: any,\n    propertyKey: string,\n    descriptor: PropertyDescriptor\n  ) {\n    console.log("second(): called");\n  };\n}\n\nclass ExampleClass {\n  @first()\n  @second()\n  method() {}\n}\n')),(0,a.kt)("p",null,"Which would print this output to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"first(): factory evaluated\nsecond(): factory evaluated\nsecond(): called\nfirst(): called\n")))}u.isMDXComponent=!0}}]);