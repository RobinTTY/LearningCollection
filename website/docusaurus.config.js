const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

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
          docId: "docs-home",
          position: "left",
          label: "Docs",
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
              href: "https://robintty.github.io/",
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
      copyright: `Copyright © ${new Date().getFullYear()} Robin Müller. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["csharp", "json", "jsx", "css"],
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
};
