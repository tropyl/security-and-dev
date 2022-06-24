// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Security & Dev",
    tagline: "First step in Cyber Security",
    url: "https://beta.securityand.dev",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "tropyl",
    projectName: "security-and-dev",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    routeBasePath: "/learn",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    routeBasePath: "/",
                    blogSidebarTitle: "Latest Posts",
                    blogSidebarCount: 0,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Seurity & Dev.",
                logo: {
                    alt: "Security & Dev - Logo",
                    src: "img/snd_logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "right",
                        label: "Learn",
                    },
                    // { to: "/blog", label: "Blog", position: "left" },
                    // {
                    //     href: "https://github.com/facebook/docusaurus",
                    //     label: "GitHub",
                    //     position: "right",
                    // },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} Security & Dev.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                respectPrefersColorScheme: true,
            },
        }),
};

module.exports = config;
