﻿using API.DataContext;
using API.DbModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly StoreContext _db;
        public ProductsController(StoreContext context)
        {
            this._db = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> getAllProducts()
        {
            var data = await this._db.Products.ToListAsync();
            return Ok(data);
        }   
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> getProductById(int id)
        {
            var selection_product_data = await this._db.Products.FindAsync(id);
            return Ok(selection_product_data);
        }   
    }
}
