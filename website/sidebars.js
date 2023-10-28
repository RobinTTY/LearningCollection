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
      items: [{ type: "autogenerated", dirName: "general-concepts" }],
    },
    {
      type: "category",
      label: "APIs",
      items: [{ type: "autogenerated", dirName: "apis" }],
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
          items: [{ type: "autogenerated", dirName: "csharp/core-concepts" }],
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
          items: [{ type: "autogenerated", dirName: "csharp/asp-net" }],
        },
        {
          type: "category",
          label: "Entity Framework",
          items: [
            { type: "autogenerated", dirName: "csharp/entity-framework" },
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
