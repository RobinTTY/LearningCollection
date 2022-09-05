"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[813],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"httpRequests",title:"HTTP Requests",sidebar_position:3},c=void 0,p={unversionedId:"Web/JavaScript/Core Concepts/httpRequests",id:"Web/JavaScript/Core Concepts/httpRequests",title:"HTTP Requests",description:"There are different options when it comes to making HTTP requests (this is not React specific). There are different libraries that can be used to achieve the task, a very popular one is Axios. Nowadays there is also the Fetch API that is built into browsers.",source:"@site/docs/Web/JavaScript/Core Concepts/http-requests.md",sourceDirName:"Web/JavaScript/Core Concepts",slug:"/Web/JavaScript/Core Concepts/httpRequests",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/httpRequests",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/JavaScript/Core Concepts/http-requests.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"httpRequests",title:"HTTP Requests",sidebar_position:3},sidebar:"mySidebar",previous:{title:"JSON",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/web-javascript-core_concepts-json"},next:{title:"Promise",permalink:"/LearningCollection/Web/JavaScript/Core Concepts/promise"}},l={},u=[],m={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are different options when it comes to making HTTP requests (this is not React specific). There are different libraries that can be used to achieve the task, a very popular one is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios"),". Nowadays there is also the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API")," that is built into browsers."),(0,a.kt)("p",null,"There are a few differences to them, which can be compared here:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"httpRequestLibraries",src:r(1348).Z,width:"754",height:"673"})),(0,a.kt)("p",null,"Generally when making simple requests in a browser context, the Fetch API is a very good option, since it doesn't require any additional package and generally has very solid feature support. If the has more complex requirements, axios should be considered."),(0,a.kt)("p",null,"According to mzabriskie (",(0,a.kt)("em",{parentName:"p"},"a developer on axios"),"):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Overall axios and fetch are very similar. Some benefits of axios:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Transformers: allow performing transforms on data before a request is made or after a response is received"),(0,a.kt)("li",{parentName:"ul"},"Interceptors: allow you to alter the request or response entirely (headers as well). also, perform async operations before a request is made or before Promise settles"),(0,a.kt)("li",{parentName:"ul"},"Built-in XSRF protection"))),(0,a.kt)("p",null,"Some ",(0,a.kt)("strong",{parentName:"p"},"differences between axios and fetch")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetch's ",(0,a.kt)("strong",{parentName:"li"},"body")," = Axios' ",(0,a.kt)("strong",{parentName:"li"},"data")),(0,a.kt)("li",{parentName:"ul"},"Fetch's body has to be ",(0,a.kt)("strong",{parentName:"li"},"stringified"),", Axios' data contains the ",(0,a.kt)("strong",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},"Fetch ",(0,a.kt)("strong",{parentName:"li"},"has no url")," in request object, Axios ",(0,a.kt)("strong",{parentName:"li"},"has url")," in request object"),(0,a.kt)("li",{parentName:"ul"},"Fetch request function includes the ",(0,a.kt)("strong",{parentName:"li"},"url as parameter"),", Axios request function ",(0,a.kt)("strong",{parentName:"li"},"does not include the url as parameter"),"."),(0,a.kt)("li",{parentName:"ul"},"Fetch request is ",(0,a.kt)("strong",{parentName:"li"},"ok")," when response object contains the ",(0,a.kt)("strong",{parentName:"li"},"ok property"),", Axios request is ",(0,a.kt)("strong",{parentName:"li"},"ok")," when ",(0,a.kt)("strong",{parentName:"li"},"status is 200")," and ",(0,a.kt)("strong",{parentName:"li"},"statusText is 'OK'")),(0,a.kt)("li",{parentName:"ul"},"To get the json object response: in fetch call the ",(0,a.kt)("strong",{parentName:"li"},"json() function")," on the response object, in Axios get ",(0,a.kt)("strong",{parentName:"li"},"data property")," of the response object.")))}f.isMDXComponent=!0},1348:function(e,t,r){t.Z=r.p+"assets/images/HttpRequestLibraries-18e123c163712d43bf237433ea9049bc.png"}}]);