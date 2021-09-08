"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3531],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"context",title:"Context",sidebar_position:1},s=void 0,l={unversionedId:"Web/React/Advanced Concepts/context",id:"Web/React/Advanced Concepts/context",isDocsHomePage:!1,title:"Context",description:"Context provides a way to pass data through the component tree without having to pass props down manually at every level.",source:"@site/docs/Web/React/Advanced Concepts/Context.md",sourceDirName:"Web/React/Advanced Concepts",slug:"/Web/React/Advanced Concepts/context",permalink:"/LearningCollection/Web/React/Advanced Concepts/context",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Advanced Concepts/Context.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"context",title:"Context",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Fragments, Portals, Refs",permalink:"/LearningCollection/Web/React/fragmentsPortalsRefs"},next:{title:"useState",permalink:"/LearningCollection/Web/React/Hooks/useState"}},p=[{value:"When to use context",id:"when-to-use-context",children:[]},{value:"API",id:"api",children:[{value:"React.createContext",id:"reactcreatecontext",children:[]},{value:"Context.Provider",id:"contextprovider",children:[]},{value:"Context.Consumer",id:"contextconsumer",children:[]}]},{value:"Using context via Hook",id:"using-context-via-hook",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Context provides a way to pass data through the component tree without having to pass props down manually at every level"),"."),(0,a.kt)("p",null,"In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree."),(0,a.kt)("h2",{id:"when-to-use-context"},"When to use context"),(0,a.kt)("p",null,"Context is designed to share ",(0,a.kt)("strong",{parentName:"p"},"data that can be considered \u201cglobal\u201d")," for a tree of React components, such as the current authenticated user, theme, or preferred language."),(0,a.kt)("p",null,"For example, in the code below we manually thread through a \u201ctheme\u201d prop in order to style the Button component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8-11,14}","{8-11,14}":!0},'class App extends React.Component {\n  render() {\n    return <Toolbar theme="dark" />;\n  }\n}\n\nfunction Toolbar(props) {\n  // The Toolbar component must take an extra "theme" prop\n  // and pass it to the ThemedButton. This can become painful\n  // if every single button in the app needs to know the theme\n  // because it would have to be passed through all components.\n  return (\n    <div>\n      <ThemedButton theme={props.theme} />\n    </div>\n  );\n}\n\nclass ThemedButton extends React.Component {\n  render() {\n    return <Button theme={this.props.theme} />;\n  }\n}\n')),(0,a.kt)("p",null,"Using context, we can avoid passing props through intermediate elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,6-7,9,16,26-27,30}","{1,6-7,9,16,26-27,30}":!0},'// Create a context for the current theme (with "light" as the default).\nconst ThemeContext = React.createContext("light");\n\nclass App extends React.Component {\n  render() {\n    // Use a Provider to pass the current theme to the tree below.\n    // Any component can read it, no matter how deep it is.\n    return (\n      <ThemeContext.Provider value="dark">\n        <Toolbar />\n      </ThemeContext.Provider>\n    );\n  }\n}\n\n// A component in the middle doesn\'t have to pass the theme down explicitly anymore.\nfunction Toolbar() {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nclass ThemedButton extends React.Component {\n  // Assign a contextType to read the current theme context.\n  // React will find the closest theme Provider above and use its value.\n  static contextType = ThemeContext;\n  render() {\n    return <Button theme={this.context} />;\n  }\n}\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"reactcreatecontext"},"React.createContext"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyContext = React.createContext(defaultValue);\n")),(0,a.kt)("p",null,"Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," above it in the tree."),(0,a.kt)("h3",{id:"contextprovider"},"Context.Provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyContext.Provider value={/* some value */}>\n")),(0,a.kt)("p",null,"Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes."),(0,a.kt)("p",null,"The Provider component accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree. All consumers that are descendants of a Provider will re-render whenever the Provider\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop changes. Changes are determined by comparing the new and old values using the same algorithm as ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description"},"Object.is"),"."),(0,a.kt)("h3",{id:"contextconsumer"},"Context.Consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<MyContext.Consumer>\n  {value => /* render something based on the context value */}\n</MyContext.Consumer>\n")),(0,a.kt)("p",null,"A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html#using-props-other-than-render"},"function as a child"),". The function receives the current context value and returns a React node. The ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," argument passed to the function will be equal to the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop of the closest Provider for this context above in the tree."),(0,a.kt)("h2",{id:"using-context-via-hook"},"Using context via Hook"),(0,a.kt)("p",null,"When we are working with functional components we will want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook. More info ",(0,a.kt)("a",{parentName:"p",href:"../Hooks/useContext"},"here"),"."))}d.isMDXComponent=!0}}]);