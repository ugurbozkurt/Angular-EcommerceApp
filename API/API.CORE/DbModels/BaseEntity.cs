using System.ComponentModel.DataAnnotations;

namespace API.Core.DbModels
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
