"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"system-text-json",title:"System.Text.Json",sidebar_position:1},a=void 0,s={unversionedId:"c-sharp/libraries/system-text-json",id:"c-sharp/libraries/system-text-json",title:"System.Text.Json",description:"Provides high-performance, low-allocating, and standards-compliant capabilities to process JavaScript Object Notation (JSON), which includes serializing objects to JSON text and deserializing JSON text to objects, with UTF-8 support built-in.",source:"@site/docs/c-sharp/libraries/system-text-json.md",sourceDirName:"c-sharp/libraries",slug:"/c-sharp/libraries/system-text-json",permalink:"/LearningCollection/c-sharp/libraries/system-text-json",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/c-sharp/libraries/system-text-json.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"system-text-json",title:"System.Text.Json",sidebar_position:1},sidebar:"finance",previous:{title:"Integration Testing",permalink:"/LearningCollection/c-sharp/entity-framework/testing/integration-testing"},next:{title:"Introduction",permalink:"/LearningCollection/c-sharp/libraries/hot-chocolate/introduction"}},l={},c=[{value:"Attributes",id:"attributes",level:2},{value:"<code>[JsonConverter]</code>",id:"jsonconverter",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides high-performance, low-allocating, and standards-compliant capabilities to process JavaScript Object Notation (JSON), which includes serializing objects to JSON text and deserializing JSON text to objects, with UTF-8 support built-in."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("h3",{id:"jsonconverter"},(0,i.kt)("inlineCode",{parentName:"h3"},"[JsonConverter]")),(0,i.kt)("p",null,"When placed on a type, the specified converter will be used unless a compatible converter is added to the JsonSerializerOptions.Converters collection or there is another JsonConverterAttribute on a property of the same type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[JsonConverter(typeof(JsonStringEnumConverter))]\npublic enum RpgClass\n{\n  Knight = 1,\n  Mage = 2,\n  Cleric = 3\n}\n")),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonStringEnumConverter")," will be used to serialize and deserialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"RpgClass")," enum. The converter will convert the enum to and from a string so that the enum values are serialized as their names instead of their numeric values."))}d.isMDXComponent=!0}}]);