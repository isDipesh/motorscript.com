<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Nautilus: 'E-mail this file' option in right-click/context menu"
      published="02 Oct 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This should work for all Linux users with <strong>Nautilus</strong> file
        manager.
      </p>
      <p>First install the package – “<em>nautilus-actions</em>“.</p>
      <p>
        For Fedora, RHEL, Cent OS and other RPM based distributions<br />
        <code>yum install nautilus-actions</code>
      </p>
      <p>
        For debian based distributions<br />
        <code>apt-get install nautilus-actions</code>
      </p>
      <p>
        Fire “<em>Nautilus Action Editor GUI</em>” either from
        <em>System -&gt; Preferences -&gt; Nautilus Actions Configuration</em>
        or from command line:<br />
        <code>open nautilus-actions-config-tool</code>
      </p>
      <p>
        From the tool-bar (below menubar), use the first button to ‘<em
          >Define a new action</em
        >‘. In the ‘Context Label’ field seen on the ‘Action’ tab, use something
        like ‘<strong>E-mail this file</strong>‘. And then switch to the
        ‘<em>Command</em>‘ tab and follow the following steps for your choice of
        e-mail client:
      </p>
      <p>
        For using <strong>Evolution</strong> as the e-mail client:<br />
        In the ‘<em>Command</em>‘ tab, use ‘evolution’ in the
        <em>Path</em> field. And in the next Parameters field:<br />
        <code>mailto:?attach="%u"</code><br />
        %u gives the file path in runtime.
      </p>
      <p>
        For using <strong>Thunderbird</strong> as the e-mail client:<br />
        Now, navigate to the ‘<em>Command</em>‘ tab, and in the path filed, use
        ‘thunderbird’. The next one is ‘<em>Parameters</em>‘ field where we
        use<br />
        <code>'-compose 'attachment=%u'</code> .<br />
        %u gives the file path in runtime.
      </p>
      <p>
        We save the changes by clicking on the second button on the tool-bar.
      </p>
      <p>
        And, optionally, make it cleaner:
        <em
          >Tools -&gt; Preferences -&gt; Runtime Preferences -&gt; Nautilus Menu
          Layout</em
        >
      </p>
      <p>
        Deselect <em>“Create a root ‘Nautilus-Actions’ menu”</em> and
        <em>“Add an About Nautilus-Actions’ item…”</em>
      </p>
      <p><em>OK</em> and close the window.</p>
      <p>
        Probably, we are done. Just in case the item isn’t visible, please find
        a way to restart Nautilus.
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