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

        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        public ProductsController(IGenericRepository<Product> productGenericRepository , IGenericRepository<ProductBrand> productBrandRepository , IGenericRepository<ProductType> productTypeRepository)
        {

            _productRepository = productGenericRepository;
            _productBrandRepository = productBrandRepository;
            _productTypeRepository = productTypeRepository;
        }


        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            var data = await _productRepository.ListAllAsync();
            return Ok(data);
        }   


        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetProductById(int id)
        {
            var selection_product_data = await _productRepository.GetByIdAsync(id);
            return Ok(selection_product_data);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<List<ProductBrand>>>> GetProductBrands()
        {
            var selection_product_data = await _productBrandRepository.ListAllAsync();
            return Ok(selection_product_data);
        }
        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<List<ProductType>>>> GetProductTypes()
        {
            var selection_product_data = await _productTypeRepository.ListAllAsync();
            return Ok(selection_product_data);
        }
    }
}
