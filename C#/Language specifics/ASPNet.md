# ASP.NET

ASP.NET Core supports building RESTful services, also known as web APIs, using C#.

## Project structure

Controllers/: Contains classes with public methods exposed as HTTP endpoints.

Program.cs: Contains a Main method - the app's managed entry point.

RetailApi.csproj: Contains configuration metadata for the project.

Startup.cs: Configures services and the app's HTTP request pipeline.

## curl

curl is a cross-platform command-line tool for testing web APIs and other HTTP endpoints.

Example command: curl -k -s https://localhost:5001/api/values | python -m json.tool

The preceding command uses:

- HTTPS to send a request to the web API running on port 5001 of localhost. The ValuesController class' parameterless Get action method handles the request.
- The -k option to indicate that curl should allow insecure server connections when using HTTPS. The .NET Core SDK includes an HTTPS development certificate for testing. By default, curl rejects secure connections using this certificate.
- The -s option to suppress all output except the JSON payload. The JSON is sent to a Python json.tool module for improved display.

## Models

A type of class called a Model is needed to represent a certain item. The Model must include the properties of an item and is used to pass data in the web API. The Model is also used to persist the item in a data store. The directory name "Models" is a convention to place all Models in. The directory name comes from the Model-View-Controller architecture used by the web API.

[Required] signals that a property is required and ensures that a value is provided when creating an item.

[Range(minimum: 0.01, maximum: (double) decimal.MaxValue)] enforces minimum and maximum values.

## Controller

A Controller is a public class with one or more public methods known as actions. By convention, a Controller class is placed in the project root's Controllers directory. The actions are exposed as callable HTTP endpoints inside the web API controller. The directory name Controllers is a convention. The directory name comes from the Model-View-Controller architecture used by the web API. By convention, controller class names are suffixed with Controller.

[Route("api/[controller]")] defines routing pattern (The [controller] token is replaced by the controller's name (case-insensitive, without the Controller suffix), so requests to https://localhost:5001/api/products are handled by this controller.)

[ApiController] adds behaviors that make it easier to build web APIs. Some behaviors include [parameter source inference](https://docs.microsoft.com/aspnet/core/web-api/#binding-source-parameter-inference), [attribute routing as a requirement](https://docs.microsoft.com/aspnet/core/web-api/#attribute-routing-requirement), and [model validation error handling enhancements](https://docs.microsoft.com/aspnet/core/web-api/#automatic-http-400-responses).

## CRUD operations

The following table depicts the relationship between HTTP action verbs, CRUD operations, and ASP.NET Core attributes. For example, an HTTP PUT action verb is most often used to support an update operation. Such an action is annotated with the [HttpPut] attribute.

|HTTP Action Verb|CRUD Operation|ASP.NET Core Attribute|
|:--------:|:-------:|:-------:|
|POST|Create|[HttpPost]|
|GET|Read|[HttpGet]|
|PUT|Update|[HttpPut]|
|DELETE|Delete|[HttpDelete]|

In addition to the action verbs in the preceding table, a web API in ASP.NET Core supports HEAD, OPTIONS, and PATCH.

## Example on how to use CRUD operations

### Retrieve a product

```C#
[HttpGet("{id}")]
public async Task<ActionResult<Product>> GetById(long id)
{
    var product = await _context.Products.FindAsync(id);

    if (product == null)
    {
        return NotFound();
    }

    return product;
}
```

The preceding action:

- Responds only to the HTTP GET verb, as denoted by the [HttpGet] attribute.
- Requires that the id value is included in the URL segment after api/products/. Remember, the /api/products pattern was defined by the controller-level [Route] attribute.
- Queries the database for a product matching the provided id parameter.

Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table.

|ASP.NET Core Action Result|HTTP status code|Description|
|:--:|:--:|:--:|
|Ok is implied|200|A product matching the provided id parameter exists in the database. The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default).|
|NotFound|404|A product matching the provided id parameter doesn't exist in the database.|

### Add a product

```C#
[HttpPost]
public async Task<ActionResult<Product>> Create(Product product)
{
    _context.Products.Add(product);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
}
```

The preceding action:

- Responds only to the HTTP POST verb, as denoted by the [HttpPost] attribute.
- Inserts the request body's Product object into the database.

Because the controller is annotated with the [ApiController] attribute, it's implied that the product parameter will be found in the request body.

The first parameter in the CreatedAtAction method call represents an action name. The nameof keyword is used to avoid hard-coding the action name. CreatedAtAction uses the action name to generate a Location HTTP response header with a URL to the newly created product.

Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:

|ASP.NET Core Action Result|HTTP status code|Description|
|:--:|:--:|:--:|
|CreatedAtAction|201|The product was added to the database.
The product is included in the response body in the media type as defined in the Accept HTTP request header (JSON by default).|
|BadRequest is implied|400|The request body's Product object is invalid.|

### Modify a product

```C#
[HttpPut("{id}")]
public async Task<IActionResult> Update(long id, Product product)
{
    if (id != product.Id)
    {
        return BadRequest();
    }

    _context.Entry(product).State = EntityState.Modified;
    await _context.SaveChangesAsync();

    return NoContent();
}
```

The preceding action:

- Responds only to the HTTP PUT verb, as denoted by the [HttpPut] attribute.
- Requires that the id value is included in the URL segment after api/products/.
- Updates the Name and Price properties of the product.

Because the controller is annotated with the [ApiController] attribute, it's implied that the product parameter will be found in the request body.

Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:

|ASP.NET Core Action Result|HTTP status code|Description|
|:--:|:--:|:--:|
|NoContent|204|The product was updated in the database.|
|BadRequest|400|The request body's Id value doesn't match the route's id value.|
|BadRequest is implied|400|The request body's Product object is invalid.|

### Removing a product

```C#
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(long id)
{
    var product = await _context.Products.FindAsync(id);

    if (product == null)
    {
        return NotFound();
    }

    _context.Products.Remove(product);
    await _context.SaveChangesAsync();

    return NoContent();
}
```

The preceding action:

- Responds only to the HTTP DELETE verb, as denoted by the [HttpDelete] attribute.
- Requires that id is included in the URL path.
- Queries the database for a product matching the provided id parameter.

Each ActionResult used in the preceding action is mapped to the corresponding HTTP status code in the following table:

|ASP.NET Core Action Result|HTTP status code|Description|
|:--:|:--:|:--:|
|NoContent|204|The product was deleted from the database.|
|NotFound|404|A product matching the provided id parameter doesn't exist in the database.|

## Testing API with curl

### invalid HTTP POST request

curl -v -k \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Plush Squirrel\",\"price\":0.00}" \
    https://localhost:5001/api/Products

In the preceding command:

- -v enables verbose output.
- -d implies an HTTP POST operation and defines the request body.
- -H indicates that the request body is in JSON format. The header's value overrides the default content type of application/x-www-form-urlencoded

The command returns an HTTP 400 status code because the controller's [ApiController] attribute triggers Model validation on the request body. MVC's Model binder attempts to convert the request's -d JSON to a Product object. Model validation fails because the request's Price value is less than the minimum value of 0.01.

### valid HTTP POST request

curl -v -k \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Plush Squirrel\",\"price\":12.99}" \
    https://localhost:5001/api/Products

Successful creation of the product results in:

- An HTTP 201 status code
- A Location response header with a URL to retrieve the newly created product
- A JSON representation of the newly created product

### valid HTTP Get request

curl -k -s https://localhost:5001/api/Products/3 | python -m json.tool

The following output is displayed, proving that the new product was persisted to the in-memory database:

```JSON
{
  "id": 3,
  "name": "Plush Squirrel",
  "price": 12.99
}
```

### valid HTTP PUT request

curl -k -X PUT \
    -H "Content-Type: application/json" \
    -d "{\"id\":2,\"name\":\"Knotted Rope\",\"price\":14.99}" \
    https://localhost:5001/api/Products/2

The preceding command changes the price from 12.99 to 14.99. No output if successful.

### valid HTTP DELETE request

curl -v -k -X DELETE https://localhost:5001/api/Products/1

The preceding command deletes the product from the in-memory database.

### valid HTTP GET request

The updated inventory is displayed:

```JSON
[
  {
    "id": 2,
    "name": "Knotted Rope",
    "price": 14.99
  },
  {
    "id": 3,
    "name": "Plush Squirrel",
    "price": 12.99
  }
]
```
