using System.ComponentModel.DataAnnotations;
namespace API.Dtos
{
    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; } = null!;
        public List<BasketItemDto> Items { get; set; } 

    }
}
