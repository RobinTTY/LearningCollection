namespace Dometrain.EFCore.API.Models;

public class Movie
{
    public int Identifier { get; set; }
    public string? Title { get; set; }    
    public DateTime ReleaseDate { get; set; }
    public string? Synopsis { get; set; }
    public AgeRating AgeRating { get; set; }
    
    public Person Director { get; set; }
    public ICollection<Person> Actors { get; set; } 
    
    // Navigation property
    public Genre Genre { get; set; }
    // The id of the Genre will automatically be mapped here
    public int GenreId { get; set; }
}

public class MovieTitle
{
    public int Id { get; set; }
    public string? Title { get; set; }
}