using System;
using System.Collections.Generic;

namespace Taxi.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public string? StartingDestination { get; set; }

    public string? EndDestination { get; set; }

    public string? Phone { get; set; }

    public DateTime? StartingDate { get; set; }

    public int? NoOfDays { get; set; }
}
