namespace AllAuthDemo.Api.Features.Auth.Services
{
    using AllAuthDemo.Api.Data.Entities;
    using AllAuthDemo.Api.Features.Auth.Interfaces;
    using Microsoft.AspNetCore.Identity;

    public class PasswordHasherService : IPasswordHasherService
    {
        private readonly PasswordHasher<AppUser> _passwordHasher = new();

        public string HashPassword(string password)
        {
            var dummyUser = new AppUser();
            return _passwordHasher.HashPassword(dummyUser, password);
        }

        public bool VerifyPassword(string password, string passwordHash)
        {
            var dummyUser = new AppUser();
            var result = _passwordHasher.VerifyHashedPassword(dummyUser, passwordHash, password);

            return result == PasswordVerificationResult.Success ||
                   result == PasswordVerificationResult.SuccessRehashNeeded;
        }
    }
}
