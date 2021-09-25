"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={id:"jsxSyntax",title:"JSX Syntax",sidebar_position:1},l=void 0,c={unversionedId:"Web/React/Main Concepts/jsxSyntax",id:"Web/React/Main Concepts/jsxSyntax",isDocsHomePage:!1,title:"JSX Syntax",description:"JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.",source:"@site/docs/Web/React/Main Concepts/JSX Syntax.md",sourceDirName:"Web/React/Main Concepts",slug:"/Web/React/Main Concepts/jsxSyntax",permalink:"/LearningCollection/Web/React/Main Concepts/jsxSyntax",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Main Concepts/JSX Syntax.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"jsxSyntax",title:"JSX Syntax",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Notes on Jekyll",permalink:"/LearningCollection/Web/Jekyll/notesOnJekyll"},next:{title:"Basics",permalink:"/LearningCollection/Web/React/Main Concepts/basics"}},p=[{value:"JSX in React",id:"jsx-in-react",children:[{value:"Why JSX?",id:"why-jsx",children:[]},{value:"Embedding expressions in JSX",id:"embedding-expressions-in-jsx",children:[]},{value:"JSX is an expression too",id:"jsx-is-an-expression-too",children:[]},{value:"Specifying attributes with JSX",id:"specifying-attributes-with-jsx",children:[]},{value:"Specifying children with JSX",id:"specifying-children-with-jsx",children:[]},{value:"JSX prevents injection attacks",id:"jsx-prevents-injection-attacks",children:[]},{value:"JSX represents objects",id:"jsx-represents-objects",children:[]},{value:"TODO",id:"todo",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JSX is an ",(0,r.kt)("strong",{parentName:"p"},"XML-like syntax extension to ECMAScript")," without any defined semantics. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript."),(0,r.kt)("h2",{id:"jsx-in-react"},"JSX in React"),(0,r.kt)("p",null,"Consider this variable declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello, world!</h1>;\n")),(0,r.kt)("p",null,'The used syntax is called JSX, and it is a syntax extension to JavaScript. JSX is used to produce React "elements".'),(0,r.kt)("h3",{id:"why-jsx"},"Why JSX?"),(0,r.kt)("p",null,"React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display."),(0,r.kt)("p",null,'Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both.'),(0,r.kt)("p",null,"React ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-without-jsx.html"},"doesn\u2019t require using JSX"),", but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages."),(0,r.kt)("h3",{id:"embedding-expressions-in-jsx"},"Embedding expressions in JSX"),(0,r.kt)("p",null,"In the example below, we declare a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and then use it inside JSX by wrapping it in curly braces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1-2}","{1-2}":!0},'const name = "Josh Perez";\nconst element = <h1>Hello, {name}</h1>;\n\nReactDOM.render(element, document.getElementById("root"));\n')),(0,r.kt)("p",null,"You can put any valid JavaScript expression inside the curly braces in JSX."),(0,r.kt)("h3",{id:"jsx-is-an-expression-too"},"JSX is an expression too"),(0,r.kt)("p",null,"After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects."),(0,r.kt)("p",null,"This means that you can use JSX inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements and ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loops, assign it to variables, accept it as arguments, and return it from functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,5}","{3,5}":!0},"function getGreeting(user) {\n  if (user) {\n    return <h1>Hello, {formatName(user)}!</h1>;\n  }\n  return <h1>Hello, Stranger.</h1>;\n}\n")),(0,r.kt)("h3",{id:"specifying-attributes-with-jsx"},"Specifying attributes with JSX"),(0,r.kt)("p",null,"You may use quotes to specify string literals as attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = <div tabIndex="0"></div>;\n')),(0,r.kt)("p",null,"You may also use curly braces to embed a JavaScript expression in an attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <img src={user.avatarUrl}></img>;\n")),(0,r.kt)("p",null,"Don\u2019t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names."),(0,r.kt)("p",{parentName:"div"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," in JSX, and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabindex")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex"),"."))),(0,r.kt)("h3",{id:"specifying-children-with-jsx"},"Specifying children with JSX"),(0,r.kt)("p",null,"If a tag is empty, you may close it immediately with ",(0,r.kt)("inlineCode",{parentName:"p"},"/>"),", like XML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <img src={user.avatarUrl} />;\n")),(0,r.kt)("p",null,"JSX tags may contain children:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = (\n  <div>\n    <h1>Hello!</h1>\n    <h2>Good to see you here.</h2>\n  </div>\n);\n")),(0,r.kt)("h3",{id:"jsx-prevents-injection-attacks"},"JSX prevents injection attacks"),(0,r.kt)("p",null,"It is safe to embed user input in JSX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const title = response.potentiallyMaliciousInput;\n// This is safe:\nconst element = <h1>{title}</h1>;\n")),(0,r.kt)("p",null,"By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that\u2019s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS (cross-site-scripting)")," attacks."),(0,r.kt)("h3",{id:"jsx-represents-objects"},"JSX represents objects"),(0,r.kt)("p",null,"Babel compiles JSX down to ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," calls. These two examples are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = <h1 className="greeting">Hello, world!</h1>;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = React.createElement(\n  "h1",\n  { className: "greeting" },\n  "Hello, world!"\n);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," performs a few checks to help you write bug-free code but essentially it creates an object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// Note: this structure is simplified\nconst element = {\n  type: "h1",\n  props: {\n    className: "greeting",\n    children: "Hello, world!",\n  },\n};\n')),(0,r.kt)("p",null,'These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is recommended to use the ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/editors"},'"Babel" language definition')," for your editor of choice so that both ES6 and JSX code is properly highlighted."))),(0,r.kt)("h3",{id:"todo"},"TODO"),(0,r.kt)("p",null,"TODO: ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/jsx-in-depth.html"},"This information seems good to know")))}u.isMDXComponent=!0}}]);