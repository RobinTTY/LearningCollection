using Dometrain.EFCore.API.Data;
using Dometrain.EFCore.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Dometrain.EFCore.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MoviesController(MoviesContext context) : Controller
{
    [HttpGet]
    [ProducesResponseType(typeof(List<Movie>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await context.Movies.ToListAsync());
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(Movie), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        // var movie = await context.Movies.SingleOrDefaultAsync(movie => movie.Id == id);
        // Serves match from memory if already fetched, otherwise queries DB. Can serve stale data.
        var movie = await context.Movies.FindAsync(id);
        return movie == null ? NotFound() : Ok(movie);
    }

    [HttpGet("by-year/{year:int}")]
    [ProducesResponseType(typeof(List<MovieTitle>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAllByYear([FromRoute] int year)
    {
        // IEnumerable can be iterated over since the data is in memory,
        // while IQueryable will only be translated into a SQL query once the query is executed
        // this happens, for instance, when we call the ToListAsync() method

        // In this the query isn't executed here yet
        IQueryable<Movie> allMovies = context.Movies;
        var filteredMovies = await allMovies
            .Where(m => m.ReleaseDate.Year == year)
            // Project to new class with less data, EF will only query the necessary data
            .Select(movie => new MovieTitle { Id = movie.Id, Title = movie.Title })
            .ToListAsync();
        
        // Query:
        // SELECT [m].[Id], [m].[Title]
        // FROM [Movies] AS [m]
        // WHERE DATEPART(year, [m].[ReleaseDate]) = @year

        // The query is only executed here
        return Ok(filteredMovies);
    }

    [HttpPost]
    [ProducesResponseType(typeof(Movie), StatusCodes.Status201Created)]
    public async Task<IActionResult> Create([FromBody] Movie movie)
    {
        await context.Movies.AddAsync(movie);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = movie.Id }, movie);
    }

    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(Movie), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] Movie movie)
    {
        var existingMovie = await context.Movies.FindAsync(id);
        if (existingMovie is null)
            return NotFound();

        existingMovie.Title = movie.Title;
        existingMovie.ReleaseDate = movie.ReleaseDate;
        existingMovie.Synopsis = movie.Synopsis;

        await context.SaveChangesAsync();

        return Ok(existingMovie);
    }

    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Remove([FromRoute] int id)
    {
        var existingMovie = await context.Movies.FindAsync(id);
        if (existingMovie is null)
            return NotFound();

        context.Movies.Remove(existingMovie);
        await context.SaveChangesAsync();

        return Ok();
    }
}