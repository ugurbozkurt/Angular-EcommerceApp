using API.Core.DbModels;

namespace API.Core.Specifications
{
    public class ProductWithProductTypeAndProductBrandISpecification : BaseSpecification<Product>
    {
        public ProductWithProductTypeAndProductBrandISpecification(int id) : base(x=> x.Id == id)
        {
            AddInclude(x => x.ProductType!);
            AddInclude(x => x.ProductBrand!);
        }
        public ProductWithProductTypeAndProductBrandISpecification(ProductSpecParams productSpecParams)
            :base(x =>
                           (string.IsNullOrWhiteSpace(productSpecParams.Search) || x.ProductName.ToLower().Contains(productSpecParams.Search)) &&
                           (!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId) &&
                           (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId) 
                 )
        {
            ApplyPaging(productSpecParams.PageSize * (productSpecParams.PageIndex - 1), productSpecParams.PageSize);

            AddInclude(x => x.ProductType!);
            AddInclude(x => x.ProductBrand!);

            if (!string.IsNullOrWhiteSpace(productSpecParams.Sort))
            {
                switch (productSpecParams.Sort.ToLower())
                {
                    case "priceasc":
                        AddOrderBy(p => p.Price!);
                        break;
                    case "pricedesc":
                        AddOrderByDescending(p => p.Price!);
                        break;
                    default:
                        AddOrderBy(n => n.ProductName!);
                        break;
                }
            }
            else
            {
                AddOrderBy(n => n.ProductName!);
            }

        }
    }
}
