namespace GraphQLHotChocolate;

public record AddSpeakerInput(
    string Name,
    string? Bio,
    string? WebSite);