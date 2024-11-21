"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5298],{42162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(74848),a=n(28453);const r={id:"partial-updates",title:"Partial updates"},s=void 0,i={id:"csharp/asp-net/core-concepts/partial-updates",title:"Partial updates",description:"There are often times when we want to only update certain parts of an entity. It is therefore not ideal that we need to supply all data of an entity with every update. Instead it would be better to just provide the partial data that we want to update. The JSON Patch standard solves this problem by describing changes to a JSON document.",source:"@site/docs/csharp/asp-net/core-concepts/partial-updates.md",sourceDirName:"csharp/asp-net/core-concepts",slug:"/csharp/asp-net/core-concepts/partial-updates",permalink:"/LearningCollection/csharp/asp-net/core-concepts/partial-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/asp-net/core-concepts/partial-updates.md",tags:[],version:"current",frontMatter:{id:"partial-updates",title:"Partial updates"},sidebar:"docs",previous:{title:"Validating Input",permalink:"/LearningCollection/csharp/asp-net/core-concepts/validating-input"},next:{title:"API Errors",permalink:"/LearningCollection/csharp/asp-net/core-concepts/api-errors"}},c={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Original document",id:"original-document",level:3},{value:"The patch document",id:"the-patch-document",level:3},{value:"The result",id:"the-result",level:3},{value:"Using JSON Patch",id:"using-json-patch",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["There are often times when we want to only update certain parts of an entity. It is therefore not ideal that we need to supply all data of an entity with every update. Instead it would be better to just provide the partial data that we want to update. The ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6902/",children:"JSON Patch standard"})," solves this problem by describing changes to a JSON document."]}),"\n",(0,o.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(t.p,{children:"A JSON Patch document is just a JSON file containing an array of patch operations. The patch operations supported by JSON Patch are \u201cadd\u201d, \u201cremove\u201d, \u201creplace\u201d, \u201cmove\u201d, \u201ccopy\u201d and \u201ctest\u201d. The operations are applied in order: if any of them fail then the whole patch operation should abort."}),"\n",(0,o.jsx)(t.h3,{id:"original-document",children:"Original document"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "baz": "qux",\n  "foo": "bar"\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"the-patch-document",children:"The patch document"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'[\n  { "op": "replace", "path": "/baz", "value": "boo" },\n  { "op": "add", "path": "/hello", "value": ["world"] },\n  { "op": "remove", "path": "/foo" }\n]\n'})}),"\n",(0,o.jsx)(t.h3,{id:"the-result",children:"The result"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "baz": "boo",\n  "hello": ["world"]\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"using-json-patch",children:"Using JSON Patch"}),"\n",(0,o.jsxs)(t.p,{children:["The functionality of JSON patch documents in .NET is provided by the ",(0,o.jsx)(t.code,{children:"Microsoft.AspNetCore.JsonPatch"})," library for NewtonsoftJson and ",(0,o.jsx)(t.a,{href:"https://www.nuget.org/packages/JsonPatch.Net/",children:(0,o.jsx)(t.code,{children:"JsonPatch.Net"})})," for System.Text.Json. Microsoft may add official patch support to System.Text.Json at some point... (",(0,o.jsx)(t.a,{href:"https://github.com/dotnet/aspnetcore/issues/24333",children:"see here"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["The following describes the procedure using ",(0,o.jsx)(t.code,{children:"Microsoft.AspNetCore.JsonPatch"}),". We also need the package ",(0,o.jsx)(t.code,{children:"Microsoft.AspNetCore.Mvc.NewtonsoftJson"}),". First we register the service:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"builder.Services\n    .AddControllers()\n    .AddNewtonsoftJson();\n"})}),"\n",(0,o.jsx)(t.p,{children:"An example controller using the patch method can look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"[HttpPatch(\"{pointofinterestid}\")]\npublic ActionResult PartiallyUpdatePointOfInterest(int cityId, int pointOfInterestId,\n    JsonPatchDocument<UpdatePointOfInterestDto> patchDocument)\n{\n    var city = GetCityById(cityId);\n    if (city == null)\n    {\n        return NotFound();\n    }\n\n    var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);\n    if (pointOfInterest == null) return NotFound();\n\n    var pointOfInterestToPatch = new UpdatePointOfInterestDto\n    {\n        Name = pointOfInterest.Name,\n        Description = pointOfInterest.Description\n    };\n\n    // The patch document could try to update a property that doesn't exist on the object\n    // For this reason we pass the ModelState to the ApplyTo method\n    // With this option, you can get error messages in responses e.g.\n    /* { \"Customer\": [\n            \"The current value 'John' at path 'customerName' != test value 'Nancy'.\"\n        ]}\n    */\n    patchDocument.ApplyTo(pointOfInterestToPatch, ModelState);\n\n    if (!TryValidateModel(pointOfInterestToPatch))\n    {\n        return ValidationProblem(ModelState);\n    }\n\n    pointOfInterest.Name = pointOfInterestToPatch.Name;\n    pointOfInterest.Description = pointOfInterestToPatch.Description;\n\n    return NoContent();\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);