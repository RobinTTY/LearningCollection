"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,b=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"dataAndDataset",title:"data-* and HTMLElement.dataset",sidebar_position:1},i=void 0,o={unversionedId:"Web/JavaScript/Web APIs/dataAndDataset",id:"Web/JavaScript/Web APIs/dataAndDataset",title:"data-* and HTMLElement.dataset",description:"data-\\*",source:"@site/docs/Web/JavaScript/Web APIs/data and HTMLElement.dataset.md",sourceDirName:"Web/JavaScript/Web APIs",slug:"/Web/JavaScript/Web APIs/dataAndDataset",permalink:"/LearningCollection/Web/JavaScript/Web APIs/dataAndDataset",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Web APIs/data and HTMLElement.dataset.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"dataAndDataset",title:"data-* and HTMLElement.dataset",sidebar_position:1},sidebar:"mySidebar",previous:{title:"ES6 Modules",permalink:"/LearningCollection/Web/JavaScript/Advanced Concepts/es6-modules"},next:{title:"Introduction to Javascript",permalink:"/LearningCollection/Web/JavaScript/Courses/Codeacademy Course/"}},s={},p=[{value:"data-*",id:"data-",level:2},{value:"HTMLElement.dataset",id:"htmlelementdataset",level:2},{value:"Example",id:"example",level:3},{value:"Accessing values",id:"accessing-values",level:3},{value:"Setting values",id:"setting-values",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"data-"},"data-","*"),(0,r.kt)("p",null,"The data-","*"," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes"},"global attributes")," form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"HTML")," and its ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"DOM")," representation by scripts."),(0,r.kt)("p",null,"All such custom data are available via the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"HTMLElement")," interface of the element the attribute is set on. The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset"},"HTMLElement.dataset")," property gives access to them."),(0,r.kt)("h2",{id:"htmlelementdataset"},"HTMLElement.dataset"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," read-only property of the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"HTMLElement")," interface provides read/write access to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*"},"custom data attributes")," (data-",(0,r.kt)("em",{parentName:"p"},") on elements. It exposes a map of strings (",(0,r.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap"},"DOMStringMap"),") with an entry for each data-")," attribute."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<body>\n    <h2 id="title">Dataset-Test</h2>\n    <div id="myDiv" data-name="Jim" data-age="41" data-place-of-birth="New York">\n</body>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Javascript"',title:'"Javascript"'},'const myDiv = document.getElementById("myDiv");\nconsole.log(myDiv.dataset);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Console Output: Object DOMStringMap (dataset)"',title:'"Console',"Output:":!0,Object:!0,DOMStringMap:!0,'(dataset)"':!0},'{\n  "name": "Jim",\n  "age": "41",\n  "placeOfBirth": "New York"\n}\n')),(0,r.kt)("p",null,'The name of the properties is automatically modified in JavaScript. The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property\'s "camelCased" name (e.g. ',(0,r.kt)("inlineCode",{parentName:"p"},"data-place-of-birth")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"placeOfBirth"),")."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"dataset")," property itself")," can be read, but ",(0,r.kt)("strong",{parentName:"p"},"not directly written"),". Instead, all writes must be to the individual properties within the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset"),", which in turn represent the data attributes.")),(0,r.kt)("h3",{id:"accessing-values"},"Accessing values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes can be set and read by the camelCase name/key as an object property of the dataset:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"element.dataset.keyname;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attributes can also be set and read using bracket syntax:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'element.dataset["keyname"];\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The in operator can check if a given attribute exists:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"keyname" in element.dataset;\n')))),(0,r.kt)("h3",{id:"setting-values"},"Setting values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the attribute is set, its value is always converted to a string."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"element.dataset.example = null;\n")),(0,r.kt)("p",{parentName:"li"},"is converted into"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'data-example="null"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To remove an attribute, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete"},"delete operator"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"delete element.dataset.keyname;\n")))))}m.isMDXComponent=!0}}]);