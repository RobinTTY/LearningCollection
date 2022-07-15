"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5184],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"ienumerable",title:"IEnumerable",sidebar_position:1},c=void 0,u={unversionedId:"C-Sharp/Core Concepts/Interfaces/ienumerable",id:"C-Sharp/Core Concepts/Interfaces/ienumerable",title:"IEnumerable",description:"- Exposes an enumerator, which supports a simple iteration over a non-generic collection",source:"@site/docs/C-Sharp/Core Concepts/Interfaces/IEnumerable.md",sourceDirName:"C-Sharp/Core Concepts/Interfaces",slug:"/C-Sharp/Core Concepts/Interfaces/ienumerable",permalink:"/LearningCollection/C-Sharp/Core Concepts/Interfaces/ienumerable",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Core Concepts/Interfaces/IEnumerable.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ienumerable",title:"IEnumerable",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Null-coalescing operator (??)",permalink:"/LearningCollection/C-Sharp/Core Concepts/Operators/nullCoalescingOperator"},next:{title:"Generics",permalink:"/LearningCollection/C-Sharp/Core Concepts/generics"}},s={},p=[{value:"LINQ",id:"linq",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exposes an enumerator, which supports a simple iteration over a non-generic collection"),(0,a.kt)("li",{parentName:"ul"},"They are implemented to support the use of foreach to iterate through the collection"),(0,a.kt)("li",{parentName:"ul"},"Basically IEnumerable has a method to get the next item in the collection. It doesn't need the whole collection to be in memory and doesn't know how many items are in it, foreach just keeps getting the next item until it runs out."),(0,a.kt)("li",{parentName:"ul"},"This can be very useful in certain circumstances, for instance in a massive database table you don't want to copy the entire thing into memory before you start processing the rows."),(0,a.kt)("li",{parentName:"ul"},"IEnumerable is the base interface for all non-generic collections that can be enumerated"),(0,a.kt)("li",{parentName:"ul"},"IEnumerable contains a single method, GetEnumerator, which returns an IEnumerator. IEnumerator provides the ability to iterate through the collection by exposing a Current property and MoveNext and Reset methods"),(0,a.kt)("li",{parentName:"ul"},"It is a best practice to implement IEnumerable and IEnumerator on your collection classes to enable the foreach syntax, however implementing IEnumerable is not required"),(0,a.kt)("li",{parentName:"ul"},"If your collection does not implement IEnumerable, you must still follow the iterator pattern to support this syntax by providing a GetEnumerator method that returns an interface, class or struct"),(0,a.kt)("li",{parentName:"ul"},"List implements IEnumerable, but represents the entire collection in memory. If you have an IEnumerable and you call .ToList() you create a new list with the contents of the enumeration in memory")),(0,a.kt)("h2",{id:"linq"},"LINQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linq expressions return an enumeration, and by default the expression executes when you iterate through using the foreach"),(0,a.kt)("li",{parentName:"ul"},"An IEnumerable linq statement executes when you iterate the foreach, but you can force it to iterate sooner using .ToList()")))}f.isMDXComponent=!0}}]);