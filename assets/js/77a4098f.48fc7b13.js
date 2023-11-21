"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"system-text-json",title:"System.Text.Json",sidebar_position:2},a=void 0,s={unversionedId:"csharp/libraries/system-text-json",id:"csharp/libraries/system-text-json",title:"System.Text.Json",description:"Provides high-performance, low-allocating, and standards-compliant capabilities to process JavaScript Object Notation (JSON), which includes serializing objects to JSON text and deserializing JSON text to objects, with UTF-8 support built-in.",source:"@site/docs/csharp/libraries/system-text-json.md",sourceDirName:"csharp/libraries",slug:"/csharp/libraries/system-text-json",permalink:"/LearningCollection/csharp/libraries/system-text-json",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/system-text-json.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"system-text-json",title:"System.Text.Json",sidebar_position:2},sidebar:"docs",previous:{title:"Errors",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/errors"},next:{title:"Memory Stream vs FileStream",permalink:"/LearningCollection/csharp/comparisons/memVsFileStream"}},l={},c=[{value:"Attributes",id:"attributes",level:2},{value:"<code>[JsonConverter]</code>",id:"jsonconverter",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides high-performance, low-allocating, and standards-compliant capabilities to process JavaScript Object Notation (JSON), which includes serializing objects to JSON text and deserializing JSON text to objects, with UTF-8 support built-in."),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("h3",{id:"jsonconverter"},(0,o.kt)("inlineCode",{parentName:"h3"},"[JsonConverter]")),(0,o.kt)("p",null,"When placed on a type, the specified converter will be used unless a compatible converter is added to the JsonSerializerOptions.Converters collection or there is another JsonConverterAttribute on a property of the same type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[JsonConverter(typeof(JsonStringEnumConverter))]\npublic enum RpgClass\n{\n  Knight = 1,\n  Mage = 2,\n  Cleric = 3\n}\n")),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStringEnumConverter")," will be used to serialize and deserialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"RpgClass")," enum. The converter will convert the enum to and from a string so that the enum values are serialized as their names instead of their numeric values."))}d.isMDXComponent=!0}}]);