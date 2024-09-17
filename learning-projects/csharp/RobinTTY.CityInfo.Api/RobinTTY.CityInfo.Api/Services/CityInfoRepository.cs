using Microsoft.EntityFrameworkCore;
using RobinTTY.CityInfo.Api.DbContexts;
using RobinTTY.CityInfo.Api.Entities;

namespace RobinTTY.CityInfo.Api.Services;

public class CityInfoRepository(CityInfoContext context) : ICityInfoRepository
{
    private readonly CityInfoContext _context = context ?? throw new ArgumentNullException(nameof(context));

    public async Task<IEnumerable<City>> GetCities()
    {
        return await _context.Cities.OrderBy(c => c.Name).ToListAsync();
    }

    public async Task<City?> GetCity(int cityId, bool includePointsOfInterest = false)
    {
        if (includePointsOfInterest)
        {
            return await _context.Cities.Include(c => c.PointsOfInterest).Where(c => c.Id == cityId)
                .FirstOrDefaultAsync();
        }

        return await _context.Cities.Where(c => c.Id == cityId).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<PointOfInterest>> GetPointsOfInterestForCity(int cityId)
    {
        return await _context.PointsOfInterest.Where(p => p.CityId == cityId).ToListAsync();
    }

    public Task<PointOfInterest?> GetPointOfInterestForCity(int cityId, int pointOfInterestId)
    {
        return _context.PointsOfInterest.Where(p => p.CityId == cityId && p.Id == pointOfInterestId)
            .FirstOrDefaultAsync();
    }
}
