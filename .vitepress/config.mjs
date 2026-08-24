import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gorilla Tag Fan Game Wiki',
  description: 'A wiki for Gorilla Tag fan games',
  base: '/',

  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guides/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Getting Started', link: '/guides/getting-started' }
        ]
      },

      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: 'Unity Setup', link: '/development/unity-setup' },
          { text: 'Start Your Fan Game', link: '/development/fan-game-start' },
          { text: 'Building for Quest', link: '/development/building-for-quest' }
        ]
      },

      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'FAQ', link: '/resources/faq' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/otisdub/gtagfangamewiki'
      }
    ],

    footer: {
      message: 'Gorilla Tag Fan Game Wiki',
      copyright: 'A community run wiki'
    }
  }
})
