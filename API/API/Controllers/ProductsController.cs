﻿using API.Core.DbModels;
using API.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using API.Core.Specifications;
using API.Dtos;
using System.Linq;
using AutoMapper;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        //private readonly StoreContext _db;

        private readonly IGenericRepository<Product> _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        private readonly IMapper _mapper;
        public ProductsController(IMapper mapper,IGenericRepository<Product> productGenericRepository , IGenericRepository<ProductBrand> productBrandRepository , IGenericRepository<ProductType> productTypeRepository)
        {

            _productRepository = productGenericRepository;
            _productBrandRepository = productBrandRepository;
            _productTypeRepository = productTypeRepository;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<List<ProductToReturnDto>>> GetAllProducts()
        {
            var spec = new ProductWithProductTypeAndProductBrandISpecification();
            var data = await _productRepository.ListAsync(spec);
            //return Ok(data);
            //return data.Select(pro => new ProductToReturnDto
            //{
            //    Id = pro.Id,
            //    ProductName = pro.ProductName,
            //    Description = pro.Description,
            //    PictureUrl = pro.PictureUrl,
            //    Price = pro.Price,
            //    ProductBrand = pro.ProductBrand != null ? pro.ProductBrand.Name : string.Empty,
            //    ProductType = pro.ProductType != null ? pro.ProductType.Name : string.Empty

            //}).ToList();
            return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(data.ToList()));
        }   


        [HttpGet("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> GetProductById(int id)
        {
            var spec = new ProductWithProductTypeAndProductBrandISpecification(id);

            //return await _productRepository.GetEntityWithSpec(spec);
           var product_data = await _productRepository.GetEntityWithSpec(spec);
            //return new ProductToReturnDto
            //{
            //    Id = product_data.Id,
            //    ProductName = product_data.ProductName,
            //    Description = product_data.Description,
            //    PictureUrl = product_data.PictureUrl,
            //    Price = product_data.Price,
            //    ProductBrand = product_data.ProductBrand != null ? product_data.ProductBrand.Name : string.Empty,
            //    ProductType = product_data.ProductType != null ? product_data.ProductType.Name : string.Empty

            //};
            return _mapper.Map<Product, ProductToReturnDto>(product_data);
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
