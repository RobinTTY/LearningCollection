"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"asyncProgramming",title:"Asynchronous Programming"},s=void 0,i={unversionedId:"csharp/advanced-concepts/asynchronous-code/asyncProgramming",id:"csharp/advanced-concepts/asynchronous-code/asyncProgramming",title:"Asynchronous Programming",description:"- If you have any I/O-bound needs (such as requesting data from a network or accessing a database), you'll want to utilize asynchronous programming",source:"@site/docs/csharp/advanced-concepts/asynchronous-code/asynchronous-programming.md",sourceDirName:"csharp/advanced-concepts/asynchronous-code",slug:"/csharp/advanced-concepts/asynchronous-code/asyncProgramming",permalink:"/LearningCollection/csharp/advanced-concepts/asynchronous-code/asyncProgramming",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/advanced-concepts/asynchronous-code/asynchronous-programming.md",tags:[],version:"current",frontMatter:{id:"asyncProgramming",title:"Asynchronous Programming"},sidebar:"docs",previous:{title:"ManualResetEvent",permalink:"/LearningCollection/csharp/advanced-concepts/classes/manResetEvent"},next:{title:"Task.Factory.StartNew()",permalink:"/LearningCollection/csharp/advanced-concepts/asynchronous-code/task-factory-start-new"}},l={},c=[{value:"Basic Overview of the Asynchronous Model",id:"basic-overview-of-the-asynchronous-model",level:2},{value:"I/O-Bound Example: Downloading data from a web service",id:"io-bound-example-downloading-data-from-a-web-service",level:3},{value:"CPU-bound Example: Performing a Calculation for a Game",id:"cpu-bound-example-performing-a-calculation-for-a-game",level:3},{value:"What happens under the covers",id:"what-happens-under-the-covers",level:3},{value:"Key Pieces to Understand",id:"key-pieces-to-understand",level:3},{value:"Recognize CPU-Bound and I/O-Bound Work",id:"recognize-cpu-bound-and-io-bound-work",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"Extracting Data from a Network",id:"extracting-data-from-a-network",level:3},{value:"Waiting for Multiple Tasks to Complete",id:"waiting-for-multiple-tasks-to-complete",level:3},{value:"Important Info and Advice",id:"important-info-and-advice",level:2},{value:"Other Ressources",id:"other-ressources",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have any I/O-bound needs (such as requesting data from a network or accessing a database), you'll want to utilize asynchronous programming"),(0,o.kt)("li",{parentName:"ul"},"C# has a language-level asynchronous programming model which allows for easily writing asynchronous code without having to juggle callbacks or conform to a library which supports asynchrony"),(0,o.kt)("li",{parentName:"ul"},"It follows what is known as the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap"},"Task-based Asynchronous Pattern (TAP)"))),(0,o.kt)("h2",{id:"basic-overview-of-the-asynchronous-model"},"Basic Overview of the Asynchronous Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The core of async programming is the Task and ",(0,o.kt)("inlineCode",{parentName:"li"},"Task<T>")," objects, which model asynchronous operations"),(0,o.kt)("li",{parentName:"ul"},"They are supported by the async and await keywords. The model is fairly simple in most cases:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For I/O-bound code, you await an operation which returns a ",(0,o.kt)("em",{parentName:"strong"},"Task or ",(0,o.kt)("inlineCode",{parentName:"em"},"Task<T>"))," inside of an async method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For CPU-bound code, you await an operation which is started on a background thread with the ",(0,o.kt)("em",{parentName:"strong"},"Task.Run")," method")),(0,o.kt)("li",{parentName:"ul"},"The await keyword is where the magic happens. It yields control to the caller of the method that performed await, and it ultimately allows a UI to be responsive or a service to be elastic"))),(0,o.kt)("li",{parentName:"ul"},"There are other ways to approach async code than async and await outlined in the TAP article linked above")),(0,o.kt)("h3",{id:"io-bound-example-downloading-data-from-a-web-service"},"I/O-Bound Example: Downloading data from a web service"),(0,o.kt)("p",null,"You may need to download some data from a web service when a button is pressed, but don\u2019t want to block the UI thread. It can be accomplished simply like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private readonly HttpClient _httpClient = new HttpClient();\n\ndownloadButton.Clicked += async (o, e) =>\n{\n    // This line will yield control to the UI as the request\n    // from the web service is happening.\n    //\n    // The UI thread is now free to perform other work.\n    var stringData = await _httpClient.GetStringAsync(URL);\n    DoSomethingWithData(stringData);\n};\n")),(0,o.kt)("p",null,"And that\u2019s it! The code expresses the intent (downloading some data asynchronously) without getting bogged down in interacting with Task objects."),(0,o.kt)("h3",{id:"cpu-bound-example-performing-a-calculation-for-a-game"},"CPU-bound Example: Performing a Calculation for a Game"),(0,o.kt)("p",null,"Say you're writing a mobile game where pressing a button can inflict damage on many enemies on the screen. Performing the damage calculation can be expensive, and doing it on the UI thread would make the game appear to pause as the calculation is performed!",(0,o.kt)("br",{parentName:"p"}),"\n","The best way to handle this is to start a background thread which does the work using Task.Run, and await its result. This will allow the UI to feel smooth as the work is being done."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private DamageResult CalculateDamageDone()\n{\n    // Code omitted:\n    //\n    // Does an expensive calculation and returns\n    // the result of that calculation.\n}\n\n\ncalculateButton.Clicked += async (o, e) =>\n{\n    // This line will yield control to the UI while CalculateDamageDone()\n    // performs its work.  The UI thread is free to perform other work.\n    var damageResult = await Task.Run(() => CalculateDamageDone());\n    DisplayDamage(damageResult);\n};\n")),(0,o.kt)("p",null,"And that's it! This code cleanly expresses the intent of the button's click event, it doesn't require managing a background thread manually, and it does so in a non-blocking way."),(0,o.kt)("h3",{id:"what-happens-under-the-covers"},"What happens under the covers"),(0,o.kt)("p",null,"There's a lot of moving pieces where asynchronous operations are concerned. If you're curious about what's happening underneath the covers of Task and ",(0,o.kt)("inlineCode",{parentName:"p"},"Task<T>"),", checkout the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth"},"Async in-depth")," article for more information.",(0,o.kt)("br",{parentName:"p"}),"\n","On the C# side of things, the compiler transforms your code into a state machine which keeps track of things like yielding execution when an await is reached and resuming execution when a background job has finished.",(0,o.kt)("br",{parentName:"p"}),"\n","For the theoretically-inclined, this is an implementation of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Futures_and_promises"},"Promise Model of asynchrony"),"."),(0,o.kt)("h3",{id:"key-pieces-to-understand"},"Key Pieces to Understand"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Async code can be used for both I/O-bound and CPU-bound code, but differently for each scenario"),(0,o.kt)("li",{parentName:"ul"},"Async code uses ",(0,o.kt)("inlineCode",{parentName:"li"},"Task<T>")," and Task, which are constructs used to model work being done in the background"),(0,o.kt)("li",{parentName:"ul"},"The async keyword turns a method into an async method, which allows you to use the await keyword in its body"),(0,o.kt)("li",{parentName:"ul"},"When the await keyword is applied, it suspends the calling method and yields control back to its caller until the awaited task is complete"),(0,o.kt)("li",{parentName:"ul"},"await can only be used inside an async method")),(0,o.kt)("h3",{id:"recognize-cpu-bound-and-io-bound-work"},"Recognize CPU-Bound and I/O-Bound Work"),(0,o.kt)("p",null,"It's key that you can identify when a job you need to do is I/O-bound or CPU-bound, because it can greatly affect the performance of your code and could potentially lead to misusing certain constructs.",(0,o.kt)("br",{parentName:"p"}),"\n","Here are two questions you should ask before you write any code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Will your code be "waiting" for something, such as data from a database? If your answer is "yes", then your work is I/O-bound.'),(0,o.kt)("li",{parentName:"ul"},'Will your code be performing a very expensive computation? If you answered "yes", then your work is CPU-bound.')),(0,o.kt)("p",null,"If the work you have is I/O-bound, use async and await without Task.Run. You should not use the Task Parallel Library. The reason for this is outlined in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth"},"Async in-depth")," article."),(0,o.kt)("p",null,"If the work you have is CPU-bound and you care about responsiveness, use async and await but spawn the work off on another thread with Task.Run. If the work is appropriate for concurrency and parallelism, you should also consider using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-parallel-library-tpl"},"Task Parallel Library"),"."),(0,o.kt)("p",null,"Additionally, you should always measure the execution of your code. For example, you may find yourself in a situation where your CPU-bound work is not costly enough compared with the overhead of context switches when multithreading. Every choice has its tradeoff, and you should pick the correct tradeoff for your situation."),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("p",null,"The following examples demonstrate various ways you can write async code in C#. They cover a few different scenarios you may come across."),(0,o.kt)("h3",{id:"extracting-data-from-a-network"},"Extracting Data from a Network"),(0,o.kt)("p",null,"This snippet downloads the HTML from the homepage at ",(0,o.kt)("a",{parentName:"p",href:"http://www.dotnetfoundation.org"},"www.dotnetfoundation.org"),' and counts the number of times the string ".NET" occurs in the HTML. It uses ASP.NET MVC to define a web controller method which performs this task, returning the number.'),(0,o.kt)("p",null,"Note: If you plan on doing HTML parsing in production code, don't use regular expressions. Use a parsing library instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'private readonly HttpClient _httpClient = new HttpClient();\n\n[HttpGet]\n[Route("DotNetCount")]\npublic async Task<int> GetDotNetCountAsync()\n{\n    // Suspends GetDotNetCountAsync() to allow the caller (the web server)\n    // to accept another request, rather than blocking on this one.\n    var html = await _httpClient.GetStringAsync("https://dotnetfoundation.org");\n\n    return Regex.Matches(html, @"\\.NET").Count;\n}\n')),(0,o.kt)("p",null,"Here's the same scenario written for a Universal Windows App, which performs the same task when a Button is pressed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'private readonly HttpClient _httpClient = new HttpClient();\n\nprivate async void SeeTheDotNets_Click(object sender, RoutedEventArgs e)\n{\n    // Capture the task handle here so we can await the background task later.\n    var getDotNetFoundationHtmlTask = _httpClient.GetStringAsync("https://www.dotnetfoundation.org");\n\n    // Any other work on the UI thread can be done here, such as enabling a Progress Bar.\n    // This is important to do here, before the "await" call, so that the user\n    // sees the progress bar before execution of this method is yielded.\n    NetworkProgressBar.IsEnabled = true;\n    NetworkProgressBar.Visibility = Visibility.Visible;\n\n    // The await operator suspends SeeTheDotNets_Click, returning control to its caller.\n    // This is what allows the app to be responsive and not hang on the UI thread.\n    var html = await getDotNetFoundationHtmlTask;\n    int count = Regex.Matches(html, @"\\.NET").Count;\n\n    DotNetCountLabel.Text = $"Number of .NETs on dotnetfoundation.org: {count}";\n\n    NetworkProgressBar.IsEnabled = false;\n    NetworkProgressBar.Visibility = Visibility.Collapsed;\n}\n')),(0,o.kt)("h3",{id:"waiting-for-multiple-tasks-to-complete"},"Waiting for Multiple Tasks to Complete"),(0,o.kt)("p",null,"You may find yourself in a situation where you need to retrieve multiple pieces of data concurrently. The Task API contains two methods, Task.WhenAll and Task.WhenAny which allow you to write asynchronous code which performs a non-blocking wait on multiple background jobs. This example shows how you might grab User data for a set of userIds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<User> GetUserAsync(int userId)\n{\n    // Code omitted:\n    //\n    // Given a user Id {userId}, retrieves a User object corresponding\n    // to the entry in the database with {userId} as its Id.\n}\n\npublic static async Task<IEnumerable<User>> GetUsersAsync(IEnumerable<int> userIds)\n{\n    var getUserTasks = new List<Task<User>>();\n\n    foreach (int userId in userIds)\n    {\n        getUserTasks.Add(GetUserAsync(userId));\n    }\n    return await Task.WhenAll(getUserTasks);\n}\n")),(0,o.kt)("p",null,"Here's another way to write this a bit more succinctly, using LINQ:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<User> GetUserAsync(int userId)\n{\n    // Code omitted:\n    //\n    // Given a user Id {userId}, retrieves a User object corresponding\n    // to the entry in the database with {userId} as its Id.\n}\n\npublic static async Task<User[]> GetUsersAsync(IEnumerable<int> userIds)\n{\n    var getUserTasks = userIds.Select(id => GetUserAsync(id));\n    return await Task.WhenAll(getUserTasks);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Although it's less code, take care when mixing LINQ with asynchronous code. Because LINQ uses deferred (lazy) execution, async calls won't happen immediately as they do in a foreach() loop unless you force the generated sequence to iterate with a call to .ToList() or .ToArray().")),(0,o.kt)("h2",{id:"important-info-and-advice"},"Important Info and Advice"),(0,o.kt)("p",null,"Although async programming is relatively straightforward, there are some details to keep in mind which can prevent unexpected behavior."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"async methods need to have an await keyword in their body or they will never yield!")),(0,o.kt)("p",null,"This is important to keep in mind. If await is not used in the body of an async method, the C# compiler will generate a warning, but the code will compile and run as if it were a normal method. Note that this would also be incredibly inefficient, as the state machine generated by the C# compiler for the async method would not be accomplishing anything."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You should add "Async" as the suffix of every async method name you write.')),(0,o.kt)("p",null,"This is the convention used in .NET to more-easily differentiate synchronous and asynchronous methods. Note that certain methods which aren\u2019t explicitly called by your code (such as event handlers or web controller methods) don\u2019t necessarily apply. Because these are not explicitly called by your code, being explicit about their naming isn\u2019t as important."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"async void should only be used for event handlers.")),(0,o.kt)("p",null,"async void is the only way to allow asynchronous event handlers to work because events do not have return types (thus cannot make use of Task and ",(0,o.kt)("inlineCode",{parentName:"p"},"Task<T>"),"). Any other use of async void does not follow the TAP model and can be challenging to use, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exceptions thrown in an async void method can\u2019t be caught outside of that method"),(0,o.kt)("li",{parentName:"ul"},"async void methods are very difficult to test"),(0,o.kt)("li",{parentName:"ul"},"async void methods can cause bad side effects if the caller isn\u2019t expecting them to be async"),(0,o.kt)("li",{parentName:"ul"},"Tread carefully when using async lambdas in LINQ expressions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lambda expressions in LINQ use deferred execution, meaning code could end up executing at a time when you\u2019re not expecting it to. The introduction of blocking tasks into this can easily result in a deadlock if not written correctly.")," Additionally, the nesting of asynchronous code like this can also make it more difficult to reason about the execution of the code. Async and LINQ are powerful, but should be used together as carefully and clearly as possible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write code that awaits Tasks in a non-blocking manner")),(0,o.kt)("p",null,"Blocking the current thread as a means to wait for a Task to complete can result in deadlocks and blocked context threads, and can require significantly more complex error-handling. The following table provides guidance on how to deal with waiting for Tasks in a non-blocking way:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Use this..."),(0,o.kt)("th",{parentName:"tr",align:null},"Instead of this..."),(0,o.kt)("th",{parentName:"tr",align:null},"When wishing to do this"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"await"),(0,o.kt)("td",{parentName:"tr",align:null},"Task.Wait or Task.Result"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieving the result of a background task")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"await Task.WhenAny"),(0,o.kt)("td",{parentName:"tr",align:null},"Task.WaitAny"),(0,o.kt)("td",{parentName:"tr",align:null},"Waiting for any task to complete")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"await Task.WhenAll"),(0,o.kt)("td",{parentName:"tr",align:null},"Task.WaitAll"),(0,o.kt)("td",{parentName:"tr",align:null},"Waiting for all tasks to complete")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"await Task.Delay"),(0,o.kt)("td",{parentName:"tr",align:null},"Thread.Sleep"),(0,o.kt)("td",{parentName:"tr",align:null},"Waiting for a period of time")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Write less stateful code"))),(0,o.kt)("p",null,"Don\u2019t depend on the state of global objects or the execution of certain methods. Instead, depend only on the return values of methods. Why?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code will be easier to reason about"),(0,o.kt)("li",{parentName:"ul"},"Code will be easier to test"),(0,o.kt)("li",{parentName:"ul"},"Mixing async and synchronous code is far simpler"),(0,o.kt)("li",{parentName:"ul"},"Race conditions can typically be avoided altogether"),(0,o.kt)("li",{parentName:"ul"},"Depending on return values makes coordinating async code simple"),(0,o.kt)("li",{parentName:"ul"},"(Bonus) it works really well with dependency injection")),(0,o.kt)("p",null,"A recommended goal is to achieve complete or near-complete ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Referential_transparency"},"Referential Transparency")," in your code. Doing so will result in an extremely predictable, testable, and maintainable codebase."),(0,o.kt)("h2",{id:"other-ressources"},"Other Ressources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/index"},"Asynchronous programming with async and await (C#)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth"},"Async in-depth")," provides more information about how Tasks work."),(0,o.kt)("li",{parentName:"ul"},"Lucian Wischik's ",(0,o.kt)("a",{parentName:"li",href:"https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async"},"Six Essential Tips for Async")," are a wonderful resource for async programming")))}h.isMDXComponent=!0}}]);