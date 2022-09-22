"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"aspnet",title:"ASP.NET Intro"},i=void 0,l={unversionedId:"C-Sharp/aspnet",id:"C-Sharp/aspnet",title:"ASP.NET Intro",description:"ASP.NET Core supports building RESTful services, also known as web APIs, using C#.",source:"@site/docs/C-Sharp/ASPNetIntro.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/aspnet",permalink:"/LearningCollection/C-Sharp/aspnet",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/ASPNetIntro.md",tags:[],version:"current",frontMatter:{id:"aspnet",title:"ASP.NET Intro"},sidebar:"mySidebar",previous:{title:".Net 6",permalink:"/LearningCollection/C-Sharp/DotNet Versions/dotnet6"},next:{title:"Asynchronous Programming",permalink:"/LearningCollection/C-Sharp/asyncProgramming"}},d={},p=[{value:"Project structure",id:"project-structure",level:2},{value:"curl",id:"curl",level:2},{value:"Models",id:"models",level:2},{value:"Controller",id:"controller",level:2},{value:"CRUD operations",id:"crud-operations",level:2},{value:"Example on how to use CRUD operations",id:"example-on-how-to-use-crud-operations",level:2},{value:"Retrieve a product",id:"retrieve-a-product",level:3},{value:"Add a product",id:"add-a-product",level:3},{value:"Modify a product",id:"modify-a-product",level:3},{value:"Removing a product",id:"removing-a-product",level:3},{value:"Testing API with curl",id:"testing-api-with-curl",level:2},{value:"invalid HTTP POST request",id:"invalid-http-post-request",level:3},{value:"valid HTTP POST request",id:"valid-http-post-request",level:3},{value:"valid HTTP Get request",id:"valid-http-get-request",level:3},{value:"valid HTTP PUT request",id:"valid-http-put-request",level:3},{value:"valid HTTP DELETE request",id:"valid-http-delete-request",level:3},{value:"valid HTTP GET request",id:"valid-http-get-request-1",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ASP.NET Core supports building RESTful services, also known as web APIs, using C#."),(0,r.kt)("h2",{id:"project-structure"},"Project structure"),(0,r.kt)("p",null,"Controllers/: Contains classes with public methods exposed as HTTP endpoints."),(0,r.kt)("p",null,"Program.cs: Contains a Main method - the app's managed entry point."),(0,r.kt)("p",null,"RetailApi.csproj: Contains configuration metadata for the project."),(0,r.kt)("p",null,"Startup.cs: Configures services and the app's HTTP request pipeline."),(0,r.kt)("h2",{id:"curl"},"curl"),(0,r.kt)("p",null,"curl is a cross-platform command-line tool for testing web APIs and other HTTP endpoints."),(0,r.kt)("p",null,"Example command: curl -k -s ",(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/values"},"https://localhost:5001/api/values")," | python -m json.tool"),(0,r.kt)("p",null,"The preceding command uses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTPS to send a request to the web API running on port 5001 of localhost. The ValuesController class' parameterless Get action method handles the request."),(0,r.kt)("li",{parentName:"ul"},"The -k option to indicate that curl should allow insecure server connections when using HTTPS. The .NET Core SDK includes an HTTPS development certificate for testing. By default, curl rejects secure connections using this certificate."),(0,r.kt)("li",{parentName:"ul"},"The -s option to suppress all output except the JSON payload. The JSON is sent to a Python json.tool module for improved display.")),(0,r.kt)("h2",{id:"models"},"Models"),(0,r.kt)("p",null,'A type of class called a Model is needed to represent a certain item. The Model must include the properties of an item and is used to pass data in the web API. The Model is also used to persist the item in a data store. The directory name "Models" is a convention to place all Models in. The directory name comes from the Model-View-Controller architecture used by the web API.'),(0,r.kt)("p",null,"[Required]"," signals that a property is required and ensures that a value is provided when creating an item."),(0,r.kt)("p",null,"[Range(minimum: 0.01, maximum: (double) decimal.MaxValue)]"," enforces minimum and maximum values."),(0,r.kt)("h2",{id:"controller"},"Controller"),(0,r.kt)("p",null,"A Controller is a public class with one or more public methods known as actions. By convention, a Controller class is placed in the project root's Controllers directory. The actions are exposed as callable HTTP endpoints inside the web API controller. The directory name Controllers is a convention. The directory name comes from the Model-View-Controller architecture used by the web API. By convention, controller class names are suffixed with Controller."),(0,r.kt)("p",null,'[Route("api/',"[controller]",'")] defines routing pattern (The ',"[controller]"," token is replaced by the controller's name (case-insensitive, without the Controller suffix), so requests to https://localhost:5001/api/products are handled by this controller.)"),(0,r.kt)("p",null,"[ApiController]"," adds behaviors that make it easier to build web APIs. Some behaviors include ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/aspnet/core/web-api/#binding-source-parameter-inference"},"parameter source inference"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/aspnet/core/web-api/#attribute-routing-requirement"},"attribute routing as a requirement"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/aspnet/core/web-api/#automatic-http-400-responses"},"model validation error handling enhancements"),"."),(0,r.kt)("h2",{id:"crud-operations"},"CRUD operations"),(0,r.kt)("p",null,"The following table depicts the relationship between HTTP action verbs, CRUD operations, and ASP.NET Core attributes. For example, an HTTP PUT action verb is most often used to support an update operation. Such an action is annotated with the ","[HttpPut]"," attribute."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"HTTP Action Verb"),(0,r.kt)("th",{parentName:"tr",align:"center"},"CRUD Operation"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ASP.NET Core Attribute"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Create"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[HttpPost]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Read"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[HttpGet]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"PUT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Update"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[HttpPut]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Delete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[HttpDelete]")))),(0,r.kt)("p",null,"In addition to the action verbs in the preceding table, a web API in ASP.NET Core supports HEAD, OPTIONS, and PATCH."),(0,r.kt)("h2",{id:"example-on-how-to-use-crud-operations"},"Example on how to use CRUD operations"),(0,r.kt)("h3",{id:"retrieve-a-product"},"Retrieve a product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[HttpGet("{id}")]\npublic async Task<ActionResult<Product>> GetById(long id)\n{\n    var product = await _context.Products.FindAsync(id);\n\n    if (product == null)\n    {\n        return NotFound();\n    }\n\n    return product;\n}\n')),(0,r.kt)("p",null,"The preceding action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Responds only to the HTTP GET verb, as denoted by the ","[HttpGet]"," attribute."),(0,r.kt)("li",{parentName:"ul"},"Requires that the id value is included in the URL segment after api/products/. Remember, the /api/products pattern was defined by the controller-level ","[Route]"," attribute."),(0,r.kt)("li",{parentName:"ul"},"Queries the database for a product matching the provided id parameter.")),(0,r.kt)("p",null,"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ASP.NET Core Action Result"),(0,r.kt)("th",{parentName:"tr",align:"center"},"HTTP status code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Ok is implied"),(0,r.kt)("td",{parentName:"tr",align:"center"},"200"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A product matching the provided id parameter exists in the database. The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NotFound"),(0,r.kt)("td",{parentName:"tr",align:"center"},"404"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A product matching the provided id parameter doesn't exist in the database.")))),(0,r.kt)("h3",{id:"add-a-product"},"Add a product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[HttpPost]\npublic async Task<ActionResult<Product>> Create(Product product)\n{\n    _context.Products.Add(product);\n    await _context.SaveChangesAsync();\n\n    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n}\n")),(0,r.kt)("p",null,"The preceding action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Responds only to the HTTP POST verb, as denoted by the ","[HttpPost]"," attribute."),(0,r.kt)("li",{parentName:"ul"},"Inserts the request body's Product object into the database.")),(0,r.kt)("p",null,"Because the controller is annotated with the ","[ApiController]"," attribute, it's implied that the product parameter will be found in the request body."),(0,r.kt)("p",null,"The first parameter in the CreatedAtAction method call represents an action name. The nameof keyword is used to avoid hard-coding the action name. CreatedAtAction uses the action name to generate a Location HTTP response header with a URL to the newly created product."),(0,r.kt)("p",null,"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ASP.NET Core Action Result"),(0,r.kt)("th",{parentName:"tr",align:"center"},"HTTP status code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CreatedAtAction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"201"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The product was added to the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default)."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BadRequest is implied"),(0,r.kt)("td",{parentName:"tr",align:"center"},"400"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The request body's Product object is invalid.")))),(0,r.kt)("h3",{id:"modify-a-product"},"Modify a product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpPut("{id}")]\npublic async Task<IActionResult> Update(long id, Product product)\n{\n    if (id != product.Id)\n    {\n        return BadRequest();\n    }\n\n    _context.Entry(product).State = EntityState.Modified;\n    await _context.SaveChangesAsync();\n\n    return NoContent();\n}\n')),(0,r.kt)("p",null,"The preceding action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Responds only to the HTTP PUT verb, as denoted by the ","[HttpPut]"," attribute."),(0,r.kt)("li",{parentName:"ul"},"Requires that the id value is included in the URL segment after api/products/."),(0,r.kt)("li",{parentName:"ul"},"Updates the Name and Price properties of the product.")),(0,r.kt)("p",null,"Because the controller is annotated with the ","[ApiController]"," attribute, it's implied that the product parameter will be found in the request body."),(0,r.kt)("p",null,"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ASP.NET Core Action Result"),(0,r.kt)("th",{parentName:"tr",align:"center"},"HTTP status code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NoContent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"204"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The product was updated in the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BadRequest"),(0,r.kt)("td",{parentName:"tr",align:"center"},"400"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The request body's Id value doesn't match the route's id value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"BadRequest is implied"),(0,r.kt)("td",{parentName:"tr",align:"center"},"400"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The request body's Product object is invalid.")))),(0,r.kt)("h3",{id:"removing-a-product"},"Removing a product"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpDelete("{id}")]\npublic async Task<IActionResult> Delete(long id)\n{\n    var product = await _context.Products.FindAsync(id);\n\n    if (product == null)\n    {\n        return NotFound();\n    }\n\n    _context.Products.Remove(product);\n    await _context.SaveChangesAsync();\n\n    return NoContent();\n}\n')),(0,r.kt)("p",null,"The preceding action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Responds only to the HTTP DELETE verb, as denoted by the ","[HttpDelete]"," attribute."),(0,r.kt)("li",{parentName:"ul"},"Requires that id is included in the URL path."),(0,r.kt)("li",{parentName:"ul"},"Queries the database for a product matching the provided id parameter.")),(0,r.kt)("p",null,"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"ASP.NET Core Action Result"),(0,r.kt)("th",{parentName:"tr",align:"center"},"HTTP status code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NoContent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"204"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The product was deleted from the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"NotFound"),(0,r.kt)("td",{parentName:"tr",align:"center"},"404"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A product matching the provided id parameter doesn't exist in the database.")))),(0,r.kt)("h2",{id:"testing-api-with-curl"},"Testing API with curl"),(0,r.kt)("h3",{id:"invalid-http-post-request"},"invalid HTTP POST request"),(0,r.kt)("p",null,'curl -v -k \\\n-H "Content-Type: application/json" \\\n-d "{\\"name\\":\\"Plush Squirrel\\",\\"price\\":0.00}" \\\n',(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/Products"},"https://localhost:5001/api/Products")),(0,r.kt)("p",null,"In the preceding command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-v enables verbose output."),(0,r.kt)("li",{parentName:"ul"},"-d implies an HTTP POST operation and defines the request body."),(0,r.kt)("li",{parentName:"ul"},"-H indicates that the request body is in JSON format. The header's value overrides the default content type of application/x-www-form-urlencoded")),(0,r.kt)("p",null,"The command returns an HTTP 400 status code because the controller's ","[ApiController]"," attribute triggers Model validation on the request body. MVC's Model binder attempts to convert the request's -d JSON to a Product object. Model validation fails because the request's Price value is less than the minimum value of 0.01."),(0,r.kt)("h3",{id:"valid-http-post-request"},"valid HTTP POST request"),(0,r.kt)("p",null,'curl -v -k \\\n-H "Content-Type: application/json" \\\n-d "{\\"name\\":\\"Plush Squirrel\\",\\"price\\":12.99}" \\\n',(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/Products"},"https://localhost:5001/api/Products")),(0,r.kt)("p",null,"Successful creation of the product results in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An HTTP 201 status code"),(0,r.kt)("li",{parentName:"ul"},"A Location response header with a URL to retrieve the newly created product"),(0,r.kt)("li",{parentName:"ul"},"A JSON representation of the newly created product")),(0,r.kt)("h3",{id:"valid-http-get-request"},"valid HTTP Get request"),(0,r.kt)("p",null,"curl -k -s ",(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/Products/3"},"https://localhost:5001/api/Products/3")," | python -m json.tool"),(0,r.kt)("p",null,"The following output is displayed, proving that the new product was persisted to the in-memory database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 3,\n  "name": "Plush Squirrel",\n  "price": 12.99\n}\n')),(0,r.kt)("h3",{id:"valid-http-put-request"},"valid HTTP PUT request"),(0,r.kt)("p",null,'curl -k -X PUT \\\n-H "Content-Type: application/json" \\\n-d "{\\"id\\":2,\\"name\\":\\"Knotted Rope\\",\\"price\\":14.99}" \\\n',(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/Products/2"},"https://localhost:5001/api/Products/2")),(0,r.kt)("p",null,"The preceding command changes the price from 12.99 to 14.99. No output if successful."),(0,r.kt)("h3",{id:"valid-http-delete-request"},"valid HTTP DELETE request"),(0,r.kt)("p",null,"curl -v -k -X DELETE ",(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001/api/Products/1"},"https://localhost:5001/api/Products/1")),(0,r.kt)("p",null,"The preceding command deletes the product from the in-memory database."),(0,r.kt)("h3",{id:"valid-http-get-request-1"},"valid HTTP GET request"),(0,r.kt)("p",null,"The updated inventory is displayed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 2,\n    "name": "Knotted Rope",\n    "price": 14.99\n  },\n  {\n    "id": 3,\n    "name": "Plush Squirrel",\n    "price": 12.99\n  }\n]\n')))}c.isMDXComponent=!0}}]);