const siteConfig = {
  title: "StatusChecks",
  tagline: "Status Checks as Functions",
  // For deploy
  url: "https://status-checks.netlify.com",
  baseUrl: "/",
  projectName: "status-checks",
  organizationName: "boyney123",
  // End deploy options
  editUrl: "https://github.com/boyney123/status-checks-docs/tree/master/docs/",
  headerLinks: [{ doc: "motivation", label: "Docs" }, { href: "https://github.com/boyney123/status-checks", label: "GitHub" }],
  headerIcon: "img/icons/logo-square-transparent.png",
  favicon: "img/icons/favicon-32x32.png",
  colors: {
    primaryColor: "#0e0c33",
    secondaryColor: "#008DF9"
  },
  customDocsPath: "docs",
  gaTrackingId: "UA-126459538-5",
  copyright: "David Boyne",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate", // On page navigation for the current documentation page.
  cleanUrl: true, // No .html extensions for paths.

  // Show documentation's last contributor's name.
  enableUpdateBy: true,
  enableUpdateTime: true
};

module.exports = siteConfig;
