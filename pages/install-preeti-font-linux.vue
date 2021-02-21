<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Install Preeti Font in Linux (Fedora)"
      published="12 Sep 2014"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Script to download and install Preeti font on your Fedora Linux system:
      </p>

      <pre class="language-bash command-line"><code>
#!/usr/bin/bash
wget http://www.fontsaddict.com/font/download/preeti.TTF
mkdir /usr/share/fonts/myfonts
mv preeti.TTF /usr/share/fonts/myfonts/
fc-cache -f -v
</code></pre>

      <p>
        Installing it in Windows is even easier. Just press <code>Ctrl+W</code> and wait for two minutes.
      </p>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
};
</script>