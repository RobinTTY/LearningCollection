"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"portals",title:"Portals",sidebar_position:3},i=void 0,c={unversionedId:"web/react/advanced-concepts/portals",id:"web/react/advanced-concepts/portals",title:"Portals",description:"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",source:"@site/docs/web/react/advanced-concepts/Portals.md",sourceDirName:"web/react/advanced-concepts",slug:"/web/react/advanced-concepts/portals",permalink:"/LearningCollection/web/react/advanced-concepts/portals",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/advanced-concepts/Portals.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"portals",title:"Portals",sidebar_position:3},sidebar:"docs",previous:{title:"Fragments",permalink:"/LearningCollection/web/react/advanced-concepts/fragments"},next:{title:"React.memo",permalink:"/LearningCollection/web/react/advanced-concepts/reactMemo"}},l={},s=[{value:"Usage",id:"usage",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ReactDOM.createPortal(child, container);\n")),(0,a.kt)("p",null,"The first argument (",(0,a.kt)("inlineCode",{parentName:"p"},"child"),") is any renderable React child, such as an element, string, or fragment. The second argument (",(0,a.kt)("inlineCode",{parentName:"p"},"container"),") is a DOM element."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Normally, when you return an element from a component\u2019s render method, it\u2019s mounted into the DOM as a child of the nearest parent node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  // React mounts a new div and renders the children into it\n  return (\n    <div>\n      {this.props.children}\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"However, sometimes it\u2019s useful to insert a child into a different location in the DOM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  // React does *not* create a new div. It renders the children into `domNode`.\n  // `domNode` is any valid DOM node, regardless of its location in the DOM.\n  return ReactDOM.createPortal(\n    this.props.children,\n    domNode\n  );\n}\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"typical use case")," for portals is when a parent component has an ",(0,a.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"z-index style"),", but you need the ",(0,a.kt)("strong",{parentName:"p"},"child")," to visually ",(0,a.kt)("strong",{parentName:"p"},'"break out" of its container'),". For example, ",(0,a.kt)("strong",{parentName:"p"},"dialogs"),", ",(0,a.kt)("strong",{parentName:"p"},"hovercards"),", and ",(0,a.kt)("strong",{parentName:"p"},"tooltips"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," When working with portals, remember that managing keyboard focus becomes very important."),(0,a.kt)("p",null,"For modal dialogs, ensure that everyone can interact with them by following the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"},"WAI-ARIA Modal Authoring Practices"),"."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://codepen.io/gaearon/pen/yzMaBd"},"Codepen")),(0,a.kt)("p",null,"For more details, see: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},"React Docs")))}m.isMDXComponent=!0}}]);