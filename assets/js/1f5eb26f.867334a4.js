"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"interface-elements",title:"Interface Elements",sidebar_position:4},i=void 0,s={unversionedId:"Web/HTML/interface-elements",id:"Web/HTML/interface-elements",title:"Interface Elements",description:"Interface elements are used to create applications and services. There are many different types, each with its own characteristics and purpose.",source:"@site/docs/Web/HTML/interface-elements.md",sourceDirName:"Web/HTML",slug:"/Web/HTML/interface-elements",permalink:"/LearningCollection/Web/HTML/interface-elements",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/HTML/interface-elements.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"interface-elements",title:"Interface Elements",sidebar_position:4},sidebar:"finance",previous:{title:"HTML attributes",permalink:"/LearningCollection/Web/HTML/attributes"},next:{title:"Types of CSS",permalink:"/LearningCollection/Web/CSS/basics/types-of-css"}},l={},c=[{value:"Classification",id:"classification",level:2},{value:"Intuitive Interfaces",id:"intuitive-interfaces",level:2},{value:"Common UI Kits",id:"common-ui-kits",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Interface elements are used to create applications and services. There are many different types, each with its own characteristics and purpose."),(0,a.kt)("p",null,"It's important to understand some key points before looking at specific examples of interface elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'There\'s no single/universal and "correct" classification of all interface elements, but there are "generally accepted standards"'),(0,a.kt)("li",{parentName:"ul"},"Most software platforms provide their own set of elements for developers to use when building applications (for example, there is an iOS UI kit and an Android UI kit)"),(0,a.kt)("li",{parentName:"ul"},"You can devise your own screen elements, but they will probably just be a different version of an existing component"),(0,a.kt)("li",{parentName:"ul"},"It's worth remembering that clever design and uniqueness can be really cool, but if the user doesn't understand how to use your service, all that creativity will be in vain")),(0,a.kt)("p",null,"The number of elements you use and how you combine them heavily depends on the type and complexity of the application you are developing. However, there are a few standard elements that interfaces cannot do without:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Buttons")," (any shape, with or without icons/labels)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Navigation")," (transitions between screens)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input fields")," for text/numbers (a search bar, for example)")),(0,a.kt)("p",null,"Interfaces must enable interaction, which can't be achieved without the most basic of elements \u2014 a button. Navigation allows a user to move through a screen or a group of screens, whereas input fields can provide a more complex set of choices."),(0,a.kt)("h2",{id:"classification"},"Classification"),(0,a.kt)("p",null,"An example of the classification of interface elements can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html"},"usability.gov"),". They suggest four groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Input Controls")," - elements that allow the user to enter or input some information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Navigational Components")," - elements that show precisely where you are in the application's structure or allow you to move in different directions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Informational Components")," - elements that show the status or information, such as when the user needs to make a decision"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Containers")," - elements that group information by various attributes")),(0,a.kt)("h2",{id:"intuitive-interfaces"},"Intuitive Interfaces"),(0,a.kt)("p",null,'You need to keep in mind that different elements come with "expectations" about how they should work. For example, most users know that ',(0,a.kt)("strong",{parentName:"p"},"checkboxes")," are square and allow them to select several answer options. On the other hand, ",(0,a.kt)("strong",{parentName:"p"},"radio buttons")," force people to make a single choice from the available alternatives and are usually round. Of course, many users don't know their titles or types, but the experience of using similar elements between different applications creates expectations. This should be considered when producing your design."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"interfaces",src:n(7438).Z,width:"4000",height:"2456"})),(0,a.kt)("p",null,"It's a good idea to get acquainted with different interface elements before you start designing an app. It can also be very helpful to analyze a couple of applications you use every day or ones similar to the app you're planning to develop."),(0,a.kt)("p",null,'Things like when it\'s more convenient for users to enter information with a "slider" and then click "next." Or where it is easier for them simply to fill in a text input field to continue working.'),(0,a.kt)("h2",{id:"common-ui-kits"},"Common UI Kits"),(0,a.kt)("p",null,"software platforms often release their own set of standard elements that are very convenient to use when designing your apps. There's no need to invent components from scratch. It's really easy for developers who write application code to program an interface consisting of standard elements that just have style changes."),(0,a.kt)("p",null,"The most commonly used UI kits are probably:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://material.io/"},"Material Design (Google)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/design/resources/"},"iOS Design Kits (Apple)"))),(0,a.kt)("p",null,"There are many many more, some specialized to specific frameworks, some for specific programming languages, some for specific platforms."))}m.isMDXComponent=!0},7438:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/interfaces-99d91e19e087b23c922b84cfb207760c.png"}}]);