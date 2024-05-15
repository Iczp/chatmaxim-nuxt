// https://nuxt.com/docs/api/configuration/nuxt-config

import { generateCss } from './src/hooks/antd';

export default defineNuxtConfig({
  ssr: true,
  hooks: {
    'build:done': async () => {
      // const { default: generateCss } = await import('./src/hooks/antd');
      await generateCss();
    },
  },
  css: [
    // '@/assets/css/antd.min.css'
    'ant-design-vue/dist/reset.css',
  ],
  srcDir: 'src/',
  runtimeConfig: {
    apiSecret: '', // 可以由 NUXT_API_SECRET 环境变量覆盖
    public: {
      apiBase: '', // 可以由 NUXT_PUBLIC_API_BASE 环境变量覆盖
    },
    baseUrl: 'http://10.0.5.20',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: '/css/antd.min.css', // 引用生成的静态样式文件
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css', // 引用生成的静态样式文件
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/app.scss";',
        },
      },
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
  content: {
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@ant-design-vue/nuxt',
    'nuxt-icon',
    '@nuxt/content',
  ],
  plugins: [
    // { src: '@/plugins/antdv', mode: 'client' }, // 引入插件
  ],
  antd: {
    // Options
  },
  robots: {
    /* module options */
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // // Products page generated on demand, revalidates in background, cached until API response changes
    // '/products': { swr: true },
    // // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    // '/products/**': { swr: 3600 },
    // // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    // '/blog': { isr: 3600 },
    // // Blog post page generated on demand once until next deployment, cached on CDN
    // '/blog/**': { isr: true },
    // // Admin dashboard renders only on client-side
    // '/admin/**': { ssr: false },
    // // Add cors headers on API routes
    // '/api/**': { cors: true },
    // // Redirects legacy urls
    // '/old-page': { redirect: '/new-page' },
  },
  //   反向代理
  nitro: {
    // prerender: {
    //   routes: ['/'],

    // },

    // // 用于客户端代理
    // devProxy: {
    //   '/connect': {
    //     target: 'http://10.0.5.20:8043/connect', // 这里是接口地址
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
    // // 该配置对服务端和客户端都生效，配置了routeRules后，就不需要配置devProxy了
    routeRules: {
      '/connect/**': {
        proxy: 'http://10.0.5.20:8043/connect/**',
      },
      '/api/chat/**': {
        proxy: 'http://10.0.5.20:8044/api/chat/**',
      },
      '/api/im/**': {
        proxy: 'http://10.0.5.20:8044/api/im/**',
      },
      '/api/app/**': {
        proxy: 'http://10.0.5.20:8044/api/app/**',
      },
    },
  },
});
