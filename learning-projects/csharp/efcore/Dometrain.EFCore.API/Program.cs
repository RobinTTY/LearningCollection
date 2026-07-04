using System.Text.Json.Serialization;
using Dometrain.EFCore.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // By default, enums are serialized as numbers. Here we enforce serialization as string
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add a DbContext here
builder.Services.AddDbContext<MoviesContext>();

var app = builder.Build();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<MoviesContext>();
context.Database.EnsureDeleted();
context.Database.EnsureCreated();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();