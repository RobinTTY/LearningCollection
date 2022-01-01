"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"dependencyInjection",title:"Dependency Injection"},s=void 0,l={unversionedId:"General Concepts/dependencyInjection",id:"General Concepts/dependencyInjection",title:"Dependency Injection",description:"- allows us to develop loosely coupled code",source:"@site/docs/General Concepts/Dependency Injection.md",sourceDirName:"General Concepts",slug:"/General Concepts/dependencyInjection",permalink:"/LearningCollection/General Concepts/dependencyInjection",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/General Concepts/Dependency Injection.md",tags:[],version:"current",frontMatter:{id:"dependencyInjection",title:"Dependency Injection"},sidebar:"mySidebar",previous:{title:"Certificates",permalink:"/LearningCollection/General Concepts/certificates"},next:{title:"Dynamic Link Library (DLL)",permalink:"/LearningCollection/General Concepts/dlls"}},p=[{value:"Martin Fowler Explantion",id:"martin-fowler-explantion",children:[{value:"Components and Services",id:"components-and-services",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allows us to develop loosely coupled code"),(0,i.kt)("li",{parentName:"ul"},"great way to reduce tight coupling between software components"),(0,i.kt)("li",{parentName:"ul"},"enables us to better manage future changes and other complexity in our software"),(0,i.kt)("li",{parentName:"ul"},"The purpose of DI is to make code maintainable")),(0,i.kt)("p",null,"Explanation:",(0,i.kt)("br",{parentName:"p"}),"\n",'The Dependency Injection pattern uses a builder object to initialize objects and provide the required dependencies to the object means it allows you to "inject" a dependency from outside the class.\nFor example, Suppose your Client class needs to use two service classes, then the best you can do is to make your Client class aware of abstraction i.e. IService interface rather than implementation i.e. Service1 and Service2 classes. In this way, you can change the implementation of the IService interface at any time (and for how many times you want) without changing the client class code.'),(0,i.kt)("p",null,"Easy Explanation:\nDependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out."),(0,i.kt)("p",null,"Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required. You don't need those frameworks to have dependency injection. Instantiating and passing objects (dependencies) explicitly is just as good an injection as injection by framework."),(0,i.kt)("h2",{id:"martin-fowler-explantion"},(0,i.kt)("a",{parentName:"h2",href:"https://martinfowler.com/articles/injection.html"},"Martin Fowler Explantion")),(0,i.kt)("p",null,"A common issue to deal with is how to wire together different elements: how do you fit together this web controller architecture with that database interface backing when they were built by different teams with little knowledge of each other. A number of frameworks have taken a stab at this problem, and several are branching out to provide a general capability to assemble components from different layers. These are often referred to as lightweight containers, examples include PicoContainer, and Spring."),(0,i.kt)("p",null,"Underlying these containers are a number of interesting design principles, things that go beyond both these specific containers and indeed the Java platform. Here I want to start exploring some of these principles. The examples I use are in Java, but like most of my writing the principles are equally applicable to other OO environments, particularly .NET."),(0,i.kt)("h3",{id:"components-and-services"},"Components and Services"),(0,i.kt)("p",null,"His definitions not general:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I use ",(0,i.kt)("strong",{parentName:"li"},"component")," to mean a ",(0,i.kt)("strong",{parentName:"li"},"glob of software that's intended to be used, without change,")," by an application that is out of the control of the writers of the component."),(0,i.kt)("li",{parentName:"ul"},"By 'without change' I mean that the using application doesn't change the source code of the components, although they ",(0,i.kt)("strong",{parentName:"li"},"may alter the component's behavior by extending it in ways allowed by the component writers.")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"service")," is similar to a component in that it's ",(0,i.kt)("strong",{parentName:"li"},"used by foreign applications.")," The main difference is that I expect a ",(0,i.kt)("strong",{parentName:"li"},"component to be used locally")," (think jar file, assembly, dll, or a source import). A ",(0,i.kt)("strong",{parentName:"li"},"service will be used remotely through some remote interface"),", either synchronous or asynchronous (eg web service, messaging system, RPC, or socket.)")))}d.isMDXComponent=!0}}]);