"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7710],{8855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(5893),s=a(1151);const i={id:"dataAndDataset",title:"data-* and HTMLElement.dataset",sidebar_position:1},r=void 0,l={id:"web/javascript/web-apis/dataAndDataset",title:"data-* and HTMLElement.dataset",description:"data-\\*",source:"@site/docs/web/javascript/web-apis/data and HTMLElement.dataset.md",sourceDirName:"web/javascript/web-apis",slug:"/web/javascript/web-apis/dataAndDataset",permalink:"/LearningCollection/web/javascript/web-apis/dataAndDataset",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/javascript/web-apis/data and HTMLElement.dataset.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"dataAndDataset",title:"data-* and HTMLElement.dataset",sidebar_position:1},sidebar:"docs",previous:{title:"ES6 Modules",permalink:"/LearningCollection/web/javascript/advanced-concepts/es6-modules"},next:{title:"Introduction to Javascript",permalink:"/LearningCollection/web/javascript/courses/codeacademy-course/"}},d={},o=[{value:"data-*",id:"data-",level:2},{value:"HTMLElement.dataset",id:"htmlelementdataset",level:2},{value:"Example",id:"example",level:3},{value:"Accessing values",id:"accessing-values",level:3},{value:"Setting values",id:"setting-values",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"data-",children:"data-*"}),"\n",(0,n.jsxs)(t.p,{children:["The data-* ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes",children:"global attributes"})," form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML",children:"HTML"})," and its ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",children:"DOM"})," representation by scripts."]}),"\n",(0,n.jsxs)(t.p,{children:["All such custom data are available via the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement",children:"HTMLElement"})," interface of the element the attribute is set on. The ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",children:"HTMLElement.dataset"})," property gives access to them."]}),"\n",(0,n.jsx)(t.h2,{id:"htmlelementdataset",children:"HTMLElement.dataset"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"dataset"})," read-only property of the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement",children:"HTMLElement"})," interface provides read/write access to ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*",children:"custom data attributes"})," (data-",(0,n.jsxs)(t.em,{children:[") on elements. It exposes a map of strings (",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap",children:"DOMStringMap"}),") with an entry for each data-"]})," attribute."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="HTML"',children:'<body>\n    <h2 id="title">Dataset-Test</h2>\n    <div id="myDiv" data-name="Jim" data-age="41" data-place-of-birth="New York">\n</body>\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="Javascript"',children:'const myDiv = document.getElementById("myDiv");\nconsole.log(myDiv.dataset);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="Console Output: Object DOMStringMap (dataset)"',children:'{\n  "name": "Jim",\n  "age": "41",\n  "placeOfBirth": "New York"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:['The name of the properties is automatically modified in JavaScript. The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property\'s "camelCased" name (e.g. ',(0,n.jsx)(t.code,{children:"data-place-of-birth"})," => ",(0,n.jsx)(t.code,{children:"placeOfBirth"}),")."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"dataset"})," property itself"]})," can be read, but ",(0,n.jsx)(t.strong,{children:"not directly written"}),". Instead, all writes must be to the individual properties within the ",(0,n.jsx)(t.code,{children:"dataset"}),", which in turn represent the data attributes."]})}),"\n",(0,n.jsx)(t.h3,{id:"accessing-values",children:"Accessing values"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attributes can be set and read by the camelCase name/key as an object property of the dataset:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"element.dataset.keyname;\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attributes can also be set and read using bracket syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'element.dataset["keyname"];\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The in operator can check if a given attribute exists:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'"keyname" in element.dataset;\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setting-values",children:"Setting values"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"When the attribute is set, its value is always converted to a string."}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"element.dataset.example = null;\n"})}),"\n",(0,n.jsx)(t.p,{children:"is converted into"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'data-example="null"\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To remove an attribute, you can use the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete",children:"delete operator"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"delete element.dataset.keyname;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var n=a(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);