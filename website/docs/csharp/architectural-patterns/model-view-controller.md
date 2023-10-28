---
id: model-view-controller
title: Model-View-Controller (MVC)
sidebar_position: 1
---

The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components:

- **Model**: The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data.
- **View**: The View component is used for all the UI logic of the application. For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with.
- **Controller**: Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output.

![mvc-architecture](/img/docs/csharp/mvc-architecture.png)

## Example

Defining the **model**, using validation attributes to validate the data:

```csharp
public class Person
{
  public int PersonId { get; set; }

  [Required]
  [MinLength(2)]
  public string Name { get; set; }

  [Phone]
  public string PhoneNumber { get; set; }

  [EmailAddress]
  public string Email { get; set; }
}
```

Creating the **controllers**:

```csharp
public class PeopleController : Controller
{
    private readonly AddressBookContext _context;

    public PeopleController(AddressBookContext context)
    {
        _context = context;
    }

    // GET: /people
    public async Task Index()
    {
        return View(await _context.People.ToListAsync());
    }

    // GET: /people/details/5
    public async Task Details(int id)
    {
        var person = await _context.People.Find(id);

        if (person == null)
        {
            return NotFound();
        }

        return View(person);
    }
}
```

Displaying content based on the **views** (Razor pages used):

```html
<table class="table">
  <thead>
    <tr>
      <th>@Html.DisplayNameFor(model => model.Name)</th>
      <th>@Html.DisplayNameFor(model => model.PhoneNumber)</th>
      <th>@Html.DisplayNameFor(model => model.Email)</th>
    </tr>
  </thead>
  <tbody>
    @foreach (var person in Model) {
    <tr>
      <td>@Html.DisplayFor(modelItem => person.Name)</td>
      <td>@Html.DisplayFor(modelItem => person.PhoneNumber)</td>
      <td>@Html.DisplayFor(modelItem => person.Email)</td>
    </tr>
    }
  </tbody>
</table>
```
