using System;
using System.Collections.Generic;

namespace taxi.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int UserId { get; set; }

    public string? StartingDestination { get; set; }

    public string? EndDestination { get; set; }

    public string? Phone { get; set; }

    public DateTime? StartingDate { get; set; }

    public int? NoOfDays { get; set; }

    public virtual User User { get; set; } = null!;
}
