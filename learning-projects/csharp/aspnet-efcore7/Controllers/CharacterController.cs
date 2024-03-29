﻿using Microsoft.AspNetCore.Mvc;

namespace aspnet_efcore7;

[ApiController]
[Route("api/[controller]")]
public class CharacterController : ControllerBase
{
  private static List<Character> characters = new List<Character> {
    new Character { Id = 1, Name = "Arthur", Class = RpgClass.Knight },
    new Character { Id = 2, Name = "Tzara", Class = RpgClass.Mage },
  };

  [HttpGet("GetAll")]
  public ActionResult<List<Character>> Get()
  {
    return Ok(characters);
  }

  [HttpGet("{id}")]
  public ActionResult<Character> GetSingle(int id)
  {
    return Ok(characters.FirstOrDefault(c => c.Id == id));
  }

  [HttpPost]
  public ActionResult<List<Character>> AddCharacter(Character newCharacter)
  {
    characters.Add(newCharacter);
    return Ok(characters);
  }
}
