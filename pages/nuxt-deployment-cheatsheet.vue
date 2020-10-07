<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Nuxt.js Deployment Cheat-sheet" published="01 Apr 2020" updated="08 Oct 2020" />

    <div class="content" itemprop="articleBody" v-highlight>
      <div class="block">
        <ul>
          <form id="nuxt-form">
            <div class="right btn small" @click="download">
              Download form data
            </div>
            <li>Domain Name: <input name="remote" v-model="remote" /></li>
            <li>IP Address: <input name="ip" v-model="ip" /></li>
            <li>User on Server : <input name="user" v-model="user" /></li>
            <li>
              User Password :
              <input name="user_password" v-model="user_password" />
              <a class="l1 small" href="#" @click.prevent="regenerate_user"
                >Regenerate</a
              >
              <a class="l1 small" href="#" @click.prevent="copy_user">Copy</a>
            </li>
            <li>SSH Port : <input name="ssh_port" v-model="ssh_port" /></li>
            <li>
              Project Name :
              <input name="project_name" v-model="project_name" />
            </li>
          </form>
        </ul>
      </div>

      <h3>Create a sudo user</h3>

      <pre
        class="language-bash normal"
      ><code class="su">useradd -m {{user}}</code>
<code class="su">echo {{user}}:{{user_password}}| chpasswd</code>
<code class="su">usermod -aG sudo {{user}}</code>
<code class="su">chsh --shell /bin/bash {{user}}</code>
<code class="su">su {{user}}</code></pre>
      
      <p>Add <i class="hl">{{ user }}</i> to <i class="hl">/etc/ssh/sshd_config</i>
      <i class="hl">AllowUsers</i> configuration line if
      <i class="hl">AllowUsers</i> is used to allow specific user logins via
      SSH.</p>

      <p>Refer to <a href="https://motorscript.com/security-hardening-ssh-linux-server/" target="_blank">Security: Hardening SSH on Linux Server</a> for SSH Hardening cheatsheet.</p>

      <h3>Install node</h3>
      <pre class="language-bash normal"><code class="prefix">curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -</code>
<code class="prefix">sudo apt-get install -y nodejs</code></pre>

<h3>Install yarn and pm2</h3>
      <pre class="language-bash normal"><code class="prefix">curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -</code>
<code class="prefix">echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list</code>
<code class="prefix">sudo apt update && sudo apt install yarn</code>
<code class="prefix">sudo yarn global add pm2</code>
</pre>
      
<h3>If using different node versions in same server, install <span class="hl">nvm</span></h3>
        <pre class="language-bash normal"><code class="prefix">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash</code>
<code class="prefix">nvm install 12.8.0</code>
<code class="prefix">nvm use 12.8.0</code></pre>

<h4>Create <span class="hl">pm2.json</span> file in project root.</h4>
        <pre class="language-js normal"><code>
       {
  "apps": [
    {
      "name": "{{project_name}}",
      "instances": "max",
      "exec_mode": "cluster",
      "script": "npm",
      "args": "start",
      "cwd": "/home/{{user}}/app/",
      "env": {
        "HOST": "127.0.0.1",
        "PORT": "3000",
        "NODE_ENV": "production"
      }
    }
  ]
}
</code></pre>

<h3>Setup pushing via Git</h3>

      <pre class="language-bash normal">
<code class="prefix">cd</code>
<code class="prefix">mkdir repo.git {{project_dir}} conf logs</code>
<code class="prefix">cd repo.git</code>
<code class="prefix">git init --bare</code>
<code class="prefix">git --bare update-server-info</code>
<code class="prefix">git config core.bare false</code>
<code class="prefix">git config receive.denycurrentbranch ignore</code>
<code class="prefix">git config core.worktree /home/{{user}}/{{project_dir}}/</code>
<code class="prefix">cat &gt; hooks/post-receive &lt;&lt;EOF</code>
<code>#!/bin/bash</code>
<code>git checkout -f</code>
<code>cd /home/{{user}}/{{project_dir}}/</code>
<code>yarn</code>
<code>yarn build \</code>
<code>&& pm2 restart pm2.json</code>
<code>EOF</code>
<code></code>
<code class="prefix">chmod +x hooks/post-receive</code>
<code class="prefix">exit</code></pre>

      Add this bare repo as a remote on local.

      <pre class="language-bash normal">
<code class="prefix" v-if="ssh_port=='22'">git remote add server {{user}}@{{ip}}:/home/{{user}}/repo.git/</code><code
                    class="prefix"
                    v-else>git remote add server ssh://{{user}}@{{ip}}:{{ssh_port}}/home/{{user}}/repo.git/</code>
<code class="prefix" v-if="ssh_port=='22'">ssh-copy-id {{user}}@{{ip}}</code><code class="prefix" v-else>ssh-copy-id {{user}}@{{ip}} -p {{ssh_port}}</code>
<code class="prefix">git push server --all</code></pre>

If using multiple node versions managed by nvm, you may want the post receive hook to switch node to the desired version before creating a build.
Add the following lines before the <span class="hl">yarn</span> line in <span class="hl">vi /home/{{user}}/repo.git/hooks/post-receive</span>.
      <pre class="language-bash normal">
<code>~/.nvm/nvm.sh</code>
<code>nvm use 12.8.0</code></pre>
      
      <h3>Install and configure nginx</h3>
      <pre class="language-bash normal">
        <code class="prefix">sudo apt-get install nginx</code>
        <code class="prefix">cd</code>
        <code class="prefix">cd conf</code>
        <code class="prefix">vi nginx.conf</code>
      </pre>
      <pre class="language-nginx normal"><code>
        server {
          listen 80;
          listen [::]:80;
          index index.html;
          server_name {{remote}};

          #access_log /home/{{user}}/logs/nginx.access.log;
          #error_log /home/{{user}}/logs/nginx.error.log;

          location /sitemap.xml {
            alias /home/{{user}}/sitemap.xml;
          }

          location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          }
        }
</code></pre>
      
      <h4>
        Soft-link our configuration to nginx conf directory
      </h4>
      <pre class="language-bash normal">
        <code class="prefix">sudo ln -s /home/{{user}}/conf/nginx.conf /etc/nginx/sites-enabled/{{project_name}}.conf</code>
      </pre>

      <h3>Obtain SSL certificate with Certbot</h3>
      <pre
        class="language-bash normal"
      ><code class="su">apt-get install software-properties-common</code>
<code class="su">add-apt-repository ppa:certbot/certbot</code>
<code class="su">apt-get update</code>
<code class="su">apt-get install python-certbot-nginx</code>
<code class="su">apt-get install python-certbot-nginx</code>
<code class="su">certbot --nginx</code>
</pre>

      <h4>Check configuration and restart nginx</h4>
      <pre class="language-bash normal"><code class="su">nginx -t</code>
<code class="su">systemctl restart nginx</code></pre>
    </div>

    Happy Nuxting!
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
      ip: "143.666.7.343",
      user_password: user_password,
      project_name: 'awecode',
      remote: "awecode.com",
      ssh_port: "22"
    };
  },
  methods: {
    regenerate_user() {
      this.user_password = generatePassword();
    },
    copy_user() {
      copyText(document.getElementsByName("user_password")[0]);
    },
    // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
    download() {
      const element = document.createElement("a");
      let content = toJSONString(document.getElementById("nuxt-form"));
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(content)
      );
      element.setAttribute("download", this.project_name + ".json");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
};
</script>
