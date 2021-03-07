<template>
  <div class="container">
    <BlogHeader />
    <main itemscope itemtype="https://schema.org/Blog">
      <nuxt />
      <div
        id="disqus_thread"
        itemscope
        itemtype="https://schema.org/UserComments"
      ></div>
      <client-only>
        <script>
          var disqus_config = function() {};
          (function() {
            // DON'T EDIT BELOW THIS LINE
            var d = document,
              s = d.createElement("script");
            s.src = "https://motorscript.disqus.com/embed.js";
            s.setAttribute("data-timestamp", +new Date());
            (d.head || d.body).appendChild(s);
          })();
        </script>
      </client-only>
    </main>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "./BlogHeader.vue";
import BlogFooter from "./BlogFooter.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>
