using AllAuthDemo.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace AllAuthDemo.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<AppUser> Users => Set<AppUser>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AppUser>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.FullName).IsRequired().HasMaxLength(100);
            entity.Property(x => x.UserName).IsRequired().HasMaxLength(50);
            entity.Property(x => x.Email).IsRequired().HasMaxLength(100);
            entity.Property(x => x.PasswordHash).IsRequired();

            entity.HasIndex(x => x.Email).IsUnique();
            entity.HasIndex(x => x.UserName).IsUnique();
        });

        base.OnModelCreating(modelBuilder);
    }
}