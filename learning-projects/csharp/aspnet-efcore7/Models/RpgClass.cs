using System.Text.Json.Serialization;

namespace aspnet_efcore7;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum RpgClass
{
  Knight = 1,
  Mage = 2,
  Cleric = 3
}
