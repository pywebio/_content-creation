// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PyWebIO',
  tagline: 'Low code Python web framework',
  //! might need to change this to match test url?
  url: 'https://corgibyte.github.io',
  baseUrl: '/docu-test/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Corgibyte', // Usually your GitHub org/user name.
  projectName: 'docu-test', // Usually your repo name.
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
        title: 'PyWebIO',
        logo: {
          alt: 'PyWebIO logo',
          src: 'img/pyweb_logo_192.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            className: 'mbri-github',
            to: 'https://github.com/pywebio/PyWebIO/',
            position: 'right',
          },
          {
            to: 'https://github.com/pywebio/PyWebIO/',
            label: 'Project Repo',
            position: 'right',
          },
          {
            className: 'mbri-hot-cup',
            to: 'https://www.pyweb.io/product.html',
            position: 'right',
          },
          {
            to: 'https://www.pyweb.io/product.html',
            label: 'Products and Services',
            position: 'right',
          },
          {
            className: 'mbri-help',
            to: 'https://discord.gg/MvaCcg76Z7',
            position: 'right',
          },
          {
            className: 'button button--secondary',
            to: 'https://discord.gg/MvaCcg76Z7',
            label: 'Join Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/MvaCcg76Z7',
              },
              {
                label: 'Subscribe to newsletter',
                href: 'https://TODO',
              },
              {
                label: 'Contact us',
                href: 'https://TODO',
              },
            ],
          },
          {
            title: 'Products and Services',
            items: [
              {
                label: 'Library and collateral',
                to: 'https://TODO',
              },
              {
                label: 'Platform',
                href: 'https://TODO',
              },
              {
                label: 'Hire an expert',
                href: 'https://TODO'
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
