"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7179],{99645:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(74848),o=t(28453);const s={id:"data-loaders",title:"Data Loaders",sidebar_position:6},r=void 0,i={id:"csharp/libraries/hot-chocolate/data-loaders",title:"Data Loaders",description:"ataLoader is a generic utility to be used as part of the application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. It helps you to avoid the N+1 problem.",source:"@site/docs/csharp/libraries/hot-chocolate/data-loaders.md",sourceDirName:"csharp/libraries/hot-chocolate",slug:"/csharp/libraries/hot-chocolate/data-loaders",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/data-loaders",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/libraries/hot-chocolate/data-loaders.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"data-loaders",title:"Data Loaders",sidebar_position:6},sidebar:"docs",previous:{title:"Resolvers",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/resolvers"},next:{title:"Pagination",permalink:"/LearningCollection/csharp/libraries/hot-chocolate/pagination"}},l={},d=[{value:"Context: The N+1 Problem",id:"context-the-n1-problem",level:2},{value:"Example",id:"example",level:3},{value:"N+1 Problem in GraphQL",id:"n1-problem-in-graphql",level:3},{value:"HotChocolate Data Loaders",id:"hotchocolate-data-loaders",level:2},{value:"Execution",id:"execution",level:3},{value:"Data Consistency",id:"data-consistency",level:3},{value:"Types of Data loaders",id:"types-of-data-loaders",level:2},{value:"Batch DataLoader",id:"batch-dataloader",level:3},{value:"Group DataLoader",id:"group-dataloader",level:3},{value:"Cache DataLoader",id:"cache-dataloader",level:3},{value:"Stacked DataLoader Calls",id:"stacked-dataloader-calls",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"ataLoader is a generic utility to be used as part of the application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching. It helps you to avoid the N+1 problem."}),"\n",(0,n.jsx)(a.h2,{id:"context-the-n1-problem",children:"Context: The N+1 Problem"}),"\n",(0,n.jsx)(a.p,{children:"Every data fetching technology suffers the n+1 problem. Typically, it happens when you structure your code so that you first do a query to get a list of records, then subsequently do another query for each of those records."}),"\n",(0,n.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(a.p,{children:["Let's say we have a collection of ",(0,n.jsx)(a.code,{children:"Car"})," objects (database rows), and each ",(0,n.jsx)(a.code,{children:"Car"})," has a collection of ",(0,n.jsx)(a.code,{children:"Wheel"})," objects (also rows). In other words, ",(0,n.jsx)(a.code,{children:"Car \u2192 Wheel"})," is a 1-to-many relationship."]}),"\n",(0,n.jsx)(a.p,{children:"Now, let's say we need to iterate through all the cars, and for each one, print out a list of the wheels. The naive implementation would do the following:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM Cars;\n"})}),"\n",(0,n.jsx)(a.p,{children:"And then for each Car:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM Wheel WHERE CarId = ?\n"})}),"\n",(0,n.jsx)(a.p,{children:"In other words, you have one select for the Cars, and then N additional selects, where N is the total number of cars. Alternatively, one could get all wheels and perform the lookups in memory:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM Wheel;\n"})}),"\n",(0,n.jsx)(a.p,{children:"This reduces the number of round-trips to the database from N+1 to 2. Most ORM tools give you several ways to prevent N+1 selects."}),"\n",(0,n.jsx)(a.h3,{id:"n1-problem-in-graphql",children:"N+1 Problem in GraphQL"}),"\n",(0,n.jsx)(a.p,{children:"The difference between GraphQL and e.g. REST is, that the n+1 problem occurs on the server, rather than on the client. The clear benefit is, that we only have to deal with this problem once on the server, rather than on every client."}),"\n",(0,n.jsx)(a.p,{children:"To depict the issue that data loaders solve in this context, let assume we have this schema:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type Query {\n  person(id: ID): Person\n}\n\ntype Person {\n  id: ID\n  name: String\n  friends: [Person]\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"The above schema allows to fetch a person by its internal identifier and each person has a list of friends that is represented by a list of persons. A query against the above schema could look like the following:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:'{\n  a: person(id: "a") {\n    name\n  }\n\n  b: person(id: "b") {\n    name\n  }\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["The problem with the GraphQL backend is that field resolvers are atomic and do not have any knowledge about the query as a whole. So, a field resolver does not know that it will be called multiple times in parallel to fetch similar or equal data from the same data source. ",(0,n.jsx)(a.strong,{children:"The idea of a dataloader is to batch these two requests into one call to the database."})]}),"\n",(0,n.jsx)(a.p,{children:"Let's look at some code to understand what data loaders are doing. First, let's have a look at how we would write our field resolver without data loaders:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"public async Task<Person> GetPerson(string id, [Service]IPersonRepository repository)\n{\n    return await repository.GetPersonById(id);\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"hotchocolate-data-loaders",children:"HotChocolate Data Loaders"}),"\n",(0,n.jsx)(a.p,{children:"The above example would result in two calls to the person repository that would then fetch the persons one by one from our data source. Instead of fetching the data from the repository directly, we fetch the data from the data loader. The data loader batches all the requests together into one request to the database."}),"\n",(0,n.jsx)(a.h3,{id:"execution",children:"Execution"}),"\n",(0,n.jsx)(a.p,{children:"With a data loader, you can fetch entities with a key. These are the two generics you have in the class data loaders:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"public class BatchDataLoader<TId, TEntity>\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"TId"})," is used as an identifier of ",(0,n.jsx)(a.code,{children:"TEntity"}),". ",(0,n.jsx)(a.code,{children:"TId"})," is the type of the values you put into ",(0,n.jsx)(a.code,{children:"LoadAsync"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"The execution engine of Hot Chocolate tries to batch as much as possible. It executes resolvers until the queue is empty and then triggers the data loader to resolve the data for the waiting resolvers."}),"\n",(0,n.jsx)(a.h3,{id:"data-consistency",children:"Data Consistency"}),"\n",(0,n.jsx)(a.p,{children:"Dataloaders do not only batch calls to the database, they also cache the database response. A data loader guarantees data consistency in a single request. If you load an entity with a data loader in your request more than once, it is given that these two entities are equivalent."}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"Data loaders do not fetch an entity if there is already an entity with the requested key in the cache."})}),"\n",(0,n.jsx)(a.h2,{id:"types-of-data-loaders",children:"Types of Data loaders"}),"\n",(0,n.jsx)(a.p,{children:"In Hot Chocolate you can declare data loaders in two different ways. You can:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"separate the data loading concern into separate classes"}),"\n",(0,n.jsx)(a.li,{children:"use a delegate in the resolver to define data loaders on the fly"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"batch-dataloader",children:"Batch DataLoader"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["One - To - One, usually used for fields like ",(0,n.jsx)(a.code,{children:"personById"})," or one to one relations."]})}),"\n",(0,n.jsxs)(a.p,{children:["The batch data loader collects requests for entities and sends them as a batch request to the data source. Moreover, the data loader caches the retrieved entries within a request. The batch data loader gets the keys as ",(0,n.jsx)(a.code,{children:"IReadOnlyList<TKey>"})," and returns an ",(0,n.jsx)(a.code,{children:"IReadOnlyDictionary<TKey, TValue>"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",metastring:'title="Data Loader as a class"',children:"public class PersonBatchDataLoader : BatchDataLoader<string, Person>\n{\n    private readonly IPersonRepository _repository;\n\n    public PersonBatchDataLoader(\n        IPersonRepository repository,\n        IBatchScheduler batchScheduler,\n        DataLoaderOptions? options = null)\n        : base(batchScheduler, options)\n    {\n        _repository = repository;\n    }\n\n    protected override async Task<IReadOnlyDictionary<string, Person>> LoadBatchAsync(\n        IReadOnlyList<string> keys,\n        CancellationToken cancellationToken)\n    {\n        // instead of fetching one person, we fetch multiple persons\n        var persons =  await _repository.GetPersonByIds(keys);\n        return persons.ToDictionary(x => x.Id);\n    }\n}\n\n\npublic class Query\n{\n    public async Task<Person> GetPerson(\n        string id,\n        PersonBatchDataLoader dataLoader)\n        => await dataLoader.LoadAsync(id);\n}\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",metastring:'title="Data Loader as a delegate"',children:"public Task<Person> GetPerson(\n    string id,\n    IResolverContext context,\n    [Service] IPersonRepository repository)\n{\n    return context.BatchDataLoader<string, Person>(\n            async (keys, ct) =>\n            {\n                var result = await repository.GetPersonByIds(keys);\n                return result.ToDictionary(x => x.Id);\n            })\n        .LoadAsync(id);\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["More examples for data loaders can be found in this ",(0,n.jsx)(a.a,{href:"https://github.com/ChilliCream/graphql-workshop/tree/master/code/complete/GraphQL/DataLoader",children:"Github Repository"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"group-dataloader",children:"Group DataLoader"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"One - To - Many, usually used for fields like personsByLastName or one to many relations"})}),"\n",(0,n.jsxs)(a.p,{children:["The group data loader is also a batch data loader but instead of returning one entity per key, it returns multiple entities per key. As with the batch data loader retrieved collections are cached within a request. The group data loader gets the keys as ",(0,n.jsx)(a.code,{children:"IReadOnlyList<TKey>"})," and returns an ",(0,n.jsx)(a.code,{children:"ILookup<TKey, TValue>"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",metastring:'title="Data Loader as a class"',children:"public class PersonsByLastNameDataloader\n    : GroupedDataLoader<string, Person>\n{\n    private readonly IPersonRepository _repository;\n\n    public PersonsByLastNameDataloader(\n        IPersonRepository repository,\n        IBatchScheduler batchScheduler,\n        DataLoaderOptions? options = null)\n        : base(batchScheduler, options)\n    {\n        _repository = repository;\n    }\n\n\n    protected override async Task<ILookup<string, Person>> LoadGroupedBatchAsync(\n        IReadOnlyList<string> names,\n        CancellationToken cancellationToken)\n    {\n        var persons = await _repository.GetPersonsByLastName(names);\n        return persons.ToLookup(x => x.LastName);\n    }\n}\n\npublic class Query\n{\n    public async Task<IEnumerable<Person>> GetPersonByLastName(\n        string lastName,\n        PersonsByLastNameDataloader dataLoader)\n        => await dataLoader.LoadAsync(lastName);\n}\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",metastring:'title="Data Loader as a delegate"',children:"public Task<IEnumerable<Person>> GetPersonByLastName(\n   string lastName,\n   IResolverContext context,\n   [Service]IPersonRepository repository)\n{\n    return context.GroupDataLoader<string, Person>(\n            async (keys, ct) =>\n            {\n                var result = await repository.GetPersonsByLastName(keys);\n                return result.ToLookup(t => t.LastName);\n            })\n        .LoadAsync(lastName);\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"cache-dataloader",children:"Cache DataLoader"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"No batching, just caching. This data loader is used rarely. You most likely want to use the batch data loader."})}),"\n",(0,n.jsxs)(a.p,{children:["The cache data loader is the easiest to implement since there is no batching involved. You can just use the initial ",(0,n.jsx)(a.code,{children:"GetPersonById"})," method. We do not get the benefits of batching with this one, but if in a query graph the same entity is resolved twice we will load it only once from the data source."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:'public Task<Person> GetPerson(string id, IResolverContext context, [Service]IPersonRepository repository)\n{\n    return context.CacheDataLoader<string, Person>("personById", keys => repository.GetPersonById(keys)).LoadAsync(id);\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"stacked-dataloader-calls",children:"Stacked DataLoader Calls"}),"\n",(0,n.jsx)(a.p,{children:"This is more like an edge case that is supported than a certain type of data loader. Sometimes we have more complex resolvers that might first fetch data from one data loader and use that to fetch data from the next."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"public Task<IEnumerable<Customer>> GetCustomers(\n    string personId,\n    PersonByIdDataLoader personByIdDataLoader,\n    CustomerByIdsDataLoader customerByIdsDataloader)\n{\n    Person person = await personByIdDataLoader.LoadAsync(personId);\n    return await customerByIdsDataloader.LoadAsync(person.CustomerIds);\n}\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);