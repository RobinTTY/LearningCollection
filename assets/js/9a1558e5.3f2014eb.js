"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"context",title:"Context",sidebar_position:2},i=void 0,l={unversionedId:"Web/lit/context",id:"Web/lit/context",title:"Context",description:'Context is a way of making data available to entire component subtrees without having to manually bind properties to every component. The data is "contextually" available, such that ancestor elements in between a provider of data and consumer of data aren\'t aware of it.',source:"@site/docs/Web/lit/lit-context (transfer to pc).md",sourceDirName:"Web/lit",slug:"/Web/lit/context",permalink:"/LearningCollection/Web/lit/context",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/lit/lit-context (transfer to pc).md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"context",title:"Context",sidebar_position:2},sidebar:"finance",previous:{title:"Components",permalink:"/LearningCollection/Web/lit/components"},next:{title:"Docusaurus",permalink:"/LearningCollection/Web/Static Site Generators/docusaurus"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Context definition (logger-context.ts)",id:"context-definition-logger-contextts",level:3},{value:"Provider",id:"provider",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Context Protocol",id:"context-protocol",level:3},{value:"Context Objects",id:"context-objects",level:3},{value:"Providers",id:"providers",level:3},{value:"Consumers",id:"consumers",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Usage",id:"usage",level:2},{value:"Defining a context",id:"defining-a-context",level:3},{value:"Context type-checking",id:"context-type-checking",level:4},{value:"Context equality",id:"context-equality",level:4},{value:"Providing context",id:"providing-context",level:3},{value:"<code>@provide()</code>",id:"provide",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Context is a way of making data available to entire component subtrees without having to manually bind properties to every component. The data is "contextually" available, such that ancestor elements in between a provider of data and consumer of data aren\'t aware of it.'),(0,a.kt)("p",null,"Lit's context implementation is part of Lit Labs and available in the @lit-labs/context package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @lit-labs/context\n")),(0,a.kt)("p",null,"Context is ",(0,a.kt)("strong",{parentName:"p"},"useful for data that needs to be consumed by a wide variety and large number of components")," - things like an app's data store, the current user, a UI theme - or when data-binding isn't an option, such as when an element needs to provide data to its light DOM children."),(0,a.kt)("p",null,"Context is very similar to React's Context, or to dependency injection systems like Angular's, with some important differences that make Context work with the dynamic nature of the DOM, and enable interoperability across different web components libraries, frameworks and plain JavaScript."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Using context involves a context object (sometimes called a key), a provider and a consumer, which communicate using the context object."),(0,a.kt)("h3",{id:"context-definition-logger-contextts"},"Context definition (logger-context.ts)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContext } from "@lit-labs/context";\nimport type { Logger } from "my-logging-library";\nexport type { Logger } from "my-logging-library";\nexport const loggerContext = createContext<Logger>("logger");\n')),(0,a.kt)("h3",{id:"provider"},"Provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { LitElement, property, html } from "lit";\nimport { provide } from "@lit-labs/context";\n\nimport { Logger } from "my-logging-library";\nimport { loggerContext } from "./logger-context.js";\n\n@customElement("my-app")\nclass MyApp extends LitElement {\n  @provide({ context: loggerContext })\n  logger = new Logger();\n\n  render() {\n    return html`...`;\n  }\n}\n')),(0,a.kt)("h3",{id:"consumer"},"Consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { LitElement, property } from "lit";\nimport { consume } from "@lit-labs/context";\n\nimport { type Logger, loggerContext } from "./logger-context.js";\n\nexport class MyElement extends LitElement {\n  @consume({ context: loggerContext })\n  @property({ attribute: false })\n  public logger?: Logger;\n\n  private doThing() {\n    this.logger?.log("A thing was done");\n  }\n}\n')),(0,a.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,a.kt)("h3",{id:"context-protocol"},"Context Protocol"),(0,a.kt)("p",null,"Lit's context is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md"},"Context Community Protocol")," by the W3C's ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/community/webcomponents/"},"Web Components Community Group"),". This protocol enables interoperability between elements (or even non-element code) regardless of how they were built. Via the context protocol, a Lit-based element can provide data to a consumer not built with Lit, or vice versa."),(0,a.kt)("p",null,"The Context Protocol is based on DOM events. A consumer fires a ",(0,a.kt)("inlineCode",{parentName:"p"},"context-request")," event that carries the context key that it wants, and any element above it can listen for the ",(0,a.kt)("inlineCode",{parentName:"p"},"context-request")," event and provide data for that context key. ",(0,a.kt)("inlineCode",{parentName:"p"},"@lit-labs/context")," implements this event-based protocol and makes it available via a few reactive controllers and decorators."),(0,a.kt)("h3",{id:"context-objects"},"Context Objects"),(0,a.kt)("p",null,"Contexts are identified by ",(0,a.kt)("inlineCode",{parentName:"p"},"context objects")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"context keys"),". They are objects that represent some potential data to be shared by the context object identity. You can think of them as similar to Map keys."),(0,a.kt)("h3",{id:"providers"},"Providers"),(0,a.kt)("p",null,"Providers are usually elements (but can be any event handler code) that provide data for specific context keys."),(0,a.kt)("h3",{id:"consumers"},"Consumers"),(0,a.kt)("p",null,"Consumers request data for specific context keys."),(0,a.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"When a consumer requests data for a context, it can tell the provider that it wants to subscribe to changes in the context. If the provider has new data, the consumer will be notified and can automatically update."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"defining-a-context"},"Defining a context"),(0,a.kt)("p",null,"Every usage of context must have a context object to coordinate the data request. This context object represents the identity and type of data that is provided. Context objects are created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export const myContext = createContext(Symbol("my-context"));\n')),(0,a.kt)("p",null,"It is recommended to put context objects in their own module so that they're importable independent of specific providers and consumers."),(0,a.kt)("h4",{id:"context-type-checking"},"Context type-checking"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createContext()")," takes any value and returns it directly. In TypeScript, the value is cast to a typed ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," object, which carries the type of the context value with it. In case of a mistake like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const myContext = createContext<Logger>(Symbol("logger"));\n\nclass MyElement extends LitElement {\n  @provide({ context: myContext })\n  name: string;\n}\n')),(0,a.kt)("p",null,"TypeScript will warn that the type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is not assignable to the type ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger"),"."),(0,a.kt)("h4",{id:"context-equality"},"Context equality"),(0,a.kt)("p",null,"Context objects are used by providers to match a context request event to a value. Contexts are compared with strict equality (===), so a provider will only handle a context request if its context key equals the context key of the request."),(0,a.kt)("p",null,"This means that there are two main ways to create a context object:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With a value that is globally unique, like an object (",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),") or symbol (",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol()"),")"),(0,a.kt)("li",{parentName:"ol"},"With a value that is not globally unique, so that it can be equal under strict equality, like a string(",(0,a.kt)("inlineCode",{parentName:"li"},"'logger'"),") or global symbol (",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol.for('logger')"),")")),(0,a.kt)("p",null,"If you want two separate ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext()")," calls to refer to the same context, then use a key that will be equal under strict equality like a string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// true\ncreateContext("my-context") === createContext("my-context");\n')),(0,a.kt)("p",null,"Beware though that two modules in your app could use the same context key to refer to different objects. To avoid unintended collisions you may want to use a relatively unique string, e.g. like ",(0,a.kt)("inlineCode",{parentName:"p"},"'console-logger'")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"'logger'"),". Usually it's best to use a globally unique context object. Symbols are one of the easiest ways to do this."),(0,a.kt)("h3",{id:"providing-context"},"Providing context"),(0,a.kt)("p",null,"There are two ways in ",(0,a.kt)("inlineCode",{parentName:"p"},"@lit-labs/context")," to provide a context value: the ",(0,a.kt)("inlineCode",{parentName:"p"},"ContextProvider")," controller and the ",(0,a.kt)("inlineCode",{parentName:"p"},"@provide()")," decorator."),(0,a.kt)("h4",{id:"provide"},(0,a.kt)("inlineCode",{parentName:"h4"},"@provide()")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@provide()")," decorator is the easiest way to provide a value if you're using decorators. It creates a ContextProvider controller for you."),(0,a.kt)("p",null,"Decorate a property with ",(0,a.kt)("inlineCode",{parentName:"p"},"@provide()")," and give it the context key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { LitElement, html } from "lit";\nimport { property } from "lit/decorators.js";\nimport { provide } from "@lit-labs/context";\nimport { myContext, MyData } from "./my-context.js";\n\nclass MyApp extends LitElement {\n  @provide({ context: myContext })\n  myData: MyData;\n}\n')),(0,a.kt)("p",null,"You can make the property also a reactive property with ",(0,a.kt)("inlineCode",{parentName:"p"},"@property()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@state()")," so that setting it will update the provider element as well as context consumers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@provide({context: myContext})\n@property({attribute: false})\nmyData: MyData;\n")),(0,a.kt)("p",null,"Context properties are often intended to be private. You can make private properties reactive with ",(0,a.kt)("inlineCode",{parentName:"p"},"@state()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@provide({context: myContext})\n@state()\nprivate _myData: MyData;\n")),(0,a.kt)("p",null,"Making a context property public lets an element provide a public field to its child tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'html`<my-provider-element .myData="${someData}">`</my-provider-element>\n')))}m.isMDXComponent=!0}}]);