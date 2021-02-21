<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="ShareThis component for Vue.js/Nuxt.js"
      published="30 Oct 2020"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      ShareThis provides javascript embed code for HTML which doesn't work
      directly for Single Page Applications like the one created with
      Vue.js/Nuxt.js. Re-initializing ShareThis on page mount will fix it for
      Vue.js apps.

      <h2>The Component: <span class="hl">ShareThis.vue</span></h2>

      <pre class="language-js"><code>&lt;template&gt;
  &lt;div class=&quot;share-this&quot;&gt;
    &lt;!-- This is the placement code ShareThis provides. --&gt;
    &lt;div class=&quot;sharethis-inline-share-buttons&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  mounted() {
    const st = window.__sharethis__
    if (!st) {
      const script = document.createElement('script')
      script.src =
        'https://platform-api.sharethis.com/js/sharethis.js#property=[property_id]>&amp;product=sop'
      document.body.appendChild(script)
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href
      st.initialize()
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.share-this {
  margin-bottom: 0.5em;
}
&lt;/style&gt;
</code></pre>

      <p>
        Please make sure you use the correct property id in the sharethis js url
        for <span class="hl">src</span> attribute of the appended script tag.
        You can get the property id from the code ShareThis dashboard provides
        you.
      </p>

      <p>
        If you are using something other than the inline share buttons, update
        the placement code on the
        <span class="hl">&lt;template&gt;</span> section.
      </p>

      <div class="block">
        <h3>What the component does:</h3>
        <p>
          If the browser window hasn't loaded the ShareThis javascript yet, the
          script is loaded. If it is already available, it is re-initialized
          with the current URL.
        </p>
      </div>

      <h2>Usage</h2>

      <pre class="language-js"><code>&lt;template&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;ShareThis /&gt;
    &lt;div class=&quot;other-content&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import ShareThis from '~/components/ShareThis'

export default {
  components: { ShareThis }
}
&lt;/script&gt;
</code></pre>
      <p>
        The URL needs not be passed as ShareThis initialization code uses the
        current browser URL.
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
