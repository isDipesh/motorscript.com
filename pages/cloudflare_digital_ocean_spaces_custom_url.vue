<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Use cloudflare to route custom URL to DigitalOcean Spaces"
      published="10 Dec 2019"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Use cloudflare to route custom URL to DigitalOcean Spaces: Your custom
        URL maybe a domain or a sub-domain. The domain of the custom URL to be
        used should use Cloudflare as its nameserver.
        https://support.cloudflare.com/hc/en-us/articles/205195708-Changing-your-domain-nameservers-to-Cloudflare
      </p>

      <p></p>

      Login to DigitalOcean. Open Settings for your Spaces instance. Create a
      new one if necessary.

      <img 1 />

      On CDN, click Edit, and then Click on Enable CDN.

      <img 2 />

      Edit CDN again to add custom subdomain. 
      <img 3 />

      <pre class="language-bash command-line" data-prompt="$"><code>
#!/usr/bin/bash
wget http://www.fontsaddict.com/font/download/preeti.TTF
mkdir /usr/share/fonts/myfonts
mv preeti.TTF /usr/share/fonts/myfonts/
fc-cache -f -v
</code></pre>

      <p>
        Installing it in Windows is even easier. Just press
        <code>Ctrl+W</code> and wait for two minutes.
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
