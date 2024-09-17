using RobinTTY.CityInfo.Api.Entities;

namespace RobinTTY.CityInfo.Api.Services;

public interface ICityInfoRepository
{
    Task<IEnumerable<City>> GetCities();
    Task<City?> GetCity(int cityId, bool includePointsOfInterest = false);
    Task<IEnumerable<PointOfInterest>> GetPointsOfInterestForCity(int cityId);
    Task<PointOfInterest?> GetPointOfInterestForCity(int cityId, int pointOfInterestId);
}
