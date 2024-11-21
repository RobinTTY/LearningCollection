"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3439],{91766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(74848),i=t(28453);const r={id:"routing",title:"Routing"},o=void 0,l={id:"csharp/asp-net/core-concepts/routing",title:"Routing",description:"Routing is responsible for matching incoming HTTP requests and dispatching those requests to the app's executable endpoints.",source:"@site/docs/csharp/asp-net/core-concepts/routing.md",sourceDirName:"csharp/asp-net/core-concepts",slug:"/csharp/asp-net/core-concepts/routing",permalink:"/LearningCollection/csharp/asp-net/core-concepts/routing",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/core-concepts/routing.md",tags:[],version:"current",frontMatter:{id:"routing",title:"Routing"},sidebar:"docs",previous:{title:"ASP.NET REST APIs",permalink:"/LearningCollection/csharp/asp-net/core-concepts/asp-net-rest-apis"},next:{title:"Controllers",permalink:"/LearningCollection/csharp/asp-net/core-concepts/controllers"}},c={},a=[{value:"Routing basics",id:"routing-basics",level:2},{value:"Types of Routing",id:"types-of-routing",level:2},{value:"Attribute routing",id:"attribute-routing",level:3},{value:"Conventional routing",id:"conventional-routing",level:3},{value:"Attribute Routing in detail",id:"attribute-routing-in-detail",level:2},{value:"HTTP Methods",id:"http-methods",level:3},{value:"Route Parameters and Constraints",id:"route-parameters-and-constraints",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Routing is responsible for matching incoming HTTP requests and dispatching those requests to the app's executable endpoints."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Endpoints are the app's units of executable request-handling code."}),"\n",(0,s.jsx)(n.li,{children:"Endpoints are defined in the app and configured when the app starts."}),"\n",(0,s.jsx)(n.li,{children:"The endpoint matching process can extract values from the request's URL and provide those values for request processing."}),"\n",(0,s.jsx)(n.li,{children:"Using endpoint information from the app, routing is also able to generate URLs that map to endpoints."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Apps can configure routing using:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Controllers"}),"\n",(0,s.jsx)(n.li,{children:"SignalR"}),"\n",(0,s.jsx)(n.li,{children:"gRPC Services"}),"\n",(0,s.jsxs)(n.li,{children:["Endpoint-enabled middleware such as ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-8.0",children:"Health Checks"})]}),"\n",(0,s.jsx)(n.li,{children:"Delegates and lambdas registered with routing"}),"\n",(0,s.jsx)(n.li,{children:"Razor Pages"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"routing-basics",children:"Routing basics"}),"\n",(0,s.jsx)(n.p,{children:"The following code shows a basic example of routing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet("/", () => "Hello World!");\n\napp.Run();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Routing uses a pair of middleware, registered by ",(0,s.jsx)(n.code,{children:"UseRouting"})," and ",(0,s.jsx)(n.code,{children:"UseEndpoints"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UseRouting"})," adds route matching to the middleware pipeline. This middleware looks at the set of endpoints defined in the app, and selects the best match based on the request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UseEndpoints"})," adds endpoint execution to the middleware pipeline. It runs the delegate associated with the selected endpoint."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Apps typically don't need to call ",(0,s.jsx)(n.code,{children:"UseRouting"})," or ",(0,s.jsx)(n.code,{children:"UseEndpoints"}),". ",(0,s.jsx)(n.code,{children:"WebApplicationBuilder"})," configures a middleware pipeline that wraps middleware added in ",(0,s.jsx)(n.code,{children:"Program.cs"})," with ",(0,s.jsx)(n.code,{children:"UseRouting"})," and ",(0,s.jsx)(n.code,{children:"UseEndpoints"}),". However, apps can change the order in which ",(0,s.jsx)(n.code,{children:"UseRouting"})," and ",(0,s.jsx)(n.code,{children:"UseEndpoints"})," run by calling these methods explicitly."]}),"\n",(0,s.jsx)(n.p,{children:"Also by explicitly calling these, you could also register middleware to reroute requests after initial routing but before execution."}),"\n",(0,s.jsx)(n.h2,{id:"types-of-routing",children:"Types of Routing"}),"\n",(0,s.jsxs)(n.p,{children:["In ASP.NET Core, Routing determines how an HTTP request matches a controller action. There are two primary approaches to routing in ASP.NET Core: ",(0,s.jsx)(n.strong,{children:"Attribute Routing"})," and ",(0,s.jsx)(n.strong,{children:"Conventional Routing"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"attribute-routing",children:"Attribute routing"}),"\n",(0,s.jsxs)(n.p,{children:["REST APIs should use attribute routing to model the app's functionality as a set of resources where operations are represented by ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-8.0#verb",children:"HTTP verbs"}),". Attribute routing uses a set of attributes to map actions directly to route templates."]}),"\n",(0,s.jsx)(n.p,{children:"An example of Attribute routing looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'[Route("customers/{customerId}/orders")]\npublic IEnumerable<Order> GetOrdersByCustomer(int customerId) { ... }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This attribute will match the URI ",(0,s.jsx)(n.code,{children:"/customers/1/orders"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"conventional-routing",children:"Conventional routing"}),"\n",(0,s.jsx)(n.p,{children:"Conventional routing is used with controllers and views. The default route looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'app.MapControllerRoute(\n    name: "default",\n    pattern: "{controller=Home}/{action=Index}/{id?}");\n'})}),"\n",(0,s.jsx)(n.p,{children:"The preceding is an example of a conventional route. It's called conventional routing because it establishes a convention for URL paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The first path segment, ",(0,s.jsx)(n.code,{children:"{controller=Home}"}),", maps to the controller name."]}),"\n",(0,s.jsxs)(n.li,{children:["The second segment, ",(0,s.jsx)(n.code,{children:"{action=Index}"}),", maps to the action name."]}),"\n",(0,s.jsxs)(n.li,{children:["The third segment, ",(0,s.jsx)(n.code,{children:"{id?}"})," is used for an optional ",(0,s.jsx)(n.code,{children:"id"}),". The ",(0,s.jsx)(n.code,{children:"?"})," in ",(0,s.jsx)(n.code,{children:"{id?}"})," makes it optional. ",(0,s.jsx)(n.code,{children:"id"})," is used to map to a model entity."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Using this ",(0,s.jsx)(n.code,{children:"default"})," route, the URL path:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/Products/List"})," maps to the ",(0,s.jsx)(n.code,{children:"ProductsController.List"})," action."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/Blog/Article/17"})," maps to ",(0,s.jsx)(n.code,{children:"BlogController.Article"})," and typically model binds the ",(0,s.jsx)(n.code,{children:"id"})," parameter to ",(0,s.jsx)(n.code,{children:"17"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This mapping:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Is based on the controller and action names only."}),"\n",(0,s.jsx)(n.li,{children:"Isn't based on namespaces, source file locations, or method parameters."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, convention-based routing makes it hard to support certain URI patterns that are common in RESTful APIs. For example, resources often contain child resources: Customers have orders, movies have actors, books have authors, and so forth. It's natural to create URIs that reflect these relations:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/customers/1/orders"})}),"\n",(0,s.jsx)(n.p,{children:"This type of URI is difficult to create using convention-based routing. Although it can be done, the results don't scale well if you have many controllers or resource types."}),"\n",(0,s.jsx)(n.h2,{id:"attribute-routing-in-detail",children:"Attribute Routing in detail"}),"\n",(0,s.jsx)(n.h3,{id:"http-methods",children:"HTTP Methods"}),"\n",(0,s.jsxs)(n.p,{children:["Web API also selects actions based on the HTTP method of the request (GET, POST, etc). By default, Web API looks for a case-insensitive match with the start of the controller method name. For example, a controller method named ",(0,s.jsx)(n.code,{children:"PutCustomers"})," matches an HTTP PUT request."]}),"\n",(0,s.jsx)(n.p,{children:"You can override this convention by decorating the method with any of the following attributes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpDelete]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpGet]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpHead]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpOptions]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpPatch]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpPost]"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"[HttpPut]"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the following example, Web API maps the ",(0,s.jsx)(n.code,{children:"CreateBook"})," method to HTTP POST requests:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'[Route("api/cities")]\n[HttpGet]\npublic IActionResult GetCities() { ... }\n'})}),"\n",(0,s.jsx)(n.p,{children:"A route can also be set on the controller level to apply to all actions in the controller:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'[ApiController]\n[Route("api/cities")]\npublic class CitiesController : ControllerBase\n{\n    [HttpGet]\n    public IActionResult GetCities() { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The controller name can also be automatically picked up by the route by defining the route as ",(0,s.jsx)(n.code,{children:'[Route("api/[controller]")]'}),". This will result in the same route as the previous example."]}),"\n",(0,s.jsx)(n.h3,{id:"route-parameters-and-constraints",children:"Route Parameters and Constraints"}),"\n",(0,s.jsxs)(n.p,{children:["The string ",(0,s.jsx)(n.code,{children:'"customers/{customerId}/orders"'})," is the URI template for a route. Web API tries to match the request URI to the template. In this example, ",(0,s.jsx)(n.code,{children:'"customers"'})," and ",(0,s.jsx)(n.code,{children:'"orders"'})," are literal segments, and ",(0,s.jsx)(n.code,{children:'"{customerId}"'})," is a variable parameter. The following URIs would match this template:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://localhost/customers/1/orders"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://localhost/customers/bob/orders"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"http://localhost/customers/1234-5678/orders"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Route constraints let you restrict how the parameters in the route template are matched. The general syntax is ",(0,s.jsx)(n.code,{children:"{parameter:constraint}"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'[Route("users/{id:int}")]\npublic User GetUserById(int id) { ... }\n\n[Route("users/{name}")]\npublic User GetUserByName(string name) { ... }\n'})}),"\n",(0,s.jsx)(n.p,{children:'Here, the first route will only be selected if the "id" segment of the URI is an integer. Otherwise, the second route will be chosen.'})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);