using AllAuthDemo.Api.Data.Entities;

namespace AllAuthDemo.Api.Repositories.Interfaces
{
     public interface IUserRepository
    {
        Task<AppUser?> GetByEmailAsync(string email);
        Task<AppUser?> GetByUserNameAsync(string userName);
        Task<AppUser?> GetByEmailOrUserNameAsync(string value);
        Task AddAsync(AppUser user);
        Task SaveChangesAsync();
    }
}
