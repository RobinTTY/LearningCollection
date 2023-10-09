using Microsoft.EntityFrameworkCore;

namespace GraphQLHotChocolate.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Setting to default! so that compiler doesn't complain about nullability.
        public DbSet<Speaker> Speakers { get; set; } = default!;
    }
}