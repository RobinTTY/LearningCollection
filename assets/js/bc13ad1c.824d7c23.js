"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4919],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9395:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"usingTheDriver",title:"Using the Driver",sidebar_position:3},l=void 0,c={unversionedId:"Databases/MongoDB/M220N MongoDB for .NET Developers/usingTheDriver",id:"Databases/MongoDB/M220N MongoDB for .NET Developers/usingTheDriver",title:"Using the Driver",description:"mflix project structure",source:"@site/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Using the Driver.md",sourceDirName:"Databases/MongoDB/M220N MongoDB for .NET Developers",slug:"/Databases/MongoDB/M220N MongoDB for .NET Developers/usingTheDriver",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/usingTheDriver",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M220N MongoDB for .NET Developers/Using the Driver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"usingTheDriver",title:"Using the Driver",sidebar_position:3},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/gettingStarted"},next:{title:"User-Facing Backend",permalink:"/LearningCollection/Databases/MongoDB/M220N MongoDB for .NET Developers/userFacingBackend"}},u=[{value:"mflix project structure",id:"mflix-project-structure",children:[],level:2},{value:"Approaches to working with data",id:"approaches-to-working-with-data",children:[],level:2},{value:"Async Programming Principles",id:"async-programming-principles",children:[{value:"Synchronous",id:"synchronous",children:[],level:3},{value:"Asynchronous",id:"asynchronous",children:[],level:3}],level:2},{value:"How to use the asynchronous model",id:"how-to-use-the-asynchronous-model",children:[{value:"Synchronous",id:"synchronous-1",children:[],level:3},{value:"Asynchronous",id:"asynchronous-1",children:[],level:3},{value:"Asynchronous Repository Method",id:"asynchronous-repository-method",children:[],level:3}],level:2},{value:"Using Projections with the driver",id:"using-projections-with-the-driver",children:[],level:2},{value:"Advanced Read Examples",id:"advanced-read-examples",children:[],level:2}],d={toc:u};function p(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mflix-project-structure"},"mflix project structure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"project structure",src:r(61).Z})),(0,i.kt)("h2",{id:"approaches-to-working-with-data"},"Approaches to working with data"),(0,i.kt)("p",null,"The MongoDB driver supports many different approaches to working with your data. For instance you can read data in 4 different ways using the driver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Using MQL as a string -> NOT TYPE SAFE\nvar filter = "{ price: { $gt: 400 } }";\nvar expensiveGuitars = guitarsCollection.Find(filter);\n\n// Using BsonDocument object -> NOT TYPE SAFE\nvar filter = new BsonDocument("price", new BsonDocument("$gt", 400));\nvar expensiveGuitars = guitarsCollection.Find(filter);\n\n// Using the Builders class -> Only field names NOT type safe\nvar builder = Builders<BsonDocument>.Filter;\nvar filter = builder.Gt("price", 400) & builder.Lt("price", 600);\nvar midrangeGuitars = guitarsCollection.Find(filter);\n\n// Using Mapping Classes and LINQ -> TPYE SAFE\nclass Guitar\n{\n    [BsonID]\n    public int Id { get; set; }\n    public string Make { get; set; }\n    public string Model { get; set; }\n    public double Price { get; set; }\n}\n\nvar guitars = new List<Guitar>();\nvar expensiveGuitars = guitars.Where(g => g.Price > 400).ToList();\n')),(0,i.kt)("h2",{id:"async-programming-principles"},"Async Programming Principles"),(0,i.kt)("h3",{id:"synchronous"},"Synchronous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request arrives"),(0,i.kt)("li",{parentName:"ul"},"Thread from Thread pool is assigned"),(0,i.kt)("li",{parentName:"ul"},"Thread makes request to external resource and waits for response"),(0,i.kt)("li",{parentName:"ul"},"Thread can not handle any other requests until response is received")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Synchronous",src:r(4885).Z})),(0,i.kt)("h3",{id:"asynchronous"},"Asynchronous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request arrives"),(0,i.kt)("li",{parentName:"ul"},"Thread from Thread pool is assigned"),(0,i.kt)("li",{parentName:"ul"},"Thread makes request to external resource and returns immediately to the thread pool"),(0,i.kt)("li",{parentName:"ul"},"When the external ressource returns the response, ASP.NET grabs any available thread to handle the call")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asynchronous",src:r(2561).Z})),(0,i.kt)("h2",{id:"how-to-use-the-asynchronous-model"},"How to use the asynchronous model"),(0,i.kt)("h3",{id:"synchronous-1"},"Synchronous"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public ActionResult GetMovie(string movieId) { ... }\n")),(0,i.kt)("h3",{id:"asynchronous-1"},"Asynchronous"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<ActionResult> GetMovieAsync(string movieId, CancellationToken cancellationToken = default) { ... }\n")),(0,i.kt)("h3",{id:"asynchronous-repository-method"},"Asynchronous Repository Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<Movie> FetchMovieAsync(string movieId, CancellationToken cancellationToken = default)\n{\n    return await _movies.Collection\n        .Find.(Builders<Movie>.Filter.Empty)\n        .FirstOrDefaultAsync(cancellationToken);\n}\n")),(0,i.kt)("h2",{id:"using-projections-with-the-driver"},"Using Projections with the driver"),(0,i.kt)("p",null,"To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return. With the C# driver we do it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var projectionFilter = Builders<Movie>.Projection\n    .Include(m => m.Title)\n    .Include(m => m.Year)\n    .Include(m => m.Cast)\n    .Include(m => m.Id)\n")),(0,i.kt)("h2",{id:"advanced-read-examples"},"Advanced Read Examples"),(0,i.kt)("p",null,"Sorting first, limiting the results, and skipping so we get different results for each page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var sortByYearDescending = Builders<Movie>.Sort.Ascending(m => m.Year);\nvar movies = await _moviesCollection.Find<Movie>(Builders<Movie>.Filter.Empty)\n    .Sort(sortByYearDescending)\n    .Limit(moviesPerPage)\n    .Skip(pageNumber * moviesPerPage)\n    .ToListAsync();\n")),(0,i.kt)("p",null,"Search for any match between two arrays:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public async Task<IReadOnlyList<MovieByCountryProjection>> GetMoviesByCountryAsync(\n    CancellationToken cancellationToken = default,\n    params string[] countries\n    )\n{\n    var project = Builders<Movie>.Projection.Include(movie => movie.Title);\n\n    return await _moviesCollection\n        .Find(Builders<Movie>.Filter.AnyIn(movie => movie.Countries, countries))\n        .SortByDescending(m => m.Title)\n        .Project<MovieByCountryProjection>(project)\n        .ToListAsync(cancellationToken);\n}\n")))}p.isMDXComponent=!0},61:function(e,n,r){n.Z=r.p+"assets/images/2021-06-14-51faf9252f9d104f6b3d7e074c1efad9.png"},2561:function(e,n,r){n.Z=r.p+"assets/images/asynchronous-e675343820c33fb2eb9be9de00efb08b.gif"},4885:function(e,n,r){n.Z=r.p+"assets/images/synchronous-f973ecbcf513c34771b2028fc5c056eb.gif"}}]);