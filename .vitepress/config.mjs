import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gorilla Tag Fan Game Wiki",
  description: "A wiki for Gorilla Tag fan games",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Getting Started', link: '/guides/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/otisdub/gtagfangamewiki' }
    ]
  }
})
