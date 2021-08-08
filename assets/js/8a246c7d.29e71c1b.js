"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[975],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7617:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"closures",title:"Closures"},l=void 0,c={unversionedId:"C-Sharp/closures",id:"C-Sharp/closures",isDocsHomePage:!1,title:"Closures",description:"StackOverflow",source:"@site/docs/C-Sharp/Closures.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/closures",permalink:"/LearningCollection/C-Sharp/closures",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Closures.md",version:"current",frontMatter:{id:"closures",title:"Closures"},sidebar:"mySidebar",previous:{title:"Asynchronous Programming",permalink:"/LearningCollection/C-Sharp/asyncProgramming"},next:{title:".NET Framework",permalink:"/LearningCollection/C-Sharp/netFramework"}},h=[{value:"StackOverflow",id:"stackoverflow",children:[]},{value:"C# in depth",id:"c-in-depth",children:[{value:"Example situation: filtering a list",id:"example-situation-filtering-a-list",children:[]},{value:"Comparing capture strategies: complexity vs power",id:"comparing-capture-strategies-complexity-vs-power",children:[]}]},{value:"Benefits",id:"benefits",children:[]}],u={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stackoverflow"},"StackOverflow"),(0,r.kt)("p",null,"In essence, a closure is a block of code which can be executed at a later time, but which maintains the environment in which it was first created - i.e. it can still use the local variables etc of the method which created it, even after that method has finished executing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'using System;\n\nclass Test\n{\n    static void Main()\n    {\n        Action action = CreateAction();\n        action();\n        action();\n    }\n\n    static Action CreateAction()\n    {\n        int counter = 0;\n        return delegate\n        {\n            // Yes, it could be done in one statement;\n            // but it is clearer like this.\n            counter++;\n            Console.WriteLine("counter={0}", counter);\n        };\n    }\n}\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"counter=1\ncounter=2\n")),(0,r.kt)("p",null,"Here we can see that the action returned by CreateAction still has access to the counter variable, and can indeed increment it, even though CreateAction itself has finished."),(0,r.kt)("h2",{id:"c-in-depth"},"C# in depth"),(0,r.kt)("p",null,"To put it very simply, closures allow you to encapsulate some behavior, pass it around like any other object, and still have access to the context in which they were first declared."),(0,r.kt)("p",null,"This allows you to separate out control structures, logical operators etc from the details of how they're going to be used. The ability to access the original context is what separates closures from normal objects, although closure implementations typically achieve this using normal objects and compiler trickery."),(0,r.kt)("h3",{id:"example-situation-filtering-a-list"},"Example situation: filtering a list"),(0,r.kt)("p",null,"It's reasonably common to want to filter a list by some criterion. This is quite easy to do \"inline\" by just creating a new list, iterating over the original list and adding the appropriate elements to the new list. It only takes a few lines of code, but it's still nice to hide that logic away in one place. The difficult bit is encapsulating which items to include. This is where closures come in."),(0,r.kt)("p",null,"Our example will produce a new list containing every element of the original list which matches the given predicate. A predicate is simply something which matches or doesn't match a given item."),(0,r.kt)("p",null,"In C# the natural way of representing a predicate is as a delegate, and indeed .NET 2.0 contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate<T>")," type. (Aside: for some reason LINQ prefers ",(0,r.kt)("inlineCode",{parentName:"p"},"Func<T,bool>"),"; I'm not sure why, given that it's less descriptive. The two are functionally equivalent.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// Declaration for System.Predicate<T>\npublic delegate bool Predicate<T>(T obj)\n")),(0,r.kt)("p",null,"Code used to filter the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// In ListUtil.cs\nstatic class ListUtil\n{\n    public static IList<T> Filter<T>(IList<T> source, Predicate<T> predicate)\n    {\n        List<T> ret = new List<T>();\n        foreach (T item in source)\n        {\n            if (predicate(item))\n            {\n                ret.Add(item);\n            }\n        }\n        return ret;\n    }\n}\n")),(0,r.kt)("p",null,"Now that we've defined our filtering method, we need to call it. In order to demonstrate the importance of closures, we'll start with a simple case which can be solved without them, and then move on to something harder."),(0,r.kt)("h4",{id:"filter-1-matching-short-strings-length-fixed"},"Filter 1: Matching short strings (length fixed)"),(0,r.kt)("p",null,"We'll take a list of strings, and then produce another list which contains only the \"short\" strings from the original list. Building a list is clearly simple - it's creating the predicate which is the tricky bit. The code looks like this when using a lambda expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"static void Main()\n{\n    Predicate<string> predicate = item => item.Length < 5;\n    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);\n    ListUtil.Dump(shortWords);\n}\n")),(0,r.kt)("h4",{id:"filter-2-matching-short-strings-variable-length"},"Filter 2: Matching short strings (variable length)"),(0,r.kt)("p",null,"So far our predicate hasn't needed any context - the length is hard-coded, and the string to check is passed to it as a parameter. Let's change the situation so that the user can specify the maximum length of strings to allow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'// In Example2c.cs (C# 3)\nstatic void Main()\n{\n    Console.Write("Maximum length of string to include? ");\n    int maxLength = int.Parse(Console.ReadLine());\n\n    Predicate<string> predicate = item => item.Length <= maxLength;\n    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);\n    ListUtil.Dump(shortWords);\n}\n')),(0,r.kt)("p",null,"In C#, the variable itself has been captured by the delegate (delegate = predicate). To prove that C# captures the variable, let's change the C# code to change the value of the parameter after the list has been filtered once, and then filter it again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'// In Example2d.cs\nstatic void Main()\n{\n    Console.Write("Maximum length of string to include? ");\n    int maxLength = int.Parse(Console.ReadLine());\n\n    Predicate<string> predicate = item => item.Length <= maxLength;\n    IList<string> shortWords = ListUtil.Filter  (SampleData.Words, predicate);\n    ListUtil.Dump(shortWords);\n\n    Console.WriteLine("Now for words with <= 5 letters:");\n    maxLength = 5;\n    shortWords = ListUtil.Filter(SampleData.Words, predicate);\n    ListUtil.Dump(shortWords);\n}\n')),(0,r.kt)("p",null,"Note that we're only changing the value of the local variable. We're not recreating the delegate instance, or anything like that. The delegate instance has access to the local variable, so it can see that it's changed. Let's go one step further, and make the predicate itself change the value of the variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// In Example2e.cs\nstatic void Main()\n{\n    int maxLength = 0;\n\n    Predicate<string> predicate = item => { maxLength++; return item.Length <= maxLength; };\n    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);\n    ListUtil.Dump(shortWords);\n}\n")),(0,r.kt)("h3",{id:"comparing-capture-strategies-complexity-vs-power"},"Comparing capture strategies: complexity vs power"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// In Example3a.cs\nstatic void Main()\n{\n    // First build a list of actions\n    List<Action> actions = new List<Action>();\n    for (int counter = 0; counter < 10; counter++)\n    {\n        actions.Add(() => Console.WriteLine(counter));\n    }\n\n    // Then execute them\n    foreach (Action action in actions)\n    {\n        action();\n    }\n}\n")),(0,r.kt)("p",null,"What's the output? Well, we've only actually declared a single counter variable - ",(0,r.kt)("strong",{parentName:"p"},"so that same counter variable is captured by all the Action instances."),' The result is the number 10 being printed on every line. To "fix" the code to make it display the output most people would expect (i.e. 0 to 9) we need to introduce an extra variable inside the loop:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// In Example3b.cs\nstatic void Main()\n{\n    // First build a list of actions\n    List<Action> actions = new List<Action>();\n    for (int counter = 0; counter < 10; counter++)\n    {\n        int copy = counter;\n        actions.Add(() => Console.WriteLine(copy));\n    }\n\n    // Then execute them\n    foreach (Action action in actions)\n    {\n        action();\n    }\n}\n")),(0,r.kt)("p",null,"Each time we go through the loop we're said to get a different instance of the copy variable - each Action captures a different variable. This makes perfect sense if you look at what the compiler's actually doing behind the scenes, but initially it flies in the face of the intuition of most developers (including me)."),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("p",null,"In the example, we've only seen a little bit of benefit in using a closure. Sure, we've separated out the control structure side from the logic required in the filtering itself, but that's not made the code that much simpler on its own."),(0,r.kt)("p",null,"This is a familiar situation - a new feature often looks less-than-impressive when used in simplistic examples. ",(0,r.kt)("strong",{parentName:"p"},"The benefit that closures often bring, however, is composability.")," If that sounds like a bit of a stretch, I agree - and that's part of the problem. Once you're familiar with closures and possibly a little addicted to them, the connection seems very obvious. Until that time, it seems obscure."),(0,r.kt)("p",null,"Closures don't inherently provide composability. All they do is make it simpler to implement delegates. Without some support for closures, it's easier to write a small loop than it is to call another method to do the looping, providing a delegate for some piece of the logic involved."))}p.isMDXComponent=!0}}]);