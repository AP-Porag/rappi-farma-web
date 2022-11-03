export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rappi-farma-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [
    {
      src: "~/assets/bootstrap/js/bootstrap.bundle.js",
      type: "text/javascript"
    }
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/css/bootstrap.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/bottom-navigation-vue.js',mode: 'client' },
    { src: './plugins/vue-social-chat.js' },
    { src: './plugins/vue-zoom.js',mode:"client" },
    { src: './plugins/vue-image-zoom.js',mode:"client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['faCog'],
      regular: ["faEnvelope"],
      brands: [
        "faGithub",
        "faFacebook",
        "faFacebookF",
        "faFacebookMessenger",
        "faInstagram",
        "faTwitter",
        "faWhatsapp",
        "faPinterest",
        "faTelegramPlane"
      ]
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
      '~/assets/scss/functions.scss'
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }

}
