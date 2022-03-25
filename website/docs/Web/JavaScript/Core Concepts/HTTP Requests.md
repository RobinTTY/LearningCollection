---
id: httpRequests
title: HTTP Requests
sidebar_position: 1
---

There are different options when it comes to making HTTP requests (this is not React specific). There are different libraries that can be used to achieve the task, a very popular one is [Axios](https://github.com/axios/axios). Nowadays there is also the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that is built into browsers.

There are a few differences to them, which can be compared here:

![httpRequestLibraries](/img/docs/Web/JavaScript/CoreConcepts/HttpRequestLibraries.png)

Generally when making simple requests in a browser context, the Fetch API is a very good option, since it doesn't require any additional package and generally has very solid feature support. If the has more complex requirements, axios should be considered.

According to mzabriskie (_a developer on axios_):

> Overall axios and fetch are very similar. Some benefits of axios:
>
> - Transformers: allow performing transforms on data before a request is made or after a response is received
> - Interceptors: allow you to alter the request or response entirely (headers as well). also, perform async operations before a request is made or before Promise settles
> - Built-in XSRF protection

Some **differences between axios and fetch** are:

- Fetch's **body** = Axios' **data**
- Fetch's body has to be **stringified**, Axios' data contains the **object**
- Fetch **has no url** in request object, Axios **has url** in request object
- Fetch request function includes the **url as parameter**, Axios request function **does not include the url as parameter**.
- Fetch request is **ok** when response object contains the **ok property**, Axios request is **ok** when **status is 200** and **statusText is 'OK'**
- To get the json object response: in fetch call the **json() function** on the response object, in Axios get **data property** of the response object.
