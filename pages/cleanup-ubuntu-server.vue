<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Cleaning up Ubuntu Server" published="22 Mar 2020" />

    <div class="content" itemprop="articleBody" v-highlight>
      An Ubuntu server instance can be cleaned by removing some unwanted
      packages and disabling services. This saves some disk space and also frees
      up memory.

      <h2>Cleanup unnecessary packages</h2>

      <pre
        class="language-bash normal"
      ><code class="su">sudo apt purge --auto-remove snapd ubuntu-core-launcher squashfs-tools friendly-recovery ureadahead apport at</code></pre>

      Very few server instances utilize these packages. Make sure you don't need
      them before removing them.

      <h2>Remove unattended upgrades [CAUTION]</h2>

      <pre
        class="language-bash normal"
      ><code>sudo apt purge --auto-remove unattended-upgrades</code>
<code>sudo systemctl disable apt-daily-upgrade.timer</code>
<code>sudo systemctl mask apt-daily-upgrade.service</code>
<code>sudo systemctl disable apt-daily.timer</code>
<code>sudo systemctl mask apt-daily.service</code></pre>

      This removes the <i class="hl">unattended-upgrades</i> package and the
      associated services which are reponsible for automatically updating
      packages in the system. Although removing this package saves disk space
      and also removes a services running in the background, this is not
      recommended. You can rather configure
      <i class="hl">unattended-upgrades</i> to install just the security
      updates.

      <!-- Please refer to this article for more details: XXXXXX -->

      <h2>Other unwanted services</h2>

      <pre class="language-bash normal"><code>service --status-all</code></pre>

      Use the above command to list all services running in your server. Disable
      the services you don't need.

      <h2>Remove orphan packages</h2>

      <pre
        class="language-bash normal"
      ><code>sudo apt autoremove --purge</code></pre>

      This removes packages required as dependencies of previously installed
      packages which have been removed now.
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

// https://stackoverflow.com/questions/1497481/javascript-password-generator/1497512#1497512
function generatePassword() {
  let length = 15,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// https://codepen.io/gabrieleromanato/pen/LpLVeQ
function toJSONString(form) {
  let obj = {};
  let elements = form.querySelectorAll("input, select, textarea");
  for (let i = 0; i < elements.length; ++i) {
    let element = elements[i];
    let name = element.name;
    let value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

function copyText(el) {
  el.focus();
  el.select();
  document.execCommand("copy");
}

export default {
  mixins: [BlogTitle],
  components: { BlogTitle },
  data() {
    let user_password = generatePassword();
    let db_password = generatePassword();
    return {
      project_dir: "app",
      user: "user",
      user_password: user_password,
      db_name: "db_name",
      db_user: "db_user",
      db_password: db_password,
      remote: "awecode.com",
      ssh_port: "22",
      django_project: "django_project"
    };
  },
  methods: {
    regenerate_user() {
      this.user_password = generatePassword();
    },
    regenerate_db() {
      this.db_password = generatePassword();
    },
    copy_user() {
      copyText(document.getElementsByName("user_password")[0]);
    },
    copy_db() {
      copyText(document.getElementsByName("db_password")[0]);
    },
    // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
    download() {
      const element = document.createElement("a");
      let content = toJSONString(document.getElementById("django-form"));
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(content)
      );
      element.setAttribute("download", this.django_project + ".json");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
};
</script>
