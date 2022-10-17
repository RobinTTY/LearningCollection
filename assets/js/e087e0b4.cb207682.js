"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"useRef",title:"useRef",sidebar_position:5},s=void 0,i={unversionedId:"Web/React/Hooks/useRef",id:"Web/React/Hooks/useRef",title:"useRef",description:"Refs provide a way to access DOM nodes or React elements created in the render method.",source:"@site/docs/Web/React/Hooks/useRef.md",sourceDirName:"Web/React/Hooks",slug:"/Web/React/Hooks/useRef",permalink:"/LearningCollection/Web/React/Hooks/useRef",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Hooks/useRef.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"useRef",title:"useRef",sidebar_position:5},sidebar:"finance",previous:{title:"useReducer",permalink:"/LearningCollection/Web/React/Hooks/useReducer"},next:{title:"Rules of Hooks",permalink:"/LearningCollection/Web/React/Hooks/rulesOfHooks"}},l={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"State",id:"state",level:4},{value:"Refs",id:"refs",level:4},{value:"Common uses",id:"common-uses",level:2},{value:"Reference a DOM element (access a child imperatively)",id:"reference-a-dom-element-access-a-child-imperatively",level:3},{value:"Storing the previous value of a state variable",id:"storing-the-previous-value-of-a-state-variable",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Refs provide a way to ",(0,a.kt)("strong",{parentName:"p"},"access DOM nodes or React elements")," created in the render method."),(0,a.kt)("p",null,"In the typical React dataflow, ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, ",(0,a.kt)("strong",{parentName:"p"},"there are a few cases where you need to imperatively modify a child outside of the typical dataflow"),". The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const refContainer = useRef(initialValue);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," returns a mutable ref object whose ",(0,a.kt)("inlineCode",{parentName:"p"},".current")," property is initialized to the passed argument ",(0,a.kt)("inlineCode",{parentName:"p"},"(initialValue)"),". The returned object will persist for the full lifetime of the component."),(0,a.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const myRef = useRef(null);\n")),(0,a.kt)("p",null,"In the above example we have created a ref called ",(0,a.kt)("inlineCode",{parentName:"p"},"myRef")," and set its default value to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". This means that ",(0,a.kt)("inlineCode",{parentName:"p"},"myRef")," is now equal to an object that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  current: null;\n}\n")),(0,a.kt)("p",null,"This is because a ref is always an object with a single ",(0,a.kt)("inlineCode",{parentName:"p"},".current")," property which is set to the current value of the ref. If we were to instead create a ref with a default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," it would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const myRef = useRef(0);\nconsole.log(myRef);\n// { current: 0 }\n")),(0,a.kt)("p",null,"What makes refs powerful is the fact that they are persisted between renders. Refs are in that sense similar to state, since they persist between renders, but refs do not cause a component to re-render when changed."),(0,a.kt)("p",null,"Imagine that we want to count the number of times a component re-renders. Here is the code to do so with state and refs:"),(0,a.kt)("h4",{id:"state"},"State"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"function State() {\n  const [rerenderCount, setRerenderCount] = useState(0);\n\n  useEffect(() => {\n    setRerenderCount((prevCount) => prevCount + 1);\n  });\n\n  return <div>{rerenderCount}</div>;\n}\n")),(0,a.kt)("h4",{id:"refs"},"Refs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"function Ref() {\n  const rerenderCount = useRef(0);\n\n  useEffect(() => {\n    rerenderCount.current = rerenderCount.current + 1;\n  });\n\n  return <div>{rerenderCount.current}</div>;\n}\n")),(0,a.kt)("p",null,"Both of these components will correctly display the number of times a component has been re-rendered, but in ",(0,a.kt)("strong",{parentName:"p"},"the state example the component will infinitely re-render itself")," since setting the state causes the component to re-render. The ref example on the other hand will only render once since setting the value of a ref does not cause any re-renders."),(0,a.kt)("p",null,"So in short, a ref is used to store a value that persists between renders."),(0,a.kt)("h2",{id:"common-uses"},"Common uses"),(0,a.kt)("p",null,"There are a few good use cases for refs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Managing focus, text selection, or media playback"),(0,a.kt)("li",{parentName:"ul"},"Triggering imperative animations"),(0,a.kt)("li",{parentName:"ul"},"Integrating with third-party DOM libraries")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You should avoid using refs for anything that can be done declaratively.")),(0,a.kt)("p",null,"For example, instead of exposing ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," methods on a Dialog component, pass an ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpen")," prop to it."),(0,a.kt)("h3",{id:"reference-a-dom-element-access-a-child-imperatively"},"Reference a DOM element (access a child imperatively)"),(0,a.kt)("p",null,"The most common use case for refs in React is to reference a DOM element. Because of how common this use case is every DOM element has a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," property you can use for setting a ref to that element. For example, if you wanted to focus an input element whenever a button was clicked you could use a ref to do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function TextInputWithFocusButton() {\n  const inputRef = useRef(null);\n  const onButtonClick = () => {\n    // `current` points to the mounted text input element\n    inputRef.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputRef} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n')),(0,a.kt)("p",null,"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," element to set the current value of ",(0,a.kt)("inlineCode",{parentName:"p"},"inputRef")," to the input element. Now when we click the button it will call ",(0,a.kt)("inlineCode",{parentName:"p"},"onButtonClick")," which uses the current value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputRef")," variable to set the focus on the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," element."),(0,a.kt)("p",null,"Being able to access any DOM element directly with a ref is really useful for doing things like setting focus or managing other attributes that you cannot directly control in React, but refs shouldn't be overused."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"In custom components, ref needs to be forwarded, see: ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"React Documentation"),".")),(0,a.kt)("h3",{id:"storing-the-previous-value-of-a-state-variable"},"Storing the previous value of a state variable"),(0,a.kt)("p",null,"Refs can also be used for any form of storage that is persisted across component renders. A very common use case for this would be storing the previous value of a state variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,5-7}","{3,5-7}":!0},"function Counter() {\n  const [count, setCount] = useState(0);\n  const prevCountRef = useRef();\n\n  useEffect(() => {\n    prevCountRef.current = count;\n  });\n  const prevCount = prevCountRef.current;\n\n  return (\n    <h1>\n      Now: {count}, before: {prevCount}\n    </h1>\n  );\n}\n")),(0,a.kt)("p",null,"The above code will update the ",(0,a.kt)("inlineCode",{parentName:"p"},"previousName")," ref every time the name changes so that it always has the previous value of the name variable stored in it."),(0,a.kt)("p",null,"You can extract the functionality into its own hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function usePrevious(value) {\n  const ref = useRef();\n  useEffect(() => {\n    ref.current = value;\n  });\n  return ref.current;\n}\n")),(0,a.kt)("p",null,"and then use it in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5}","{5}":!0},"function Counter() {\n  const [count, setCount] = useState(0);\n\n  const calculation = count + 100;\n  const prevCalculation = usePrevious(calculation);\n  // ...\n")),(0,a.kt)("p",null,"It\u2019s possible that in the future React will provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"usePrevious")," Hook out of the box since it\u2019s a relatively common use case."))}p.isMDXComponent=!0}}]);