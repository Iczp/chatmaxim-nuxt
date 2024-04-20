// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  imports: {
    autoImport: true,
    presets: [
      // {
      //   from: 'vue-i18n',
      //   imports: ['useI18n'],
      // },
    ],
  },
  components: {
    /**
     * 要禁用自动导入的话，components.dirs设置为空数组
     * 但请注意，这不会影响模块添加的组件
     */
    // dirs: [],
    global: true,
    dirs: ['~/components'],
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },

  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@ant-design-vue/nuxt',
  ],
  antd: {
    // Options
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/products': { swr: true },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/products/**': { swr: 3600 },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' },
  },
});
