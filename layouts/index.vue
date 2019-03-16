<template>
    <div class="container">
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-8986893739514632",
        enable_page_level_ads: true
      });
    </script>
        <BlogHeader/>
        <section class="main">
            <nuxt/>
        </section>
        <BlogFooter/>
    </div>
</template>


<script>
  import BlogHeader from "./BlogHeader.vue"
  import BlogFooter from "./BlogFooter.vue"

  export default {
    data() {
      return {
        title: "Dipesh Acharya's Recent Posts",
      }
    },
    components: {
      BlogHeader, BlogFooter
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Dipesh Acharya\'s weblog of cheat-sheets on Web, Javascript, Python, Linux and other technologies.'
          }
        ],
        bodyAttrs: {
          itemscope: '',
          itemtype: 'https://schema.org/CollectionPage'
        }
      }
    }
  }
</script>