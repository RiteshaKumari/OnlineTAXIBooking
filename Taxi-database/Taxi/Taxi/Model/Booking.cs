using System;
using System.Collections.Generic;

namespace Taxi.Model;

public partial class Booking
{
    public int BookingId { get; set; }

    public string? StartingDestination { get; set; }

    public string? EndDestination { get; set; }

    public string? Phone { get; set; }

    public DateTime? StartingDate { get; set; }

    public int? NoOfDays { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Email { get; set; }
}
