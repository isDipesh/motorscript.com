<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Gnome Shell Extension: Firefox Profiles"
      published="16 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This is an extension that adds a button to gnome panel which when
        clicked launches Firefox Profile Manager.
        <code>firefox -no-remote -profilemanager</code> is the command that is actually executed.
      </p>
      <p>[<strong>Note: This extension isn’t maintained any more.</strong>]</p>
      <p><strong>Installation Instructions:</strong></p>
      <p>
        Download:
        <pre class="language-bash command-line">
        <code class="prefix">cd ~/.local/share/gnome-shell/extensions</code>
          <code class="prefix">git clone https://github.com/xtranophilist/gnome-shell-extension-firefox-profiles.git</code>
          <code class="prefix">mv gnome-shell-extension-firefox-profiles/ firefox-profiles@xtranophilist</code>
          </pre>
      </p>
      <p>
        Restart Gnome: <code>Alt+F2</code> to open run command prompt<br />
        Enter <code>r</code>
      </p>
      <p>
        Enable <code>Firefox Profiles Chooser Extension</code> from Extensions from <code>gnome-tweak-tool</code>.
      </p>
      <p>
        The extension is available in
        <a
          href="https://github.com/xtranophilist/gnome-shell-extension-firefox-profiles"
          >github repo</a
        >.
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