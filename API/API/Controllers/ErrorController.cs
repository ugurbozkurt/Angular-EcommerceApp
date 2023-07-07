using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("/error/{code}")]
    // gormek istemegimiz api leri kapatirsak fetc error status code 500 hatasi ortadan kalkar
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : BaseApiController
    {
        public IActionResult error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
