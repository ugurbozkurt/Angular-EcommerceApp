using API.Core.DbModels;
using API.CORE.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync (int id);

        Task<IReadOnlyList<ProductBrand>> GetProductBrandAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypeAsync();
        Task<IReadOnlyList<Product>> GetProductAsync();
    }
}
