using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Taxi.Model;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", builder =>
        builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

//builder.Services.AddDbContext<TaxiDbContext>(options =>
//   options.UseMySQL(builder.Configuration.GetConnectionString("TaxiConn"))
//);
builder.Services.AddDbContext<TaxiDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TaxiConn")));

builder.Services.AddScoped<Utility>();

//intall- dotnet add package Microsoft.Extensions.Caching.Memory
//install- dotnet add package Microsoft.AspNetCore.Session
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(10); // Set session timeout
    options.Cookie.HttpOnly = true;               // Make the cookie accessible only to the server
    options.Cookie.IsEssential = true;            // Ensure the cookie is always set
    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
});

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // Comment out Swagger-related middleware
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "my api v1"));
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseSession();

app.UseCors("AllowLocalhost3000");
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();

