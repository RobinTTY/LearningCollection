// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "General Concepts",
      items: [
        {
          type: "category",
          label: "APIs",
          items: [{ type: "autogenerated", dirName: "apis" }],
        },
        { type: "autogenerated", dirName: "general-concepts" },
      ],
    },
    {
      type: "category",
      label: "Cloud",
      items: [{ type: "autogenerated", dirName: "cloud" }],
    },
    {
      "C#": [
        {
          type: "doc",
          label: "Introduction",
          id: "csharp/introduction",
        },
        {
          type: "category",
          label: "Core Concepts",
          items: [
            {
              Types: [
                {
                  type: "doc",
                  id: "csharp/core-concepts/types/introduction",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/types/enums",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/types/tuples",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/types/datetimes",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/types/arrays",
                },
              ],
            },
            {
              type: "category",
              label: "Operators",
              items: [
                {
                  type: "doc",
                  id: "csharp/core-concepts/operators/null-conditional-operator",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/operators/null-coalescing-operator",
                },
                {
                  type: "doc",
                  id: "csharp/core-concepts/operators/range-operator",
                },
              ],
            },
            {
              type: "category",
              label: "Interfaces",
              items: [
                {
                  type: "autogenerated",
                  dirName: "csharp/core-concepts/interfaces",
                },
              ],
            },
            {
              type: "doc",
              id: "csharp/core-concepts/inheritance",
            },
            {
              type: "doc",
              id: "csharp/core-concepts/nullability",
            },
            {
              type: "doc",
              id: "csharp/core-concepts/generics",
            },
            {
              type: "doc",
              id: "csharp/core-concepts/closures",
            },
            {
              type: "doc",
              id: "csharp/core-concepts/events",
            },
          ],
        },
        {
          type: "category",
          label: "Advanced Concepts",
          items: [
            { type: "autogenerated", dirName: "csharp/advanced-concepts" },
          ],
        },

        {
          type: "category",
          label: ".NET Versions",
          items: [{ type: "autogenerated", dirName: "csharp/dotnet-versions" }],
        },
        {
          type: "category",
          label: "Architectural Patterns",
          items: [
            { type: "autogenerated", dirName: "csharp/architectural-patterns" },
          ],
        },
        {
          type: "category",
          label: "ASP.NET",
          items: [
            {
              type: "category",
              label: "Core Concepts",
              items: [
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/introduction",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/asp-net-rest-apis",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/routing",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/controllers",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/parameter-binding",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/validating-input",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/partial-updates",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/api-errors",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/handling-files",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/core-concepts/dependency-injection",
                },
              ],
            },
            {
              type: "category",
              label: "Advanced Concepts",
              items: [
                {
                  type: "doc",
                  id: "csharp/asp-net/advanced-concepts/formatters",
                },
                {
                  type: "doc",
                  id: "csharp/asp-net/advanced-concepts/logging",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Entity Framework",
          items: [
            {
              type: "doc",
              id: "csharp/entity-framework/introduction",
            },
            {
              type: "doc",
              id: "csharp/entity-framework/db-context",
            },
            {
              type: "doc",
              id: "csharp/entity-framework/migrations",
            },
            {
              type: "category",
              label: "Creating a Model",
              items: [
                {
                  type: "doc",
                  id: "csharp/entity-framework/creating-a-model/overview",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/creating-a-model/entity-types",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/creating-a-model/relationships",
                },
              ],
            },
            {
              type: "category",
              label: "Querying Data",
              items: [
                {
                  type: "doc",
                  id: "csharp/entity-framework/querying-data/basic-querying",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/querying-data/tracking-behavior",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/querying-data/inserting-data",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/querying-data/updating-data",
                },
                {
                  type: "doc",
                  id: "csharp/entity-framework/querying-data/deleting-data",
                },
              ],
            },
            {
              type: "category",
              label: "Testing",
              items: [
                {
                  type: "doc",
                  id: "csharp/entity-framework/testing/integration-testing",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Libraries",
          items: [{ type: "autogenerated", dirName: "csharp/libraries" }],
        },
        {
          type: "category",
          label: "Comparisons",
          items: [{ type: "autogenerated", dirName: "csharp/comparisons" }],
        },
      ],
    },
    {
      type: "category",
      label: "Web",
      items: [{ type: "autogenerated", dirName: "web" }],
    },
    {
      type: "category",
      label: "Databases",
      items: [{ type: "autogenerated", dirName: "databases" }],
    },
    {
      type: "category",
      label: "Tools",
      items: [{ type: "autogenerated", dirName: "tools" }],
    },
    {
      type: "category",
      label: "Linux",
      items: [{ type: "autogenerated", dirName: "linux" }],
    },
    {
      type: "doc",
      label: "Interesting Topics",
      id: "interesting-topics",
    },
  ],
};

module.exports = sidebars;
