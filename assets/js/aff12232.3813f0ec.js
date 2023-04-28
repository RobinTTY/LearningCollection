"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8533],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var s=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return t?s.createElement(h,a(a({ref:n},u),{},{components:t})):s.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(7462),o=(t(7294),t(3905));const r={id:"functionalVsClassComponents",title:"Functional vs Class Components",sidebar_position:4},a=void 0,i={unversionedId:"Web/React/Main Concepts/functionalVsClassComponents",id:"Web/React/Main Concepts/functionalVsClassComponents",title:"Functional vs Class Components",description:"In the world of React, there are two basic ways of writing a React component. One uses a function and the other uses a class. With the introduction of React hooks, the React team pushes the use of functional components whenever possible (which better follows JavaScript's functional nature).",source:"@site/docs/Web/React/Main Concepts/Functional vs Class Components.md",sourceDirName:"Web/React/Main Concepts",slug:"/Web/React/Main Concepts/functionalVsClassComponents",permalink:"/LearningCollection/Web/React/Main Concepts/functionalVsClassComponents",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Main Concepts/Functional vs Class Components.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"functionalVsClassComponents",title:"Functional vs Class Components",sidebar_position:4},sidebar:"finance",previous:{title:"Styling Components",permalink:"/LearningCollection/Web/React/Main Concepts/stylingComponents"},next:{title:"Context",permalink:"/LearningCollection/Web/React/Advanced Concepts/context"}},c={},l=[{value:"Example",id:"example",level:2},{value:"Functional Component",id:"functional-component",level:3},{value:"Class Component",id:"class-component",level:3}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the world of React, there are two basic ways of writing a React component. One uses a function and the other uses a class. With the introduction of ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks"),", the React team pushes the use of functional components whenever possible (which better follows JavaScript's functional nature)."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html#motivation"},"motivation")," behind this move is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It\u2019s hard to reuse stateful logic between components"),(0,o.kt)("li",{parentName:"ul"},"Complex components become hard to understand"),(0,o.kt)("li",{parentName:"ul"},"Classes confuse both people and machines")),(0,o.kt)("p",null,"A functional component with hooks can do ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"},"almost")," everything a class component can do, without any of the draw backs mentioned above. Where we still need class components is for instance for ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries"},"error boundaries"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"functional-component"},"Functional Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Component } from "react";\n\nimport User from "./User";\nimport classes from "./Users.module.css";\n\nconst DUMMY_USERS = [\n  { id: "u1", name: "John" },\n  { id: "u2", name: "Jess" },\n  { id: "u3", name: "Lia" },\n];\n\nconst Users = () => {\n  const [showUsers, setShowUsers] = useState(true);\n\n  const toggleUsersHandler = () => {\n    setShowUsers((curState) => !curState);\n  };\n\n  const usersList = (\n    <ul>\n      {DUMMY_USERS.map((user) => (\n        <User key={user.id} name={user.name} />\n      ))}\n    </ul>\n  );\n\n  return (\n    <div className={classes.users}>\n      <button onClick={toggleUsersHandler}>\n        {showUsers ? "Hide" : "Show"} Users\n      </button>\n      {showUsers && usersList}\n    </div>\n  );\n};\n\nexport default Users;\n')),(0,o.kt)("h3",{id:"class-component"},"Class Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Component } from "react";\n\nimport User from "./User";\nimport classes from "./Users.module.css";\n\nconst DUMMY_USERS = [\n  { id: "u1", name: "Max" },\n  { id: "u2", name: "Manuel" },\n  { id: "u3", name: "Julie" },\n];\n\nclass Users extends Component {\n  constructor() {\n    super();\n    this.state = {\n      showUsers: true,\n      more: "Test",\n    };\n  }\n\n  toggleUsersHandler() {\n    // this.state.showUsers = false; // NOT!\n    this.setState((curState) => {\n      return { showUsers: !curState.showUsers };\n    });\n  }\n\n  render() {\n    const usersList = (\n      <ul>\n        {DUMMY_USERS.map((user) => (\n          <User key={user.id} name={user.name} />\n        ))}\n      </ul>\n    );\n\n    return (\n      <div className={classes.users}>\n        <button onClick={this.toggleUsersHandler.bind(this)}>\n          {this.state.showUsers ? "Hide" : "Show"} Users\n        </button>\n        {this.state.showUsers && usersList}\n      </div>\n    );\n  }\n}\n\nexport default Users;\n')))}m.isMDXComponent=!0}}]);