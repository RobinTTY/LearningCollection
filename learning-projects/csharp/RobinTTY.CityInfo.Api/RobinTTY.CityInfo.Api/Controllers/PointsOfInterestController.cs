using Microsoft.AspNetCore.Mvc;
using RobinTTY.CityInfo.Api.Models;

namespace RobinTTY.CityInfo.Api.Controllers;

[ApiController]
[Route("api/cities/{cityId}/pointsofinterest")]
public class PointsOfInterestController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<PointOfInterestDto>> GetPointsOfInterest(int cityId)
    {
        var city = GetCityById(cityId);
        if (city == null) return NotFound();

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

        var maxPointOfInterestId = CitiesDataStore.Current.Cities.SelectMany(c => c!.PointsOfInterest).Max(p => p.Id);

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
    public ActionResult UpdatePointOfInterest(int cityId, int pointOfInterestId, UpdatePointOfInterestDto updatedPointOfInterest)
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

    private static CityDto? GetCityById(int cityId) =>
        CitiesDataStore.Current.Cities.FirstOrDefault(c => c?.Id == cityId);
}
