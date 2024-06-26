﻿using System.ComponentModel.DataAnnotations;

namespace RobinTTY.CityInfo.Api.Models;

public class CreatePointsOfInterestDto
{
    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;
    
    [MaxLength(200)]
    public string? Description { get; set; }
}
