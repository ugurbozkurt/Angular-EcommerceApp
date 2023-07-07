namespace API.Errors
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }
        public string  Message { get; set; }
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode); 
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            string errorMEssage = "";   
            switch (statusCode)
            {
                case 400:
                    errorMEssage = "You have made a bad request";
                    break;
                case 401:
                    errorMEssage = "Authorized erorr";
                    break;
                case 404:   
                    errorMEssage = "Kaynak dosya bulunamadi";
                    break;
                case 500:
                    errorMEssage = "Server error";
                    break;
            }
            return errorMEssage;
        }
    }
}
