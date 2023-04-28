"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"rpc",title:"Remote Procedure Call (RPC)"},i=void 0,l={unversionedId:"General Concepts/rpc",id:"General Concepts/rpc",title:"Remote Procedure Call (RPC)",description:"In distributed computing, a remote procedure call is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call, without the programmer explicitly coding the details for the remote interaction.",source:"@site/docs/General Concepts/RPC - remote procedure call.md",sourceDirName:"General Concepts",slug:"/General Concepts/rpc",permalink:"/LearningCollection/General Concepts/rpc",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/RPC - remote procedure call.md",tags:[],version:"current",frontMatter:{id:"rpc",title:"Remote Procedure Call (RPC)"},sidebar:"finance",previous:{title:"Dynamic Link Library (DLL)",permalink:"/LearningCollection/General Concepts/dlls"},next:{title:"Semaphore vs Mutex",permalink:"/LearningCollection/General Concepts/semaphoreVsMutex"}},s={},c=[{value:"When to use RPC vs REST (from StackOverflow)",id:"when-to-use-rpc-vs-rest-from-stackoverflow",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In distributed computing, a remote procedure call is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call, without the programmer explicitly coding the details for the remote interaction.\nThat is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. This is a form of client\u2013server interaction (caller is client, executor is server), typically implemented via a request\u2013response message-passing system.\nThe RPC model implies a level of location transparency, namely that calling procedures is largely the same whether it is local or remote, but usually they are not identical, so local calls can be distinguished from remote calls. Remote calls are usually orders of magnitude slower and less reliable than local calls, so distinguishing them is important.\nRPCs are a form of inter-process communication (IPC), in that different processes have different address spaces: if on the same host machine, they have distinct virtual address spaces, even though the physical address space is the same; while if they are on different hosts, the physical address space is different. Many different (often incompatible) technologies have been used to implement the concept."),(0,o.kt)("h2",{id:"when-to-use-rpc-vs-rest-from-stackoverflow"},"When to use RPC vs REST (from StackOverflow)"),(0,o.kt)("p",null,"When done correctly, REST improves long-term evolvability and scalability at the cost of performance and added complexity. REST is ideal for services that must be developed and maintained independently, like the Web itself. Client and server can be loosely coupled and change without breaking each other.\nRPC services can be simpler and perform better, at the cost of flexibility and independence. RPC services are ideal for circumstances where client and server are tightly coupled and follow the same development cycle.\nHowever, most so-called REST services don't really follow REST at all, because REST became just a buzzword for any kind of HTTP API. In fact, most REST APIs are so tightly coupled that they offer no advantage over an RPC design."),(0,o.kt)("p",null,"Given that, my somewhat cynical answers to your question are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some people are adopting gRPC for the same reason they adopted REST a few years ago: design-by-buzzword."),(0,o.kt)("li",{parentName:"ul"},"Many people are realizing the way they implement REST amounts to RPC anyway, so why not go with an standardized RPC framework and implement it correctly, instead of insisting on poor REST implementations?"),(0,o.kt)("li",{parentName:"ul"},"REST is a solution for problems that appear in projects that span several organizations and have long-term goals. Maybe people are realizing they don't really need REST and looking for better options.")))}m.isMDXComponent=!0}}]);