"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9819],{8443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(4848),o=t(8453);const i={id:"ienumerable",title:"IEnumerable",sidebar_position:1},s=void 0,a={id:"csharp/core-concepts/interfaces/ienumerable",title:"IEnumerable",description:"- Exposes an enumerator, which supports a simple iteration over a non-generic collection",source:"@site/docs/csharp/core-concepts/interfaces/IEnumerable.md",sourceDirName:"csharp/core-concepts/interfaces",slug:"/csharp/core-concepts/interfaces/ienumerable",permalink:"/LearningCollection/csharp/core-concepts/interfaces/ienumerable",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/interfaces/IEnumerable.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ienumerable",title:"IEnumerable",sidebar_position:1},sidebar:"docs",previous:{title:"Range Operator (..)",permalink:"/LearningCollection/csharp/core-concepts/operators/range-operator"},next:{title:"Inheritance",permalink:"/LearningCollection/csharp/core-concepts/inheritance"}},c={},l=[{value:"LINQ",id:"linq",level:2}];function u(e){const n={h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exposes an enumerator, which supports a simple iteration over a non-generic collection"}),"\n",(0,r.jsx)(n.li,{children:"They are implemented to support the use of foreach to iterate through the collection"}),"\n",(0,r.jsx)(n.li,{children:"Basically IEnumerable has a method to get the next item in the collection. It doesn't need the whole collection to be in memory and doesn't know how many items are in it, foreach just keeps getting the next item until it runs out."}),"\n",(0,r.jsx)(n.li,{children:"This can be very useful in certain circumstances, for instance in a massive database table you don't want to copy the entire thing into memory before you start processing the rows."}),"\n",(0,r.jsx)(n.li,{children:"IEnumerable is the base interface for all non-generic collections that can be enumerated"}),"\n",(0,r.jsx)(n.li,{children:"IEnumerable contains a single method, GetEnumerator, which returns an IEnumerator. IEnumerator provides the ability to iterate through the collection by exposing a Current property and MoveNext and Reset methods"}),"\n",(0,r.jsx)(n.li,{children:"It is a best practice to implement IEnumerable and IEnumerator on your collection classes to enable the foreach syntax, however implementing IEnumerable is not required"}),"\n",(0,r.jsx)(n.li,{children:"If your collection does not implement IEnumerable, you must still follow the iterator pattern to support this syntax by providing a GetEnumerator method that returns an interface, class or struct"}),"\n",(0,r.jsx)(n.li,{children:"List implements IEnumerable, but represents the entire collection in memory. If you have an IEnumerable and you call .ToList() you create a new list with the contents of the enumeration in memory"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"linq",children:"LINQ"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linq expressions return an enumeration, and by default the expression executes when you iterate through using the foreach"}),"\n",(0,r.jsx)(n.li,{children:"An IEnumerable linq statement executes when you iterate the foreach, but you can force it to iterate sooner using .ToList()"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);