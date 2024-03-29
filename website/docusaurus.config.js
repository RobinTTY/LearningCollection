const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Learning Collection Knowledge Base",
  tagline: "Documenting my learnings from all kinds of tech.",
  url: "https://RobinTTY.github.io",
  baseUrl: "/LearningCollection/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RobinTTY",
  projectName: "LearningCollection",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Learning Collection",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Docs",
        },
        {
          to: "/finance/introduction",
          position: "left",
          label: "Finance",
          sidebarid: "finance",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "My other sites",
          items: [
            {
              label: "Website",
              href: "https://www.robintty.com/",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RobinTTY",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/robin-m%C3%BCller-574782170/",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: [
        "csharp",
        "json",
        "jsx",
        "typescript",
        "css",
        "graphql",
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/RobinTTY/LearningCollection/tree/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "content-docs",
      {
        id: "finance",
        path: "finance",
        routeBasePath: "finance",
        sidebarPath: require.resolve("./sidebar-finance.js"),
      },
    ],
  ],
};
