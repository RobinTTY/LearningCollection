"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1062],{9684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(4848),r=t(8453);const i={id:"rendering-lists",title:"Rendering Lists",sidebar_position:6},s=void 0,o={id:"web/react/core-concepts/describing-ui/rendering-lists",title:"Rendering Lists",description:"You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data. On this page, you\u2019ll use filter() and map() with React to filter and transform your array of data into an array of components.",source:"@site/docs/web/react/core-concepts/describing-ui/rendering-lists.md",sourceDirName:"web/react/core-concepts/describing-ui",slug:"/web/react/core-concepts/describing-ui/rendering-lists",permalink:"/LearningCollection/web/react/core-concepts/describing-ui/rendering-lists",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/core-concepts/describing-ui/rendering-lists.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"rendering-lists",title:"Rendering Lists",sidebar_position:6},sidebar:"docs",previous:{title:"Conditional Rendering",permalink:"/LearningCollection/web/react/core-concepts/describing-ui/conditional-rendering"},next:{title:"Keeping Components Pure",permalink:"/LearningCollection/web/react/core-concepts/describing-ui/keeping-components-pure"}},l={},c=[{value:"Rendering data from arrays",id:"rendering-data-from-arrays",level:2},{value:"Where to get your <code>key</code>",id:"where-to-get-your-key",level:2},{value:"Rules of keys",id:"rules-of-keys",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You will often want to display multiple similar components from a collection of data. You can use the ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array#",children:"JavaScript array methods"})," to manipulate an array of data. On this page, you\u2019ll use ",(0,a.jsx)(n.code,{children:"filter()"})," and ",(0,a.jsx)(n.code,{children:"map()"})," with React to filter and transform your array of data into an array of components."]}),"\n",(0,a.jsx)(n.h2,{id:"rendering-data-from-arrays",children:"Rendering data from arrays"}),"\n",(0,a.jsx)(n.p,{children:"Say that you have a list of content:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"<ul>\n  <li>Creola Katherine Johnson: mathematician</li>\n  <li>Mario Jos\xe9 Molina-Pasquel Henr\xedquez: chemist</li>\n  <li>Mohammad Abdus Salam: physicist</li>\n  <li>Percy Lavon Julian: chemist</li>\n  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>\n</ul>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like ",(0,a.jsx)(n.code,{children:"map()"})," and ",(0,a.jsx)(n.code,{children:"filter()"})," to render lists of components from them."]}),"\n",(0,a.jsx)(n.p,{children:"Here\u2019s a short example of how to generate a list of items from an array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const people = [\n  'Creola Katherine Johnson: mathematician',\n  'Mario Jos\xe9 Molina-Pasquel Henr\xedquez: chemist',\n  'Mohammad Abdus Salam: physicist',\n  'Percy Lavon Julian: chemist',\n  'Subrahmanyan Chandrasekhar: astrophysicist'\n];\n\nexport default function List() {\n  const listItems = people.map(person =>\n    <li>{person}</li>\n  );\n  return <ul>{listItems}</ul>;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Each item should have a ",(0,a.jsx)(n.code,{children:"key"})," prop. This is left out here for brevity. Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree. Rather than generating keys on the fly, you should include them in your data."]}),"\n",(0,a.jsxs)(n.h2,{id:"where-to-get-your-key",children:["Where to get your ",(0,a.jsx)(n.code,{children:"key"})]}),"\n",(0,a.jsx)(n.p,{children:"Different sources of data provide different sources of keys:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Data from a database:"})," If your data is coming from a database, you can use the database keys/IDs, which are unique by nature."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Locally generated data:"})," If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID",children:"crypto.randomUUID()"})," or a package like ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/uuid",children:"uuid"})," when creating items."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"rules-of-keys",children:"Rules of keys"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Keys must be unique among siblings."})," However, it\u2019s okay to use the same keys for JSX nodes in different arrays."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Keys must not change"})," or that defeats their purpose! Don\u2019t generate them while rendering."]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["You might be tempted to use an item\u2019s index in the array as its key. In fact, that\u2019s what React will use if you don\u2019t specify a ",(0,a.jsx)(n.code,{children:"key"})," at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs."]}),(0,a.jsxs)(n.p,{children:["Similarly, do not generate keys on the fly, e.g. with ",(0,a.jsx)(n.code,{children:"key={Math.random()}"}),". This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data."]}),(0,a.jsxs)(n.p,{children:["Note that your components won\u2019t receive ",(0,a.jsx)(n.code,{children:"key"})," as a prop. It\u2019s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: ",(0,a.jsx)(n.code,{children:"<Profile key={id} userId={id} />"}),"."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);