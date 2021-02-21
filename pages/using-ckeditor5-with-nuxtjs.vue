<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Using CKEditor 5 with Nuxt.js" published="25 Jan 2019" />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        CKEditor 5 is built for browsers and although ES6 imports are available
        it cannot be used directly in Nuxt.js with Server Side Rendering (SSR)
        because the sources reference to <i class="hl">window</i> object.
      </p>

      <p>
        Importing CKEditor in components with Nuxt running in universal mode would give the following error:
        <pre class="language-bash command-line"><code>ERROR  window is not defined
  at Object.&lt;anonymous> (node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js:5:2287)</code></pre>
      </p>

      <p>
        In this example, we will be using Document editor build of CKEditor - DecoupledEditor. Other builds should also work in the same manner.

        <pre class="language-bash command-line"><code class="prefix">yarn add @ckeditor/ckeditor5-build-decoupled-document</code></pre>

        View <a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#document-editor" target="_blank" rel="noopener noreferrer">CKEditor documentation</a> for more details.

      <h2>Method 1: Using Plugins</h2>

      <p>
        Create <i class="hl">plugins/ckeditor.js</i> with the following content:
        <pre class="language-javascript"><code>import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
export default DecoupledEditor</code></pre>

    In <span class="hl">nuxt.config.js</span>, add the newly created plugin only to be used for Client Side Rendering (CSR):
<pre class="language-javascript"><code>
  plugins: [
    ...,
    { src: '~plugins/ckeditor', ssr: false }
  ],
  </code></pre>

Now <i class="hl">DecoupledEditor</i> can be used within Nuxt pages.
      </p>

      <p>
        <strong>WARNING: This method causes Nuxt to include CKEditor in vendor build
        which will be loaded to render pages even when CKEditor is not required. Therefore, I prefer Method 2.</strong>
      </p>

      <h2>Method 2: Importing in pages only for Client Side</h2>

      <p>Nuxt facilitates <i class="hl">process.browser</i> which we can use to test if the script is being run on the browser.
      However, this cannot be used with ES6 imports as we cannot wrap <i class="hl">import</i> within an <i class="hl">if</i> condition.
      We will have to resort to using <i class="hl">require</i>.
      This way we will import ckeditor only in the required pages, thus keeping our overall application light. A minimal page using this technique follows.
      </p>

      <pre>
        <code class="language-html">
          &lt;template>
  &lt;div class="container">
    &lt;h1>CKEditor 5 Nuxt Demo&lt;/h1>
    &lt;div id="toolbar-container">&lt;/div>
    &lt;div id="editor">&lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
let DecoupledEditor
if (process.browser) {
  DecoupledEditor = require('@ckeditor/ckeditor5-build-decoupled-document')
}

export default {
  mounted() {
    DecoupledEditor.create(document.querySelector('#editor'))
      .then((editor) => {
        const toolbarContainer = document.querySelector('#toolbar-container')
        toolbarContainer.appendChild(editor.ui.view.toolbar.element)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
  }
}
&lt;/script>

        </code>
      </pre>

<p>Not So Minimal Demo: <a href="https://edupatra.com/preeti-to-unicode/" target="_blank" rel="noopener">Preeti to Unicode converter</a></p>

Happy Nuxting!

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
