"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2048],{751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=n(4848),s=n(8453);const c={id:"stackVsHeap",title:"Stack vs Heap"},i=void 0,o={id:"general-concepts/stackVsHeap",title:"Stack vs Heap",description:"Stack",source:"@site/docs/general-concepts/Stack vs Heap.md",sourceDirName:"general-concepts",slug:"/general-concepts/stackVsHeap",permalink:"/LearningCollection/general-concepts/stackVsHeap",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/general-concepts/Stack vs Heap.md",tags:[],version:"current",frontMatter:{id:"stackVsHeap",title:"Stack vs Heap"},sidebar:"docs",previous:{title:"Semaphore vs Mutex",permalink:"/LearningCollection/general-concepts/semaphoreVsMutex"},next:{title:"gRPC",permalink:"/LearningCollection/general-concepts/grpc"}},r={},l=[{value:"Stack",id:"stack",level:2},{value:"Heap",id:"heap",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"stack",children:"Stack"}),"\n",(0,a.jsx)(t.p,{children:"The stack is a block of memory for storing local variables and parameters. The stack logically grows and shrinks as a function is entered and exited."}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-C#",children:"static int Factorial (int x)\n{\n    if (x == 0) return 1;\n    return x * Factorial (x-1);\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"This method is recursive, meaning that it calls itself. Each time the method is entered, a new int is allocated on the stack, and each time the method exits, the int is deallocated."}),"\n",(0,a.jsx)(t.h2,{id:"heap",children:"Heap"}),"\n",(0,a.jsx)(t.p,{children:'The heap is a block of memory in which objects (i.e., reference-type instances) reside. Whenever a new object is created, it is allocated on the heap, and a reference to that object is returned. During a program\u2019s execution, the heap starts filling up as new objects are created. The runtime has a garbage collector that periodically deallocates objects from the heap, so your program does not run out of memory. An object is eligible for deallocation as soon as it\u2019s not referenced by anything that\u2019s itself "alive."'}),"\n",(0,a.jsx)(t.p,{children:"Value-type instances (and object references) live wherever the variable was declared. If the instance was declared as a field within a class type, or as an array element, that instance lives on the heap. You can\u2019t explicitly delete objects in C#, as you can in C++. An unreferenced object is eventually collected by the garbage collector."}),"\n",(0,a.jsx)(t.p,{children:"The heap also stores static fields. Unlike objects allocated on the heap (which can get garbage-collected), these live until the application domain is torn down."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const s={},c=a.createContext(s);function i(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);