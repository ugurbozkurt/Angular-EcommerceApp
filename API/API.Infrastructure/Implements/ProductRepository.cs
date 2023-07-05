using API.Core.DbModels;
using API.Core.Interfaces;
using API.Infrastructure.DataContext;
using Microsoft.EntityFrameworkCore;
namespace API.Infrastructure.Implements
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _db;
        public ProductRepository(StoreContext context)
        {
            this._db = context;
        }
        public async Task<IReadOnlyList<Product>> GetProductAsync()
        {
            return await _db.Products.
            Include(p => p.ProductType).
            Include(p => p.ProductBrand).ToListAsync();
        }

        /// <summary>
        /// Get Prodcut By Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await this._db.Products.Include(p => p.ProductType).Include(p => p.ProductBrand).FirstOrDefaultAsync(p => p.Id == id);
        }
        /// <summary>
        /// All Product List
        /// </summary>
        /// <returns></returns>


        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandAsync()
        {
           return await _db.ProductBrands.ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypeAsync()
        {
            return await _db.ProductTypes.ToListAsync();
        }
    }
}
