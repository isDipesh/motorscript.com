<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Nuxt.js Deployment Cheat-sheet" published="01 Apr 2020" />

    <div class="content" itemprop="articleBody">
      <div class="block">
        <ul>
          <!-- <form id="nuxt-form">
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
              Django Project Name :
              <input name="django_project" v-model="django_project" />
            </li>
            <li>Database Name : <input name="db_name" v-model="db_name" /></li>
            <li>Database User : <input name="db_user" v-model="db_user" /></li>
            <li>
              Database Password :
              <input name="db_password" v-model="db_password" />
              <a class="l1 small" href="#" @click.prevent="regenerate_db"
                >Regenerate</a
              >
              <a class="l1 small" href="#" @click.prevent="copy_db">Copy</a>
            </li>
          </form> -->
        </ul>
      </div>

      <p class="has-line-data" data-line-start="0" data-line-end="1">
        Nuxt Deployment Cheatsheet
      </p>
      <ol>
        <li class="has-line-data" data-line-start="2" data-line-end="3">
          Create a sudo user
        </li>
        <li class="has-line-data" data-line-start="3" data-line-end="4">
          Harden SSH -
          <a
            href="https://gist.github.com/xtranophilist/174b08ab7c756afd56a4747acf64b878"
            >https://gist.github.com/xtranophilist/174b08ab7c756afd56a4747acf64b878</a
          >
        </li>
        <li class="has-line-data" data-line-start="4" data-line-end="5">
          Cleanup
        </li>
      </ol>
      <p class="has-line-data" data-line-start="7" data-line-end="11">
        Disable anacron:<br />
        vi /etc/crontab<br />
        Comment anacron lines<br />
        <a
          href="http://bookofzeus.com/harden-ubuntu/disable-services/disable-anacron/"
          >http://bookofzeus.com/harden-ubuntu/disable-services/disable-anacron/</a
        >
      </p>
      <p class="has-line-data" data-line-start="12" data-line-end="15">
        curl -sL
        <a href="https://deb.nodesource.com/setup_11.x"
          >https://deb.nodesource.com/setup_11.x</a
        >
        | sudo -E bash -<br />
        sudo apt-get update<br />
        sudo apt-get install nodejs npm
      </p>
      <p class="has-line-data" data-line-start="16" data-line-end="20">
        curl -sS
        <a href="https://dl.yarnpkg.com/debian/pubkey.gpg"
          >https://dl.yarnpkg.com/debian/pubkey.gpg</a
        >
        | sudo apt-key add -<br />
        echo “deb
        <a href="https://dl.yarnpkg.com/debian/"
          >https://dl.yarnpkg.com/debian/</a
        >
        stable main” | sudo tee /etc/apt/sources.list.d/yarn.list<br />
        sudo apt update &amp;&amp; sudo apt install yarn<br />
        yarn --version
      </p>
      <p class="has-line-data" data-line-start="21" data-line-end="22">
        yarn global add pm2
      </p>
      <p class="has-line-data" data-line-start="23" data-line-end="28">
        If using different node versions in same server:<br />
        Install nvm<br />
        curl -o-
        <a
          href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh"
          >https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh</a
        >
        | bash<br />
        nvm install 12.8.0<br />
        nvm use 12.8.0
      </p>
      <p class="has-line-data" data-line-start="32" data-line-end="34">
        Setup pushing via Git<br />
        app, repo, conf
      </p>
      <p class="has-line-data" data-line-start="35" data-line-end="42">
        cd<br />
        cd app<br />
        yarn<br />
        yarn build<br />
        pm2 start npm – start<br />
        pm2 status<br />
        pm2 startup
      </p>
      <p class="has-line-data" data-line-start="43" data-line-end="44">
        sudo apt-get install nginx
      </p>
      <p class="has-line-data" data-line-start="45" data-line-end="48">
        cd<br />
        cd conf<br />
        vi nginx.conf
      </p>
      <p class="has-line-data" data-line-start="50" data-line-end="55">
        server {<br />
        listen 80;<br />
        listen [::]:80;<br />
        index index.html;<br />
        server_name <a href="http://b1.edupatra.com">b1.edupatra.com</a>;
      </p>
      <pre><code>location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
</code></pre>
      <p class="has-line-data" data-line-start="64" data-line-end="65">}</p>
      <p class="has-line-data" data-line-start="67" data-line-end="68">
        sudo ln -s /home/ep/conf/nginx.conf
        /etc/nginx/sites-enabled/edupatra.conf
      </p>
      <p class="has-line-data" data-line-start="70" data-line-end="88">
        pm2.json:<br />
        {<br />
        “apps”: [<br />
        {<br />
        “name”: “thuprai”,<br />
        “instances”: “max”,<br />
        “exec_mode”: “cluster”,<br />
        “script”: “npm”,<br />
        “args”: “start”,<br />
        “cwd”: “/home/thufx/app/”,<br />
        “env”: {<br />
        “HOST”: “127.0.0.1”,<br />
        “PORT”: “3000”,<br />
        “NODE_ENV”: “production”<br />
        }<br />
        }<br />
        ]<br />
        }
      </p>
      <p class="has-line-data" data-line-start="89" data-line-end="98">
        post-receive:<br />
        #!/bin/bash<br />
        git checkout -f<br />
        cd /home/thufx/app/<br />
        . ~/.nvm/nvm.sh<br />
        nvm use 12.8.0<br />
        yarn<br />
        yarn build <br />
        &amp;&amp; pm2 restart pm2.json
      </p>

      <h4>
        Soft-link our configuration to nginx <code>conf.d</code> directory
      </h4>

      <pre
        class="language-bash normal"
      ><code class="prefix">sudo ln -s /home/{{user}}/conf/nginx.conf /etc/nginx/conf.d/{{django_project}}.conf</code></pre>

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
      db_name: "db_name",
      db_user: "db_user",
      db_password: db_password,
      remote: "awecode.com",
      ssh_port: "22"
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
      let content = toJSONString(document.getElementById("nuxt-form"));
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
