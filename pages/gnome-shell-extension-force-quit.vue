<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Gnome Shell Extension: Force Quit"
      published="17 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Force Quit is an extension that adds a ‘Force Quit’ button to the top
        panel of gnome shell, the UI of Gnome 3.
        Clicking the <code>x</code> icon from the left of the gnome-shell panel changes the
        cursor into a <code>x</code>. Then, click over a non-responding application to kill
        it instantly.
      </p>
      <p>
        <strong>[Note: This extension isn’t maintained any more.]</strong>
      </p>
      <p>This extension employs <code>xkill</code> on the backend.</p>
      <p>
        <strong>Installation:</strong><br />
        From Gnome Shell Extensions Directory:<br />
        <a
          href="https://extensions.gnome.org/extension/102/force-quit/"
          title="https://extensions.gnome.org/extension/102/force-quit/"
          >https://extensions.gnome.org/extension/102/force-quit/</a
        >
      </p>
      <p><strong>Or Manually:</strong></p>
      <pre class="language-bash">
        <code class="prefix">cd ~/.local/share/gnome-shell/extensions</code>
        <code class="prefix">git clone https://github.com/xtranophilist/gnome-shell-extension-force-quit.git</code>
        <code class="prefix">mv gnome-shell-extension-force-quit/ force-quit@xtranophilist</code>
      </pre>
      <p>
        Restart Gnome:<br />
        <code>Alt+F2</code> to open run command prompt<br />
        Enter <code>r</code>
      </p>
      <p>
        Enable ‘Force Quit Extension’ from Extensions from
        <code>gnome-tweak-tool</code>
      </p>
      <p>
        <strong>Git Repo:</strong><br />
        <a
          href="https://github.com/xtranophilist/gnome-shell-extension-force-quit/"
          title="https://github.com/xtranophilist/gnome-shell-extension-force-quit/"
          >https://github.com/xtranophilist/gnome-shell-extension-force-quit/</a
        >
      </p>
      <p>
        Superpiffer has created a package for archlinux in
        AUR (<a
          href="http://web.archive.org/web/20160323104200/https://aur.archlinux.org/packages.php?ID=55879"
          title="https://aur.archlinux.org/packages.php?ID=55879"
          >https://aur.archlinux.org/packages.php?<span class="caps">ID</span
          >=55879</a
        >)
      </p>
      <p>
        If it doesn’t work on your system, maybe you don’t have xkill. jjmarin
        on GSE says “In fedora you need to install the
        package xorg-x11-apps in order to get the xkill”.
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