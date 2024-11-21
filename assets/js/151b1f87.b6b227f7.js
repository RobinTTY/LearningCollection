"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7374],{22935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=t(74848),s=t(28453);const r={id:"keeping-components-pure",title:"Keeping Components Pure",sidebar_position:7},i=void 0,a={id:"web/react/core-concepts/describing-ui/keeping-components-pure",title:"Keeping Components Pure",description:"Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.",source:"@site/docs/web/react/core-concepts/describing-ui/keeping-components-pure.md",sourceDirName:"web/react/core-concepts/describing-ui",slug:"/web/react/core-concepts/describing-ui/keeping-components-pure",permalink:"/LearningCollection/web/react/core-concepts/describing-ui/keeping-components-pure",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/react/core-concepts/describing-ui/keeping-components-pure.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"keeping-components-pure",title:"Keeping Components Pure",sidebar_position:7},sidebar:"docs",previous:{title:"Rendering Lists",permalink:"/LearningCollection/web/react/core-concepts/describing-ui/rendering-lists"},next:{title:"Styling Components",permalink:"/LearningCollection/web/react/core-concepts/stylingComponents"}},c={},u=[{value:"Purity: Components as formulas",id:"purity-components-as-formulas",level:2},{value:"Side Effects: (un)intended consequences",id:"side-effects-unintended-consequences",level:2},{value:"Detecting impure calculations with StrictMode",id:"detecting-impure-calculations-with-strictmode",level:2},{value:"Local mutation: Your component\u2019s little secret",id:"local-mutation-your-components-little-secret",level:2},{value:"Where you can cause side effects",id:"where-you-can-cause-side-effects",level:2},{value:"Why does React care about purity?",id:"why-does-react-care-about-purity",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow."}),"\n",(0,o.jsx)(n.h2,{id:"purity-components-as-formulas",children:"Purity: Components as formulas"}),"\n",(0,o.jsxs)(n.p,{children:["In computer science (and especially the world of functional programming), ",(0,o.jsx)(n.a,{href:"https://wikipedia.org/wiki/Pure_function",children:"a pure function"})," is a function with the following characteristics:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"It minds its own business."})," It does not change any objects or variables that existed before it was called."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Same inputs, same output."})," Given the same inputs, a pure function should always return the same result."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["React is designed around this concept. ",(0,o.jsx)(n.strong,{children:"React assumes that every component you write is a pure function."})," This means that React components you write must always return the same JSX given the same inputs."]}),"\n",(0,o.jsx)(n.h2,{id:"side-effects-unintended-consequences",children:"Side Effects: (un)intended consequences"}),"\n",(0,o.jsx)(n.p,{children:"React\u2019s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering\u2014that would make them impure!"}),"\n",(0,o.jsx)(n.p,{children:"Here is a component that breaks this rule:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"let guest = 0;\n\nfunction Cup() {\n  // Bad: changing a preexisting variable!\n  guest = guest + 1;\n  return <h2>Tea cup for guest #{guest}</h2>;\n}\n\nexport default function TeaSet() {\n  return (\n    <>\n      <Cup />\n      <Cup />\n      <Cup />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This component is reading and writing a ",(0,o.jsx)(n.code,{children:"guest"})," variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what\u2019s more, if other components read ",(0,o.jsx)(n.code,{children:"guest"}),", they will produce different JSX, too, depending on when they were rendered! That\u2019s not predictable."]}),"\n",(0,o.jsxs)(n.p,{children:["You can fix this component by passing ",(0,o.jsx)(n.code,{children:"guest"})," as a prop instead:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"function Cup({ guest }) {\n  return <h2>Tea cup for guest #{guest}</h2>;\n}\n\nexport default function TeaSet() {\n  return (\n    <>\n      <Cup guest={1} />\n      <Cup guest={2} />\n      <Cup guest={3} />\n    </>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now your component is pure, as the JSX it returns only depends on the ",(0,o.jsx)(n.code,{children:"guest"})," prop. In general, you should not expect your components to be rendered in any particular order."]}),"\n",(0,o.jsx)(n.h2,{id:"detecting-impure-calculations-with-strictmode",children:"Detecting impure calculations with StrictMode"}),"\n",(0,o.jsxs)(n.p,{children:["In React there are three kinds of inputs that you can read while rendering: ",(0,o.jsx)(n.code,{children:"props"}),", ",(0,o.jsx)(n.code,{children:"state"}),", and ",(0,o.jsx)(n.code,{children:"context"}),". You should always treat these inputs as read-only. When you want to change something in response to user input, you should ",(0,o.jsx)(n.code,{children:"set state"})," instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering."]}),"\n",(0,o.jsxs)(n.p,{children:["React offers a \u201cStrict Mode\u201d in which it calls each component\u2019s function twice during development. ",(0,o.jsx)(n.strong,{children:"By calling the component functions twice, Strict Mode helps find components that break these rules."})," Strict Mode has no effect in production, so it won\u2019t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into ",(0,o.jsx)(n.code,{children:"<React.StrictMode>"}),". Some frameworks do this by default."]}),"\n",(0,o.jsx)(n.h2,{id:"local-mutation-your-components-little-secret",children:"Local mutation: Your component\u2019s little secret"}),"\n",(0,o.jsx)(n.p,{children:"In the above example, the problem was that the component changed a preexisting variable while rendering. This is often called a \u201cmutation\u201d to make it sound a bit scarier. Pure functions don\u2019t mutate variables outside of the function\u2019s scope or objects that were created before the call\u2014that makes them impure!"}),"\n",(0,o.jsxs)(n.p,{children:["However, ",(0,o.jsx)(n.strong,{children:"it\u2019s completely fine to change variables and objects that you\u2019ve just created while rendering"}),". In this example, you create an ",(0,o.jsx)(n.code,{children:"[]"})," array, assign it to a ",(0,o.jsx)(n.code,{children:"cups"})," variable, and then ",(0,o.jsx)(n.code,{children:"push"})," a dozen cups into it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"function Cup({ guest }) {\n  return <h2>Tea cup for guest #{guest}</h2>;\n}\n\nexport default function TeaGathering() {\n  let cups = [];\n  for (let i = 1; i <= 12; i++) {\n    cups.push(<Cup key={i} guest={i} />);\n  }\n  return cups;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"cups"})," variable or the ",(0,o.jsx)(n.code,{children:"[]"})," array were created outside the ",(0,o.jsx)(n.code,{children:"TeaGathering"})," function, this would be a huge problem! You would be changing a preexisting object by pushing items into that array."]}),"\n",(0,o.jsxs)(n.p,{children:["However, it\u2019s fine because you\u2019ve created them during the same render, inside ",(0,o.jsx)(n.code,{children:"TeaGathering"}),". No code outside of ",(0,o.jsx)(n.code,{children:"TeaGathering"})," will ever know that this happened. This is called \u201c",(0,o.jsx)(n.strong,{children:"local mutation"}),"\u201d\u2014it\u2019s like your component\u2019s little secret."]}),"\n",(0,o.jsx)(n.h2,{id:"where-you-can-cause-side-effects",children:"Where you can cause side effects"}),"\n",(0,o.jsxs)(n.p,{children:["While functional programming relies heavily on purity, at some point, somewhere, something has to change. That\u2019s kind of the point of programming! These changes\u2014updating the screen, starting an animation, changing the data\u2014are called ",(0,o.jsx)(n.strong,{children:"side effects"}),". They\u2019re things that happen \u201con the side\u201d, not during rendering."]}),"\n",(0,o.jsxs)(n.p,{children:["In React, side effects usually belong inside ",(0,o.jsx)(n.a,{href:"https://react.dev/learn/responding-to-events",children:"event handlers"}),". Event handlers are functions that React runs when you perform some action\u2014for example, when you click a button. Even though event handlers are defined inside your component, they don\u2019t run during rendering! So event handlers don\u2019t need to be pure."]}),"\n",(0,o.jsxs)(n.p,{children:["If you\u2019ve exhausted all other options and can\u2019t find the right event handler for your side effect, you can still attach it to your returned JSX with a ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useEffect",children:(0,o.jsx)(n.code,{children:"useEffect"})})," call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort. When possible, try to express your logic with rendering alone."]}),"\n",(0,o.jsx)(n.h2,{id:"why-does-react-care-about-purity",children:"Why does React care about purity?"}),"\n",(0,o.jsx)(n.p,{children:"Writing pure functions takes some habit and discipline. But it also unlocks marvelous opportunities:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Your components could run in a different environment\u2014for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests."}),"\n",(0,o.jsxs)(n.li,{children:["You can improve performance by ",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/memo",children:"skipping rendering"})," components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache."]}),"\n",(0,o.jsx)(n.li,{children:"If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Every new React feature we\u2019re building takes advantage of purity. From data fetching to animations to performance, keeping components pure unlocks the power of the React paradigm."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);