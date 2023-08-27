"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=u??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},7487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={id:"queries",title:"Queries",sidebar_position:1},u=void 0,s={unversionedId:"apis/graphql/hot-chocolate/defining-a-schema/queries",id:"apis/graphql/hot-chocolate/defining-a-schema/queries",title:"Queries",description:"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them. A query type is required for every GraphQL server.",source:"@site/docs/apis/graphql/hot-chocolate/defining-a-schema/queries.mdx",sourceDirName:"apis/graphql/hot-chocolate/defining-a-schema",slug:"/apis/graphql/hot-chocolate/defining-a-schema/queries",permalink:"/LearningCollection/apis/graphql/hot-chocolate/defining-a-schema/queries",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/apis/graphql/hot-chocolate/defining-a-schema/queries.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"queries",title:"Queries",sidebar_position:1},sidebar:"finance",previous:{title:"Introduction",permalink:"/LearningCollection/apis/graphql/hot-chocolate/introduction"},next:{title:"Mutations",permalink:"/LearningCollection/apis/graphql/hot-chocolate/defining-a-schema/mutations"}},c={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The query type in GraphQL represents a read-only view of all of our entities and ways to retrieve them. A query type is required for every GraphQL server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  books: [Book!]!\n  author(id: Int!): Author\n}\n")),(0,a.kt)("p",null,"Clients can query one or more fields through the query type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  books {\n    title\n    author\n  }\n  author(id: 1) {\n    name\n  }\n}\n")),(0,a.kt)("p",null,"Queries are expected to be side-effect free and are therefore parallelized by the execution engine."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"A query type can be defined like the following."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"annotation",label:"Annotation-based",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    public Book GetBook()\n    {\n        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddQueryType<Query>();\n    }\n}\n\n'))),(0,a.kt)(i.Z,{value:"code",label:"Code-first",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    public Book GetBook()\n    {\n        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };\n    }\n}\n\npublic class QueryType : ObjectType<Query>\n{\n    protected override void Configure(IObjectTypeDescriptor<Query> descriptor)\n    {\n        descriptor\n            .Field(f => f.GetBook())\n            .Type<BookType>();\n    }\n}\n\npublic class BookType : ObjectType<Book>\n{\n    protected override void Configure(IObjectTypeDescriptor<Book> descriptor)\n    {\n        descriptor\n            .Field(f => f.Title)\n            .Type<StringType>();\n\n        descriptor\n            .Field(f => f.Author)\n            .Type<StringType>();\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddQueryType<QueryType>();\n    }\n}\n\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema-first",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Query\n{\n    public Book GetBook()\n    {\n        return new Book { Title  = "C# in depth", Author = "Jon Skeet" };\n    }\n}\n\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddGraphQLServer()\n            .AddDocumentFromString(@"\n                type Query {\n                  book: Book\n                }\n\n                type Book {\n                  title: String\n                  author: String\n                }\n            ")\n            .BindRuntimeType<Query>()\n            .BindRuntimeType<Book>();\n    }\n}\n\n')))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Only one query type can be registered using ",(0,a.kt)("inlineCode",{parentName:"p"},"AddQueryType()"),". If we want to split up our query type into multiple classes, we can do so using ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types"},"type extensions"),".")),(0,a.kt)("p",null,"A query type is just a regular object type, so everything that applies to an ",(0,a.kt)("a",{parentName:"p",href:"https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/object-types"},"object type")," also applies to the query type (this is true for all root types)."))}h.isMDXComponent=!0}}]);