<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Fedora post-installation customization cheatsheet"
      published="30 May 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p><strong>Updated for Fedora 21</strong></p>
      <p>
        These are the commands I bash as part of Fedora customization after
        semi-yearly installation. These commands require superuser permissions.
        <code>su -</code>
      </p>
      <h2>System Tweaks:</h2>
      <h3>Install RPMFusion, free and non-free repository</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y localinstall --nogpgcheck
      http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
      http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm
          </code></pre>
      <h3>Configure yum</h3>

      Enable caching, keep metadata for 9 days
      <pre class="language-bash"><code class="su">vi /etc/yum.conf</code></pre>

      <h3>Configure Firmware</h3>
      If your wireless device is a Broadcom (B43), install Broadcom (B43)
      wireless driver in Linux:
      <pre class="language-bash"><code>
#!/bin/bash
#http://wireless.kernel.org/en/users/Drivers/b43

su -
yum install b43-fwcutter wget # apt-get or whatever your package manager is
export FIRMWARE_INSTALL_DIR="/lib/firmware"
wget http://www.lwfinger.com/b43-firmware/broadcom-wl-5.100.138.tar.bz2
tar xjf broadcom-wl-5.100.138.tar.bz2
sudo b43-fwcutter -w "$FIRMWARE_INSTALL_DIR" broadcom-wl-5.100.138/linux/wl_apsta.o
echo 'modprobe b43' > /etc/sysconfig/modules/b43.modules
chmod +x /etc/sysconfig/modules/b43.modules
</code></pre>

      <h3>Install tweak tools</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install gnome-tweak-tool dconf-editor gconf-editor</code></pre>
      <h3>Install guake terminal</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install guake</code></pre>
      <p>
        Don’t forget to enable guake in startup applications:
        <code>gnome-tweak-tool</code> -&gt; <code>Startup Applications</code>
      </p>
      <h3>‘Show Desktop’ shortcut</h3>
      <p>
        <code>System Settings</code> -&gt; <code>Keyboard</code> -&gt;
        <code>Shortcuts</code> -&gt; <code>Navigation</code> Hide all normal
        windows – Alt+F9
      </p>
      <h2>Multimedia:</h2>
      <h3>Install multimedia codecs</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install gstreamer gstreamer-ffmpeg gstreamer-plugins-bad
          gstreamer-plugins-bad-free gstreamer-plugins-bad-nonfree
          gstreamer-plugins-base gstreamer-plugins-good gstreamer-plugins-ugly
          ffmpeg xmms xmms-mp3 xine xine-lib</code></pre>

      <h3>Clementine media player</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install clementine</code></pre>
      <h3>VLC media player</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install vlc</code></pre>
      <h3>SMPlayer</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install smplayer</code></pre>
      <h3>Image Editors</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install gimp inkscape</code></pre>
      <h2>Utilities:</h2>
      <pre
        class="language-bash"
      ><code class="su">yum -y install wget</code></pre>
      <h3>System monitoring tools</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install lm_sensors hddtemp</code></pre>
      <h3>Install Artha, the dictionary</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install artha</code></pre>
      <h3>Install English language pack for Libreoffice.</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install libreoffice-langpack-en</code></pre>
      <h3>
        Install 7zip and RAR plugins and executables
      </h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install p7zip p7zip-plugins unrar</code></pre>
      <h3>Install android-tools (provides adb and fastboot)</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install android-tools</code></pre>
      <h3>
        Install nemo (Nautilus fork/alternative) and enable it as the default
        file manager
      </h3>

      <pre
        class="language-bash"
      ><code class="su">yum -y install nemo nemo-fileroller</code>
        <code class="su">xdg-mime default nemo.desktop inode/directory
          application/x-gnome-saved-search</code>
      </pre>
      <h2>Internet and Browsers:</h2>
      <h3>Update/Install Firefox</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install firefox</code></pre>
      <h3>Install flash plugin for browsers:</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install lpf-flash-plugin</code></pre>
      And then launch
      <pre class="language-bash"><code class="su">lpf-flash-plugin</code></pre>
      <h3>Install Skype:</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install lpf-skype</code></pre>
      And then launch
      <pre class="language-bash"><code class="su">lpf-skype</code></pre>

      <h2>For developers:</h2>
      <pre class="language-bash">
        <code class="su">yum -y install vim git gitg hg</code>
        <code class="su">yum -y install gcc zlib-devel libjpeg-devel</code>
      </pre>
      <h3>
        <a
          target="_blank"
          href="https://motorscript.com/installing-sublime-text-3-linux/"
          >Install Sublime Text 3</a
        >
      </h3>
      <h3>Install Filezilla</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install filezilla</code></pre>
      <h3>Install OpenJDK</h3>
      <pre
        class="language-bash"
      ><code class="su">yum -y install java-*-openjdk java-*-openjdk-plugin</code></pre>
      <h3>Apache and PHP</h3>
      <pre class="language-bash">
        <code class="su">yum -y install httpd php php-xml</code>
        <code class="su">chkconfig httpd on</code>
        <code class="su">rm -rf /etc/httpd/conf.d/welcome.conf</code>
        <code class="su">find /var/www/html -type d -print | xargs chmod g+rwxs</code>
      </pre>
      <h4>Enable directives in .htaccess</h4>
      <pre
        class="language-bash"
      ><code class="su">vi /etc/httpd/conf/httpd.conf</code></pre>
      Modify <code>AllowOverride None</code> to
      <code>AllowOverride All</code> inside
      <code>&lt;Directory "/var/www/html"&gt;</code>
      <pre
        class="language-bash"
      ><code class="su">service httpd restart</code></pre>

      <h3>MySQL</h3>
      <pre class="language-bash">
        <code class="su">yum -y install mysql mysql-server phpmyadmin</code>
        <code class="su">chkconfig mysqld on</code>
        <code class="su">service mysqld restart</code>
        <code class="su">mysql_secure_installation</code>
      </pre>
      <h3>Python:</h3>
      <pre class="language-bash">
        <code class="su">wget https://raw.github.com/pypa/pip/master/contrib/get-pip.py</code>
        <code class="su">python get-pip.py</code>
        <code class="su">pip install virtualenv</code>
        <code class="su">yum -y install python-devel</code>
      </pre>
      <h3>Postgres:</h3>
      <pre class="language-bash">
        <code class="su">yum -y install postgresql-server</code>
        <code class="su">yum -y install python-psycopg2 postgresql-devel #for Python</code>
        <code class="su">yum -y install php-devel php-pgsql #for PHP support</code>
        <code class="su">su - postgres -c initdb</code>
        <code class="su">vi /var/lib/pgsql/data/pg_hba.conf #Ensure METHOD is trust</code>
        <code class="su">service postgresql restart</code>
        <code class="su">su - postgres</code>
        <code class="su">psql template1</code>
        <code class="language-sql">ALTER USER postgres with encrypted password 'your_password';</code>
        <code>exit()</code>
        <code class="su">vi /var/lib/pgsql/data/pg_hba.conf #Ensure METHOD is md5</code>
        <code class="su">service postgresql restart</code>
        <code class="su">systemctl enable postgresql.service</code>
      </pre>
      <h3>SCM Breeze:</h3>

      (set of shell scripts (for bash and zsh ) that enhance your interaction
      with git.)
      <pre class="language-bash">
        <code class="su">yum -y install ruby</code>
        <code class="prefix">git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze</code>
        <code class="prefix">~/.scm_breeze/install.sh</code>
        <code class="prefix">source ~/.bashrc # or source ~/.zshrc</code>
        </pre>

      Install gpaste extension for gnome:
      <pre
        class="language-bash"
      ><code class="su">yum install gnome-shell-extension-gpaste</code></pre>
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