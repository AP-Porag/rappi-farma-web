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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel:'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: "https:/fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" },
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'}
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
    { src: './plugins/vue-nav-tabs.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: [
        'faCog'
      ],
      regular: [
        "faEnvelope",
      ],
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
    ['nuxt-lazy-load', {
      // Default image must be in the static folder
      defaultImage: '/images/loader.gif',
    }],
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
      '~/assets/scss/functions.scss',
      '~/assets/scss/typography.scss',
      '~/assets/scss/global.scss'
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
  },
  loading: '~/components/LoadingBar.vue',

}
