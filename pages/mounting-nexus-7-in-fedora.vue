<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Mounting Nexus 7 in Fedora"
      published="17 Sep 2012"
      updated="18 Dec 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Install udev rules for Nexus 7:<br />
        <pre class="language-bash command-line" data-prompt="#"><code>wget https://gist.github.com/raw/4329222/60d0439f77e7c8784c45e7f5848a53fe6f8fb66c/99-nexus7.rules -P /etc/udev/rules.d/</code></pre>
      </p>
      <p>
        Install simple-mtpfs:<br />
        <pre class="language-bash command-line" data-prompt="#"><code>yum install simple-mtpfs</code></pre>
      </p>
      <p>
        Create a mount point:<br />
        <pre class="language-bash command-line" data-prompt="#"><code>mkdir -p /media/n7</code></pre>
      </p>
      <p>
        Mount the tablet:<br />
        <pre class="language-bash command-line" data-prompt="#"><code>simple-mtpfs /media/n7</code></pre>
      </p>
      <p>
        To Unmount:<br />
        <pre class="language-bash command-line" data-prompt="#"><code>fusermount -u /media/n7</code></pre>
      </p>
      <p>
        Add the following lines to your ~/.bashrc file to create bash aliases:
      </p>
      <pre class="language-bash"><code>#mount nexus 7 with simple-mtpfs
alias mn7='simple-mtpfs /media/n7'
#unmount nexus 7
alias un7='fusermount -u /media/n7'</code></pre>
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