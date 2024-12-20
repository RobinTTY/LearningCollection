﻿namespace RobinTTY.CityInfo.Api.Services;

public class CloudMailService : IMailService
{
    private readonly string _mailTo = string.Empty;
    private readonly string _mailFrom = string.Empty;

    public CloudMailService(IConfiguration configuration)
    {
        _mailTo = configuration["mailSettings:mailToAddress"] ?? _mailTo;
        _mailFrom = configuration["mailSettings:mailFromAddress"] ?? _mailFrom;
    }
    
    public void Send(string subject, string message)
    {
        // send mail - output to debug window
        Console.WriteLine($"Mail from {_mailFrom} to {_mailTo}, with {nameof(CloudMailService)}.");
        Console.WriteLine($"Subject: {subject}");
        Console.WriteLine($"Message: {message}");
    }
}
