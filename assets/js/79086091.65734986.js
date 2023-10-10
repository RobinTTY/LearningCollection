"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"intro",title:"Introduction",sidebar_position:1},o=void 0,s={unversionedId:"web/lit/intro",id:"web/lit/intro",title:"Introduction",description:"Lit is a simple library for building fast, lightweight web components. At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.",source:"@site/docs/web/lit/introduction.md",sourceDirName:"web/lit",slug:"/web/lit/intro",permalink:"/LearningCollection/web/lit/intro",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/lit/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Introduction",sidebar_position:1},sidebar:"finance",previous:{title:"Scheduling Updates",permalink:"/LearningCollection/web/react/react-internals/schedulingUpdates"},next:{title:"Components",permalink:"/LearningCollection/web/lit/components"}},l={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Important Concepts",id:"important-concepts",level:2},{value:"Advantages",id:"advantages",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lit is a simple library for building fast, lightweight web components. At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive."),(0,i.kt)("p",null,"Lit components are web components, so they act like regular HTML elements. You can add them to a page with simple HTML tags, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<my-element></my-element>\n")),(0,i.kt)("p",null,"Each Lit component is a self-contained unit of UI, assembled from smaller building blocks: standard HTML elements and other web components. In turn, each Lit component is itself a building block that can be used\u2013within an HTML document, another web component, or a framework component\u2013to build larger and more complex interfaces."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"You can build just about any kind of web UI with Lit. Web components have the superpower of interoperability: natively supported by browsers, web components can be used in any HTML environment, with any framework or none at all."),(0,i.kt)("p",null,"This makes Lit an ideal choice for developing ",(0,i.kt)("strong",{parentName:"p"},"shareable components or design systems"),". Lit components can be used across multiple apps and sites, even if those apps and sites are built on a variety of front-end stacks. Site developers using Lit components don\u2019t need to write or even see any Lit code; they can just use the components the same way they do built-in HTML elements."),(0,i.kt)("p",null,"Of course, you can also build ",(0,i.kt)("strong",{parentName:"p"},"highly interactive, feature-rich apps")," out of Lit components, just as you would with a framework like React or Vue. Lit\u2019s capabilities and developer experience are comparable to these popular alternatives, but Lit minimizes lock-in, maximizes flexibility and promotes maintainability by embracing the browser\u2019s native component model."),(0,i.kt)("h2",{id:"important-concepts"},"Important Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lit's main feature is the ",(0,i.kt)("inlineCode",{parentName:"li"},"LitElement")," base class, a convenient and versatile extension of the native ",(0,i.kt)("inlineCode",{parentName:"li"},"HTMLElement"),". You extend from it to define your own components."),(0,i.kt)("li",{parentName:"ul"},"Lit\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://lit.dev/docs/templates/overview/"},"expressive, declarative templates")," (utilizing JavaScript tagged template literals) make it easy to describe how a component should be rendered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lit.dev/docs/components/properties/"},"Reactive properties")," represent a component\u2019s public API and/or internal state; your component automatically re-renders whenever a reactive property changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lit.dev/docs/components/styles"},"Styles")," are scoped by default, keeping your CSS selectors simple and ensuring that your component\u2019s styling won\u2019t pollute (or be polluted by) the surrounding context."),(0,i.kt)("li",{parentName:"ul"},"Lit works great in vanilla JavaScript, or you can use TypeScript for even better ergonomics by using decorators and type declarations.")),(0,i.kt)("p",null,"Lit doesn\u2019t require compilation or building during development, so it can be used virtually tool-free if you prefer. First-class ",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/tools/development/#ide-plugins"},"IDE support")," (code-completion, linting, etc.) and ",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/tools/production/"},"tooling for production")," (localization, template minification, etc.) are readily available."),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple:")," Building on top of the Web Components standards, Lit adds just what you need to be happy and productive: reactivity, declarative templates and a handful of thoughtful features to reduce boilerplate and make your job easier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast:")," Updates are fast, because Lit keeps track of your UI\u2019s dynamic parts and updates only those when the underlying state changes\u2013no need to rebuild a whole virtual tree and diff it with the current state of the DOM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Leightweight:")," Weighing in at around 5 KB (minified and compressed), Lit helps keep bundle sizes small and loading times short.")))}u.isMDXComponent=!0}}]);