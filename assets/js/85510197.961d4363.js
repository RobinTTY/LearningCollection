"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6985],{8091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(4848),r=n(8453);const i={id:"asp-net-rest-apis",title:"ASP.NET REST APIs"},d=void 0,l={id:"csharp/asp-net/core-concepts/asp-net-rest-apis",title:"ASP.NET REST APIs",description:"ASP.NET Core supports building RESTful services, also known as web APIs, using C#.",source:"@site/docs/csharp/asp-net/core-concepts/asp-net-rest-apis.md",sourceDirName:"csharp/asp-net/core-concepts",slug:"/csharp/asp-net/core-concepts/asp-net-rest-apis",permalink:"/LearningCollection/csharp/asp-net/core-concepts/asp-net-rest-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/core-concepts/asp-net-rest-apis.md",tags:[],version:"current",frontMatter:{id:"asp-net-rest-apis",title:"ASP.NET REST APIs"},sidebar:"docs",previous:{title:"Introduction",permalink:"/LearningCollection/csharp/asp-net/core-concepts/introduction"},next:{title:"Routing",permalink:"/LearningCollection/csharp/asp-net/core-concepts/routing"}},c={},o=[{value:"Project structure",id:"project-structure",level:2},{value:"curl",id:"curl",level:2},{value:"Models",id:"models",level:2},{value:"Controller",id:"controller",level:2},{value:"CRUD operations",id:"crud-operations",level:2},{value:"Example on how to use CRUD operations",id:"example-on-how-to-use-crud-operations",level:2},{value:"Retrieve a product",id:"retrieve-a-product",level:3},{value:"Add a product",id:"add-a-product",level:3},{value:"Modify a product",id:"modify-a-product",level:3},{value:"Removing a product",id:"removing-a-product",level:3},{value:"Testing API with curl",id:"testing-api-with-curl",level:2},{value:"valid HTTP POST request",id:"valid-http-post-request",level:3},{value:"valid HTTP Get request",id:"valid-http-get-request",level:3},{value:"valid HTTP PUT request",id:"valid-http-put-request",level:3},{value:"valid HTTP DELETE request",id:"valid-http-delete-request",level:3},{value:"valid HTTP GET request",id:"valid-http-get-request-1",level:3},{value:"invalid HTTP POST request",id:"invalid-http-post-request",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"ASP.NET Core supports building RESTful services, also known as web APIs, using C#."}),"\n",(0,s.jsx)(t.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Controllers/"}),": Contains classes with public methods exposed as HTTP endpoints."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Program.cs"}),": Contains a Main method - the app's managed entry point."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"RetailApi.csproj"}),": Contains configuration metadata for the project."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Startup.cs"}),": Configures services and the app's HTTP request pipeline."]}),"\n",(0,s.jsx)(t.h2,{id:"curl",children:"curl"}),"\n",(0,s.jsx)(t.p,{children:"curl is a cross-platform command-line tool for testing web APIs and other HTTP endpoints."}),"\n",(0,s.jsxs)(t.p,{children:["Example command: ",(0,s.jsx)(t.code,{children:"curl -k -s <https://localhost:5001/api/values> | python -m json.tool"})]}),"\n",(0,s.jsx)(t.p,{children:"The preceding command uses:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"HTTPS to send a request to the web API running on port 5001 of localhost. The ValuesController class' parameterless Get action method handles the request."}),"\n",(0,s.jsx)(t.li,{children:"The -k option to indicate that curl should allow insecure server connections when using HTTPS. The .NET Core SDK includes an HTTPS development certificate for testing. By default, curl rejects secure connections using this certificate."}),"\n",(0,s.jsx)(t.li,{children:"The -s option to suppress all output except the JSON payload. The JSON is sent to a Python json.tool module for improved display."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"models",children:"Models"}),"\n",(0,s.jsx)(t.p,{children:'A type of class called a Model is needed to represent a certain item. The Model must include the properties of an item and is used to pass data in the web API. The Model is also used to persist the item in a data store. The directory name "Models" is a convention to place all Models in. The directory name comes from the Model-View-Controller architecture used by the web API.'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"[Required]"})," signals that a property is required and ensures that a value is provided when creating an item."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"[Range(minimum: 0.01, maximum: (double) decimal.MaxValue)]"})," enforces minimum and maximum values."]}),"\n",(0,s.jsx)(t.h2,{id:"controller",children:"Controller"}),"\n",(0,s.jsx)(t.p,{children:"A Controller is a public class with one or more public methods known as actions. By convention, a Controller class is placed in the project root's Controllers directory. The actions are exposed as callable HTTP endpoints inside the web API controller. The directory name Controllers is a convention. The directory name comes from the Model-View-Controller architecture used by the web API. By convention, controller class names are suffixed with Controller."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'[Route("api/[controller]")]'})," defines routing pattern (The ",(0,s.jsx)(t.code,{children:"[controller]"})," token is replaced by the controller's name (case-insensitive, without the Controller suffix), so requests to ",(0,s.jsx)(t.code,{children:"https://localhost:5001/api/products"})," are handled by this controller.)"]}),"\n",(0,s.jsxs)(t.p,{children:["[ApiController] adds behaviors that make it easier to build web APIs. Some behaviors include ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/aspnet/core/web-api/#binding-source-parameter-inference",children:"parameter source inference"}),", ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/aspnet/core/web-api/#attribute-routing-requirement",children:"attribute routing as a requirement"}),", and ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/aspnet/core/web-api/#automatic-http-400-responses",children:"model validation error handling enhancements"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"crud-operations",children:"CRUD operations"}),"\n",(0,s.jsx)(t.p,{children:"The following table depicts the relationship between HTTP action verbs, CRUD operations, and ASP.NET Core attributes. For example, an HTTP PUT action verb is most often used to support an update operation. Such an action is annotated with the [HttpPut] attribute."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"HTTP Action Verb"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"CRUD Operation"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ASP.NET Core Attribute"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"POST"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Create"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[HttpPost]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"GET"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Read"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[HttpGet]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"PUT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Update"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[HttpPut]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"DELETE"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Delete"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[HttpDelete]"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"In addition to the action verbs in the preceding table, a web API in ASP.NET Core supports HEAD, OPTIONS, and PATCH."}),"\n",(0,s.jsx)(t.h2,{id:"example-on-how-to-use-crud-operations",children:"Example on how to use CRUD operations"}),"\n",(0,s.jsx)(t.h3,{id:"retrieve-a-product",children:"Retrieve a product"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'[HttpGet("{id}")]\npublic async Task<ActionResult<Product>> GetById(long id)\n{\n    var product = await _context.Products.FindAsync(id);\n\n    if (product == null)\n    {\n        return NotFound();\n    }\n\n    return product;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"The preceding action:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Responds only to the HTTP GET verb, as denoted by the [HttpGet] attribute."}),"\n",(0,s.jsxs)(t.li,{children:["Requires that the id value is included in the URL segment after ",(0,s.jsx)(t.code,{children:"api/products/"}),". Remember, the ",(0,s.jsx)(t.code,{children:"/api/products"})," pattern was defined by the controller-level [Route] attribute."]}),"\n",(0,s.jsx)(t.li,{children:"Queries the database for a product matching the provided id parameter."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ASP.NET Core Action Result"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"HTTP status code"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Ok is implied"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"200"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A product matching the provided id parameter exists in the database. The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NotFound"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"404"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A product matching the provided id parameter doesn't exist in the database."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"add-a-product",children:"Add a product"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:"[HttpPost]\npublic async Task<ActionResult<Product>> Create(Product product)\n{\n    _context.Products.Add(product);\n    await _context.SaveChangesAsync();\n\n    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The preceding action:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Responds only to the HTTP POST verb, as denoted by the [HttpPost] attribute."}),"\n",(0,s.jsx)(t.li,{children:"Inserts the request body's Product object into the database."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Because the controller is annotated with the [ApiController] attribute, it's implied that the product parameter will be found in the request body."}),"\n",(0,s.jsxs)(t.p,{children:["The first parameter in the CreatedAtAction method call represents an action name. The ",(0,s.jsx)(t.code,{children:"nameof"})," keyword is used to avoid hard-coding the action name. CreatedAtAction uses the action name to generate a Location HTTP response header with a URL to the newly created product."]}),"\n",(0,s.jsx)(t.p,{children:"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ASP.NET Core Action Result"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"HTTP status code"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"CreatedAtAction"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"201"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The product was added to the database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default)."}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"BadRequest is implied"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"400"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The request body's Product object is invalid."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"modify-a-product",children:"Modify a product"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'[HttpPut("{id}")]\npublic async Task<IActionResult> Update(long id, Product product)\n{\n    if (id != product.Id)\n    {\n        return BadRequest();\n    }\n\n    _context.Entry(product).State = EntityState.Modified;\n    await _context.SaveChangesAsync();\n\n    return NoContent();\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"The preceding action:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Responds only to the HTTP PUT verb, as denoted by the [HttpPut] attribute."}),"\n",(0,s.jsxs)(t.li,{children:["Requires that the id value is included in the URL segment after ",(0,s.jsx)(t.code,{children:"api/products/"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Updates the Name and Price properties of the product."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Because the controller is annotated with the [ApiController] attribute, it's implied that the product parameter will be found in the request body."}),"\n",(0,s.jsx)(t.p,{children:"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ASP.NET Core Action Result"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"HTTP status code"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NoContent"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"204"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The product was updated in the database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"BadRequest"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"400"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The request body's Id value doesn't match the route's id value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"BadRequest is implied"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"400"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The request body's Product object is invalid."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"removing-a-product",children:"Removing a product"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'[HttpDelete("{id}")]\npublic async Task<IActionResult> Delete(long id)\n{\n    var product = await _context.Products.FindAsync(id);\n\n    if (product == null)\n    {\n        return NotFound();\n    }\n\n    _context.Products.Remove(product);\n    await _context.SaveChangesAsync();\n\n    return NoContent();\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"The preceding action:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Responds only to the HTTP DELETE verb, as denoted by the [HttpDelete] attribute."}),"\n",(0,s.jsx)(t.li,{children:"Requires that id is included in the URL path."}),"\n",(0,s.jsx)(t.li,{children:"Queries the database for a product matching the provided id parameter."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ASP.NET Core Action Result"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"HTTP status code"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NoContent"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"204"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"The product was deleted from the database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NotFound"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"404"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"A product matching the provided id parameter doesn't exist in the database."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"testing-api-with-curl",children:"Testing API with curl"}),"\n",(0,s.jsx)(t.h3,{id:"valid-http-post-request",children:"valid HTTP POST request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -v -k \\\n -H "Content-Type: application/json" \\\n -d "{\\"name\\":\\"Plush Squirrel\\",\\"price\\":12.99}" \\\n <https://localhost:5001/api/Products>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Successful creation of the product results in:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An HTTP 201 status code"}),"\n",(0,s.jsx)(t.li,{children:"A Location response header with a URL to retrieve the newly created product"}),"\n",(0,s.jsx)(t.li,{children:"A JSON representation of the newly created product"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"valid-http-get-request",children:"valid HTTP Get request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"curl -k -s <https://localhost:5001/api/Products/3> | python -m json.tool"})}),"\n",(0,s.jsx)(t.p,{children:"The following output is displayed, proving that the new product was persisted to the in-memory database:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": 3,\n  "name": "Plush Squirrel",\n  "price": 12.99\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"valid-http-put-request",children:"valid HTTP PUT request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -k -X PUT \\\n -H "Content-Type: application/json" \\\n -d "{\\"id\\":2,\\"name\\":\\"Knotted Rope\\",\\"price\\":14.99}" \\\n <https://localhost:5001/api/Products/2>\n'})}),"\n",(0,s.jsx)(t.p,{children:"The preceding command changes the price from 12.99 to 14.99. No output if successful."}),"\n",(0,s.jsx)(t.h3,{id:"valid-http-delete-request",children:"valid HTTP DELETE request"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"curl -v -k -X DELETE <https://localhost:5001/api/Products/1>"})}),"\n",(0,s.jsx)(t.p,{children:"The preceding command deletes the product from the in-memory database."}),"\n",(0,s.jsx)(t.h3,{id:"valid-http-get-request-1",children:"valid HTTP GET request"}),"\n",(0,s.jsx)(t.p,{children:"The updated inventory is displayed:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "id": 2,\n    "name": "Knotted Rope",\n    "price": 14.99\n  },\n  {\n    "id": 3,\n    "name": "Plush Squirrel",\n    "price": 12.99\n  }\n]\n'})}),"\n",(0,s.jsx)(t.h3,{id:"invalid-http-post-request",children:"invalid HTTP POST request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -v -k \\\n -H "Content-Type: application/json" \\\n -d "{\\"name\\":\\"Plush Squirrel\\",\\"price\\":0.00}" \\\n <https://localhost:5001/api/Products>\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the preceding command:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"-v enables verbose output."}),"\n",(0,s.jsx)(t.li,{children:"-d implies an HTTP POST operation and defines the request body."}),"\n",(0,s.jsx)(t.li,{children:"-H indicates that the request body is in JSON format. The header's value overrides the default content type of application/x-www-form-urlencoded"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The command returns an HTTP 400 status code because the controller's [ApiController] attribute triggers Model validation on the request body. MVC's Model binder attempts to convert the request's -d JSON to a Product object. Model validation fails because the request's Price value is less than the minimum value of 0.01."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);