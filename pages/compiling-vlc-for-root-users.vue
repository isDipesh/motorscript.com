<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Compiling VLC for root users"
      published="05 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        <strong>VLC media player</strong> binaries are available in repos but
        VLC installed from those cannot be run as root. The source code needs to
        be downloaded, and compiled with certain parameters that will then
        enable VLC to be run as root too.
      </p>
      <p>STEPS:</p>
      <p>
        1. Download the latest vlc source code tarball from :
        <a
          href="http://www.videolan.org/vlc/download-sources.html"
          title="VLC Download Site"
          target="_blank">http://www.videolan.org/vlc/download-sources.html</a>
      </p>
      <p>
        2 . Extract it:
        <pre class="language-bash"><code class="prefix">tar -xvf vlc-x.x.x.tar.bz2</code></pre>
        <code>x.x.x</code> refers to the version you’ve downloaded.
      </p>
      <p>
        3. Change directory to the source code root
        <pre class="language-bash"><code class="prefix">cd vlc-x.x.x</code></pre>
      </p>
      <p>
        4. Install libraries required to build VLC<br />
        For Ubuntu and other debian systems with apt-get:<br />
        <pre class="language-bash"><code class="su">apt-get build-dep vlc</code></pre>
      </p>
      <p>
        On Fedora, RHEL, Cent OS and other RPM based systems with yum:<br />
        <pre class="language-bash"><code class="su">yum-builddep vlc</code></pre>
      </p>
      <p>
        5. Configure the building parameters and also check no errors exist and
        all dependencies are fulfilled:<br />
        <pre class="language-bash"><code class="su">./configure --enable-run-as-root --prefix=/opt/vlc</code></pre>
      </p>
      
        <div>The <code>–enable-run-as-root</code> is the tweak that does the job</div>
        <div>The <code>–prefix</code> parameter assigns where the built binaries go, in this case <code>/opt/vlc</code>.</div>
      
      <p>
        6. COMPILE :
        <pre class="language-bash"><code class="su">make</code>
          <code class="su">make install</code>
          </pre>
      </p>
      <p>
        7. Optionally, clean the files created during compilation.<br />
        <pre class="language-bash"><code class="su">make clean</code></pre>
      </p>
      <p>Configuration and compiling requires some time and patience.</p>
      <p>
        After all steps are complete, vlc is installed in /opt/vlc.<br />
        You can run vlc by using ‘vlc’ command.<br />
        <pre class="language-bash"><code class="prefix">vlc</code></pre>
      </p>
      <p>Thank you!</p>
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