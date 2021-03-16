import theme from '@jsilva-pt/nuxt-content-theme-blog'
import { footerLinks } from './blog.settings'

const baseUrl = 'https://vazark.github.io'

const publicRuntimeConfig = {
  baseUrl: 'https://vazark.github.io',

  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',

  githubOwner: 'vazark',
  githubRepository: 'personal-blog',
  githubMainBranch: 'master',

  footerLinks,
}

export default theme({
  feedOptions: {
    title: 'VazM\'s Journey',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: 'VazM\'s Journey',
    },
    meta: {
      author: 'VazM',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US'),
      },
    },
  },
})
