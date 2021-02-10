<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Simple Django Deployment Cheat-sheet"
      published="23 Nov 2014"
      updated="03 Apr 2018"
    />

    <div class="content" itemprop="articleBody">
      <div class="block">
        <ul>
          <form id="django-form">
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
      Add <i class="hl">{{ user }}</i> to <i class="hl">sshd_config</i>
      <i class="hl">AllowUsers</i> configuration if
      <i class="hl">AllowUsers</i> is used to allow specific user logins via
      SSH.

      <h3>Setup Database</h3>
      Install Postgresql:
      <pre
        class="language-bash normal"
      ><code class="su">apt-get install postgresql postgresql-contrib</code></pre>
      Enable and start Postgresql
      <pre
        class="language-bash normal"
      ><code class="su">systemctl enable postgresql</code>
<code class="su">systemctl start postgresql</code></pre>
      Create database and role:
      <pre
        class="language-bash normal"
      ><code class="prefix">sudo su - postgres</code>
<code class="prefix">createdb {{db_name}}</code>
<code class="prefix">echo "CREATE ROLE {{db_user}} WITH PASSWORD '{{db_password}}';" | psql</code>
<code class="prefix">echo "ALTER ROLE {{db_user}} WITH LOGIN;" | psql</code>
<code class="prefix">echo "GRANT ALL PRIVILEGES ON DATABASE "{{db_name}}" to {{db_user}};" | psql</code>
<code class="prefix">exit</code></pre>

      <h3>Setup pushing via Git</h3>

      <pre class="language-bash normal">
<code class="prefix">cd</code>
<code class="prefix">mkdir repo.git {{project_dir}} conf logs media static</code>
<code class="prefix">cd repo.git</code>
<code class="prefix">git init --bare</code>
<code class="prefix">git --bare update-server-info</code>
<code class="prefix">git config core.bare false</code>
<code class="prefix">git config receive.denycurrentbranch ignore</code>
<code class="prefix">git config core.worktree /home/{{user}}/{{project_dir}}/</code>
<code class="prefix">cat &gt; hooks/post-receive &lt;&lt;EOF</code>
<code>#!/bin/sh</code>
<code>git checkout -f</code>
<code>#../app/deploy.sh</code>
<code>EOF</code>
<code></code>
<code class="prefix">chmod +x hooks/post-receive</code>
<code class="prefix">cd</code></pre>

      Add this bare repo as a remote on local.

      <pre class="language-bash normal">
<code class="prefix" v-if="ssh_port=='22'">git remote add server {{user}}@{{ip}}:/home/{{user}}/repo.git/</code><code
                    class="prefix"
                    v-else>git remote add server ssh://{{user}}@{{ip}}:{{ssh_port}}/home/{{user}}/repo.git/</code>
<code class="prefix" v-if="ssh_port=='22'">ssh-copy-id {{user}}@{{ip}}</code><code class="prefix" v-else>ssh-copy-id -p {{ssh_port}} {{user}}@{{ip}}</code>
<code class="prefix">git push server --all</code></pre>

      <p>
        You may want to modify your <i class="hl">git post-receive</i>
        hook to run custom commands on the server, like running database
        migrations, notifying services of new deployments, pushing static files
        to CDN, etc.
      </p>

      <!--<code data-gist-id="8001624" data-gist-hide-footer="true" data-gist-caption="this/is/a/sample/path/to/file.extension"-->
      <!--data-gist-file="example-file2.html"></code>-->

      <h3>Install Required Libraries and Packages</h3>

      <pre class="language-bash normal">
<code class="su">apt install python-dev build-essential links virtualenv python3-pip</code>
<code class="su">pip3 install virtualenv</code></pre>

      <h3>Setup the Project</h3>
      <pre class="language-bash normal"><code class="prefix">cd</code>
<code class="prefix">virtualenv env -p python3</code>
<code class="prefix">source env/bin/activate</code>
<code class="prefix">cd app</code>
<code class="prefix">pip install -r requirements/prod.txt</code>
<code class="prefix">pip install circus</code>
<code class="prefix">./manage.py migrate</code>
<code class="prefix">./manage.py collectstatic</code></pre>
      Also, try running <code>./manage.py runserver</code> to see if everything
      is all right.

      <h3>Install Circus</h3>
      <pre
        class="language-bash normal"
      ><code class="su">pip3 install circus</code>
<code class="su"> mkdir -p /etc/circus/conf.d/</code></pre>
<pre class="language-bash normal"><code class="su"> vim /etc/systemd/system/circus.service</code></pre>
<pre class="language-ini code-content"><code>[circus]
check_delay = 5
include_dir = /etc/circus/conf.d
;debug = True
;; requires circus-web to be able to start the http dashboard
;httpd = True

[plugin:flapping]
use = circus.plugins.flapping.Flapping
retry_in = 3
max_retry = 2</code></pre>

<pre class="language-bash normal"><code class="su"> vim /etc/systemd/system/circus.service</code></pre>
      <pre class="language-ini code-content"><code>[Unit]
Description=Circus process manager
After=syslog.target network.target nss-lookup.target
[Service]
Type=simple
ExecReload=/home/{{user}}/env/bin/circusctl reload
ExecStart=/home/{{user}}/env/bin/circusd /etc/circus/circusd.ini
Restart=always
RestartSec=5
[Install]
WantedBy=default.target</code></pre>

      <pre
        class="language-bash normal"
      ><code class="su">systemctl --system daemon-reload</code>
<code class="su">systemctl enable circus</code>
<code class="su">systemctl start circus</code></pre>

      <h4>Create circus configuration</h4>

      <pre class="language-bash normal"><code class="prefix">cd</code>
<code class="prefix">vim conf/circus.ini</code></pre>

      <pre class="language-ini code-content"><code>[watcher:{{django_project}}]
cmd=chaussette --fd $(circus.sockets.{{django_project}}) {{django_project}}.wsgi.application
#cmd=chaussette --fd $(circus.sockets.{{django_project}}) --backend gevent {{django_project}}.wsgi.application
#cmd=chaussette --fd $(circus.sockets.{{django_project}}) --backend meinheld {{django_project}}.wsgi.application
uid = {{user}}
endpoint_owner = {{user}}
use_sockets = True
virtualenv_py_ver = 3.8
numprocesses = 2 
virtualenv = /home/{{user}}/env/
copy_env = True
copy_path = True
stdout_stream.class = FileStream
stdout_stream.filename = /home/{{user}}/logs/django.log
stderr_stream.class = FileStream
stderr_stream.filename = /home/{{user}}/logs/django_err.log
stdout_stream.max_bytes = 1073741824
stdout_stream.backup_count = 3
stderr_stream.max_bytes = 1073741824
stderr_stream.backup_count = 3
working_dir = /home/{{user}}/app/

[socket:{{django_project}}]
host=127.0.0.1
port=8000
#path = /tmp/{{django_project}}.sock
#family = AF_UNIX

[env:{{django_project}}]
PYTHONPATH=/home/{{user}}/app/

# For django-q
[watcher:{{django_project}}_q]
cmd = python manage.py qcluster
numprocesses = 1
working_dir = /home/{{user}}/app/
virtualenv = /home/{{user}}/env/
copy_env = True
copy_path = True
stdout_stream.class = FileStream
stdout_stream.filename = /home/{{user}}/logs/webapp_q.log
stdout_stream.max_bytes = 1073741824
stdout_stream.backup_count = 3
stderr_stream.class = FileStream
stderr_stream.filename = /home/{{user}}/logs/webapp_q_err.log
stderr_stream.max_bytes = 1073741824
stderr_stream.backup_count = 3

[env:{{django_project}}_q]
PYTHONPATH=/home/{{user}}/app/
</code></pre>
      <h4>
        Soft-link our configuration to circus <code>conf.d</code> directory
      </h4>

      <pre
        class="language-bash normal"
      ><code class="prefix">sudo ln -s /home/{{user}}/conf/circus.ini /etc/circus/conf.d/{{django_project}}.ini</code>
<code class="prefix">circusctl reloadconfig</code></pre>

      <h3>Install redis</h3>
      <pre
        class="language-bash normal"
      ><code class="su">apt install redis-server</code>
<code class="su">systemctl enable redis-server</code>
<code class="su">systemctl start redis-server</code></pre>

      <h3>Install nginx</h3>
      <pre
        class="language-bash normal"
      ><code class="su">apt install nginx</code>
<code class="su">systemctl enable nginx</code>
<code class="su">rm /etc/nginx/sites-enabled/default</code></pre>

      <h3>Configure nginx with security headers</h3>

      <pre class="language-bash normal"><code class="prefix">cd</code>
<code class="prefix">vim conf/nginx.conf</code></pre>

      <pre class="language-nginx code-content"><code>upstream {{django_project}} {
    server 127.0.0.1:8000;
    # server unix:/tmp/{{django_project}};
}

# Redirect www.{{remote}} to {{remote}}
server {
    listen 80;
    server_name  www.{{remote}};
    return       301 https://{{remote}}$request_uri;
}

server {
    listen 80;
    server_name {{remote}};

    #access_log /home/{{user}}/logs/nginx.access.log;
    error_log /home/{{user}}/logs/nginx.error.log;

    #limit_conn conn_limit_per_ip 100;
    #limit_req zone=req_limit_per_ip burst=100 nodelay;

    location /robots.txt {
        alias /home/{{user}}/static/robots.txt;
    }
    
    location /favicon.ico {
        alias /home/{{user}}/static/img/favicon.ico;
    }
    
    location ~ ^/(media|static)/  {
        root    /home/{{user}}/;
        expires 30d;
    }

    ## Deny illegal host names
    if ($host !~* ^({{remote}})$ ) {
        return 444;
    }

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_pass http://{{django_project}};
        client_max_body_size 50m;
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Frame-Options SAMEORIGIN;
    }
    
    # Prevent hidden files (beginning with a period) from being served
    location ~ /\. { access_log off; log_not_found off; deny all; }
}</code></pre>

      <h4>
        Soft-link our configuration to nginx <code>conf.d</code> directory
      </h4>

      <pre
        class="language-bash normal"
      ><code class="prefix">sudo ln -s /home/{{user}}/conf/nginx.conf /etc/nginx/conf.d/{{django_project}}.conf</code></pre>

      <h3>Obtain SSL certificate with Certbot</h3>
      <pre
        class="language-bash normal"
      ><code class="su">apt install certbot python-certbot-nginx</code>
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
      ssh_port: "22",
      django_project: "django_project",
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
    },
  },
};
</script>
