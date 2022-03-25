"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4031],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"stackVsHeap",title:"Stack vs Heap"},l=void 0,s={unversionedId:"General Concepts/stackVsHeap",id:"General Concepts/stackVsHeap",title:"Stack vs Heap",description:"Stack",source:"@site/docs/General Concepts/Stack vs Heap.md",sourceDirName:"General Concepts",slug:"/General Concepts/stackVsHeap",permalink:"/LearningCollection/General Concepts/stackVsHeap",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/Stack vs Heap.md",tags:[],version:"current",frontMatter:{id:"stackVsHeap",title:"Stack vs Heap"},sidebar:"mySidebar",previous:{title:"Semaphore vs Mutex",permalink:"/LearningCollection/General Concepts/semaphoreVsMutex"},next:{title:"gRPC",permalink:"/LearningCollection/General Concepts/grpc"}},p={},u=[{value:"Stack",id:"stack",level:2},{value:"Heap",id:"heap",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stack"},"Stack"),(0,o.kt)("p",null,"The stack is a block of memory for storing local variables and parameters. The stack logically grows and shrinks as a function is entered and exited."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C#"},"static int Factorial (int x)\n{\n    if (x == 0) return 1;\n    return x * Factorial (x-1);\n}\n")),(0,o.kt)("p",null,"This method is recursive, meaning that it calls itself. Each time the method is entered, a new int is allocated on the stack, and each time the method exits, the int is deallocated."),(0,o.kt)("h2",{id:"heap"},"Heap"),(0,o.kt)("p",null,'The heap is a block of memory in which objects (i.e., reference-type instances) reside. Whenever a new object is created, it is allocated on the heap, and a reference to that object is returned. During a program\u2019s execution, the heap starts filling up as new objects are created. The runtime has a garbage collector that periodically deallocates objects from the heap, so your program does not run out of memory. An object is eligible for deallocation as soon as it\u2019s not referenced by anything that\u2019s itself "alive."'),(0,o.kt)("p",null,"Value-type instances (and object references) live wherever the variable was declared. If the instance was declared as a field within a class type, or as an array element, that instance lives on the heap. You can\u2019t explicitly delete objects in C#, as you can in C++. An unreferenced object is eventually collected by the garbage collector."),(0,o.kt)("p",null,"The heap also stores static fields. Unlike objects allocated on the heap (which can get garbage-collected), these live until the application domain is torn down."))}f.isMDXComponent=!0}}]);