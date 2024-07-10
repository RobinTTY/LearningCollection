using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace RobinTTY.CityInfo.Api.Controllers;

[Route("api/files")]
[ApiController]
public class FilesController(FileExtensionContentTypeProvider fileExtensionContentTypeProvider)
    : ControllerBase
{
    private readonly FileExtensionContentTypeProvider _fileExtensionContentTypeProvider =
        fileExtensionContentTypeProvider
        ?? throw new ArgumentNullException(
            nameof(fileExtensionContentTypeProvider));

    [HttpGet("{fileId}")]
    public ActionResult GetFile(string fileId)
    {
        // look up the actual file, depending on the fileId...
        // demo code
        var pathToFile = @"C:\Users\Robin\Desktop\test.pdf";

        // check whether the file exists
        if (!System.IO.File.Exists(pathToFile))
        {
            return NotFound();
        }

        if (!_fileExtensionContentTypeProvider.TryGetContentType(
                pathToFile, out var contentType))
        {
            contentType = "application/octet-stream";
        }

        var bytes = System.IO.File.ReadAllBytes(pathToFile);
        return File(bytes, contentType, Path.GetFileName(pathToFile));
    }

    [HttpPost]
    public ActionResult CreateFile(IFormFile file)
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

        return Ok("Your file has been uploaded successfully.");
    }
}
