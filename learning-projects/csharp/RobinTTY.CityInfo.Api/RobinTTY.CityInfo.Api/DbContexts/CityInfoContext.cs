using Microsoft.EntityFrameworkCore;
using RobinTTY.CityInfo.Api.Entities;

namespace RobinTTY.CityInfo.Api.DbContexts;

public class CityInfoContext : DbContext
{
    public DbSet<City> Cities { get; set; }
    public DbSet<PointOfInterest> PointsOfInterest { get; set; }

    public CityInfoContext(DbContextOptions<CityInfoContext> options)
        : base(options) { }
}
