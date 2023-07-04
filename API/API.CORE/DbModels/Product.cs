using API.Core.DbModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.CORE.DbModels
{
    public class Product : BaseEntity
    {
        public string ProductName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string PictureUrl { get; set; } = string.Empty;

        [ForeignKey("ProductType")]
        public int ProductTypeId { get; set; }
        public ProductType? ProductType { get; set; }
        
        [ForeignKey("ProductBrand")]
        public int ProductBrandId { get; set; }
        public ProductBrand? ProductBrand { get; set; }
        
    }
}
