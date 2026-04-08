namespace AllAuthDemo.Api.Features.Auth.Requests
{
    public class LoginRequest
    {
        public string EmailOrUserName { get; set; } = default!;
        public string Password { get; set; } = default!;
    }
}
