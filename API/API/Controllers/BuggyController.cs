using API.Infrastructure.DataContext;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly StoreContext _db;
        public BuggyController(StoreContext context) 
        {
            _db = context;
        }
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var product = _db.Products.Find(42);
            var productToReturn = product.ToString();
            return Ok();
        }
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }
        [HttpGet("badrequest/{id}")]
        public ActionResult GetBadRequest(int id)
        {
            return Ok();
        }
        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            var product = _db.Products.Find(42);
            if (product == null)
            {
                return NotFound();
            }
            return Ok();
        }
        
    }
}
