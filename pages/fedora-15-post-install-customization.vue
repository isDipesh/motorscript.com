<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Fedora 15 post installation customization"
      published="11 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        The installation is pretty smooth as is always with Anaconda. You get to
        choose which packages to install. Gnome, KDE,
        LXDE, XFCE, etc. are
        the desktop environment options available and I chose to install all.
        Installing more than 2000 packages from the
        DVD media didn’t take long!
      </p>
      <p>
        After the one time post-installation configuration, I logged into Gnome
        3. I was very much disappointed to loose those features of Gnome 2 I was
        used to. More about the Gnome 3 interface, tips, customizations and
        extensions here in this separate post :
      </p>
      <p>
        <a
          href="https://motorscript.com/customizing-gnome-shell/"
          >https://motorscript.com/customizing-gnome-shell/</a
        >
      </p>
      <p>
        Firefox 4.0.1 comes with the distribution as the default web browser.
        Empathy is the default IM client, so Pidgin
        lovers like me have to go through one more yum install command. Also,
        banshee isn’t integrated, but Amarok and RhythmBox are available!
      </p>
      <p>
        Dialogs in windows pop out of the title bar which isn’t a
        bad effect.
      </p>
      <p>
        The system is very much stable, haven’t experience a single crash or bug
        problem yet. The system boots up pretty fast and resuming from
        hibernation is very very fast. The only disaapointment may be the change
        of UI in gnome 3, Fedora 15 is
        perfect otherwise.
      </p>
      <p>Installing the essentials:</p>
      <p>
        The commands listed in this thread are supposed to be run by a
        privileged user like the ‘root’ user. Switch to <code>root</code> user or run the following shell commands with <code>sudo</code> prefix.
        On special occassions, I login as root ;) - 

        <a
          href="https://motorscript.com/enable-root-login-for-linux-systems/"
          title="https://motorscript.com/enable-root-login-for-linux-systems/"
          >https://motorscript.com/enable-root-login-for-linux-systems/</a
        >
      </p>
      <p>
        Since Fedora is free, non-free packages like mp3 codecs and flash-player
        plugins are not be shipped with the distribution, which have to
        installed manually.
      </p>
      <p>
        “RPM Fusion provides software that the Fedora
        Project or Red Hat doesn’t want to ship. That software is provided as
        precompiled RPMs for all current Fedora versions and Red Hat Enterprise
        Linux 5; you can use the RPM Fusion
        repositories with tools like yum and PackageKit.”
      </p>
      <p>
        Install free and non-free repository from with:
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum localinstall --nogpgcheck
          http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
          http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm</code></pre>
      </p>
      <p>
        Install fastestmirror plugin for yum. Makes yum install packages from
        the fastest mirror. 
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum install yum-fastestmirror</code></pre>
      </p>
      <p>
        Install mp3 and other codecs: Multimedia:
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum -y install gstreamer-plugins-bad gstreamer-plugins-ugly
          xine-lib-extras-nonfree gstreamer-ffmpeg xmms xmms-mp3 xine xine-lib
          libdvdcss</code></pre>
      </p>
      <p>
        Install VLC:
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum -y install vlc</code></pre>
          If you want VLC to run as root (not recommended), see this post:
        <a
          href="https://motorscript.com/compiling-vlc-for-root-users/"
          title="https://motorscript.com/compiling-vlc-for-root-users/"
          >https://motorscript.com/compiling-vlc-for-root-users/</a>
      </p>
      <p>
        Install flash player and plugin for browsers:
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum -y install gnash gnash-plugin</code></pre>
        OR if the non-free/properietary Adobe Flash
        player is to be installed:
        <pre class="language-bash command-line" data-prompt="$">
          <code class="su">yum localinstall --nogpgcheckhttp://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm</code>
          <code class="su">yum -y install flash-plugin</code></pre>
      </p>
      <p>
        Install 7zip and RAR plugins and executables
        <pre class="language-bash command-line" data-prompt="$"><code>yum -y install p7zip p7zip-plugins unrar</code></pre>
      </p>
      <p>
        Most probably your wireless device is supported out of the box. If it
        isn’t and if yours is a Broadcom WLAN device,
        follow this:
        <pre class="language-bash command-line" data-prompt="$"><code class="su">yum install kmod-wl</code>
        <code class="su">service NetworkManager restart </code>
          <code class="su">service networkrestart</code></pre>
      </p>
      <p>
        MySQL and phpmyadmin:
        <pre class="language-bash command-line" data-prompt="$">
        <code class="su">yum install -y mysql phpmyadmin</code>
        <code class="su">chkconfig mysqld on</code>
        <code class="su">mysql_secure_installation</code>
        <code class="su">service mysqld restart</code></pre>
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