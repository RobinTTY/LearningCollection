"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4212],{6748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(5893),o=n(1151);const r={id:"integration-testing",title:"Integration Testing",sidebar_position:1},s=void 0,a={id:"csharp/entity-framework/testing/integration-testing",title:"Integration Testing",description:"When doing integration testing for an Entity Framework project it is a common approach to add an appsettings.json specific to the integration test environment in the application. While this approach can work, it makes more sense for the application to not have to know anything about the testing environment.",source:"@site/docs/csharp/entity-framework/testing/integration-testing.md",sourceDirName:"csharp/entity-framework/testing",slug:"/csharp/entity-framework/testing/integration-testing",permalink:"/LearningCollection/csharp/entity-framework/testing/integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/entity-framework/testing/integration-testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"integration-testing",title:"Integration Testing",sidebar_position:1},sidebar:"docs",previous:{title:"Migrations",permalink:"/LearningCollection/csharp/entity-framework/migrations"},next:{title:"Introduction",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/introduction"}},c={},h=[{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When doing integration testing for an Entity Framework project it is a common approach to add an ",(0,i.jsx)(t.code,{children:"appsettings.json"})," specific to the integration test environment in the application. While this approach can work, it makes more sense for the application to not have to know anything about the testing environment."]}),"\n",(0,i.jsx)(t.p,{children:"Instead we can override the configuration of the host in the test project to achieve the same result. This way all the tesing configuration is in the test project and the application does not need to know anything about the testing environment."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["We override the ",(0,i.jsx)(t.code,{children:"ConfigureWebHost"})," method in the ",(0,i.jsx)(t.code,{children:"WebApplicationFactory"})," class to override the configuration of the host."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"  protected override void ConfigureWebHost(IWebHostBuilder builder)\n  {\n      builder.ConfigureTestServices(services =>\n      {\n          services.RemoveAll<DbContextOptions<AppDbContext>>();\n          services.RemoveAll<AppDbContext>();\n\n          services.AddDbContext<AppDbContext>(x =>\n              x.UseNpgsql(_dbContainer.GetConnectionString()));\n      });\n  }\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["Never use the ",(0,i.jsx)(t.code,{children:"InMemoryDatabase"})," for integration testing. The behvaior is not comparable to the real database since the conversion of the LINQ queries to SQL and translation of data is not tested."]})}),"\n",(0,i.jsxs)(t.p,{children:["See this ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=K1-n2EoPxiY",children:"Nick Chapsas Video"})," for more details."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);