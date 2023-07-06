using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    // generic controller [] arasinda 
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {

    }
}
