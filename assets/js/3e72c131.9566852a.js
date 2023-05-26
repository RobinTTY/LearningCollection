"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5432],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={id:"javascript-in-jsx",title:"JavaScript in JSX",sidebar_position:3},o=void 0,s={unversionedId:"Web/React/main-concepts/describing-ui/javascript-in-jsx",id:"Web/React/main-concepts/describing-ui/javascript-in-jsx",title:"JavaScript in JSX",description:"JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.",source:"@site/docs/Web/React/main-concepts/describing-ui/javascript-in-jsx.md",sourceDirName:"Web/React/main-concepts/describing-ui",slug:"/Web/React/main-concepts/describing-ui/javascript-in-jsx",permalink:"/LearningCollection/Web/React/main-concepts/describing-ui/javascript-in-jsx",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/main-concepts/describing-ui/javascript-in-jsx.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"javascript-in-jsx",title:"JavaScript in JSX",sidebar_position:3},sidebar:"finance",previous:{title:"Writing Markup with JSX",permalink:"/LearningCollection/Web/React/main-concepts/describing-ui/writing-markup-with-jsx"},next:{title:"Passing Props",permalink:"/LearningCollection/Web/React/main-concepts/describing-ui/passing-props"}},c={},l=[{value:"Passing strings with quotes",id:"passing-strings-with-quotes",level:2},{value:"Using curly braces: A window into the JavaScript world",id:"using-curly-braces-a-window-into-the-javascript-world",level:2},{value:"Using \u201cdouble curlies\u201d: CSS and other objects in JSX",id:"using-double-curlies-css-and-other-objects-in-jsx",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript."),(0,a.kt)("h2",{id:"passing-strings-with-quotes"},"Passing strings with quotes"),(0,a.kt)("p",null,"When you want to pass a string attribute to JSX, you put it in single or double quotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function Avatar() {\n  return (\n    <img\n      className="avatar"\n      src="https://i.imgur.com/7vQD0fPs.jpg"\n      alt="Gregorio Y. Zara"\n    />\n  );\n}\n')),(0,a.kt)("p",null,"But what if you want to dynamically specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"alt")," text? You could use a value from JavaScript by replacing ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," with ",(0,a.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"}"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function Avatar() {\n  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";\n  const description = "Gregorio Y. Zara";\n  return <img className="avatar" src={avatar} alt={description} />;\n}\n')),(0,a.kt)("h2",{id:"using-curly-braces-a-window-into-the-javascript-world"},"Using curly braces: A window into the JavaScript world"),(0,a.kt)("p",null,"JSX is a special way of writing JavaScript. That means it\u2019s possible to use JavaScript inside it\u2014with curly braces ",(0,a.kt)("inlineCode",{parentName:"p"},"{ }"),". The example below first declares a name for the scientist, name, then embeds it with curly braces inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function TodoList() {\n  const name = "Gregorio Y. Zara";\n  return <h1>{name}\'s To Do List</h1>;\n}\n')),(0,a.kt)("p",null,"Any JavaScript expression will work between curly braces, including function calls like ",(0,a.kt)("inlineCode",{parentName:"p"},"formatDate()"),"."),(0,a.kt)("h2",{id:"using-double-curlies-css-and-other-objects-in-jsx"},"Using \u201cdouble curlies\u201d: CSS and other objects in JSX"),(0,a.kt)("p",null,"In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX. Objects are also denoted with curly braces, like ",(0,a.kt)("inlineCode",{parentName:"p"},'{ name: "Hedy Lamarr", inventions: 5 }'),". Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: ",(0,a.kt)("inlineCode",{parentName:"p"},'person={{ name: "Hedy Lamarr", inventions: 5 }}'),"."),(0,a.kt)("p",null,"You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," attribute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function TodoList() {\n  return (\n    <ul\n      style={{\n        backgroundColor: "black",\n        color: "pink",\n      }}\n    >\n      <li>Improve the videophone</li>\n      <li>Prepare aeronautics lectures</li>\n      <li>Work on the alcohol-fuelled engine</li>\n    </ul>\n  );\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Inline ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," properties are written in camelCase. For example, HTML ",(0,a.kt)("inlineCode",{parentName:"p"},'<ul style="background-color: black">')," would be written as ",(0,a.kt)("inlineCode",{parentName:"p"},"<ul style={{ backgroundColor: 'black' }}>")," in your component.")))}d.isMDXComponent=!0}}]);