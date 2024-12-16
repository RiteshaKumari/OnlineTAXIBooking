using System;
using System.Collections.Generic;

namespace Taxi.Models;

public partial class UserDetail
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? UserName { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? Sts { get; set; }

    public virtual User User { get; set; } = null!;
}
