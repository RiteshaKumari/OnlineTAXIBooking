using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace taxi.Models;

public partial class Contact
{
    [JsonIgnore]
    public int Id { get; set; }

    public int UserId { get; set; }

    public string? Subject { get; set; }

    public string? Message { get; set; }

    [JsonIgnore]
    public virtual User User { get; set; } = null!;
}
