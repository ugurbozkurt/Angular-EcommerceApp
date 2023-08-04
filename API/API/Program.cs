using API.Core.DbModels.Identity;
using API.Extensions;
using API.Helpers;
using API.Infrastructure.DataContext;
using API.Middleware;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAplicationServices();
builder.Services.AddAutoMapper(typeof(MappingProfiles));
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddAuthentication();
builder.Services.AddSwaggerDocumentation();


builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy",
             builder => builder
                 .AllowAnyOrigin()
                 .AllowAnyMethod()
                 .AllowAnyHeader());
});

builder.Services.AddDbContext<StoreContext>(options=> options.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnection") ?? throw new InvalidOperationException("Connection string 'SqlConnection' is not found!")));
builder.Services.AddSingleton<IConnectionMultiplexer>(x=>{
    var configuration = ConfigurationOptions.Parse(builder.Configuration.GetConnectionString("Redis") ?? throw new InvalidOperationException("Connection string 'Redis' is not found!"),true);
    return ConnectionMultiplexer.Connect(configuration);
});


var app = builder.Build();
var serviceProvider = builder.Services.BuildServiceProvider();
var userManager = serviceProvider.GetRequiredService<UserManager<AppUser>>();
var identityContext = serviceProvider.GetRequiredService<StoreContext>();
await identityContext.Database.MigrateAsync();
await AppIdentityDbContextSeed.SeedUsersAsync(userManager);

app.UseCors("CorsPolicy");
app.UseAuthentication();

app.UseMiddleware<ExceptionMiddleware>();
app.UseStatusCodePagesWithReExecute("/error/{0}");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthorization();
app.UseSwaggerDocumentation();
app.MapControllers();
app.Run();
app.UseStaticFiles();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");