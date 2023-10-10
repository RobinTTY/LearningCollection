using GraphQLHotChocolate.Data;
using HotChocolate;

namespace GraphQLHotChocolate
{
    public class Query
    {
        public IQueryable<Speaker> GetSpeakers([Service] ApplicationDbContext context) =>
            context.Speakers;
    }
}