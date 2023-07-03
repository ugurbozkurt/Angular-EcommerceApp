using API.CORE.DbModels;
using Microsoft.EntityFrameworkCore;
namespace API.Infrastructure.DataContext
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}
