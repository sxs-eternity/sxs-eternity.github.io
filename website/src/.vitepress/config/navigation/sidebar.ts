import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/docs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'General', link: '/docs/faq/general' },
        // {
        //   text: 'Library',
        //   link: '/docs/faq/library',
        // },
        // {
        //   text: 'Updates',
        //   collapsed: true,
        //   items: [
        //     { text: 'Smart updates', link: '/docs/faq/updates/smart' },
        //     { text: 'Upcoming', link: '/docs/faq/updates/upcoming' },
        //   ],
        // },
        // {
        //   text: 'Settings',
        //   link: '/docs/faq/settings',
        // },
        // {
        //   text: 'Storage',
        //   link: '/docs/faq/storage',
        // },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        // {
        //   text: 'Troubleshooting',
        //   link: '/docs/guides/troubleshooting/',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: 'Common issues',
        //       link: '/docs/guides/troubleshooting/common-issues',
        //     },
        //     {
        //       text: 'Diagnosis',
        //       link: '/docs/guides/troubleshooting/diagnosis',
        //     },
        //   ],
        // },
        // {
        //   text: 'Source migration',
        //   link: '/docs/guides/source-migration',
        // },
        // { text: 'Backups', link: '/docs/guides/backups' },
        // { text: 'Tracking', link: '/docs/guides/tracking' },
        // { text: 'Categories', link: '/docs/guides/categories' },
        // {
        //   text: 'Local source',
        //   link: '/docs/guides/local-source/',
        //   collapsed: true,
        //   items: [
        //     {
        //       text: 'Novel Local Sources',
        //       link: '/docs/guides/local-source/novels',
        //     },
        //     {
        //       text: 'Advanced editing',
        //       link: '/docs/guides/local-source/advanced',
        //     },
        //   ],
        // },
        // {
        //   text: 'Reader settings',
        //   link: '/docs/guides/reader-settings',
        // },
      ],
    },
    // {
    //   items: [
    //     {
    //       text: 'Contribute',
    //       link: '/docs/contribute',
    //     },
    //   ],
    // },
  ]
}

export default sidebar
