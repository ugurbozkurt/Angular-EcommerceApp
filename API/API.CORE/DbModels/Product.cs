using API.Core.DbModels;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Core.DbModels
{
    public class Product : BaseEntity
    {
        public string? ProductName { get; set; } = null;
        public string? Description { get; set; } = null;
        public decimal? Price { get; set; }
        public string? PictureUrl { get; set; } = null;

        [ForeignKey("ProductType")]
        public int? ProductTypeId { get; set; }
        public ProductType? ProductType { get; set; } = null;
        
        [ForeignKey("ProductBrand")]
        public int? ProductBrandId { get; set; }
        public ProductBrand? ProductBrand { get; set; } = null;
        
    }
}
