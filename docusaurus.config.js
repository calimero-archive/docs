// docusaurus.config.js

const path = require("path");

module.exports = {
  title: "Calimero Documentation",
  tagline: "The only blockchain privacy toolkit you will ever need",
  url: "https://docs.calimero.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo_calimero.jpeg",
  organizationName: "calimero-is-near", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  plugins: [
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [],
      },
    ],
    require.resolve("docusaurus-plugin-hotjar"),
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/calimero-is-near/docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-Z9T67N8YSF",
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
      defaultMode: "dark",
    },
    announcementBar: {
      id: "id-deprecation",
      content:
        '**⚠️ This documentation has been deprecated. Please visit our <a href="https://www.calimero.network/"> website</a> to access the latest and most up-to-date version of the documentation.  ⚠️ **',
      backgroundColor: "#ff0000",
      textColor: "#FFFF00",
      isCloseable: false,
    },
    metadata: [
      {
        name: "calimero",
        image: "img/docs_og.jpg",
      },
    ],
    image: "img/docs_og.jpg",
    navbar: {
      logo: {
        alt: "Calimero Logo",
        src: "img/logo1.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [],
    },
    algolia: {
      appId: "E4LW6HBI8N",
      apiKey: "659d02800901a93e6214876d98883225",
      indexName: "dev_cal",
    },
    footer: {
      style: "dark",
      links: [
        // Add your footer links here
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Calimero Limited.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["rust", "java", "python", "ruby", "go", "toml"],
    },
    hotjar: {
      applicationId: "3582573", // Replace this with your actual Hotjar Site ID
    },
  },
};
