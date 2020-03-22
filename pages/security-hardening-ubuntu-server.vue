<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Security: Hardening Ubuntu Server"
      published="22 Mar 2020"
    />

    <div class="content" itemprop="articleBody">
      An Ubuntu server instance can be cleaned by removing some unwanted
      packages and disabling services. This saves some disk space and also frees
      up memory.

      <h2>Harden SSH Configuration</h2>

      Login to your server using SSH and start editing SSH service configuration
      file:

      <pre
        class="language-bash"
      ><code class="su">vi /etc/ssh/sshd_config</code></pre>

      <h3>Update the port for SSH service</h3>
      <pre class="language-ini"><code>Port 23456</code></pre>
      Use a port number in the range 1024-49151. Although networking tools can
      easily detect open ports, this may prevent bots and humans only trying to
      penetrate on default port.

      <h3>Use the following HostKey configuration</h3>
      <pre
        class="language-ini"
      ><code>HostKey /etc/ssh/ssh_host_ed25519_key</code>
<code>HostKey /etc/ssh/ssh_host_rsa_key</code>
<code>HostKey /etc/ssh/ssh_host_ecdsa_key</code></pre>

      <h3>Change default Key Exchange algorithms and Ciphers</h3>
      <pre
        class="language-ini"
      ><code>KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp521,ecdh-sha2-nistp384,ecdh-sha2-nistp256,diffie-hellman-group-exchange-sha256</code>
<code>Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr</code>
<code>MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,umac-128@openssh.com</code></pre>

      <h3>Enable Verbose Logging</h3>
      <pre class="language-ini"><code>LogLevel VERBOSE</code></pre>

      <h3>Disable Remote Root Login</h3>
      <pre class="language-ini"><code>PermitRootLogin no</code></pre>

      <h3>Only Allow Specific Users to SSH</h3>
      <pre
        class="language-ini"
      ><code>AllowUsers <i>username1</i> <i>username2</i></code></pre>

      <h3>Disable X11Forwarding</h3>
      <pre class="language-ini"><code>X11Forwarding no</code></pre>
      Because you probably don't need GUIs on server.

      <h3>Automatically Disconnect Idle Sessions</h3>
      <pre class="language-ini"><code>ClientAliveInterval 300</code>
<code>ClientAliveCountMax 0</code></pre>
      SSH sessions will disconnect when no data is received for 5 minutes.

      <h3>Use Kernel Sandboxing for Unprivileged Processes</h3>
      <pre
        class="language-ini"
      ><code>UsePrivilegeSeparation sandbox</code></pre>

      <h3>Disable Password Authentication</h3>
      <pre class="language-ini"><code>PasswordAuthentication no</code></pre>
      This prevents brute-force login attacks. You will have to use key pair to
      authenticate.

      <p>
        For older versions of OpenSSH, please refer to this
        <a
          href="https://infosec.mozilla.org/guidelines/openssh"
          target="_blank"
          rel="noopener noreferrer"
          >Mozilla Guideline.</a
        >
      </p>

      <h2>Generate Private/Public Key Pair</h2>

      On your local computer, generate new SSH key pair. You may want to backup
      your existing key pairs or create the new pair in a different location.
      Use a passphrase you can retrieve later while adding this SSH key to your
      agent.
      <pre
        class="language-bash"
      ><code class="prefix">ssh-keygen -t rsa</code></pre>

      Add the new SSH private key to your SSH agent.
      <pre
        class="language-bash"
      ><code class="prefix">set ssh-add ~/.ssh/id_rsa</code></pre>
      Use the path you generated the key pairs in.

      <p>Copy the contents of <i class="hl">id_rsa.pub</i>.</p>

      <p>On the server, paste it to <i class="hl">~/.ssh/authorized_keys</i></p>

      You should now be able to securely SSH into the server without using a
      password.

      <h2>Remove unwanted user accounts</h2>

      If there are users not in use, remove them. Cloud providers create a
      default user like <i class="hl">ubuntu</i> in fresh instances. You can
      remove them if they aren't used.

      <pre
        class="language-bash"
      ><code class="su">deluser --remove-home ubuntu</code></pre>

      Confirm if you can SSH to the server using allowed user configuration
      before exiting your current SSH session.

      <h2>Cleanup unncessary packages and services</h2>
      List all running services and disable the services you are certain you
      won't need.
      <pre
        class="language-bash"
      ><code class="su">service --status-all</code></pre>
      Also remove orphan packages.
      <pre
        class="language-bash"
      ><code class="su">apt autoremove --purge</code></pre>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

// https://stackoverflow.com/questions/1497481/javascript-password-generator/1497512#1497512
// function generatePassword() {
//   let length = 15,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (let i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }

// https://codepen.io/gabrieleromanato/pen/LpLVeQ
// function toJSONString(form) {
//   let obj = {};
//   let elements = form.querySelectorAll("input, select, textarea");
//   for (let i = 0; i < elements.length; ++i) {
//     let element = elements[i];
//     let name = element.name;
//     let value = element.value;

//     if (name) {
//       obj[name] = value;
//     }
//   }

//   return JSON.stringify(obj);
// }

// function copyText(el) {
//   el.focus();
//   el.select();
//   document.execCommand("copy");
// }

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
  // data() {
  //   let user_password = generatePassword();
  //   let db_password = generatePassword();
  //   return {
  //     project_dir: "app",
  //     user: "user",
  //     user_password: user_password,
  //     db_name: "db_name",
  //     db_user: "db_user",
  //     db_password: db_password,
  //     remote: "awecode.com",
  //     ssh_port: "22",
  //     django_project: "django_project"
  //   };
  // },
  // methods: {
  //   regenerate_user() {
  //     this.user_password = generatePassword();
  //   },
  //   regenerate_db() {
  //     this.db_password = generatePassword();
  //   },
  //   copy_user() {
  //     copyText(document.getElementsByName("user_password")[0]);
  //   },
  //   copy_db() {
  //     copyText(document.getElementsByName("db_password")[0]);
  //   },
  //   // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
  //   download() {
  //     const element = document.createElement("a");
  //     let content = toJSONString(document.getElementById("django-form"));
  //     element.setAttribute(
  //       "href",
  //       "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  //     );
  //     element.setAttribute("download", this.django_project + ".json");
  //     element.style.display = "none";
  //     document.body.appendChild(element);
  //     element.click();
  //     document.body.removeChild(element);
  //   }
  // }
};
</script>
