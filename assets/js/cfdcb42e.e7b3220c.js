"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1914],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1608:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"propsVsPublicVars",title:"Properties vs Public variables"},s=void 0,p={unversionedId:"C-Sharp/propsVsPublicVars",id:"C-Sharp/propsVsPublicVars",isDocsHomePage:!1,title:"Properties vs Public variables",description:"`cs",source:"@site/docs/C-Sharp/Properties vs Public Variables.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/propsVsPublicVars",permalink:"/LearningCollection/C-Sharp/propsVsPublicVars",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Properties vs Public Variables.md",tags:[],version:"current",frontMatter:{id:"propsVsPublicVars",title:"Properties vs Public variables"},sidebar:"mySidebar",previous:{title:".Net Core vs .Net Standard vs UWP",permalink:"/LearningCollection/C-Sharp/netstandardVsNetcoreVsUwp"},next:{title:"Serialization",permalink:"/LearningCollection/C-Sharp/serialization"}},u=[{value:"Why would you use properties",id:"why-would-you-use-properties",children:[]},{value:"Is it a property or a method",id:"is-it-a-property-or-a-method",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private int _name;\n\npublic int Name\n{\n    get { return _name; }\n    set { _name = value; }\n}\n")),(0,o.kt)("p",null,"vs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public int Name;\n")),(0,o.kt)("h2",{id:"why-would-you-use-properties"},"Why would you use properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start with the simplest thing that works-- a public variable. You can always refactor this later into a property if it turns out additional work needs to be done when the name value is set"),(0,o.kt)("li",{parentName:"ul"},"there are valid reasons to make a trivial property, exactly as depicted above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reflection works differently on variables vs. properties, so if you rely on reflection, it's easier to use all properties"),(0,o.kt)("li",{parentName:"ul"},"You can't databind against a variable"))),(0,o.kt)("li",{parentName:"ul"},"It's a shame there's so much meaningless friction between variables and properties; most of the time they do the exact same thing")),(0,o.kt)("h2",{id:"is-it-a-property-or-a-method"},"Is it a property or a method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In this case, we barely have a property. But if you are executing code in a property, make sure you've written a property and not a method"),(0,o.kt)("li",{parentName:"ul"},"A property should do less work-- a lot less work-- than a method"),(0,o.kt)("li",{parentName:"ul"},"Properties should be lightweight. If your property incurs significant effort, it should be refactored into an explicit method"),(0,o.kt)("li",{parentName:"ul"},"Otherwise it's going to feel like an annoying side-effect of setting a property"),(0,o.kt)("li",{parentName:"ul"},"And if there's any chance at all that code could spawn an hourglass, it definitely should be a method"),(0,o.kt)("li",{parentName:"ul"},"Conversely, if you have a lot of simple, lightweight methods, maybe they ought to be expressed as properties"),(0,o.kt)("li",{parentName:"ul"},"The really important thing to take away here is to avoid writing code that doesn't matter. And property wrappers around public variables are the very essence of meaningless code"),(0,o.kt)("li",{parentName:"ul"},"When in doubt, try to follow the ",(0,o.kt)("a",{parentName:"li",href:"https://blogs.msdn.microsoft.com/brada/2005/01/26/internal-coding-guidelines/"},"Microsoft internal coding guidelines")," unless you have a compelling reason not to")))}d.isMDXComponent=!0}}]);