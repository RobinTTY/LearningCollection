---
id: schedulingUpdates
title: Scheduling Updates
sidebar_position: 2
---

Updates to things like state or context don't happen immediately. Instead, they are scheduled to be processed at a later time. Now in reality most of the time, scheduled state changes will be processed very fast, pretty much instantly. But React reserves the right of actually postponing that state change. For example, because a lot of other performance intensive tasks are going on at the same moment, potentially tasks that React considers to have a higher priority.

For reasons like that, React might postpone scheduled state changes. But React guarantees you that the order of state changes for one and the same type of state is guaranteed. Going further, if we have 2 different state changes directly after each other, React will batch them together and therefore only re-execute the component once.

For more insights into the scheduling process, see [Scheduling in React](https://philippspiess.com/scheduling-in-react/).
