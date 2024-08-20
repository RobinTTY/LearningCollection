using System.Net;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using RobinTTY.CityInfo.Api.Models;
using RobinTTY.CityInfo.Api.Services;

namespace RobinTTY.CityInfo.Api.Controllers;

[ApiController]
[Route("api/cities/{cityId}/pointsofinterest")]
public class PointsOfInterestController : ControllerBase
{
    private readonly ILogger<PointsOfInterestController> _logger;
    private readonly IMailService _mailService;
    private readonly CitiesDataStore _citiesDataStore;

    public PointsOfInterestController(ILogger<PointsOfInterestController> logger, IMailService mailService,
        CitiesDataStore citiesDataStore)
    {
        _logger = logger;
        _mailService = mailService ?? throw new ArgumentNullException(nameof(mailService));
        _citiesDataStore = citiesDataStore;
    }

    [HttpGet]
    public ActionResult<IEnumerable<PointOfInterestDto>> GetPointsOfInterest(int cityId)
    {
        var city = GetCityById(cityId);
        if (city == null)
        {
            _logger.LogInformation($"City with id {cityId} wasn't found when accessing points of interest.");
            return NotFound();
        }

        return Ok(city.PointsOfInterest);
    }

    [HttpGet("{pointOfInterestId}", Name = "GetPointOfInterest")]
    public ActionResult<PointOfInterestDto> GetPointOfInterest(int cityId, int pointOfInterestId)
    {
        var city = GetCityById(cityId);
        if (city == null) return NotFound();

        var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);
        if (pointOfInterest == null) return NotFound();

        return Ok(pointOfInterest);
    }

    [HttpPost]
    public async Task<ActionResult<PointOfInterestDto>> CreatePointOfInterest(int cityId,
        CreatePointsOfInterestDto pointOfInterest)
    {
        var city = GetCityById(cityId);
        if (city == null)
        {
            return NotFound();
        }

        var maxPointOfInterestId = _citiesDataStore.Cities.SelectMany(c => c!.PointsOfInterest).Max(p => p.Id);

        var transformedPointOfInterest = new PointOfInterestDto
        {
            Id = ++maxPointOfInterestId,
            Name = pointOfInterest.Name,
            Description = pointOfInterest.Description
        };

        city.PointsOfInterest.Add(transformedPointOfInterest);
        return CreatedAtRoute("GetPointOfInterest", new
        {
            cityId = cityId,
            pointOfInterestId = transformedPointOfInterest.Id
        }, transformedPointOfInterest);
    }

    [HttpPut("{pointofinterestid}")]
    public ActionResult UpdatePointOfInterest(int cityId, int pointOfInterestId,
        UpdatePointOfInterestDto updatedPointOfInterest)
    {
        var city = GetCityById(cityId);
        if (city == null)
        {
            return NotFound();
        }

        var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);
        if (pointOfInterest == null) return NotFound();

        pointOfInterest.Name = updatedPointOfInterest.Name;
        pointOfInterest.Description = updatedPointOfInterest.Description;

        return NoContent();
    }

    [HttpPatch("{pointofinterestid}")]
    public ActionResult PartiallyUpdatePointOfInterest(int cityId, int pointOfInterestId,
        JsonPatchDocument<UpdatePointOfInterestDto> patchDocument)
    {
        var city = GetCityById(cityId);
        if (city == null)
        {
            return NotFound();
        }

        var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);
        if (pointOfInterest == null) return NotFound();

        var pointOfInterestToPatch = new UpdatePointOfInterestDto
        {
            Name = pointOfInterest.Name,
            Description = pointOfInterest.Description
        };

        // The patch document could try to update a property that doesn't exist on the object
        // For this reason we pass the ModelState to the ApplyTo method
        // With this option, you can get error messages in responses e.g.
        /* { "Customer": [
                "The current value 'John' at path 'customerName' != test value 'Nancy'."
            ]}
        */
        patchDocument.ApplyTo(pointOfInterestToPatch, ModelState);

        if (!TryValidateModel(pointOfInterestToPatch))
        {
            return ValidationProblem(ModelState);
        }

        pointOfInterest.Name = pointOfInterestToPatch.Name;
        pointOfInterest.Description = pointOfInterestToPatch.Description;

        return NoContent();
    }

    [HttpDelete("{pointOfInterestId}")]
    public ActionResult DeletePointOfInterest(int cityId, int pointOfInterestId)
    {
        var city = GetCityById(cityId);
        if (city == null)
        {
            return NotFound();
        }

        var pointOfInterest = city.PointsOfInterest.FirstOrDefault(p => p.Id == pointOfInterestId);
        if (pointOfInterest == null) return NotFound();

        city.PointsOfInterest.Remove(pointOfInterest);
        _mailService.Send("Point of interest deleted.",
            $"Point of interest {pointOfInterest.Name} with id {pointOfInterest.Id} was deleted.");
        
        return NoContent();
    }

    private CityDto? GetCityById(int cityId) =>
        _citiesDataStore.Cities.FirstOrDefault(c => c?.Id == cityId);
}
