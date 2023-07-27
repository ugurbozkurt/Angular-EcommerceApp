namespace API.Core.DbModels
{
    public class CustomerBasket : BaseEntity
    {
        public string Id { get; set; }
        public CustomerBasket()
        {
            
        }
        public CustomerBasket(string ıd)
        {

            Id = ıd;    

        }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}
