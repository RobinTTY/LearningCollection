"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[743],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=s,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:s,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(7462),s=(t(7294),t(3905));const r={id:"functionalVsClassComponents",title:"Functional vs Class Components",sidebar_position:4},a=void 0,c={unversionedId:"web/react/core-concepts/functionalVsClassComponents",id:"web/react/core-concepts/functionalVsClassComponents",title:"Functional vs Class Components",description:"In the world of React, there are two basic ways of writing a React component. One uses a function and the other uses a class. With the introduction of React hooks, the React team pushes the use of functional components whenever possible (which better follows JavaScript's functional nature).",source:"@site/docs/web/react/core-concepts/Functional vs Class Components.md",sourceDirName:"web/react/core-concepts",slug:"/web/react/core-concepts/functionalVsClassComponents",permalink:"/LearningCollection/web/react/core-concepts/functionalVsClassComponents",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/core-concepts/Functional vs Class Components.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"functionalVsClassComponents",title:"Functional vs Class Components",sidebar_position:4},sidebar:"docs",previous:{title:"Styling Components",permalink:"/LearningCollection/web/react/core-concepts/stylingComponents"},next:{title:"Context",permalink:"/LearningCollection/web/react/advanced-concepts/context"}},i={},l=[{value:"Example",id:"example",level:2},{value:"Functional Component",id:"functional-component",level:3},{value:"Class Component",id:"class-component",level:3}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the world of React, there are two basic ways of writing a React component. One uses a function and the other uses a class. With the introduction of ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks"),", the React team pushes the use of functional components whenever possible (which better follows JavaScript's functional nature)."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html#motivation"},"motivation")," behind this move is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It\u2019s hard to reuse stateful logic between components"),(0,s.kt)("li",{parentName:"ul"},"Complex components become hard to understand"),(0,s.kt)("li",{parentName:"ul"},"Classes confuse both people and machines")),(0,s.kt)("p",null,"A functional component with hooks can do ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"},"almost")," everything a class component can do, without any of the draw backs mentioned above. Where we still need class components is for instance for ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries"},"error boundaries"),"."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("h3",{id:"functional-component"},"Functional Component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Component } from "react";\n\nimport User from "./User";\nimport classes from "./Users.module.css";\n\nconst DUMMY_USERS = [\n  { id: "u1", name: "John" },\n  { id: "u2", name: "Jess" },\n  { id: "u3", name: "Lia" },\n];\n\nconst Users = () => {\n  const [showUsers, setShowUsers] = useState(true);\n\n  const toggleUsersHandler = () => {\n    setShowUsers((curState) => !curState);\n  };\n\n  const usersList = (\n    <ul>\n      {DUMMY_USERS.map((user) => (\n        <User key={user.id} name={user.name} />\n      ))}\n    </ul>\n  );\n\n  return (\n    <div className={classes.users}>\n      <button onClick={toggleUsersHandler}>\n        {showUsers ? "Hide" : "Show"} Users\n      </button>\n      {showUsers && usersList}\n    </div>\n  );\n};\n\nexport default Users;\n')),(0,s.kt)("h3",{id:"class-component"},"Class Component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Component } from "react";\n\nimport User from "./User";\nimport classes from "./Users.module.css";\n\nconst DUMMY_USERS = [\n  { id: "u1", name: "Max" },\n  { id: "u2", name: "Manuel" },\n  { id: "u3", name: "Julie" },\n];\n\nclass Users extends Component {\n  constructor() {\n    super();\n    this.state = {\n      showUsers: true,\n      more: "Test",\n    };\n  }\n\n  toggleUsersHandler() {\n    // this.state.showUsers = false; // NOT!\n    this.setState((curState) => {\n      return { showUsers: !curState.showUsers };\n    });\n  }\n\n  render() {\n    const usersList = (\n      <ul>\n        {DUMMY_USERS.map((user) => (\n          <User key={user.id} name={user.name} />\n        ))}\n      </ul>\n    );\n\n    return (\n      <div className={classes.users}>\n        <button onClick={this.toggleUsersHandler.bind(this)}>\n          {this.state.showUsers ? "Hide" : "Show"} Users\n        </button>\n        {this.state.showUsers && usersList}\n      </div>\n    );\n  }\n}\n\nexport default Users;\n')))}m.isMDXComponent=!0}}]);