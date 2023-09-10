---
id: events
title: Events
sidebar_position: 6
---

- A mechanism for communication between objects
- Used in building _Loosely Coupled Applications_
- Helps extending applications

## Terms

- Event sender: called **publisher** or event sender
- Event receiver: called **subscriber** or event receiver

## Delegates

- Agreement/Contract between Publisher and Subscriber
- Determines the signature of the event handler method in the subscriber

## What do we need to do?

1. Define a delegate
2. Define an event based on that delegate
3. Raise the event

## Example

```csharp
class Program
{
	static void Main(string[] args)
	{
		var video = new Video() { Title = "Video 1" };
		var videoEncoder = new VideoEncoder();  // publisher
		var mailService = new MailService();    // subscriber

		// subscribe: register event handler (add reference to handler method)
		videoEncoder.VideoEncoded += mailService.OnVideoEncoded;
		videoEncoder.Encode(video);
	}
}

// Publisher
public class VideoEncoder
{
	// The delegate which defines how the handling method has to look
	public delegate void VideoEncodedEventHandler(object source, VideoEventArgs args);
	// The event which gets raised
	public event VideoEncodedEventHandler VideoEncoded;

	public void Encode(Video video)
	{
		// do some work
		...
		// raise the event
		OnVideoEncoded(video);
	}

	// it is convention to make these handlers protected virtual and void
	protected virtual void OnVideoEncoded(Video video)
	{
		// check if there are any subscribers
		if (VideoEncoded != null)
		{
			VideoEncoded(this, new VideoEventArgs(){ Video = video });
		}
	}
}

public class VideoEventArgs : EventArgs
{
	public Video Video { get; set; }
}

// Subscriber
public class MailService{
	// Event Handler: called by publisher when the event is raised
	public void OnVideEncoded(object source, VideoEventArgs e)
	{
		// do some work: e.g. send an email
		...
		// use event args
		Console.WriteLine(e.Video.Title);
	}
}
```

## Example 2: Simplification

```csharp
class Program
{
	static void Main(string[] args)
	{
		var video = new Video() { Title = "Video 1" };
		var videoEncoder = new VideoEncoder();  // publisher
		var mailService = new MailService();    // subscriber

		// subscribe: register event handler (add reference to handler method)
		videoEncoder.VideoEncoded += mailService.OnVideoEncoded;
		videoEncoder.Encode(video);
	}
}

// Publisher
public class VideoEncoder
{
	// !!The event which gets raised (NOW WITH EventHandler)!!
	public event EventHandler<VideoEventArgs> VideoEncoded;

	public void Encode(Video video)
	{
		// do some work
		...
		// raise the event
		OnVideoEncoded(video);
	}

	// it is convention to make these handlers protected virtual and void
	protected virtual void OnVideoEncoded(Video video)
	{
		// check if there are any subscribers
		if (VideoEncoded != null)
		{
			VideoEncoded(this, new VideoEventArgs(){ Video = video });
		}
	}
}

public class VideoEventArgs : EventArgs
{
	public Video Video { get; set; }
}

// Subscriber
public class MailService{
	// Event Handler: called by publisher when the event is raised
	public void OnVideEncoded(object source, VideoEventArgs e)
	{
		// do some work: e.g. send an email
		...
		// use event args
		Console.WriteLine(e.Video.Title);
	}
}
```

## Source

[C# Events and Delegates Made Simple | Mosh](https://www.youtube.com/watch?v=jQgwEsJISy0)
