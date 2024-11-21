"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4008],{14117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(74848),o=n(28453);const l={id:"model-view-controller",title:"Model-View-Controller (MVC)",sidebar_position:1},i=void 0,s={id:"csharp/architectural-patterns/model-view-controller",title:"Model-View-Controller (MVC)",description:"The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components:",source:"@site/docs/csharp/architectural-patterns/model-view-controller.md",sourceDirName:"csharp/architectural-patterns",slug:"/csharp/architectural-patterns/model-view-controller",permalink:"/LearningCollection/csharp/architectural-patterns/model-view-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/architectural-patterns/model-view-controller.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"model-view-controller",title:"Model-View-Controller (MVC)",sidebar_position:1},sidebar:"docs",previous:{title:".Net 7",permalink:"/LearningCollection/csharp/dotnet-versions/dotnet7"},next:{title:"Repository Pattern",permalink:"/LearningCollection/csharp/architectural-patterns/repository-pattern"}},a={},c=[{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Model"}),": The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"View"}),": The View component is used for all the UI logic of the application. For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Controller"}),": Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"mvc-architecture",src:n(11181).A+"",width:"1200",height:"1320"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Defining the ",(0,r.jsx)(t.strong,{children:"model"}),", using validation attributes to validate the data:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"public class Person\n{\n  public int PersonId { get; set; }\n\n  [Required]\n  [MinLength(2)]\n  public string Name { get; set; }\n\n  [Phone]\n  public string PhoneNumber { get; set; }\n\n  [EmailAddress]\n  public string Email { get; set; }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Creating the ",(0,r.jsx)(t.strong,{children:"controllers"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"public class PeopleController : Controller\n{\n    private readonly AddressBookContext _context;\n\n    public PeopleController(AddressBookContext context)\n    {\n        _context = context;\n    }\n\n    // GET: /people\n    public async Task Index()\n    {\n        return View(await _context.People.ToListAsync());\n    }\n\n    // GET: /people/details/5\n    public async Task Details(int id)\n    {\n        var person = await _context.People.Find(id);\n\n        if (person == null)\n        {\n            return NotFound();\n        }\n\n        return View(person);\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Displaying content based on the ",(0,r.jsx)(t.strong,{children:"views"})," (Razor pages used):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<table class="table">\n  <thead>\n    <tr>\n      <th>@Html.DisplayNameFor(model => model.Name)</th>\n      <th>@Html.DisplayNameFor(model => model.PhoneNumber)</th>\n      <th>@Html.DisplayNameFor(model => model.Email)</th>\n    </tr>\n  </thead>\n  <tbody>\n    @foreach (var person in Model) {\n    <tr>\n      <td>@Html.DisplayFor(modelItem => person.Name)</td>\n      <td>@Html.DisplayFor(modelItem => person.PhoneNumber)</td>\n      <td>@Html.DisplayFor(modelItem => person.Email)</td>\n    </tr>\n    }\n  </tbody>\n</table>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11181:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mvc-architecture-1123a504d85183c4c013bdc86aebd846.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);