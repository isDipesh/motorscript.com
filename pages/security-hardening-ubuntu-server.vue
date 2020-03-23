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
      A default installation of Ubuntu server is fairly secure. However, one can follow the following instructions to harden the security further.

      <h2>Improve SSH Security</h2>

      Hardening SSH is vital in keeping your server secure.
      <nuxt-link to="/security-hardening-ssh-linux-server/"
        >Refer to this article for in-depth instructions for SSH
        hardening.</nuxt-link
      >

      <h2>Secure Shared Memory</h2>
      Since multiple processes can use the same memory space, making shared memory read only prevents exploitation of vulnerabilities in services running in the server.
      <pre
        class="language-bash"
      ><code class="prefix">sudo vi /etc/fstab</code></pre>
      <pre
        class="language-ini"
      ><code>none /run/shm tmpfs defaults,ro 0 0</code></pre>

      <h2>Secure the networking layer</h2>
      <pre class="language-bash"><code class="prefix">sudo vi /etc/sysctl.conf</code></pre>
      <pre class="language-conf"><code># Configuration from https://github.com/konstruktoid/hardening/blob/master/misc/sysctl.conf, with some added explainations
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
fs.suid_dumpable = 0
kernel.core_uses_pid = 1
kernel.dmesg_restrict = 1
kernel.kptr_restrict = 2
kernel.panic = 60
kernel.panic_on_oops = 60
kernel.perf_event_paranoid = 2
kernel.randomize_va_space = 2
kernel.sysrq = 0
kernel.unprivileged_bpf_disabled = 1
kernel.yama.ptrace_scope = 2
net.core.bpf_jit_harden = 2
net.ipv4.conf.all.accept_redirects = 0 # Discard ICMP redirects
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.all.rp_filter = 1 # Enable source validation by reverse path for IP Spoofing Protection
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.all.send_redirects = 0 # Disable send redirects
net.ipv4.conf.all.shared_media = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.default.log_martians = 1
net.ipv4.conf.default.rp_filter= 1 # Enable source validation by reverse path for IP Spoofing Protection
net.ipv4.conf.default.secure_redirects = 0
net.ipv4.conf.default.send_redirects = 0 # Disable send redirects
net.ipv4.conf.default.shared_media = 0
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.ip_forward = 0 # Disable packet forwarding for IPv4
net.ipv4.tcp_challenge_ack_limit = 1000000
net.ipv4.tcp_invalid_ratelimit = 500
net.ipv4.tcp_max_syn_backlog = 20480
net.ipv4.tcp_rfc1337 = 1
net.ipv4.tcp_syn_retries = 5
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syncookies = 1 # Enable TCP/IP SYN cookies: blocks SYN attacks
net.ipv4.tcp_timestamps = 0
net.ipv6.conf.all.accept_ra = 0
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.all.forwarding = 0
net.ipv6.conf.all.use_tempaddr = 2
net.ipv6.conf.default.accept_ra = 0
net.ipv6.conf.default.accept_ra_defrtr = 0
net.ipv6.conf.default.accept_ra_pinfo = 0
net.ipv6.conf.default.accept_redirects = 0
net.ipv6.conf.default.accept_source_route = 0
net.ipv6.conf.default.autoconf = 0
net.ipv6.conf.default.dad_transmits = 0
net.ipv6.conf.default.max_addresses = 1
net.ipv6.conf.default.router_solicitations = 0
net.ipv6.conf.default.use_tempaddr = 2
net.ipv6.conf.eth0.accept_ra_rtr_pref = 0
net.netfilter.nf_conntrack_max = 2000000
net.netfilter.nf_conntrack_tcp_loose = 0</code></pre>

      <h2>Use a Firewall</h2>
      Ubuntu comes with UFW, Uncomplicated Firewall. It is a simple alternative
      to <i class="hl">iptables</i>.

      <p>Install and enable UFW:
      <pre
        class="language-bash"
      ><code class="prefix">sudo apt install ufw</code>
      <code class="prefix">sudo ufw enable</code></pre></p>

      UFW by default denies all incoming connection and allows all outgoing
      connections.

      <!-- Allow all outgoing connections, deny all incoming connections.
      <pre
        class="language-bash"
      ><code class="prefix">sudo ufw allow outgoing</code><code class="prefix">sudo ufw deny incoming</code></pre> -->

    <p>
      Allow SSH:
      <pre
        class="language-bash"
      ><code class="prefix">sudo ufw allow 22 # Or sudo ufw allow 23456 if SSH is listening on another port</code></pre></p>

      Allow HTTP and HTTPS:
      <pre
        class="language-bash"
      ><code class="prefix">sudo ufw allow http # OR sudo ufw allow 80</code>
      <code class="prefix">sudo ufw allow https # OR sudo ufw allow 443</code></pre>

      View status and configuration:
      <pre
        class="language-bash"
      ><code class="prefix">sudo ufw status verbose</code></pre>

      <h2>Keep your system up-to-date</h2>
<pre><code class="prefix">sudo apt update</code>
<code class="prefix">sudo apt upgrade</code></pre>
Enable automatic security updates (unattended-upgrades)

      <h2>Remove unwanted user accounts</h2>

      If there are users not in use, remove them. Cloud providers create a
      default user like <i class="hl">ubuntu</i> in fresh instances. You can
      remove them if they aren't used.

      <pre
        class="language-bash"
      ><code class="su">deluser --remove-home ubuntu</code></pre>

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

      <h2>Other Security Measures</h2>
      <ul>
        <li>Use fail2ban.</li>
        <li>Try using single network service per VM instance.</li>
        <li>Make use of security extensions like AppArmor and SELinux.</li>
        <li>Implement service specific security measures like securing Nginx, Apache, PostgreSQL, MySQL.</li>
        <li>Use firewall provided by our cloud service provider.</li>
        <li>Access your system with security audit tools like Lynis.</li>
        <li>Watch your logs. Use tools like LogWatch.</li>
        <li>Try things you'd do if you lost access to your system but you need to get in. You may find some security holes. Fix them.</li>
        <li>Get consultancy from a security expert.</li>
      </ul>
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
