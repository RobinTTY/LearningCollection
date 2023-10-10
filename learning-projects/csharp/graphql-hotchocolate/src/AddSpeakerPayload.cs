using GraphQLHotChocolate.Data;

namespace GraphQLHotChocolate;

public class AddSpeakerPayload
{
    public AddSpeakerPayload(Speaker speaker)
    {
        Speaker = speaker;
    }

    public Speaker Speaker { get; }
}