using System.ComponentModel.DataAnnotations;

namespace GraphQLHotChocolate.Data
{
    public class Speaker
    {
        public int Id { get; set; }

        // Override the database schema rule that allows a data field to be empty
        [Required]
        [StringLength(200)]
        public string? Name { get; set; }

        [StringLength(4000)]
        public string? Bio { get; set; }

        [StringLength(1000)]
        public virtual string? WebSite { get; set; }
    }
}