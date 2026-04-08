namespace AllAuthDemo.Api.Features.Auth.Responses
{
    public class AuthResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; } = default!;
    }
}
