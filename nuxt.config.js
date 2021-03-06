export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-blog-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BACK ||
      'https://nuxt-blog-356f0-default-rtdb.europe-west1.firebasedatabase.app/',
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // env config
  env: {
    BACK: process.env.BACK ||
      'https://nuxt-blog-356f0-default-rtdb.europe-west1.firebasedatabase.app/',
    API: 'AIzaSyCCGxYcJE3h2uSiLvg48SVXxgai8ZKE7to'
  }

  // router: {
  //   middleware: 'log'
  // }
}
