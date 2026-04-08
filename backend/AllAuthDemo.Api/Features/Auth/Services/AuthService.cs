using AllAuthDemo.Api.Data.Entities;
using AllAuthDemo.Api.Features.Auth.Interfaces;
using AllAuthDemo.Api.Features.Auth.Requests;
using AllAuthDemo.Api.Features.Auth.Responses;
using AllAuthDemo.Api.Repositories.Interfaces;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasherService _passwordHasherService;

    public AuthService(
        IUserRepository userRepository,
        IPasswordHasherService passwordHasherService)
    {
        _userRepository = userRepository;
        _passwordHasherService = passwordHasherService;
    }

    public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
    {
        var existingEmailUser = await _userRepository.GetByEmailAsync(request.Email);
        if (existingEmailUser is not null)
        {
            return new AuthResponse
            {
                IsSuccess = false,
                Message = "Email already exists."
            };
        }

        var existingUserNameUser = await _userRepository.GetByUserNameAsync(request.UserName);
        if (existingUserNameUser is not null)
        {
            return new AuthResponse
            {
                IsSuccess = false,
                Message = "Username already exists."
            };
        }

        var user = new AppUser
        {
            Id = Guid.NewGuid(),
            FullName = request.FullName.Trim(),
            UserName = request.UserName.Trim(),
            Email = request.Email.Trim(),
            PasswordHash = _passwordHasherService.HashPassword(request.Password),
            IsActive = true,
            CreatedAtUtc = DateTime.UtcNow
        };

        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();

        return new AuthResponse
        {
            IsSuccess = true,
            Message = "User registered successfully."
        };
    }

    public async Task<AuthResponse> LoginAsync(LoginRequest request)
    {
        var user = await _userRepository.GetByEmailOrUserNameAsync(request.EmailOrUserName);

        if (user is null)
        {
            return new AuthResponse
            {
                IsSuccess = false,
                Message = "Invalid credentials."
            };
        }

        if (!user.IsActive)
        {
            return new AuthResponse
            {
                IsSuccess = false,
                Message = "User is inactive."
            };
        }

        var isPasswordValid = _passwordHasherService.VerifyPassword(request.Password, user.PasswordHash);

        if (!isPasswordValid)
        {
            return new AuthResponse
            {
                IsSuccess = false,
                Message = "Invalid credentials."
            };
        }

        return new AuthResponse
        {
            IsSuccess = true,
            Message = "Login successful."
        };
    }
}