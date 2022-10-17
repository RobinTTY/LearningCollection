"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,k=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"threadVsTask",title:"Thread vs Task"},l=void 0,i={unversionedId:"C-Sharp/threadVsTask",id:"C-Sharp/threadVsTask",title:"Thread vs Task",description:"Thread: lower level concept, always a seperate Thread rather than executing on the Treadpool -> actual OS-level Thread with own stack + kernel ressources",source:"@site/docs/C-Sharp/Thread vs Task.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/threadVsTask",permalink:"/LearningCollection/C-Sharp/threadVsTask",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Thread vs Task.md",tags:[],version:"current",frontMatter:{id:"threadVsTask",title:"Thread vs Task"},sidebar:"finance",previous:{title:"Task.Factory.StartNew()",permalink:"/LearningCollection/C-Sharp/taskFactoryStartNew"},next:{title:"Private protected vs protected internal access modifier",permalink:"/LearningCollection/C-Sharp/privateProtectedVsProtectedInternal"}},s={},u=[{value:"What to use",id:"what-to-use",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Thread:")," lower level concept, always a seperate Thread rather than executing on the Treadpool -> actual OS-level Thread with own stack + kernel ressources\n",(0,r.kt)("strong",{parentName:"p"},"Task:")," more than just an abstration of where to run some code, it's really just the promise of a result in the future"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task.Delay: doesn't need any actual CPU time, like setting a timer to go off in the future"),(0,r.kt)("li",{parentName:"ul"},'Task.Run: is saying "I want to execute this code seperately", the exact thread on which that code executes depends on a nmber of factors')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ThreadPool:")," is a wrapper around a pool of threads maintained by the ",(0,r.kt)("strong",{parentName:"p"},"CLR (Common Runtime Language)"),". ThreadPool gives you no control at all. You can submit work to execute at some point, and you can control the size of the pool, but you can't set anything else. You can't even tell when the pool will start running the work you submit to it."),(0,r.kt)("h2",{id:"what-to-use"},"What to use"),(0,r.kt)("p",null,"Thread:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"highest level of control"),(0,r.kt)("li",{parentName:"ul"},"costly, consumes non-trivial amount of memory for its stack"),(0,r.kt)("li",{parentName:"ul"},"additional overhead for context-switch between threads")),(0,r.kt)("p",null,"Task:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task class from the Task Parallel Library offers the best of both worlds"),(0,r.kt)("li",{parentName:"ul"},"Like the ThreadPool, a task does not create its own OS thread"),(0,r.kt)("li",{parentName:"ul"},"Instead, tasks are executed by a TaskScheduler; the default scheduler simply runs on the ThreadPool"),(0,r.kt)("li",{parentName:"ul"},"Unlike the ThreadPool, Task also allows you to find out when it finishes, and (via the generic Task) to return a result"),(0,r.kt)("li",{parentName:"ul"},"You can call ContinueWith() on an existing Task to make it run more code once the task finishes (if it's already finished, it will run the callback immediately). If the task is generic, ContinueWith() will pass you the task's result, allowing you to run more code that uses it"),(0,r.kt)("li",{parentName:"ul"},"You can also synchronously wait for a task to finish by calling Wait() (or, for a generic task, by getting the Result property). Like Thread.Join(), this will block the calling thread until the task finishes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Synchronously waiting for a task is usually bad idea; it prevents the calling thread from doing any other work, and can also lead to deadlocks if the task ends up waiting (even asynchronously) for the current thread."))),(0,r.kt)("li",{parentName:"ul"},"Since tasks still run on the ThreadPool, they should not be used for long-running operations, since they can still fill up the thread pool and block new work",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Instead, Task provides a LongRunning option, which will tell the TaskScheduler to spin up a new thread rather than running on the ThreadPool."))),(0,r.kt)("li",{parentName:"ul"},"All newer high-level concurrency APIs, including the Parallel.For","*","() methods, PLINQ, C# 5 await, and modern async methods in the BCL, are all built on Task.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The bottom line is that Task is almost always the best option; it provides a much more powerful API and avoids wasting OS threads."),(0,r.kt)("li",{parentName:"ul"},"The only reasons to explicitly create your own Threads in modern code are setting per-thread options, or maintaining a persistent thread that needs to maintain its own identity.")))}h.isMDXComponent=!0}}]);