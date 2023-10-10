"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9764],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={id:"index-signatures",title:"Index Signatures",sidebar_position:4},o=void 0,s={unversionedId:"web/typescript/advanced-concepts/index-signatures",id:"web/typescript/advanced-concepts/index-signatures",title:"Index Signatures",description:"Sometimes you don\u2019t know all the names of a type\u2019s properties ahead of time, but you do know the shape of the values. In those cases you can use an index signature to describe the types of possible values, for example:",source:"@site/docs/web/typescript/advanced-concepts/index-signatures.md",sourceDirName:"web/typescript/advanced-concepts",slug:"/web/typescript/advanced-concepts/index-signatures",permalink:"/LearningCollection/web/typescript/advanced-concepts/index-signatures",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/advanced-concepts/index-signatures.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"index-signatures",title:"Index Signatures",sidebar_position:4},sidebar:"finance",previous:{title:"Discriminated Unions",permalink:"/LearningCollection/web/typescript/advanced-concepts/discriminated-unions"},next:{title:"Optional Chaining",permalink:"/LearningCollection/web/typescript/advanced-concepts/optional-chaining"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"When to use Index Signatures",id:"when-to-use-index-signatures",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you don\u2019t know all the names of a type\u2019s properties ahead of time, but you do know the shape of the values. In those cases you can use an index signature to describe the types of possible values, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface StringArray {\n  [index: number]: string;\n}\n \nconst myArray: StringArray = getStringArray();\nconst secondItem = myArray[1]; // secondItem is a string\n")),(0,a.kt)("p",null,"Above, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"StringArray")," interface which has an index signature. This index signature states that when a ",(0,a.kt)("inlineCode",{parentName:"p"},"StringArray")," is indexed with a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", it will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",null,"Only some types are allowed for index signature properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"symbol"),", template string patterns, and union types consisting only of these."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"While string index signatures are a powerful way to describe the \u201cdictionary\u201d pattern, they also enforce that all properties match their return type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface NumberDictionary {\n  [index: string]: number;\n \n  length: number; // ok\n  name: string; // Error: Property 'name' of type 'string' is not assignable to 'string' index type 'number'\n}\n")),(0,a.kt)("p",null,"However, properties of different types are acceptable if the index signature is a union of the property types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface NumberOrStringDictionary {\n  [index: string]: number | string;\n  length: number; // ok, length is a number\n  name: string; // ok, name is a string\n}\n")),(0,a.kt)("p",null,"Finally, you can make index signatures readonly in order to prevent assignment to their indices:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ReadonlyStringArray {\n  readonly [index: number]: string;\n}\n")),(0,a.kt)("h2",{id:"when-to-use-index-signatures"},"When to use Index Signatures"),(0,a.kt)("p",null,"Imagine you have 2 objects describing the salary of two employees:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const salary1 = {\n  salary: 55_000,\n  bonus: 5_000\n};\n \nconst salary2 = {\n  contractSalary: 75_000\n};\n")),(0,a.kt)("p",null,"You want to implement a function that returns the total remuneration based on the salary object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function totalSalary(salaryObject: ???) {\n  let total = 0;\n  for (const name in salaryObject) {\n    total += salaryObject[name];\n  }\n  return total;\n}\ntotalSalary(salary1); // => 60 000\ntotalSalary(salary2); // => 75 000\n")),(0,a.kt)("p",null,"In this case an index signature fits perfectly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function totalSalary(salaryObject: { [key: string]: number }) {\n  let total = 0;\n  for (const name in salaryObject) {\n    total += salaryObject[name];\n  }\n  return total;\n}\n \ntotalSalary(salary1); // => 60 000\ntotalSalary(salary2); // => 75 000\n")))}d.isMDXComponent=!0}}]);