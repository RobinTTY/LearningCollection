using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RobinTTY.CityInfo.Api.Models;
using RobinTTY.CityInfo.Api.Services;

namespace RobinTTY.CityInfo.Api.Controllers;

[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    private readonly ICityInfoRepository _cityInfoRepository;
    private readonly IMapper _mapper;
    
    public CitiesController(ICityInfoRepository cityInfoRepository, IMapper mapper)
    {
        _cityInfoRepository = cityInfoRepository;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CityWithoutPointsOfInterestDto>>> GetCities()
    {
        var cities = await _cityInfoRepository.GetCities();
        return Ok(_mapper.Map<IEnumerable<CityWithoutPointsOfInterestDto>>(cities));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<CityDto>> GetCity(int id)
    {
        var cityToReturn = await _cityInfoRepository.GetCity(id, true);

        if (cityToReturn == null) return NotFound();
        return Ok(cityToReturn);
    }
}
