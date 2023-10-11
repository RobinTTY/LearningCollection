---
id: rpc
title: Remote Procedure Call (RPC)
---

In distributed computing, a remote procedure call is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call, without the programmer explicitly coding the details for the remote interaction.
That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. This is a form of client–server interaction (caller is client, executor is server), typically implemented via a request–response message-passing system.
The RPC model implies a level of location transparency, namely that calling procedures is largely the same whether it is local or remote, but usually they are not identical, so local calls can be distinguished from remote calls. Remote calls are usually orders of magnitude slower and less reliable than local calls, so distinguishing them is important.
RPCs are a form of inter-process communication (IPC), in that different processes have different address spaces: if on the same host machine, they have distinct virtual address spaces, even though the physical address space is the same; while if they are on different hosts, the physical address space is different. Many different (often incompatible) technologies have been used to implement the concept.

## When to use RPC vs REST (from StackOverflow)

When done correctly, REST improves long-term evolvability and scalability at the cost of performance and added complexity. REST is ideal for services that must be developed and maintained independently, like the Web itself. Client and server can be loosely coupled and change without breaking each other.
RPC services can be simpler and perform better, at the cost of flexibility and independence. RPC services are ideal for circumstances where client and server are tightly coupled and follow the same development cycle.
However, most so-called REST services don't really follow REST at all, because REST became just a buzzword for any kind of HTTP API. In fact, most REST APIs are so tightly coupled that they offer no advantage over an RPC design.

Given that, my somewhat cynical answers to your question are:

- Some people are adopting gRPC for the same reason they adopted REST a few years ago: design-by-buzzword.
- Many people are realizing the way they implement REST amounts to RPC anyway, so why not go with an standardized RPC framework and implement it correctly, instead of insisting on poor REST implementations?
- REST is a solution for problems that appear in projects that span several organizations and have long-term goals. Maybe people are realizing they don't really need REST and looking for better options.
