namespace API.Dtos
{
    public class ProductToReturnDto
    { 
        public int Id { get; set; }   
        public string? ProductName { get; set; } = null;
        public string? Description { get; set; } = null;
        public decimal? Price { get; set; }
        public string? PictureUrl { get; set; } = null;
        public string? ProductType { get; set; } = null;
        public string? ProductBrand { get; set; } = null;
    }
}
