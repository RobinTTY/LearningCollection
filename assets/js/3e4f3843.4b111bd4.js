"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5696],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"errorBoundaries",title:"Error Boundaries",sidebar_position:5},c=void 0,d={unversionedId:"Web/React/Advanced Concepts/errorBoundaries",id:"Web/React/Advanced Concepts/errorBoundaries",isDocsHomePage:!1,title:"Error Boundaries",description:"Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",source:"@site/docs/Web/React/Advanced Concepts/Error Boundaries.md",sourceDirName:"Web/React/Advanced Concepts",slug:"/Web/React/Advanced Concepts/errorBoundaries",permalink:"/LearningCollection/Web/React/Advanced Concepts/errorBoundaries",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Advanced Concepts/Error Boundaries.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"errorBoundaries",title:"Error Boundaries",sidebar_position:5},sidebar:"mySidebar",previous:{title:"React.memo",permalink:"/LearningCollection/Web/React/Advanced Concepts/reactMemo"},next:{title:"HTTP Requests in React",permalink:"/LearningCollection/Web/React/Related Concepts/httpRequestsInReact"}},l=[{value:"componentDidCatch()",id:"componentdidcatch",children:[{value:"Syntax",id:"syntax",children:[]}]},{value:"static getDerivedStateFromError()",id:"static-getderivedstatefromerror",children:[{value:"Syntax",id:"syntax-1",children:[]}]},{value:"Example",id:"example",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Error boundaries are React components that ",(0,o.kt)("strong",{parentName:"p"},"catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI")," instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Error boundaries do ",(0,o.kt)("strong",{parentName:"p"},"not")," catch errors for:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Event handlers (see ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers"},"documentation"),")"),(0,o.kt)("li",{parentName:"ul"},"Asynchronous code (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," callbacks)"),(0,o.kt)("li",{parentName:"ul"},"Server side rendering"),(0,o.kt)("li",{parentName:"ul"},"Errors thrown in the error boundary itself (rather than its children)")))),(0,o.kt)("p",null,"A class component becomes an error boundary if it defines either (or both) of the lifecycle methods ",(0,o.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()"),". Use ",(0,o.kt)("inlineCode",{parentName:"p"},"static getDerivedStateFromError()")," to render a fallback UI after an error has been thrown. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()")," to log error information. Error boundaries work like a JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"catch {}")," block, but for components."),(0,o.kt)("h2",{id:"componentdidcatch"},"componentDidCatch()"),(0,o.kt)("p",null,"This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," - The error that was thrown"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info")," - An object with a componentStack key containing ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html#component-stack-traces"},"information about which component threw the error"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()")," is called during the \u201ccommit\u201d phase, so side-effects are permitted. It should be used for things like logging errors."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Production and development builds of React slightly differ in the way ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()")," handles errors. On development, the errors will bubble up to ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),", this means that any ",(0,o.kt)("inlineCode",{parentName:"p"},"window.onerror")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"window.addEventListener('error', callback)")," will intercept the errors that have been caught by ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()"),". On production, instead, the errors will not bubble up, which means any ancestor error handler will only receive errors not explicitly caught by ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()"),"."))),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidCatch(error, info);\n")),(0,o.kt)("h2",{id:"static-getderivedstatefromerror"},"static getDerivedStateFromError()"),(0,o.kt)("p",null,"This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromError()")," is called during the \u201crender\u201d phase, so side-effects are not permitted. For those use cases, use ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidCatch()")," instead."))),(0,o.kt)("h3",{id:"syntax-1"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static getDerivedStateFromError(error);\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Define the error boundary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  // invoked after an error has been thrown by a descendant component\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n")),(0,o.kt)("p",null,"Then you can use it as a regular component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<ErrorBoundary>\n  <MyWidget />\n</ErrorBoundary>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Error boundaries ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"},"cannot be implemented as functional components")," as of today. There is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/19630#issuecomment-675390931"},"no timeline")," for the implementation as a hook."))))}m.isMDXComponent=!0}}]);