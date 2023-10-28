"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[589],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={id:"pagination",title:"Pagination",sidebar_position:7},i=void 0,l={unversionedId:"csharp/libraries/hot-chocolate/pagination",id:"csharp/libraries/hot-chocolate/pagination",title:"Pagination",description:"HotChocolate supports both offset and cursor based pagination. The cursor based pagination is based on the Relay spec.",source:"@site/docs/csharp/libraries/hot-chocolate/pagination.md",sourceDirName:"csharp/libraries/hot-chocolate",slug:"/csharp/libraries/hot-chocolate/pagination",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/pagination",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/pagination.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"pagination",title:"Pagination",sidebar_position:7},sidebar:"docs",previous:{title:"Data Loaders",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/data-loaders"},next:{title:"Extending Types",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/advanced-concepts/extending-types"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Naming",id:"naming",level:3},{value:"Options",id:"options",level:3},{value:"Total count",id:"total-count",level:4},{value:"Custom pagination logic",id:"custom-pagination-logic",level:2},{value:"Changing the node type",id:"changing-the-node-type",level:3},{value:"Adding fields to an Edge",id:"adding-fields-to-an-edge",level:3},{value:"Adding fields to a Connection",id:"adding-fields-to-a-connection",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HotChocolate supports both offset and cursor based pagination. The cursor based pagination is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"Relay spec"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To add pagination capabilities, we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"UsePaging")," middleware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Query\n{\n    [UsePaging]\n    public IEnumerable<User> GetUsers([Service] IUserRespository repository)\n        => repository.GetUsers();\n}\n")),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"UsePaging")," middleware to work, our resolver needs to return an ",(0,o.kt)("inlineCode",{parentName:"p"},"IEnumerable<T>")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"IQueryable<T>"),". The middleware will then apply the pagination arguments to what we have returned. In the case of an ",(0,o.kt)("inlineCode",{parentName:"p"},"IQueryable<T>")," this means that the pagination operations can be directly translated to native database queries. HotChocolate also offer pagination integrations for some database technologies that do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"IQueryable"),"."),(0,o.kt)("h3",{id:"naming"},"Naming"),(0,o.kt)("p",null,"The name of the Connection and Edge type is automatically inferred from the field name. If our field is called ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"UsersConnection")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UsersEdge")," type is automatically generated. We can also specify a custom name for our Connection like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    [UsePaging(ConnectionName = "CustomUsers")]\n    public IEnumerable<User> GetUsers([Service] IUserRespository repository)\n    {\n        // Omitted code for brevity\n    }\n}\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"We can define a number of options on a per-field basis trough properties on the attribute, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[UsePaging(MaxPageSize = 100)]\npublic IEnumerable<User> GetUsers([Service] IUserRespository repository)\n{\n    // Omitted code for brevity\n}\n")),(0,o.kt)("h4",{id:"total-count"},"Total count"),(0,o.kt)("p",null,"Sometimes we might want to return the total number of pageable entries. For this to work we need to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"IncludeTotalCount")," flag on the ",(0,o.kt)("inlineCode",{parentName:"p"},"UsePaging")," middleware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[UsePaging(IncludeTotalCount = true)]\npublic IEnumerable<User> GetUsers([Service] IUserRespository repository)\n{\n    // Omitted code for brevity\n}\n")),(0,o.kt)("p",null,"This will add a new field called ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," to our Connection. If our resolver returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"IEnumerable<T>")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"IQueryable<T>")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," will be automatically computed, if it has been specified as a subfield in the query."),(0,o.kt)("p",null,"If we have customized our pagination and our resolver now returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection<T>"),", we have to explicitly declare how the ",(0,o.kt)("inlineCode",{parentName:"p"},"totalCount")," value is computed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var connection = new Connection<User>(\n    edges,\n    pageInfo,\n    getTotalCount: cancellationToken => ValueTask.FromResult(0)\n  );\n")),(0,o.kt)("h2",{id:"custom-pagination-logic"},"Custom pagination logic"),(0,o.kt)("p",null,"If we need more control over the pagination process we can do so, by returning a ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection<T>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"{\n    [UsePaging]\n    public Connection<User> GetUsers(string? after, int? first, string sortBy)\n    {\n        // Get users using the above arguments\n        IEnumerable<User> users = null;\n\n        var edges = users.Select(user => new Edge<User>(user, user.Id))\n                            .ToList();\n        var pageInfo = new ConnectionPageInfo(false, false, null, null);\n\n        var connection = new Connection<User>(edges, pageInfo,\n                            ct => ValueTask.FromResult(0));\n\n        return connection;\n    }\n}\n")),(0,o.kt)("h3",{id:"changing-the-node-type"},"Changing the node type"),(0,o.kt)("p",null,"Lets say we are returning a collection of ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," from our pagination resolver, but we want these ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," to be represented in the schema using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," scalar. We can change the node type like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Query\n{\n    [UsePaging(typeof(IdType))]\n    public IEnumerable<string> GetIds()\n    {\n        // Omitted code for brevity\n    }\n}\n")),(0,o.kt)("p",null,"The same applies of course, if we are returning a collection of ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," from our pagination resolver, but we want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserType")," for representation in the schema."),(0,o.kt)("h3",{id:"adding-fields-to-an-edge"},"Adding fields to an Edge"),(0,o.kt)("p",null,"We can add new fields to an Edge type, by creating a type extension that targets the Edge type by its name. If our Edge is named ",(0,o.kt)("inlineCode",{parentName:"p"},"UsersEdge"),", we can add a new field to it like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[ExtendObjectType("UsersEdge")]\npublic class UsersEdge\n{\n    public string NewField([Parent] Edge<User> edge)\n    {\n        var cursor = edge.Cursor;\n        var user = edge.Node;\n\n        // Omitted code for brevity\n    }\n}\n')),(0,o.kt)("h3",{id:"adding-fields-to-a-connection"},"Adding fields to a Connection"),(0,o.kt)("p",null,"We can add new fields to a Connection type, by creating a type extension that targets the Connection type by its name. If our Connection is named ",(0,o.kt)("inlineCode",{parentName:"p"},"UsersConnection"),", we can add a new field to it like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[ExtendObjectType("UsersConnection")]\npublic class UsersConnectionExtension\n{\n    public string NewField()\n    {\n        // Omitted code for brevity\n    }\n}\n')),(0,o.kt)("p",null,"These additional fields are great to perform aggregations either on the entire dataset, by for example issuing a second database call, or on top of the paginated result. We can access the pagination result like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[ExtendObjectType("UsersConnection")]\npublic class UsersConnectionExtension\n{\n    public string NewField([Parent] Connection<User> connection)\n    {\n        var result = connection.Edges.Sum(e => e.Node.SomeField);\n\n        // Omitted code for brevity\n    }\n}\n')))}u.isMDXComponent=!0}}]);