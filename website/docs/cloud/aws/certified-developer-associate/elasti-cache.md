---
title: ElastiCache
sidebar_position: 6
---

- ElastiCache is a managed Valkey-/Memcached-/Redis data store
- A cache is an in-memory database with really high performance, low latency
- Helps reduce load off of databases for read intensive workloads
- Helps make your application stateless
- AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backups
- Using ElastiCache involves heavy application code changes

## Solution Architecture

ElastiCache can be used for different goals. Let's look at two of them.

### DB Cache

- Applications queries ElastiCache, if not available, get from RDS and store in ElastiCache
- Helps relieve load in RDS
- Cache must have an invalidation strategy to make sure only the most current data is used in there.

### User Session Store

- User logs into any of the application
  - The application writes the session data into ElastiCache
- The user hits another instance of our application
  - The instance retrieves the data and the user is already logged in

![user-sessions-elasticache](/img/docs/cloud/aws/user-sessions-elasticache.png)

## Redis vs Memcached

![redis-vs-memcached](/img/docs/cloud/aws/redis-vs-memcached.png)

## Caching Implementation Considerations

- Is it safe to cache data?
  - Data may be out of date, eventually consistent
- Is caching effective for that data?
  - Pattern: data changing slowly, few keys are frequently needed
  - Anti patterns: data changing rapidly, all large key space frequently needed
- Is data structured well for caching?
  - Example: key value caching, or caching of aggregations results
- Which caching design pattern is the most appropriate?

### Lazy Loading / Cache-Aside / Lazy Population

![elasti-lazy](/img/docs/cloud/aws/elasti-lazy.png)

- Pros
  - Only requested data is cached (the cache isn’t filled up with unused data)
  - Node failures are not fatal (just increased latency to warm the cache)
- Cons
  - Cache miss penalty that results in 3 round trips, noticeable delay for that request
  - Stale data: data can be updated in the database and outdated in the cache

Lazy Loading / Cache aside is easy to implement and works for many situations as a foundation, especially on the read side.

### Write Through – Add or Update cache when database is updated

![elasti-write-through](/img/docs/cloud/aws/elasti-write-through.png)

- Pros
  - Data in cache is never stale, reads are quick
  - Write penalty vs Read penalty (each write requires 2 calls)
- Cons:
  - Missing Data until it is added / updated in the DB. Mitigation is to implement Lazy Loading strategy as well
  - Cache churn – a lot of the data will never be read

Write-through is usually combined with Lazy Loading as targeted for the queries or workloads that benefit from this optimization.

### Cache Evictions and Time-to-live (TTL)

- Cache eviction can occur in three ways:
  - You delete the item explicitly in the cache
  - Item is evicted because the memory is full and it’s not recently used (LRU)
  - You set an item time-to-live (or TTL)
- TTL are helpful for any kind of data:
  - Leaderboards
  - Comments
  - Activity streams
- TTL can range from few seconds to hours or days
- If too many evictions happen due to memory, you should scale up or out

Setting a TTL is usually not a bad idea, except when you’re using Write through. Set it to a sensible value for your application.

## Amazon MemoryDB for Redis

- Redis-compatible, **durable, in-memory database service**
- **Ultra-fast performance with over 160 millions requests/second**
- Durable in-memory data storage with Multi-AZ transactional log
- Scale seamlessly from 10s GBs to 100s TBs of storage
- Use cases: web and mobile apps, online gaming, media streaming, ...

![amazon-memory-db](/img/docs/cloud/aws/amazon-memory-db.png)
