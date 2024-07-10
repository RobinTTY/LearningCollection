---
id: handling-files
title: Handling Files
---

ASP.NET Web APIs are able to accept and return files. This page explains how this can be achieved.

## Handling files in a request

Accepting files via an ASP.NET Web API can be done via a form-data upload. This is the most popular/well-known upload method formatting the data you send as a set of key/value pairs.

You normally need to specify `Content-Type` to `multipart/form-data` in the request, and then use `[FromForm]` attribute in MVC to bind values to variables (not actually explicitly necessary). Also, you can use the built-in `IFormFile` class to access the file uploaded:

```csharp
[HttpPost]
public async Task<IActionResult> PostFormData([FromForm] IFormFile file)
{
    // Validate the input. Put a limit on filesize to avoid large upload attacks.
    // Only accept .pdf files (check content type)
    if(file.Length == 0 ||file.Length > 20_971_520 || file.ContentType != "application/pdf")
    {
        return BadRequest("No file or an invalid one has been uploaded.");
    }

    var pathToFile = Path.Combine(Directory.GetCurrentDirectory(), $"uploaded_file_{Guid.NewGuid()}.pdf");

    using (var fileStream = new FileStream(pathToFile, FileMode.Create))
    {
        file.CopyTo(fileStream);
    }

    // Created can also be returned of course
    return Ok("Your file has been uploaded successfully.");
}
```

## Handling files as a response

Returning files in a response is also possible and can be achieved as follows:

```csharp
[Route("api/files")]
[ApiController]
public class FilesController : ControllerBase
{
    private readonly FileExtensionContentTypeProvider _fileExtensionContentTypeProvider;

    public FilesController(FileExtensionContentTypeProvider fileExtensionContentTypeProvider)
    {
        _fileExtensionContentTypeProvider = fileExtensionContentTypeProvider
            ?? throw new System.ArgumentNullException(nameof(fileExtensionContentTypeProvider));
    }

    [HttpGet("{fileId}")]
    public ActionResult GetFile(string fileId)
    {
        var pathToFile = "someFilePath.pdf";

        // check whether the file exists
        if (!System.IO.File.Exists(pathToFile)) return NotFound();

        if(!_fileExtensionContentTypeProvider.TryGetContentType(pathToFile, out var contentType))
        {
            // fallback/default value
            contentType = "application/octet-stream";
        }

        var bytes = System.IO.File.ReadAllBytes(pathToFile);
        return File(bytes, contentType, Path.GetFileName(pathToFile));
    }
}
```

We used the `FileExtensionContentTypeProvider` here which needs to be registered first:

```csharp
builder.Services.AddSingleton<FileExtensionContentTypeProvider>();
```
