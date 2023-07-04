using API.Core.DbModels;

namespace API.Core.Interfaces
{
    /// <summary>
    /// Ürün Deposu
    /// </summary>
    public interface IProductRepository
    {

        Task<Product> GetProductByIdAsync (int id);
        Task<IReadOnlyList<Product>> GetProductAsync();
        Task<IReadOnlyList<ProductBrand>> GetProductBrandAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypeAsync();
       
    }
}
