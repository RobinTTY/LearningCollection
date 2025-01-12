"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8899],{89289:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=n(74848),s=n(28453);const t={title:"ElastiCache",sidebar_position:6},l=void 0,c={id:"cloud/aws/certified-developer-associate/elasti-cache",title:"ElastiCache",description:"- ElastiCache is a managed Valkey-/Memcached-/Redis data store",source:"@site/docs/cloud/aws/certified-developer-associate/elasti-cache.md",sourceDirName:"cloud/aws/certified-developer-associate",slug:"/cloud/aws/certified-developer-associate/elasti-cache",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/elasti-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/cloud/aws/certified-developer-associate/elasti-cache.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ElastiCache",sidebar_position:6},sidebar:"docs",previous:{title:"Relational Databases (RDS/Aurora)",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/relational-databases"},next:{title:"Route 53",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/route53"}},r={},d=[{value:"Solution Architecture",id:"solution-architecture",level:2},{value:"DB Cache",id:"db-cache",level:3},{value:"User Session Store",id:"user-session-store",level:3},{value:"Redis vs Memcached",id:"redis-vs-memcached",level:2},{value:"Caching Implementation Considerations",id:"caching-implementation-considerations",level:2},{value:"Lazy Loading / Cache-Aside / Lazy Population",id:"lazy-loading--cache-aside--lazy-population",level:3},{value:"Write Through \u2013 Add or Update cache when database is updated",id:"write-through--add-or-update-cache-when-database-is-updated",level:3},{value:"Cache Evictions and Time-to-live (TTL)",id:"cache-evictions-and-time-to-live-ttl",level:3},{value:"Amazon MemoryDB for Redis",id:"amazon-memorydb-for-redis",level:2}];function o(e){const i={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"ElastiCache is a managed Valkey-/Memcached-/Redis data store"}),"\n",(0,a.jsx)(i.li,{children:"A cache is an in-memory database with really high performance, low latency"}),"\n",(0,a.jsx)(i.li,{children:"Helps reduce load off of databases for read intensive workloads"}),"\n",(0,a.jsx)(i.li,{children:"Helps make your application stateless"}),"\n",(0,a.jsx)(i.li,{children:"AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backups"}),"\n",(0,a.jsx)(i.li,{children:"Using ElastiCache involves heavy application code changes"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"solution-architecture",children:"Solution Architecture"}),"\n",(0,a.jsx)(i.p,{children:"ElastiCache can be used for different goals. Let's look at two of them."}),"\n",(0,a.jsx)(i.h3,{id:"db-cache",children:"DB Cache"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Applications queries ElastiCache, if not available, get from RDS and store in ElastiCache"}),"\n",(0,a.jsx)(i.li,{children:"Helps relieve load in RDS"}),"\n",(0,a.jsx)(i.li,{children:"Cache must have an invalidation strategy to make sure only the most current data is used in there."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"user-session-store",children:"User Session Store"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["User logs into any of the application","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"The application writes the session data into ElastiCache"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["The user hits another instance of our application","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"The instance retrieves the data and the user is already logged in"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"user-sessions-elasticache",src:n(93051).A+"",width:"1086",height:"807"})}),"\n",(0,a.jsx)(i.h2,{id:"redis-vs-memcached",children:"Redis vs Memcached"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"redis-vs-memcached",src:n(2808).A+"",width:"1668",height:"757"})}),"\n",(0,a.jsx)(i.h2,{id:"caching-implementation-considerations",children:"Caching Implementation Considerations"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Is it safe to cache data?","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Data may be out of date, eventually consistent"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Is caching effective for that data?","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Pattern: data changing slowly, few keys are frequently needed"}),"\n",(0,a.jsx)(i.li,{children:"Anti patterns: data changing rapidly, all large key space frequently needed"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Is data structured well for caching?","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Example: key value caching, or caching of aggregations results"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.li,{children:"Which caching design pattern is the most appropriate?"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"lazy-loading--cache-aside--lazy-population",children:"Lazy Loading / Cache-Aside / Lazy Population"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"elasti-lazy",src:n(81636).A+"",width:"1132",height:"706"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Pros","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Only requested data is cached (the cache isn\u2019t filled up with unused data)"}),"\n",(0,a.jsx)(i.li,{children:"Node failures are not fatal (just increased latency to warm the cache)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Cons","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Cache miss penalty that results in 3 round trips, noticeable delay for that request"}),"\n",(0,a.jsx)(i.li,{children:"Stale data: data can be updated in the database and outdated in the cache"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Lazy Loading / Cache aside is easy to implement and works for many situations as a foundation, especially on the read side."}),"\n",(0,a.jsx)(i.h3,{id:"write-through--add-or-update-cache-when-database-is-updated",children:"Write Through \u2013 Add or Update cache when database is updated"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"elasti-write-through",src:n(41109).A+"",width:"1126",height:"720"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Pros","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Data in cache is never stale, reads are quick"}),"\n",(0,a.jsx)(i.li,{children:"Write penalty vs Read penalty (each write requires 2 calls)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Cons:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Missing Data until it is added / updated in the DB. Mitigation is to implement Lazy Loading strategy as well"}),"\n",(0,a.jsx)(i.li,{children:"Cache churn \u2013 a lot of the data will never be read"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Write-through is usually combined with Lazy Loading as targeted for the queries or workloads that benefit from this optimization."}),"\n",(0,a.jsx)(i.h3,{id:"cache-evictions-and-time-to-live-ttl",children:"Cache Evictions and Time-to-live (TTL)"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Cache eviction can occur in three ways:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"You delete the item explicitly in the cache"}),"\n",(0,a.jsx)(i.li,{children:"Item is evicted because the memory is full and it\u2019s not recently used (LRU)"}),"\n",(0,a.jsx)(i.li,{children:"You set an item time-to-live (or TTL)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["TTL are helpful for any kind of data:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Leaderboards"}),"\n",(0,a.jsx)(i.li,{children:"Comments"}),"\n",(0,a.jsx)(i.li,{children:"Activity streams"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.li,{children:"TTL can range from few seconds to hours or days"}),"\n",(0,a.jsx)(i.li,{children:"If too many evictions happen due to memory, you should scale up or out"}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Setting a TTL is usually not a bad idea, except when you\u2019re using Write through. Set it to a sensible value for your application."}),"\n",(0,a.jsx)(i.h2,{id:"amazon-memorydb-for-redis",children:"Amazon MemoryDB for Redis"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Redis-compatible, ",(0,a.jsx)(i.strong,{children:"durable, in-memory database service"})]}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.strong,{children:"Ultra-fast performance with over 160 millions requests/second"})}),"\n",(0,a.jsx)(i.li,{children:"Durable in-memory data storage with Multi-AZ transactional log"}),"\n",(0,a.jsx)(i.li,{children:"Scale seamlessly from 10s GBs to 100s TBs of storage"}),"\n",(0,a.jsx)(i.li,{children:"Use cases: web and mobile apps, online gaming, media streaming, ..."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"amazon-memory-db",src:n(16334).A+"",width:"1572",height:"385"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},16334:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/amazon-memory-db-63b1523b449f76e1254a67c58bf02811.png"},81636:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/elasti-lazy-e45aac3f53c32d3b0f18f41ecd58d241.png"},41109:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/elasti-write-through-8d4ed35263bb33fdd391a52c0b9af4ae.png"},2808:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/redis-vs-memcached-94276619e6258b77689938fa2c543b6d.png"},93051:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/user-sessions-elasticache-508e5bc6a5624c3a61d8c64c2ec7df2d.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var a=n(96540);const s={},t=a.createContext(s);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);