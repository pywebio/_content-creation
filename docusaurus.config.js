// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PyWebIO',
  tagline: 'Low code Python web framework',
  url: 'https://pyweb.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pywebio', // Usually your GitHub org/user name.
  projectName: 'content_creation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // ! have commented these out for now to remove edit feature.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // ! have commented these out for now to remove edit feature.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PyWeb.io',
        logo: {
          alt: 'PyWebIO logo',
          src: 'img/pywebio.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            className: 'mbri-github',
            to: 'https://github.com/pywebio/PyWebIO/',
            position: 'right',
          },
          {
            className: 'mbri-hot-cup',
            to: 'https://www.pyweb.io/product.html',
            position: 'right',
          },
          {
            className: 'mbri-help',
            to: 'https://discord.gg/MvaCcg76Z7',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Project Repo',
                to: 'https://github.com/pywebio/PyWebIO/',
              },
              {
                label: 'Documentation',
                to: 'https://pywebio.readthedocs.io/',
              },
              {
                label: 'Tutorials',
                to: 'https://www.pyweb.io/tutorial.html',
              },
              {
                label: 'Demos and source code',
                to: 'https://github.com/pywebio/demos',
              },
              {
                label: 'Bug Reports and fixes',
                to: 'https://github.com/pywebio/PyWebIO/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord server',
                to: 'https://discord.gg/MvaCcg76Z7',
              },
              {
                label: 'Subscribe to newsletters',
                to: 'https://www.pyweb.io/index.html#header16-6',
              },
              {
                label: 'Contact us',
                to: 'mailto:hey@pyweb.io',
              },
            ],
          },
          {
            title: 'Products and Services',
            items: [
              {
                label: 'Library and collateral',
                to: 'https://www.pyweb.io/product.html#content4-3e',
              },
              {
                label: 'Platform',
                to: 'https://www.pyweb.io/product.html#content4-3h',
              },
              {
                label: 'Hire an expert',
                to: 'https://www.pyweb.io/product.html#header15-1s'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
