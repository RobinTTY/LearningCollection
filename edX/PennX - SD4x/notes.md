# Notes on PennX: SD4x

## Anatomy of an HTTP Request

The first line of a request will always be a verb followed by an argument:

- GET: retrieve resource
- HEAD: retrieve only headers (information about the resource)
- POST: create resource (usually used in form submission context)

![HTTPRequest](ressources/HTTPRequest.PNG)

## Anatomy of an HTTP Response

The first line of a response is always the protocol and status code. Following that comes other header information regarding the response and/or the server, then a blank line and the the response body, i.e. the resource that was requested.

![HTTPResponse](ressources/HTTPResponse.PNG)