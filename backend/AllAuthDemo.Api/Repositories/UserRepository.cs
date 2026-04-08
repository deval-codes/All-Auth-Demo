using AllAuthDemo.Api.Data;
using AllAuthDemo.Api.Data.Entities;
using AllAuthDemo.Api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<AppUser?> GetByEmailAsync(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
    }

    public async Task<AppUser?> GetByUserNameAsync(string userName)
    {
        return await _context.Users.FirstOrDefaultAsync(x => x.UserName == userName);
    }

    public async Task<AppUser?> GetByEmailOrUserNameAsync(string value)
    {
        return await _context.Users.FirstOrDefaultAsync(x =>
            x.Email == value || x.UserName == value);
    }

    public async Task AddAsync(AppUser user)
    {
        await _context.Users.AddAsync(user);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}