module.exports = {
  title: 'test',
  tagline: 'Documentation website',
  url: 'https://chrisdobra.github.io/docusaurus-algolia/',
  baseUrl: '/docusaurus-algolia/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ChrisDobra', // Usually your GitHub org/user name.
  projectName: 'docusaurus-algolia', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'test',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://chrisdobra.github.io/docusaurus-algolia/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '8e1b169fd2c844a93baaf7e4737f1d19',
      indexName: 'test',
      appId: '8BLJRD73FU',

      // Optional: see doc section bellow
      // contextualSearch: true,

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://chrisdobra.github.io/docusaurus-algolia/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EDY, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc3',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://chrisdobra.github.io/docusaurus-algolia/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://chrisdobra.github.io/docusaurus-algolia/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
