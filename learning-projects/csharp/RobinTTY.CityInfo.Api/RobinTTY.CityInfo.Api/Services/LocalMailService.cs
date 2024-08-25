namespace RobinTTY.CityInfo.Api.Services;

public class LocalMailService : IMailService
{
    private readonly string _mailTo = string.Empty;
    private readonly string _mailFrom = string.Empty;

    public LocalMailService(IConfiguration configuration)
    {
        _mailTo = configuration["mailSettings:mailToAddress"] ?? _mailTo;
        _mailFrom = configuration["mailSettings:mailFromAddress"] ?? _mailFrom;
    }

    public void Send(string subject, string message)
    {
        // send mail - output to debug window
        Console.WriteLine($"Mail from {_mailFrom} to {_mailTo}, with {nameof(LocalMailService)}.");
        Console.WriteLine($"Subject: {subject}");
        Console.WriteLine($"Message: {message}");
    }
}
