<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Gnome Shell Extension: Screen Off"
      published="16 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <strong>[Note: This extension isn’t maintained any more.]</strong>
      <div>
        Use this instead:
        <a
          href="https://extensions.gnome.org/extension/897/turn-off-display/"
          taget="_blank"
          >https://extensions.gnome.org/extension/897/turn-off-display/</a
        >
      </div>

      <p>
        This is an extension that adds a button to gnome panel that when clicked
        instantly turns off the monitor.<br />
        <code class="language-bash">xset dpms force off</code> is executed in
        the backend.
      </p>

      <p>
        Source:
        <a
          target="_blank"
          href="https://bitbucket.org/xtranophilist/gnome-shell-extension-screen-off"
          title="http://bitbucket.org/xtranophilist/gnome-shell-extension-screen-off"
          >https://bitbucket.org/xtranophilist/gnome-shell-extension-screen-off</a
        >
      </p>
      <p><strong>Installation Instructions:</strong></p>
      Download:
      <pre class="language-bash">
        <code class="prefix">cd ~/.local/share/gnome-shell/extensions</code>
          <code class="prefix">git clone https://bitbucket.org/xtranophilist/gnome-shell-extension-screen-off.git</code>
          <code class="prefix">mv gnome-shell-extension-screen-off/ screen-off@xtranophilist</code>
      </pre>

      <p>
        Restart Gnome:<br />
        <code>Alt+F2</code> to open run command prompt<br />
        Enter <code>r</code>
      </p>
      <p>
        Enable <code>Screen Off Extension</code> from Extensions from <code>gnome-tweak-tool</code>.
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