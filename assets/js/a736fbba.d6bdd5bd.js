"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8769],{6409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(5893),s=t(1151);const a={id:"semaphoreVsMutex",title:"Semaphore vs Mutex"},o=void 0,i={id:"general-concepts/semaphoreVsMutex",title:"Semaphore vs Mutex",description:"Mutex",source:"@site/docs/general-concepts/Semaphore vs Mutex.md",sourceDirName:"general-concepts",slug:"/general-concepts/semaphoreVsMutex",permalink:"/LearningCollection/general-concepts/semaphoreVsMutex",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/general-concepts/Semaphore vs Mutex.md",tags:[],version:"current",frontMatter:{id:"semaphoreVsMutex",title:"Semaphore vs Mutex"},sidebar:"docs",previous:{title:"Remote Procedure Call (RPC)",permalink:"/LearningCollection/general-concepts/rpc"},next:{title:"Stack vs Heap",permalink:"/LearningCollection/general-concepts/stackVsHeap"}},l={},c=[{value:"Mutex",id:"mutex",level:2},{value:"Mutual Exclusion Semaphores",id:"mutual-exclusion-semaphores",level:3},{value:"Semaphore",id:"semaphore",level:2},{value:"Binary Semaphore",id:"binary-semaphore",level:3},{value:"Difference",id:"difference",level:2}];function u(e){const n={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"mutex",children:"Mutex"}),"\n",(0,r.jsx)(n.p,{children:"A synchronization primitive that can also be used for interprocess synchronization."}),"\n",(0,r.jsx)(n.h3,{id:"mutual-exclusion-semaphores",children:"Mutual Exclusion Semaphores"}),"\n",(0,r.jsx)(n.p,{children:"Mutual Exclusion semaphores are used to protect shared resources (data structure, file, etc..)."}),"\n",(0,r.jsx)(n.p,{children:'A Mutex semaphore is "owned" by the task that takes it. If Task B attempts to semGive a mutex currently held by Task A, Task B\'s call will return an error and fail.'}),"\n",(0,r.jsx)(n.p,{children:"Mutexes always use the following sequence:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SemTake"}),"\n",(0,r.jsx)(n.li,{children:"Critical Section"}),"\n",(0,r.jsx)(n.li,{children:"SemGive"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"semaphore",children:"Semaphore"}),"\n",(0,r.jsx)(n.p,{children:"Limits the number of threads that can access a resource or pool of resources concurrently."}),"\n",(0,r.jsx)(n.h3,{id:"binary-semaphore",children:"Binary Semaphore"}),"\n",(0,r.jsx)(n.p,{children:"Binary Semaphore address a totally different question:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Task B is pended waiting for something to happen (a sensor being tripped for example)."}),"\n",(0,r.jsx)(n.li,{children:"Sensor Trips and an Interrupt Service Routine runs. It needs to notify a task of the trip."}),"\n",(0,r.jsx)(n.li,{children:"Task B should run and take appropriate actions for the sensor trip. Then go back to waiting."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note that with a binary semaphore, it is OK for B to take the semaphore and A to give it.\nAgain, a binary semaphore is NOT protecting a resource from access. The act of Giving and Taking a semaphore are fundamentally decoupled.\nIt typically makes little sense for the same task to so a give and a take on the same binary semaphore."}),"\n",(0,r.jsx)(n.h2,{id:"difference",children:"Difference"}),"\n",(0,r.jsx)(n.p,{children:'Mutex is for exclusive access to a resource. A Binary semaphore should be used for Synchronization (i.e. "Hey Someone! This occurred!").'})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);