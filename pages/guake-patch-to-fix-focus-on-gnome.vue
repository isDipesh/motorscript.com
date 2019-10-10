<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Guake patch to fix focus issue on GNOME 3.4"
      published="01 Jun 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Guake is an awesome Quake style terminal which saves you a lot
        of time.
      </p>
      <p>
        In GNOME 3.4, there’s this annoying bug with
        Guake (or is it GNOME’s?) that Guake can’t
        release focus via hotkey (which is F12 by default).
      </p>
      <p>
        <a
          href="https://bugzilla.gnome.org/show_bug.cgi?id=676103"
        >
          GNOME Bugzilla – Bug 676103
        </a>
      </p>
      <p>
        After exploring gtk documentation and messing around with Gauke’s python
        code for a while, I found out a fix for this issue.
      </p>
      <p>
        Open <code>guake.py</code>, which I found at <code>/usr/lib/guake</code>
      </p>
      <p>Find the line: (line 820)</p>
      <pre
        class="language-python"
      ><code>self.window.hide() # Don't use hide_all here!</code></pre>
      <p>Replace it with:</p>
      <pre class="language-python"><code>
        self.window.set_keep_below(True)
self.window.hide() # Don't use hide_all here!
</code></pre>
      <p>Save the file and it should be fixed.</p>
      <p>
        This hack was suggested by Hador on Guake Trac against my hack which
        seemed to work only on Fedora. This has been tested
        OK on Fedora 17 and ArchLinux.
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