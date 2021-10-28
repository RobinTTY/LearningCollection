"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1033],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6964:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"callStack",title:"Call Stack"},c=void 0,l={unversionedId:"General Concepts/callStack",id:"General Concepts/callStack",isDocsHomePage:!1,title:"Call Stack",description:'In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program. This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack".',source:"@site/docs/General Concepts/Call stack.md",sourceDirName:"General Concepts",slug:"/General Concepts/callStack",permalink:"/LearningCollection/General Concepts/callStack",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/Call stack.md",tags:[],version:"current",frontMatter:{id:"callStack",title:"Call Stack"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/LearningCollection/"},next:{title:"Certificates",permalink:"/LearningCollection/General Concepts/certificates"}},u=[{value:"Functions",id:"functions",children:[{value:"Local data storage",id:"local-data-storage",children:[]},{value:"Parameter passing",id:"parameter-passing",children:[]},{value:"Evaluation stack",id:"evaluation-stack",children:[]},{value:"Pointer to current instance",id:"pointer-to-current-instance",children:[]},{value:"Enclosing subroutine context",id:"enclosing-subroutine-context",children:[]},{value:"Other return state",id:"other-return-state",children:[]}]}],h={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program. This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A call stack is used for several related purposes, but the main reason for having one is to keep track of the point to which each active subroutine should return control when it finishes executing.")," An active subroutine is one that has been called but is yet to complete execution after which control should be handed back to the point of call. Such activations of subroutines may be nested to any level (recursive as a special case), hence the stack structure."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:"),(0,o.kt)("br",{parentName:"p"}),"\n","If, for example, a subroutine DrawSquare calls a subroutine DrawLine from four different places, DrawLine must know where to return when its execution completes. To accomplish this, the address following the call instruction, the return address, is pushed onto the call stack with each call."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:"),(0,o.kt)("br",{parentName:"p"}),"\n","Since the call stack is organized as a stack, the caller pushes the return address onto the stack, and the called subroutine, when it finishes, pulls or pops the return address off the call stack and transfers control to that address."),(0,o.kt)("p",null,"If a called subroutine calls on yet another subroutine, it will push another return address onto the call stack, and so on, with the information stacking up and unstacking as the program dictates."),(0,o.kt)("p",null,"If the pushing consumes all of the space allocated for the call stack, an error called a stack overflow occurs, generally causing the program to crash."),(0,o.kt)("p",null,'Adding a subroutine\'s entry to the call stack is sometimes called "winding"; conversely, removing entries is "unwinding". There is usually exactly one call stack associated with a running program (or more accurately, with each task or thread of a process), although additional stacks may be created for signal handling or cooperative multitasking (as with setcontext). Since there is only one in this important context, it can be referred to as the stack (implicitly, "of the task"); ',(0,o.kt)("strong",{parentName:"p"},"however, in the Forth programming language the data stack or parameter stack is accessed more explicitly than the call stack and is commonly referred to as the stack (see below).")),(0,o.kt)("p",null,"In high-level programming languages, the specifics of the call stack are usually hidden from the programmer. They are given access only to a set of functions, and not the memory on the stack itself. This is an example of abstraction. Most assembly languages, on the other hand, require programmers to be involved with manipulating the stack. The actual details of the stack in a programming language depend upon the compiler, operating system, and the available instruction set."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"local-data-storage"},"Local data storage"),(0,o.kt)("p",null,"A subroutine frequently needs memory space for storing the values of local variables, the variables that are known only within the active subroutine and do not retain values after it returns. It is often convenient to allocate space for this use by simply moving the top of the stack by enough to provide the space. This is very fast when compared to dynamic memory allocation, which uses the heap space. Note that each separate activation of a subroutine gets its own separate space in the stack for locals."),(0,o.kt)("h3",{id:"parameter-passing"},"Parameter passing"),(0,o.kt)("p",null,"Subroutines often require that values for parameters be supplied to them by the code which calls them, and it is not uncommon that space for these parameters may be laid out in the call stack. Generally if there are only a few small parameters, processor registers will be used to pass the values, but if there are more parameters than can be handled this way, memory space will be needed."),(0,o.kt)("h3",{id:"evaluation-stack"},"Evaluation stack"),(0,o.kt)("p",null,"Operands for arithmetic or logical operations are most often placed into registers and operated on there. However, in some situations the operands may be stacked up to an arbitrary depth, which means something more than registers must be used (this is the case of register spilling)."),(0,o.kt)("h3",{id:"pointer-to-current-instance"},"Pointer to current instance"),(0,o.kt)("p",null,"Some object-oriented languages (e.g., C++), store the this pointer along with function arguments in the call stack when invoking methods. The this pointer points to the object instance associated with the method to be invoked."),(0,o.kt)("h3",{id:"enclosing-subroutine-context"},"Enclosing subroutine context"),(0,o.kt)("p",null,"Some programming languages (e.g., Pascal and Ada) support declaration of nested subroutines, which are allowed to access the context of their enclosing routines, i.e., the parameters and local variables within the scope of the outer routines."),(0,o.kt)("h3",{id:"other-return-state"},"Other return state"),(0,o.kt)("p",null,"Beside the return address, in some environments there may be other machine or software states that need to be restored when a subroutine returns. This might include things like privilege level, exception-handling information, arithmetic modes, and so on. If needed, this may be stored in the call stack just as the return address is."),(0,o.kt)("p",null,"The typical call stack is used for the return address, locals, and parameters (known as a call frame). In some environments there may be more or fewer functions assigned to the call stack. In the Forth programming language, for example, ordinarily only the return address, counted loop parameters and indexes, and possibly local variables are stored on the call stack (which in that environment is named the return stack), although any data can be temporarily placed there using special return-stack handling code so long as the needs of calls and returns are respected; parameters are ordinarily stored on a separate data stack or parameter stack, typically called the stack in Forth terminology even though there is a call stack since it is usually accessed more explicitly. Some Forths also have a third stack for floating-point parameters."))}p.isMDXComponent=!0}}]);