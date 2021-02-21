<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Gnome Shell Extension : Sensors" published="20 Aug 2011"/>

        <div class="content" itemprop="articleBody" v-highlight>
            <p>This extensions isn't currently maintained. Please use the this fork: <a target="_blank" rel="noopener noreferrer" href="https://extensions.gnome.org/extension/841/freon/">https://extensions.gnome.org/extension/841/freon/</a> (<a target="_blank" rel="noopener noreferrer" href="https://github.com/UshakovVasilii/gnome-shell-extension-freon">https://github.com/UshakovVasilii/gnome-shell-extension-freon</a>)</p>

<h2 id="gnomeshellextensionsensors">gnome-shell-extension-sensors</h2>

<p><em>gnome-shell-extension-sensors</em> (previously known as gnome-shell-extension-cpu-temperature)
is an extension for displaying CPU temperature, hard disk temperature, voltage and
CPU fan RPM in GNOME Shell.</p>

<p>The extension uses <a target="_blank" rel="noopener noreferrer" href="http://www.lm-sensors.org/">sensors</a> from lm_sensors package (lm-sensors for Debian systems)
to read temperature for different CPU cores and adapters, voltage data and fan speed.</p>

<p>Optionally, this extension uses the <a target="_blank" rel="noopener noreferrer" href="http://www.freedesktop.org/wiki/Software/udisks/">UDisks2</a> dbus interface or <a target="_blank" rel="noopener noreferrer" href="https://savannah.nongnu.org/projects/hddtemp/">hddtemp</a> as fallback to
read hard drive temperature data.</p>

<p><img src="/media/posts/gnome-shell-extension-sensors.jpg" alt="Screenshot of Gnome Shell Extension Sensors" /></p>

<h2 id="installation">Installation</h2>

<p>This is the <strong>recommended method</strong> for installation, as it doesn't require the build
dependencies for installation.
You can install this extension by visiting the <a target="_blank" rel="noopener noreferrer" href="https://extensions.gnome.org/extension/82/cpu-temperature-indicator/">GNOME extensions</a>
page for this extension.</p>

<h3 id="installationbypackagemanager">Installation by package manager</h3>

<p>Fedora has packaged a <strong>very old</strong> version of this extension. You can install it by running:</p>

<p><code>yum -y install gnome-shell-extension-cpu-temperature</code></p>

<p>However this package will be retired and possibly replaced in the future according to Bug <a target="_blank" rel="noopener noreferrer" href="https://bugzilla.redhat.com/show_bug.cgi?id=983409">RH#983409</a>.</p>

<h3 id="manualinstallation">Manual installation</h3>

<p>To install this extension you need to clone the source and build the extension.
The build dependenciesare:</p>

<ul>
<li><em>gettext</em>,</li>

<li><em>pkg-config</em>,</li>

<li><em>git</em>,</li>

<li><em>glib2</em>,</li>

<li><em>glib2-devel</em> or <em>libglib2.0-dev</em>,</li>

<li><em>zip</em>,</li>

<li><em>gnome-common</em>,</li>

<li><em>autoconf</em>,</li>

<li><em>automake</em>,</li>

<li><em>intltool</em>.</li>
</ul>

<p>To build the extension for gnome-shell 3.10 or newer please run the following commands:</p>

<pre class="language-bash command-line"><code>cd ~ &amp;&amp; git clone https://github.com/xtranophilist/gnome-shell-extension-sensors.git
cd ~/gnome-shell-extension-sensors
./autogen.sh
</code></pre>

<p>To build the extension for gnome-shell 3.8 or older please run the following commands:</p>

<pre class="language-bash command-line"><code>cd ~ &amp;&amp; git clone https://github.com/xtranophilist/gnome-shell-extension-sensors.git
cd ~/gnome-shell-extension-sensors
git checkout gnome-3.8
./autogen.sh
</code></pre>

<p>You can install this extension for your user by executing:</p>

<pre class="language-bash command-line"><code>make local-install
</code></pre>

<p>or system wide by executing (this requires root permissions):</p>

<pre class="language-bash command-line"><code>make install
</code></pre>

<p>After installation you need to restart the GNOME shell:</p>

<ul>
<li><code>ALT</code>+<code>F2</code> to open the command prompt</li>

<li>Enter <code>r</code> to restart the GNOME shell</li>
</ul>

<p>Then enable the extension:
Open <code>gnome-tweak-tool</code> -> <code>Shell Extensions</code> -> <code>Sensors</code> -> On</p>

<h3 id="installingdependencies">Installing dependencies</h3>

<p>Installing lm-sensors for Fedora, CentOS and other distros with yum:</p>

<pre class="language-bash command-line"><code>yum install -y lm_sensors</code></pre>

<p>Ubuntu, Debian and other distros with apt-get:</p>

<pre class="language-bash command-line"><code>apt-get install lm-sensors</code></pre>

<p>Then run <code>sensors-detect</code> as root as one time detection process.</p>

<p>Installing <code>hdd-temp</code>:</p>

<pre class="language-bash command-line"><code>yum -y install hddtemp</code></pre>

<h3 id="configuration">Configuration</h3>

<p>This extensions uses the output of <code>sensors</code>(1) command to obtain the
temperature data and sensor labeling. To relabel, hide or correct the
output consult the <code>sensors.conf</code>(5) manual.</p>

<p>Authors : <a target="_blank" rel="noopener noreferrer" href="https://github.com/xtranophilist/gnome-shell-extension-sensors/graphs/contributors">authors</a></p>
        </div>
    </article>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>