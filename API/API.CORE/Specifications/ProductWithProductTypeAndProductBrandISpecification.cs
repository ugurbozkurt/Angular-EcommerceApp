using API.Core.DbModels;

namespace API.Core.Specifications
{
    public class ProductWithProductTypeAndProductBrandISpecification : BaseSpecification<Product>
    {
        public ProductWithProductTypeAndProductBrandISpecification(int id) : base(x=> x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
        public ProductWithProductTypeAndProductBrandISpecification()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
