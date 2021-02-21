<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Security: Hardening SSH on Linux Server"
      published="22 Mar 2020"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      SSH is an essential tool to remotely administrate servers. Although SSH is
      a very secure protocol, you are prone to brute-force attacks if you don't
      follow proper security measures. The following instructions can be
      employed to improve security of a SSH installation on a server with
      default configuration. It is assumed that the default settings which are
      secure haven't been already modified.

      <p>Warning: Incorrect SSH settings may lock you out of the server.</p>

      <h2>Harden SSH Configuration</h2>

      Login to your server and start editing OpenSSH service
      configuration file:

      <pre
        class="language-bash command-line" data-prompt="#"
      ><code>vi /etc/ssh/sshd_config</code></pre>

      <h3>Update the port for SSH service</h3>
      <pre class="language-bash command-line" data-prompt="$"><code>Port 23456</code></pre>
      Use a port number in the range 1024-49151. Although networking tools can
      easily detect open ports, this may prevent bots and humans only trying to
      penetrate on the default port - <i class="hl">22</i>.

      <h3>Use the following HostKey configuration</h3>
      <pre
        class="language-js"
      ><code>HostKey /etc/ssh/ssh_host_ed25519_key
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key</code></pre>

      <h3>Change default Key Exchange algorithms and Ciphers</h3>
      <pre
        class="language-js"
      ><code>KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp521,ecdh-sha2-nistp384,ecdh-sha2-nistp256,diffie-hellman-group-exchange-sha256
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,umac-128@openssh.com</code></pre>
      (Recommended by Mozilla)

      <h3>Enable Verbose Logging</h3>
      <pre class="language-js"><code>LogLevel VERBOSE</code></pre>

      <h3>Disable Remote Root Login</h3>
      <pre class="language-js"><code>PermitRootLogin no</code></pre>

      <h3>Only Allow Specific Users to SSH</h3>
      <pre
        class="language-js"
      ><code>AllowUsers <i>username1</i> <i>username2</i></code></pre>

      <h3>Disable X11Forwarding</h3>
      <pre class="language-js"><code>X11Forwarding no</code></pre>
      Because you probably don't need GUIs on server.

      <h3>Automatically Disconnect Idle Sessions</h3>
      <pre class="language-js"><code>ClientAliveInterval 300
ClientAliveCountMax 0</code></pre>
      SSH sessions will disconnect when no data is received for 5 minutes.

      <h3>Disable Password Authentication</h3>
      <pre class="language-js"><code>PasswordAuthentication no</code></pre>
      This prevents brute-force login attacks. You will have to use key pair to
      authenticate.

      <p>Confirm if you can make new SSH connections to the server using the current configuration
      before exiting your current SSH session.</p>

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
        class="language-bash command-line" data-prompt="$"
      ><code>ssh-keygen -t rsa</code></pre>

      Add the new SSH private key to your SSH agent.
      <pre
        class="language-bash command-line" data-prompt="$"
      ><code>ssh-add ~/.ssh/id_rsa</code></pre>
      Use the path you generated the key pairs in.

      <p>Copy the contents of <i class="hl">id_rsa.pub</i>.</p>

      <p>On the server, paste it to <i class="hl">~/.ssh/authorized_keys</i></p>

      You should now be able to securely SSH into the server without using a
      password.

      <h2>Other Security Measures</h2>

      <h3>Only allow certain sets of IP to SSH</h3>
      Edit <span class="hl">hosts.allow</span> to add allow-list.
      <pre
        class="language-bash command-line" data-prompt="#"
      ><code>vi /etc/hosts.allow</code></pre>
      <pre
        class="language-js code-content"
      ><code>sshd: 192.168.1.5, 94.1.1.1/12, 10.65.140.23/32</code></pre>
      You can use single IP address or a range.

      <h3>Block certain IP or range of IPs</h3>
      If brute-force attacks are coming regularly from a certain IP or range,
      you can block all such incoming connections to your server.
      <p>Edit <span class="hl">hosts.deny</span> to add block-list.</p>
      <pre
        class="language-bash command-line" data-prompt="#"
      ><code>vi /etc/hosts.deny</code></pre>
      <pre
        class="language-js code-content"
      ><code>sshd: 192.168.1.5, 94.1.1.1/12, 10.65.140.23/32</code></pre>

      <h3>Login Banner</h3>
      A login banner can be used to warn intruders of legal consequences. It can
      also be used to remind legitimate users of their responsibilities and
      obligations.

      <p>For displaying a message after a user logs in:
      <pre
        class="language-bash command-line" data-prompt="#"
      ><code>vi /etc/motd</code></pre></p>

      <h3>Firewall and other tools</h3>
      A firewall is also a good solution to filter connections for various
      protocols including SSH. Firewalls and services like <i class="hl">fail2ban</i> can be used to block illicit connections to the server.    
      <p><nuxt-link to="/security-hardening-ubuntu-server/">Refer to this article to view futher tips to harden your server.</nuxt-link></p>
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
