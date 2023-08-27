"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"useContext",title:"useContext",sidebar_position:3},i=void 0,s={unversionedId:"Web/React/Hooks/useContext",id:"Web/React/Hooks/useContext",title:"useContext",description:"The useContext Hook provides the same functionality as the Context API, just packaged up into a simple to use Hook that you can use inside functional components. The hook makes our code more readable and compact. Refer to the Context API documentation for details on when to use context.",source:"@site/docs/Web/React/Hooks/useContext.md",sourceDirName:"Web/React/Hooks",slug:"/Web/React/Hooks/useContext",permalink:"/LearningCollection/Web/React/Hooks/useContext",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/useContext.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"useContext",title:"useContext",sidebar_position:3},sidebar:"finance",previous:{title:"useEffect",permalink:"/LearningCollection/Web/React/Hooks/useEffect"},next:{title:"useReducer",permalink:"/LearningCollection/Web/React/Hooks/useReducer"}},l={},c=[{value:"useContext hook vs classic API",id:"usecontext-hook-vs-classic-api",level:2},{value:"Creating context",id:"creating-context",level:2},{value:"Providing Context",id:"providing-context",level:2},{value:"Consuming context",id:"consuming-context",level:2},{value:"Example with a consumer component",id:"example-with-a-consumer-component",level:3},{value:"Example with the useContext hook",id:"example-with-the-usecontext-hook",level:3},{value:"Creating a separate context component",id:"creating-a-separate-context-component",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," Hook provides the same functionality as the ",(0,a.kt)("a",{parentName:"p",href:"../Advanced%20Concepts/Context"},"Context API"),", just packaged up into a simple to use Hook that you can use inside functional components. The hook makes our code more readable and compact. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"../Advanced%20Concepts/Context"},"Context API documentation")," for details on when to use context."),(0,a.kt)("h2",{id:"usecontext-hook-vs-classic-api"},"useContext hook vs classic API"),(0,a.kt)("p",null,"If we were to write our component with the context API, we would consume context like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,9}","{3,9}":!0},"const Book = ({ item }) => {\n  return (\n    <CurrencyContext.Consumer>\n      {(currency) => (\n        <li>\n          {item.title} - {item.price} {currency}\n        </li>\n      )}\n    </CurrencyContext.Consumer>\n  );\n};\n")),(0,a.kt)("p",null,"If we are using the useContext hook instead, it looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,6}","{2,6}":!0},"const Book = ({ item }) => {\n  const currency = React.useContext(CurrencyContext);\n\n  return (\n    <li>\n      {item.title} - {item.price} {currency}\n    </li>\n  );\n};\n")),(0,a.kt)("p",null,"React's ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," Hook takes the Context as parameter to retrieve the value from it. Using the React Hook instead of the Consumer component makes the code more readable, less verbose, and doesn't introduce a component (here Consumer component) in between."),(0,a.kt)("p",null,"A component calling ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," will always re-render when the context value changes. If re-rendering the component is expensive, you can ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"},"optimize it by using memoization"),"."),(0,a.kt)("h2",{id:"creating-context"},"Creating context"),(0,a.kt)("p",null,"To create a context object we use ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/store/auth-context.js"',title:'"/store/auth-context.js"'},"const AuthContext = React.createContext({\n    isLoggedIn: false;\n});\n\nexport default AuthContext;\n")),(0,a.kt)("p",null,"In this example we handle the information whether or not a user is currently logged in. We provide the default value ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," which will only be used if when there is no provider. Otherwise we need to define the default value in the provider."),(0,a.kt)("h2",{id:"providing-context"},"Providing Context"),(0,a.kt)("p",null,"To provide context to components at any point down the component tree, we need provide it as a parent to those components. Components will receive the context an arbitrary number of levels down the tree. In this example we provide the context in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," since the authorization context is interesting for all components in our application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {6-10,16}',title:'"App.js"',"{6-10,16}":!0},"import AuthContext from './store/auth-context';\n\n...\n\nreturn (\n    <AuthContext.Provider\n      value={{\n        isLoggedIn: false,\n      }}\n    >\n      <MainHeader onLogout={logoutHandler} />\n      <main>\n        {!isLoggedIn && <Login onLogin={loginHandler} />}\n        {isLoggedIn && <Home onLogout={logoutHandler} />}\n      </main>\n    </AuthContext.Provider>\n  );\n")),(0,a.kt)("p",null,"Now we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthContext")," in any component inside ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),". The initial value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You need the provider component to be able to change the context value. If you don't have a provider, consumers will always consume the default value specified through the ",(0,a.kt)("inlineCode",{parentName:"p"},"createContext")," hook.")),(0,a.kt)("h2",{id:"consuming-context"},"Consuming context"),(0,a.kt)("p",null,"There are two ways to consume the provided context. Either we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," component or we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," Hook. Usually we will want to use the hook."),(0,a.kt)("h3",{id:"example-with-a-consumer-component"},"Example with a consumer component"),(0,a.kt)("p",null,"Before React 16.8 the only way to consume the context was through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," component, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/MainHeader/Navigation.js" {8-9,13,18,23,28,32}',title:'"components/MainHeader/Navigation.js"',"{8-9,13,18,23,28,32}":!0},'import React, { useContext } from "react";\n\nimport AuthContext from "../../store/auth-context";\nimport classes from "./Navigation.module.css";\n\nconst Navigation = (props) => {\n  return (\n    <AuthContext.Consumer>\n      {(context) => {\n        return (\n          <nav className={classes.nav}>\n            <ul>\n              {context.isLoggedIn && (\n                <li>\n                  <a href="/">Users</a>\n                </li>\n              )}\n              {context.isLoggedIn && (\n                <li>\n                  <a href="/">Admin</a>\n                </li>\n              )}\n              {context.isLoggedIn && (\n                <li>\n                  <button onClick={props.onLogout}>Logout</button>\n                </li>\n              )}\n            </ul>\n          </nav>\n        );\n      }}\n    </AuthContext.Consumer>\n  );\n};\n\nexport default Navigation;\n')),(0,a.kt)("h3",{id:"example-with-the-usecontext-hook"},"Example with the useContext hook"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hook to consume the context makes our code a little bit more concise:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/MainHeader/Navigation.js" {7,12,17,22}',title:'"components/MainHeader/Navigation.js"',"{7,12,17,22}":!0},'import React, { useContext } from "react";\n\nimport AuthContext from "../../store/auth-context";\nimport classes from "./Navigation.module.css";\n\nconst Navigation = (props) => {\n  const context = useContext(AuthContext);\n\n  return (\n    <nav className={classes.nav}>\n      <ul>\n        {context.isLoggedIn && (\n          <li>\n            <a href="/">Users</a>\n          </li>\n        )}\n        {context.isLoggedIn && (\n          <li>\n            <a href="/">Admin</a>\n          </li>\n        )}\n        {context.isLoggedIn && (\n          <li>\n            <button onClick={props.onLogout}>Logout</button>\n          </li>\n        )}\n      </ul>\n    </nav>\n  );\n};\n\nexport default Navigation;\n')),(0,a.kt)("h2",{id:"creating-a-separate-context-component"},"Creating a separate context component"),(0,a.kt)("p",null,"You might want to pull more logic out of for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component and create a separate context management component, to make the code a bit more readable. We could do it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="store/auth-context.js" {10-11,24-32}',title:'"store/auth-context.js"',"{10-11,24-32}":!0},'import React, { useState, useEffect } from "react";\n\nconst AuthContext = React.createContext({\n  isLoggedIn: false,\n  onLogout: () => {},\n  onLogin: (email, password) => {},\n});\n\nexport const AuthContextProvider = (props) => {\n  // this is a good place to handle our state for the auth context\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  ...\n\n  const logoutHandler = () => {\n    ...\n  };\n\n  const loginHandler = () => {\n    ...\n  };\n\n  return (\n    <AuthContext.Provider\n      value={{\n        isLoggedIn: isLoggedIn,\n        onLogout: logoutHandler,\n        onLogin: loginHandler,\n      }}\n    >\n      {props.children}\n    </AuthContext.Provider>\n  );\n};\n\nexport default AuthContext;\n')),(0,a.kt)("p",null,"Now we can use the component like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},"...\nimport App from './App';\nimport { AuthContextProvider } from './store/auth-context';\n\nReactDOM.render(\n  <AuthContextProvider>\n    <App />\n  </AuthContextProvider>,\n  document.getElementById('root')\n);\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthContextProvider")," component will provide our authorization context throughout the application."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RobinTTY/LearningCollection/tree/master/Web/React/in%20depth%20guide/06_Effects_Reducers_Context/src"},"Github Repo")," for the full code."))}m.isMDXComponent=!0}}]);