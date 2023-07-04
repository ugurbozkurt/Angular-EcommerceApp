using API.Core.DbModels;
using API.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        //private readonly StoreContext _db;
        private readonly IProductRepository _productRepository;
        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }


        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            var data = await _productRepository.GetProductAsync();
            return Ok(data);
        }   


        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetProductById(int id)
        {
            var selection_product_data = await _productRepository.GetProductByIdAsync(id);
            return Ok(selection_product_data);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<List<ProductBrand>>>> GetProductBrands()
        {
            var selection_product_data = await _productRepository.GetProductBrandAsync();
            return Ok(selection_product_data);
        }
        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<List<ProductType>>>> GetProductTypes()
        {
            var selection_product_data = await _productRepository.GetProductTypeAsync();
            return Ok(selection_product_data);
        }
    }
}
