<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Cheat-sheet: Nuxt.js Deployment with Git"
      published="07 Mar 2020"
    />

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
            <li>
              Use Firebase as CDN?
              <input name="firebase" type="checkbox" v-model="firebase" />
            </li>
            <li>
              Manage multiple node versions on server with NVM?
              <input name="nvm" type="checkbox" v-model="nvm" />
            </li>
            <li v-if="nvm">
              Node version for the app?
              <input name="node_ver" v-model="node_ver" />
            </li>
          </form>
        </ul>
      </div>

      <h3>Create a sudo user</h3>

      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>useradd -m {{user}}
echo {{user}}:{{user_password}}| chpasswd
usermod -aG sudo {{user}}
chsh --shell /bin/bash {{user}}
su {{user}}</code></pre>

      <p>
        Add <i class="hl">{{ user }}</i> to
        <i class="hl">/etc/ssh/sshd_config</i>
        <i class="hl">AllowUsers</i> configuration line if
        <i class="hl">AllowUsers</i> is used to allow specific user logins via
        SSH.
      </p>

      <p>
        Refer to
        <a
          href="https://motorscript.com/security-hardening-ssh-linux-server/"
          target="_blank"
          >Security: Hardening SSH on Linux Server</a
        >
        for SSH Hardening cheatsheet.
      </p>

      <h3>Install node</h3>
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs</code></pre>

      <h3>Install yarn and pm2</h3>
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
sudo yarn global add pm2</code></pre>

      <div v-if="nvm">
        <h3>
          If using different node versions in same server, install
          <span class="hl">nvm</span>
        </h3>
        <pre
          class="language-bash command-line"
          data-prompt="$"
        ><code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
nvm install {{ node_ver }}
nvm use {{ node_ver }}</code></pre>
      </div>

      <h4>Create <span class="hl">pm2.json</span> file in project root.</h4>
      <pre class="language-json"><code>{
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

      <pre
        class="language-bash command-line"
        data-prompt="$"
        :data-output="gitOutputLines"
      >
<code>cd
mkdir repo.git {{project_dir}} conf logs
cd repo.git
git init --bare
git --bare update-server-info
git config core.bare false
git config receive.denycurrentbranch ignore
git config core.worktree /home/{{user}}/{{project_dir}}

cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/bash
git checkout -f
cd /home/{{user}}/{{project_dir}}
<template v-if="nvm">~/.nvm/nvm.sh
nvm use {{ node_ver }}
</template>yarn
yarn build <template v-if="firebase">
firebase deploy \
</template><template v-else>\
</template>&& pm2 restart pm2.json
EOF

chmod +x hooks/post-receive
cd</code></pre>

      Add this bare repo as a remote on local.

      <pre
        v-if="ssh_port == '22'"
        class="language-bash command-line"
        data-prompt="$"
      >
<code>git remote add server {{user}}@{{ip}}:/home/{{user}}/repo.git/
ssh-copy-id {{user}}@{{ip}}
git push server --all</code></pre>

      <pre v-else class="language-bash command-line" data-prompt="$">
<code>git remote add server ssh://{{user}}@{{ip}}:{{ssh_port}}/home/{{user}}/repo.git/
ssh-copy-id -p {{ssh_port}} {{user}}@{{ip}}
git push server --all</code></pre>

      <div v-if="nvm">
        If using multiple node versions managed by nvm, the post receive hook
        switches node to the desired version before creating a build.
      </div>

      <h3>Install and configure nginx</h3>
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>sudo apt-get install nginx
cd
cd conf
vi nginx.conf</code></pre>
      <pre class="language-nginx code-content">
<code>#Redirect www to non-www
server {
    server_name www.{{remote}};
    return 301 $scheme://{{remote}}$request_uri;
}

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
      <pre
        class="language-bash command-line"
        data-prompt="$"
      ><code>sudo ln -s /home/{{user}}/conf/nginx.conf /etc/nginx/sites-enabled/{{project_name}}.conf</code></pre>

      <h3>Obtain SSL certificate with Certbot</h3>
      <pre
        class="language-bash command-line"
        data-prompt="#"
      ><code>apt install certbot python-certbot-nginx
certbot --nginx</code></pre>

      <h4>Check configuration and restart nginx</h4>
      <pre class="language-bash command-line" data-prompt="#"><code>nginx -t
systemctl restart nginx</code></pre>

      <div v-if="firebase">
        <h3>Use Firebase as CDN</h3>

        <p>
          Create a new site for <span class="hl">Hosting</span> on a Firebase
          project. You can create and manage Firebase projects from
          <a href="https://console.firebase.google.com/" target="_blank"
            >the Firebase console</a
          >
        </p>

        On the server,
        <pre
          class="language-bash command-line"
          data-prompt="$"
        ><code>curl -sL https://firebase.tools | sudo bash
firebase login --no-localhost
firebase init</code></pre>
        Firebase will ask a few questions.
        <pre
          class="language-bash command-line"
          data-prompt="?"
        ><code>What do you want to use as your public directory?</code></pre>
        <pre class="language-text code-content mini">
<code>.nuxt/dist/client</code></pre>

        <pre
          class="language-bash command-line"
          data-prompt="?"
        ><code>Configure as a single-page app (rewrite all urls to /index.html)? (y/N)</code></pre>
        <pre class="language-text code-content mini">
<code>N</code></pre>
        You can now manually deploy to test the Firebase configuration. The
        deploy command is also be added to the
        <span class="hl">post-receive git hook</span> so that on every push, the
        built files are deployed to Firebase.
        <pre
          class="language-bash command-line"
          data-prompt="$"
        ><code>firebase deploy</code></pre>
      </div>
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
      ip: "143.666.7.343",
      user_password: user_password,
      project_name: "awecode",
      remote: "awecode.com",
      ssh_port: "22",
      firebase: false,
      nvm: false,
      node_ver: "14.6.0"
    };
  },
  computed: {
    gitOutputLines() {
      let endingLine = 18;
      if (this.firebase) {
        endingLine += 1;
      }
      if (this.nvm) {
        endingLine += 2;
      }
      return "9, 11-" + endingLine.toString();
    }
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
