"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8803],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},643:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={id:"fragmentsPortalsRefs",title:"Fragments, Portals, Refs"},i=void 0,p={unversionedId:"Web/React/fragmentsPortalsRefs",id:"Web/React/fragmentsPortalsRefs",isDocsHomePage:!1,title:"Fragments, Portals, Refs",description:"Fragments",source:"@site/docs/Web/React/Fragments, Portals, Refs.md",sourceDirName:"Web/React",slug:"/Web/React/fragmentsPortalsRefs",permalink:"/LearningCollection/Web/React/fragmentsPortalsRefs",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Fragments, Portals, Refs.md",version:"current",frontMatter:{id:"fragmentsPortalsRefs",title:"Fragments, Portals, Refs"},sidebar:"mySidebar",previous:{title:"Notes on Jekyll",permalink:"/LearningCollection/Web/Jekyll/notesOnJekyll"},next:{title:"useEffect",permalink:"/LearningCollection/Web/React/Hooks/useEffect"}},c=[{value:"Fragments",id:"fragments",children:[{value:"Motivation",id:"motivation",children:[]},{value:"Short Syntax",id:"short-syntax",children:[]}]},{value:"Portals",id:"portals",children:[{value:"Usage",id:"usage",children:[]}]},{value:"Refs",id:"refs",children:[{value:"When to use Refs",id:"when-to-use-refs",children:[]},{value:"Creating Refs",id:"creating-refs",children:[]},{value:"Accessing Refs",id:"accessing-refs",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"fragments"},"Fragments"),(0,o.kt)("p",null,"A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"A common pattern is for a component to return a list of children. Take this example React snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Table extends React.Component {\n  render() {\n    return (\n      <table>\n        <tr>\n          <Columns />\n        </tr>\n      </table>\n    );\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Columns />")," would need to return multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"<td>")," elements in order for the rendered HTML to be valid. If a parent div was used inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Columns />"),", then the resulting HTML will be invalid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Columns extends React.Component {\n  render() {\n    return (\n      <div>\n        <td>Hello</td>\n        <td>World</td>\n      </div>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"results in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Table />")," output of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<table>\n  <tr>\n    <div>\n      <td>Hello</td>\n      <td>World</td>\n    </div>\n  </tr>\n</table>\n")),(0,o.kt)("p",null,"Fragments solve this problem. Fragments also cut down on the number of wrapping divs that have no other use than fulfilling the JSX syntax requirement."),(0,o.kt)("h3",{id:"short-syntax"},"Short Syntax"),(0,o.kt)("p",null,"There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Columns extends React.Component {\n  render() {\n    return (\n      <>\n        <td>Hello</td>\n        <td>World</td>\n      </>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<></>")," the same way you\u2019d use any other element except that it doesn\u2019t support keys or attributes."),(0,o.kt)("p",null,"For more details see: ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"React Docs")),(0,o.kt)("h2",{id:"portals"},"Portals"),(0,o.kt)("p",null,"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ReactDOM.createPortal(child, container);\n")),(0,o.kt)("p",null,"The first argument (",(0,o.kt)("inlineCode",{parentName:"p"},"child"),") is any renderable React child, such as an element, string, or fragment. The second argument (",(0,o.kt)("inlineCode",{parentName:"p"},"container"),") is a DOM element."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Normally, when you return an element from a component\u2019s render method, it\u2019s mounted into the DOM as a child of the nearest parent node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  // React mounts a new div and renders the children into it\n  return (\n    <div>\n      {this.props.children}\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"However, sometimes it\u2019s useful to insert a child into a different location in the DOM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  // React does *not* create a new div. It renders the children into `domNode`.\n  // `domNode` is any valid DOM node, regardless of its location in the DOM.\n  return ReactDOM.createPortal(\n    this.props.children,\n    domNode\n  );\n}\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"typical use case")," for portals is when a parent component has an ",(0,o.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"z-index style"),", but you need the ",(0,o.kt)("strong",{parentName:"p"},"child")," to visually ",(0,o.kt)("strong",{parentName:"p"},"\u201cbreak out\u201d of its container"),". For example, ",(0,o.kt)("strong",{parentName:"p"},"dialogs"),", ",(0,o.kt)("strong",{parentName:"p"},"hovercards"),", and ",(0,o.kt)("strong",{parentName:"p"},"tooltips"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," When working with portals, remember that managing keyboard focus becomes very important."),(0,o.kt)("p",null,"For modal dialogs, ensure that everyone can interact with them by following the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"},"WAI-ARIA Modal Authoring Practices"),"."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/gaearon/pen/yzMaBd"},"Codepen")),(0,o.kt)("p",null,"For more details, see: ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},"React Docs")),(0,o.kt)("h2",{id:"refs"},"Refs"),(0,o.kt)("p",null,"Refs provide a way to ",(0,o.kt)("strong",{parentName:"p"},"access DOM nodes or React elements")," created in the render method."),(0,o.kt)("p",null,"In the typical React dataflow, ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, ",(0,o.kt)("strong",{parentName:"p"},"there are a few cases where you need to imperatively modify a child outside of the typical dataflow"),". The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch."),(0,o.kt)("h3",{id:"when-to-use-refs"},"When to use Refs"),(0,o.kt)("p",null,"There are a few good use cases for refs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing focus, text selection, or media playback"),(0,o.kt)("li",{parentName:"ul"},"Triggering imperative animations"),(0,o.kt)("li",{parentName:"ul"},"Integrating with third-party DOM libraries")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should avoid using refs for anything that can be done declaratively.")),(0,o.kt)("p",null,"For example, instead of exposing ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close()")," methods on a Dialog component, pass an ",(0,o.kt)("inlineCode",{parentName:"p"},"isOpen")," prop to it."),(0,o.kt)("h3",{id:"creating-refs"},"Creating Refs"),(0,o.kt)("p",null,"Refs are created using ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createRef()")," and attached to React elements via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const AddUser = (props) => {\n  const nameInputRef = useRef();\n  const ageInputRef = useRef();\n\n  render() {\n    ...\n    <input id="username" type="text" ref={nameInputRef} />\n    <input id="age" type="number" ref={ageInputRef} />\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"Using refs in this way makes this component an ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/uncontrolled-components.html"},"uncontrolled component"),". It is generally recommended to use controlled components and let react handle the state of the component."),(0,o.kt)("h3",{id:"accessing-refs"},"Accessing Refs"),(0,o.kt)("p",null,"When a ref is passed to an element in ",(0,o.kt)("strong",{parentName:"p"},"render"),", a reference to the node becomes accessible at the ",(0,o.kt)("strong",{parentName:"p"},"current")," attribute of the ref."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Js"},"const enteredUserAge = ageInputRef.current.value;\n")))}u.isMDXComponent=!0}}]);