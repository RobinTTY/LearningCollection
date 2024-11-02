"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[909],{64:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(4848),s=r(8453);const i={id:"generics",title:"Generics",sidebar_position:7},a=void 0,c={id:"web/typescript/advanced-concepts/generics",title:"Generics",description:"Generics are used to create reusable components. They are able to work over a variety of types rather than a single one.",source:"@site/docs/web/typescript/advanced-concepts/generics.md",sourceDirName:"web/typescript/advanced-concepts",slug:"/web/typescript/advanced-concepts/generics",permalink:"/LearningCollection/web/typescript/advanced-concepts/generics",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/advanced-concepts/generics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"generics",title:"Generics",sidebar_position:7},sidebar:"docs",previous:{title:"Nullish Coalescing",permalink:"/LearningCollection/web/typescript/advanced-concepts/nullish-coalescing"},next:{title:"Partial<Type>",permalink:"/LearningCollection/web/typescript/utility-types/partial"}},o={},l=[{value:"Generic Types",id:"generic-types",level:2},{value:"Generic Interfaces",id:"generic-interfaces",level:2},{value:"Generic Classes",id:"generic-classes",level:2},{value:"Generic Constraints",id:"generic-constraints",level:2},{value:"Using Type Parameters in Generic Constraints",id:"using-type-parameters-in-generic-constraints",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Generics are used to create reusable components. They are able to work over a variety of types rather than a single one."}),"\n",(0,t.jsxs)(n.p,{children:["An example of a generic is the type ",(0,t.jsx)(n.code,{children:"Array"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let list: Array<number> = [1, 2, 3];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Array"})," type is generic, so it works over a range of types rather than a single one. Here, we've told TypeScript that ",(0,t.jsx)(n.code,{children:"list"})," should be an array of numbers. We could have also created an array of strings, booleans, or any other type."]}),"\n",(0,t.jsx)(n.h2,{id:"generic-types",children:"Generic Types"}),"\n",(0,t.jsx)(n.p,{children:"Below we define a generic identity function that works over a range of types. The type of this generic function is just like those of a non-generic function, with the type parameters listed first, similarly to function declarations:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function identity<T>(arg: T): T {\n  return arg;\n}\n\nlet myIdentity: <T>(arg: T) => T = identity;\n"})}),"\n",(0,t.jsx)(n.p,{children:"We could also have used a different name for the generic type parameter in the type, so long as the number of type variables and how the type variables are used line up."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function identity<Type>(arg: Type): Type {\n  return arg;\n}\n\nlet myIdentity: <Input>(arg: Input) => Input = identity;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"generic-interfaces",children:"Generic Interfaces"}),"\n",(0,t.jsx)(n.p,{children:"The generic type can also be used with the interface. The following is a generic interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IProcessor<T>\n{\n    result: T;\n    process(a: T, b: T) => T;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The above ",(0,t.jsx)(n.code,{children:"IProcessor"})," is a generic interface because we used type variable ",(0,t.jsx)(n.code,{children:"<T>"}),". The ",(0,t.jsx)(n.code,{children:"IProcessor"})," interface includes the generic field ",(0,t.jsx)(n.code,{children:"result"})," and the generic method ",(0,t.jsx)(n.code,{children:"process()"})," that accepts two generic type parameters and returns a generic type."]}),"\n",(0,t.jsx)(n.p,{children:"Another example would be a KeyValuePair interface:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'interface KeyPair<T, U> {\n  key: T;\n  value: U;\n}\n\nlet kv1: KeyPair<number, string> = { key: 1, value: "Steve" }; // OK\nlet kv2: KeyPair<number, number> = { key: 1, value: 12345 }; // OK\n'})}),"\n",(0,t.jsx)(n.h2,{id:"generic-classes",children:"Generic Classes"}),"\n",(0,t.jsxs)(n.p,{children:["A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (",(0,t.jsx)(n.code,{children:"<>"}),") following the name of the class:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class GenericNumber<NumType> {\n  zeroValue: NumType;\n  add: (x: NumType, y: NumType) => NumType;\n}\n\nlet myGenericNumber = new GenericNumber<number>();\nmyGenericNumber.zeroValue = 0;\nmyGenericNumber.add = function (x, y) {\n  return x + y;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"We could have instead used string or even more complex objects:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let stringNumeric = new GenericNumber<string>();\nstringNumeric.zeroValue = "";\nstringNumeric.add = function (x, y) {\n  return x + y;\n};\n\nconsole.log(stringNumeric.add(stringNumeric.zeroValue, "test"));\n'})}),"\n",(0,t.jsx)(n.h2,{id:"generic-constraints",children:"Generic Constraints"}),"\n",(0,t.jsx)(n.p,{children:"You may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have."}),"\n",(0,t.jsx)(n.p,{children:"Consider the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function merge<U, V>(obj1: U, obj2: V) {\n  return {\n    ...obj1,\n    ...obj2,\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"merge()"})," is a generic function that merges two objects like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let person = merge({ name: \"John\" }, { age: 25 });\n\nconsole.log(result); // { name: 'John', age: 25 }\n"})}),"\n",(0,t.jsx)(n.p,{children:"It works perfectly fine. However, it doesn\u2019t prevent you from passing a non-object like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let person = merge({ name: \"John\" }, 25);\n\nconsole.log(result); // { name: 'John' }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Instead of working with all types, you may want to add a constraint to the ",(0,t.jsx)(n.code,{children:"merge()"})," function so that it works with objects only:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function merge<U extends object, V extends object>(obj1: U, obj2: V) {\n  return {\n    ...obj1,\n    ...obj2,\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Because the ",(0,t.jsx)(n.code,{children:"merge()"})," function is now constrained, it will no longer work with all types. Instead, it works with the ",(0,t.jsx)(n.code,{children:"object"})," type only."]}),"\n",(0,t.jsx)(n.h3,{id:"using-type-parameters-in-generic-constraints",children:"Using Type Parameters in Generic Constraints"}),"\n",(0,t.jsxs)(n.p,{children:["We can use the ",(0,t.jsx)(n.code,{children:"keyof"})," operator to declare a type parameter that is constrained by another type parameter. For example, here we\u2019d like to get a property from an object given its name. We\u2019d like to ensure that we\u2019re not accidentally grabbing a property that does not exist on the ",(0,t.jsx)(n.code,{children:"obj"}),", so we\u2019ll place a constraint between the two types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {\n  return obj[key];\n}\n\nlet x = { a: 1, b: 2, c: 3, d: 4 };\n\ngetProperty(x, "a");\n// Error: "m" does not exist on x\ngetProperty(x, "m");\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);