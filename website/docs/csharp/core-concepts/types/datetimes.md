---
title: DateTimes
---

The `DateTime` type represents dates and times with values ranging from 00:00:00 (midnight), January 1, 0001 Anno Domini (Common Era) through 11:59:59 P.M., December 31, 9999 A.D. (C.E.) in the Gregorian calendar.

Time values are measured in 100-nanosecond units called ticks. A particular date is the number of ticks since 12:00 midnight, January 1, 0001 A.D. (C.E.) in the GregorianCalendar calendar. The number excludes ticks that would be added by leap seconds. For example, a ticks value of 31241376000000000L represents the date Friday, January 01, 0100 12:00:00 midnight. A `DateTime` value is always expressed in the context of an explicit or default calendar.

Once a `DateTime` has been constructed, its value can never change. Any methods that appear to modify a `DateTime` will actually return a new `DateTime`.

## Initializing a `DateTime` object

You can assign an initial value to a new `DateTime` value in many different ways:

- Calling a constructor, either one where you specify arguments for values, or use the implicit parameterless constructor.
- Assigning a `DateTime` to the return value of a property or method.
- Parsing a `DateTime` value from its string representation.

### Invoke constructors

You call any of the overloads of the `DateTime` constructor that specify elements of the date and time value (such as the year, month, and day, or the number of ticks). The following code creates a specific date using the `DateTime` constructor specifying the year, month, day, hour, minute, and second:

```csharp
var date1 = new DateTime(2008, 5, 1, 8, 30, 52);
Console.WriteLine(date1);
// Displays "5/1/2008 8:30:52" in en-US culture
```

### Assign a computed value

You can assign the `DateTime` object a date and time value returned by a property or method:

```csharp
DateTime date1 = DateTime.Now;
DateTime date2 = DateTime.UtcNow;
DateTime date3 = DateTime.Today;
```

### Parse a string that represents a `DateTime`

The [`Parse`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime.parse?view=net-8.0), [`ParseExact`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime.parseexact?view=net-8.0), [`TryParse`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime.tryparseexact?view=net-8.0), and [`TryParseExact`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime.tryparseexact?view=net-8.0) methods all convert a string to its equivalent date and time value:

```csharp
var dateString = "5/1/2008 8:30:52 AM";
DateTime date1 =
  DateTime.Parse(dateString, System.Globalization.CultureInfo.InvariantCulture);
var iso8601String = "20080501T08:30:52Z";
DateTime dateISO8602 =
  DateTime.ParseExact(iso8601String, "yyyyMMddTHH:mm:ssZ",
                       System.Globalization.CultureInfo.InvariantCulture);
```

The `TryParse` and `TryParseExact` methods indicate whether a string is a valid representation of a `DateTime` value and, if it is, performs the conversion.

## DateTime values and their string representations

The appearance of date and time values is dependent on culture, international standards, application requirements, and personal preference. The `DateTime` structure offers flexibility in formatting date and time values through overloads of ToString.

```csharp
var date1 = new DateTime(2008, 3, 1, 7, 0, 0);
Console.WriteLine(date1.ToString());
// For en-US culture, displays 3/1/2008 7:00:00 AM
```

```csharp
var date1 = new DateTime(2008, 3, 1, 7, 0, 0);
var text =
  date1.ToString(System.Globalization.CultureInfo.CreateSpecificCulture("fr-FR"));
Console.WriteLine(text);
// Displays 01/03/2008 07:00:00
```
