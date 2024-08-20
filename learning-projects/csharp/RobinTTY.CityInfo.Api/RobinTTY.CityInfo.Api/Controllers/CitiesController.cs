﻿using Microsoft.AspNetCore.Mvc;
using RobinTTY.CityInfo.Api.Models;

namespace RobinTTY.CityInfo.Api.Controllers;

[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    private readonly CitiesDataStore _citiesDataStore;
    
    public CitiesController(CitiesDataStore citiesDataStore)
    {
        _citiesDataStore = citiesDataStore;
    }

    [HttpGet]
    public ActionResult<IEnumerable<CityDto>> GetCities()
    {
        return Ok(_citiesDataStore.Cities);
    }

    [HttpGet("{id}")]
    public ActionResult<CityDto> GetCity(int id)
    {
        var cityToReturn = _citiesDataStore.Cities.FirstOrDefault(c => c.Id == id);

        if (cityToReturn == null) return NotFound();
        return Ok(cityToReturn);
    }
}
