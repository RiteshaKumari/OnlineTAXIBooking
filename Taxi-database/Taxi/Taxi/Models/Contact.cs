using System;
using System.Collections.Generic;

namespace Taxi.Models;

public partial class Contact
{
    public int Id { get; set; }

    public string? Subject { get; set; }

    public string? Message { get; set; }

    public string? Phone { get; set; }
}
