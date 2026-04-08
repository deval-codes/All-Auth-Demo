using AllAuthDemo.Api.Features.Auth.Requests;
using AllAuthDemo.Api.Features.Auth.Responses;

public interface IAuthService
{
    Task<AuthResponse> RegisterAsync(RegisterRequest request);
    Task<AuthResponse> LoginAsync(LoginRequest request);
}