module.exports = {
  head: {
    titleTemplate: "%s - motorscript",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Dipesh Acharya" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      itemscope: "",
      itemtype: "https://schema.org/WebPage"
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#000" },
  /*
   ** Build configuration
   */
  css: ["assets/main.scss"],
  modules: [
    "@nuxtjs/sitemap",
    // [
      // "@nuxtjs/google-adsense",
      // {
      //   id: "ca-pub-8986893739514632",
      //   pageLevelAds: true,
      // }
    // ]
  ],
  plugins: [
    {src: '~/plugins/prism.js', ssr: false},
  ],
  generate: {
    routes: ["404"]
  },
  build: {
    babel: {
      "plugins": [
        ["prismjs", {
            "languages": ["javascript", "css", "markup", "nginx", "bash", "ini"],
            
        }]
      ]
    }
},
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://motorscript.com",
    generate: true
  }
};
