"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5593],{2378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(4848),s=t(8453);const o={id:"fragments",title:"Fragments",sidebar_position:2},a=void 0,c={id:"web/react/advanced-concepts/fragments",title:"Fragments",description:"A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",source:"@site/docs/web/react/advanced-concepts/Fragments.md",sourceDirName:"web/react/advanced-concepts",slug:"/web/react/advanced-concepts/fragments",permalink:"/LearningCollection/web/react/advanced-concepts/fragments",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/advanced-concepts/Fragments.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"fragments",title:"Fragments",sidebar_position:2},sidebar:"docs",previous:{title:"Context",permalink:"/LearningCollection/web/react/advanced-concepts/context"},next:{title:"Portals",permalink:"/LearningCollection/web/react/advanced-concepts/portals"}},d={},i=[{value:"Motivation",id:"motivation",level:2},{value:"Short Syntax",id:"short-syntax",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"render() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(n.p,{children:"A common pattern is for a component to return a list of children. Take this example React snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"class Table extends React.Component {\n  render() {\n    return (\n      <table>\n        <tr>\n          <Columns />\n        </tr>\n      </table>\n    );\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<Columns />"})," would need to return multiple ",(0,r.jsx)(n.code,{children:"<td>"})," elements in order for the rendered HTML to be valid. If a parent div was used inside the ",(0,r.jsx)(n.code,{children:"render()"})," of ",(0,r.jsx)(n.code,{children:"<Columns />"}),", then the resulting HTML will be invalid."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"class Columns extends React.Component {\n  render() {\n    return (\n      <div>\n        <td>Hello</td>\n        <td>World</td>\n      </div>\n    );\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["results in a ",(0,r.jsx)(n.code,{children:"<Table />"})," output of:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<table>\n  <tr>\n    <div>\n      <td>Hello</td>\n      <td>World</td>\n    </div>\n  </tr>\n</table>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Fragments solve this problem. Fragments also cut down on the number of wrapping divs that have no other use than fulfilling the JSX syntax requirement."}),"\n",(0,r.jsx)(n.h2,{id:"short-syntax",children:"Short Syntax"}),"\n",(0,r.jsx)(n.p,{children:"There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"class Columns extends React.Component {\n  render() {\n    return (\n      <>\n        <td>Hello</td>\n        <td>World</td>\n      </>\n    );\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"<></>"})," the same way you\u2019d use any other element except that it doesn\u2019t support keys or attributes."]}),"\n",(0,r.jsxs)(n.p,{children:["For more details see: ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/fragments.html",children:"React Docs"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);