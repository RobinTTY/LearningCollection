using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using RobinTTY.CityInfo.Api;
using RobinTTY.CityInfo.Api.DbContexts;
using RobinTTY.CityInfo.Api.Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services
    .AddControllers(options => { options.ReturnHttpNotAcceptable = true; })
    .AddNewtonsoftJson()
    .AddXmlDataContractSerializerFormatters();

builder.Services.AddProblemDetails();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<CityInfoContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("CityInfoDb"));
});
builder.Services.AddSingleton<FileExtensionContentTypeProvider>();
builder.Services.AddSingleton<CitiesDataStore>();
builder.Services.AddScoped<ICityInfoRepository, CityInfoRepository>();
builder.Services.AddTransient<IMailService, LocalMailService>();

// Configure the logger
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs\\cityInfoApi.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog();

// Build the app
var app = builder.Build();

// Add middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction())
{
    app.UseExceptionHandler();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Run the app
app.Run();
