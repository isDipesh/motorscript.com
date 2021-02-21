<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Compiling Hotot from latest source in Fedora"
      published="09 Oct 2012"
      updated="12 Feb 2013"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        <a
          href="http://web.archive.org/web/20150315002558/http://hotot.org/"
          title="Hotot"
          target="_blank"
          >Hotot</a
        >
        is still in its beta but it’s already the favorite twitter client for
        many. While it is undergoing rapid development, its release cycle is
        very slow. The following commands let you download the latest source
        code and build them in Fedora.
      </p>
      <h2>Install development libraries:</h2>
      <p>
        <pre class="language-bash command-line"><code class="su">
          yum install gcc-c++ qt-devel qtwebkit-devel cmake intltool python-keybinder pywebkitgtk
          </code></pre>
          </p>
      <h2>Clone Hotot:</h2>
      <pre class="language-bash command-line"><code class="prefix">git clone git://github.com/lyricat/Hotot.git</code></pre>
      <h2>Build Hotot:</h2>
      <pre class="language-bash command-line">
        <code class="prefix">cd Hotot</code>
        <code class="prefix">mkdir build</code>
        <code class="prefix">cd build</code>
        <code class="prefix">cmake ..</code>
        <code class="prefix">make</code>
        <code class="prefix">sudo make install</code>
</pre>
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