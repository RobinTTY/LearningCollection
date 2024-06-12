using Microsoft.AspNetCore.Mvc;

namespace RobinTTY.CityInfo.Api.Controllers;

[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    [HttpGet]
    public IActionResult GetCities()
    {
        return new JsonResult(CitiesDataStore.Current.Cities);
    }

    [HttpGet("{id}")]
    public JsonResult GetCity(int id)
    {
        return new JsonResult(CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == id));
    }
}
