import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import markdownPlugin from 'markdown-it-imsize'
import { containerPlugin } from '@vuepress/plugin-container'
import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2'
export default defineUserConfig({
  lang: 'en-US',
  title: 'XToys Guide',
  description: 'Guide on how to use the XToys.app sex toy control website',
  
  extendsMarkdown: md => {
    md.use(markdownPlugin)
  },

  plugins: [
    fullTextSearchPlugin(),
    containerPlugin({
      type: 'image-grid',
      before: (info) => '<div class="image-grid">',
      after: (info) => '</div>'
    })
  ],

  bundler: viteBundler(),
  
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    logo: 'logo.png',
    sidebarDepth: 1,
    sidebar: [
      {
        text: 'Introduction',
        children: [
          '/',
          '/introduction/basic-functionality',
          '/introduction/tools',
          '/introduction/compatibility'
        ]
      },
      {
        text: 'Getting Started',
        children: [
          '/getting-started/first-steps',
          '/getting-started/using-toys',
          '/getting-started/layout-basics',
          '/getting-started/using-patterns',
          '/getting-started/using-scripts',
          '/getting-started/using-tools',
          '/getting-started/using-teases',
          '/getting-started/online-play'
        ]
      },
      {
        text: 'Pattern Creation',
        children: [
          '/pattern-creation/draw-pattern',
          '/pattern-creation/basic-pattern',
          '/pattern-creation/script-pattern',
          '/pattern-creation/funscript-pattern',
          '/pattern-creation/audio-pattern'
        ]
      },
      {
        text: 'Script Creation',
        children: [
          '/script-creation/overview',
          '/script-creation/definitions',
          '/script-creation/expressions',
          '/script-creation/javascript',
          {
            text: 'Examples',
            children: [
              '/script-creation/example-1',
              '/script-creation/example-2',
              '/script-creation/example-3',
              '/script-creation/example-4'
            ]
          }
        ]
      },
      {
        text: 'Tease Creation',
        children: [
          '/tease-creation/overview',
        ]
      },
      {
        text: 'Tools',
        children: [
          '/tools/webpage-monitor',
          '/tools/process-monitor',
          '/tools/discord-bot',
          '/tools/webhook'
        ]
      },
      {
        text: 'Support',
        children: [
          '/support/faq',
          '/support/contact'
        ]
      }
    ]
  })
})