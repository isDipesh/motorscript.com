<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Enable graphical root login for Linux systems"
      published="07 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>


      <p><strong>Enabling root login with Graphical Desktop isn't recommended for regular use. Use with caution and only on special ocassions.</strong></p>
      
      <p>
        Open terminal and switch to the superuser (root):
        <pre class="language-bash command-line" data-prompt="$"><code>su -</code></pre>
      </p>
      <p>
        Enter the root password and you are logged in as root in
        the terminal.
      </p>
      <p>
        Edit the file /etc/pam.d/gdm with your favorite text editor:
        <pre class="language-bash command-line" data-prompt="#"><code>vi /etc/pam.d/gdm</code></pre>
      </p>
      <p>OR
      <pre class="language-bash command-line" data-prompt="#"><code>gedit /etc/pam.d/gdm</code></pre>
      </p>
      <p>
        Find the following line:
        <code>auth required pam_succeed_if.so user != root quiet</code>
      </p>
      <p>
        Comment it to
        <code>#auth required pam_succeed_if.so user != root quiet</code>
      </p>
      <p>Do the same with the file <em>/etc/pam.d/gdm-password</em></p>
      <p>
        You can login to GDM as root from the
        next time.
      </p>
      <p>
        <strong>Alternative Technique :</strong> Since it is the
        GUI that prevents you to login as root, you
        can login in run level 3 then start the X Windows system to get root up
        on Gnome or any other desktop environment.
      </p>
      <p>Do this :</p>
      <p>
        Modify your bootloader configuration to set system boot into
        runlevel 3.
      </p>
      <p>
        Grub is the default bootloader for most systems. /etc/grub.conf is a
        soft link to its configuration file which resides on
        /boot actually.
      </p>
      <p>
        Let us open it with our favorite text editor.
        <pre class="language-bash command-line" data-prompt="#"><code>vi /etc/grub.conf</code></pre>
      </p>
      <p>
        OR if you are on
        GUI and if you are comfortable with gedit
        <pre class="language-bash command-line" data-prompt="#"><code>gedit /etc/grub.conf</code></pre>
      </p>
      <p>Find the block item for your boot target with a kernel entry.</p>
      <p>
        Mine happens to be:
        <pre class="language-ini"><code>kernel /vmlinuz-2.6.38.6-27.fc15.i686 ro
root=UUID=3a141363-91f4-4cf0-9b11-968251eec075 rd_NO_LUKS rd_NO_LVM rd_NO_MD rd_NO_DM</code></pre>
      </p>
      <p>
        Append 3 as another parameter to the end to make it
        <pre class="language-ini"><code>kernel /vmlinuz-2.6.38.6-27.fc15.i686 ro
root=UUID=3a141363-91f4-4cf0-9b11-968251eec075 rd_NO_LUKS rd_NO_LVM rd_NO_MD rd_NO_DM 3</code></pre>
                </p>
      <p>Save and close the file.</p>
      <p>
        The next time you login, you will be presented with login on terminal
        instead of GUI. Use ‘root’ for login and the
        root password you set during the system installation for password. After
        you’ve successfully logged in, enter <code>startx</code>.
      </p>
      <p>This will start the default Graphical Desktop Manager.</p>
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