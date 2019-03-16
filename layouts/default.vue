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
        <main itemscope itemtype="https://schema.org/Blog">
            <nuxt/>
            <div id="disqus_thread" itemscope itemtype="https://schema.org/UserComments"></div>
            <script>
              var disqus_config = function () {
              };
              (function () { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://motorscript.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
              })();
            </script>
        </main>
        <BlogFooter/>
    </div>
</template>


<script>
  import BlogHeader from "./BlogHeader.vue"
  import BlogFooter from "./BlogFooter.vue"

  export default {
    components: {
      BlogHeader, BlogFooter
    },
  }
</script>