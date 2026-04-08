namespace AllAuthDemo.Api.Data.Entities
{
    public class AppUser
    {
        public Guid Id { get; set; }
        public string FullName { get; set; } = default!;
        public string UserName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string PasswordHash { get; set; } = default!;
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    }
}
