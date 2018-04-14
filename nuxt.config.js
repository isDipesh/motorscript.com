module.exports = {
  head: {
    titleTemplate: '%s - motorscript',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: "Dipesh Acharya's technical blog"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    bodyAttrs: {
      itemscope: '',
      itemtype: 'https://schema.org/Blog'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#000'},
  /*
  ** Build configuration
  */
  css: [
    'assets/main.scss'
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://motorscript.com',
    generate: true,
  }
};
