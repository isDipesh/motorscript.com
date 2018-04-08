<template>
    <div>
        <BlogTitle title="Simple Django Deployment Cheat-sheet" published="23 Nov 2014" updated="03 Apr 2018"/>

        <div class="content" itemprop="articleBody">

            <div class="block">
                <ul>
                    <form id="django-form">
                        <div class="right btn small" @click="download">Download form data</div>
                        <li>Domain Name: <input name="remote" v-model="remote"></li>
                        <li>User on Server : <input name="user" v-model="user"></li>
                        <li>User Password : <input name="user_password" v-model="user_password">
                            <a class="l1 small" href="#" @click.prevent="regenerate_user">Regenerate</a>
                            <a class="l1 small" href="#" @click.prevent="copy_user">Copy</a>
                        </li>
                        <li>SSH Port : <input name="ssh_port" v-model="ssh_port"></li>
                        <li>Django Project Name : <input name="django_project" v-model="django_project"></li>
                        <li>Database Name : <input name="db_name" v-model="db_name"></li>
                        <li>Database User : <input name="db_user" v-model="db_user"></li>
                        <li>Database Password : <input name="db_password" v-model="db_password">
                            <a class="l1 small" href="#" @click.prevent="regenerate_db">Regenerate</a>
                            <a class="l1 small" href="#" @click.prevent="copy_db">Copy</a>
                        </li>
                    </form>
                </ul>
            </div>

            <h3>Create a sudo user</h3>
            <pre><span class="su">useradd -m {{user}}</span>
<span class="su">echo {{user}}:{{user_password}}| chpasswd</span>
<span class="su">usermod -aG sudo {{user}}</span>
<span class="su">su {{user}}</span></pre>
            Add <i class="hl">{{user}}</i> to <i class="hl">sshd_config</i> <i class="hl">AllowUsers</i> configuration if <i
                class="hl">AllowUsers</i> is used to allow specific user logins via SSH.

            <h3>Setup Database</h3>
            Install Postgresql:
            <pre><span class="su">apt-get install postgresql postgresql-contrib</span>
<span class="su">systemctl enable postgresql</span>
<span class="su">systemctl start postgresql</span>
<span class="su">su - postgres</span></pre>
            Create database and role:
            <pre><span class="prefix">createdb {{db_name}}</span>
<span class="prefix">echo "CREATE ROLE {{db_user}} WITH PASSWORD '{{db_password}}';" | psql</span>
<span class="prefix">echo "GRANT ALL PRIVILEGES ON DATABASE "{{db_name}}" to {{db_user}};" | psql</span></pre>


            <h3>Setup pushing via Git</h3>

            <pre>
<span class="prefix">cd</span>
<span class="prefix">mkdir repo.git {{project_dir}} conf logs media static</span>
<span class="prefix">cd repo.git</span>
<span class="prefix">git init --bare</span>
<span class="prefix">git --bare update-server-info</span>
<span class="prefix">git config core.bare false</span>
<span class="prefix">git config receive.denycurrentbranch ignore</span>
<span class="prefix">git config core.worktree /home/{{user}}/{{project_dir}}/</span>

<span class="prefix">cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/sh
git checkout -f
EOF</span>

<span class="prefix">chmod +x hooks/post-receive</span>

<span class="prefix">exit</span>
</pre>

            Add this bare repo as a remote on local.

            <pre>
<span class="prefix" v-if="ssh_port=='22'">git remote add server {{user}}@{{remote}}:/home/{{user}}/repo.git/</span><span
                    class="prefix"
                    v-else>git remote add server ssh://{{user}}@{{remote}}:{{ssh_port}}/home/{{user}}/repo.git/</span>
<span class="prefix" v-if="ssh_port=='22'">ssh-copy-id {{user}}@{{remote}}</span><span class="prefix" v-else>ssh-copy-id {{user}}@{{remote}} -p {{ssh_port}}</span>
<span class="prefix">git push server --all</span>
</pre>

            <p>
                You may want to modify your <i class="hl">git post-receive</i>
                hook to run custom commands on the server, like running database migrations, notifying services of new deployments, pushing static files to CDN, etc. 
            </p>


            <!--<code data-gist-id="8001624" data-gist-hide-footer="true" data-gist-caption="this/is/a/sample/path/to/file.extension"-->
            <!--data-gist-file="example-file2.html"></code>-->

            <h3>Setup the Project</h3>
            <pre><span class="prefix">cd</span>
<span class="prefix">virtualenv env -p python3</span>
<span class="prefix">source env/bin/activate</span>
<span class="prefix">cd app</span>
<span class="prefix">pip install -r requirements/production.txt</span>
<span class="prefix">./manage.py migrate</span>
<span class="prefix">./manage.py collectstatic</span>
</pre>
            Also, try running <span class="hl">./manage.py runserver</span> to see if everything is all right.

            <h3>Install Circus</h3>
            <pre><span class="su">apt install circus</span>
                
<span class="su"> cat &lt;&lt;EOT &gt;&gt; /etc/systemd/system/circus.service</span>
[Unit]
Description=Circus process manager
After=syslog.target network.target nss-lookup.target
[Service]
Type=simple
ExecReload=/usr/bin/circusctl reload
ExecStart=/usr/bin/circusd /etc/circus/circusd.ini
Restart=always
RestartSec=5
[Install]
WantedBy=default.target
EOT
                
<span class="su">systemctl --system daemon-reload</span>
<span class="su">systemctl enable circus</span>
<span class="su">systemctl start circus</span></pre>

            <h4>Create circus configuration</h4>

            <pre><span class="prefix">cd</span>
<span class="prefix">vim conf/circus.ini</span></pre>

            <pre>
[watcher:{{django_project}}]
cmd=chaussette --fd $(circus.sockets.esx) {{django_project}}.wsgi.application
#cmd=chaussette --fd $(circus.sockets.esx) --backend gevent {{django_project}}.wsgi.application
#cmd=chaussette --fd $(circus.sockets.esx) --backend meinheld {{django_project}}.wsgi.application
uid = {{user}}
endpoint_owner = {{user}}
use_sockets = True
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
path = /tmp/{{django_project}}.sock
family = AF_UNIX

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
</pre>

            <h4>Soft-link our configuration to circus <span class="hl">conf.d</span> directory</h4>

            <pre><span class="prefix">sudo ln -s /home/{{user}}/conf/circus.ini /etc/circus/conf.d/</span>
<span class="prefix">circusctl reloadconfig</span></pre>

            <h3>Install redis</h3>
            <pre><span class="su">apt install redis-server</span>
<span class="su">systemctl enable redis</span>
<span class="su">systemctl start redis</span></pre>

            <h3>Install nginx</h3>
            <pre><span class="su">apt install nginx</span>
<span class="su">systemctl enable nginx</span></pre>

            <h3>Configure nginx with security headers</h3>
            <pre>
upstream django {
    server unix:/tmp/{{django_project}};
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

    limit_conn conn_limit_per_ip 100;
    limit_req zone=req_limit_per_ip burst=100 nodelay;

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

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_pass http://django;
        client_max_body_size 50m;
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Frame-Options SAMEORIGIN;
        # CSP allowing popular third party integrations
        add_header Content-Security-Policy "default-src 'self' ; script-src 'self' 'unsafe-inline' 'unsafe-eval' adservice.google.com adservice.google.com.np pagead2.googlesyndication.com cdn.awecode.com d31qbv1cthcecs.cloudfront.net www.google-analytics.com cdn.ravenjs.com connect.facebook.net platform.twitter.com apis.google.com www.google.com www.gstatic.com maps.googleapis.com; connect-src 'self' cdn.awecode.com googleads.g.doubleclick.net fonts.gstatic.com wss: cdn.awecode.com securepubads.g.doubleclick.net d5nxst8fruw4z.cloudfront.net sentry.io maps.gstatic.com www.google-analytics.com certify.alexametrics.com; img-src 'self' data: certify.alexametrics.com maps.gstatic.com maps.googleapis.com d5nxst8fruw4z.cloudfront.net cdn.awecode.com www.google-analytics.com stats.g.doubleclick.net ssl.gstatic.com csi.gstatic.com www.facebook.com syndication.twitter.com www.gravatar.com pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdn.awecode.com; font-src 'self' data: cdn.awecode.com fonts.gstatic.com; frame-src googleads.g.doubleclick.net www.youtube.com accounts.google.com content.googleapis.com www.facebook.com staticxx.facebook.com platform.twitter.com; manifest-src 'self'; worker-src 'self' fonts.gstatic.com";
    }
    
    # Prevent hidden files (beginning with a period) from being served
    location ~ /\. { access_log off; log_not_found off; deny all; }
}
</pre>

            <h3>Obtain SSL certificate with Certbot</h3>
            <pre><span class="su">apt-get install software-properties-common</span>
<span class="su">add-apt-repository ppa:certbot/certbot</span>
<span class="su">apt-get update</span>
<span class="su">apt-get install python-certbot-nginx</span>
<span class="su">apt-get install python-certbot-nginx</span>
<span class="su">certbot --nginx</span>
</pre>

            <h4>Check configuration and restart nginx</h4>
            <pre><span class="su">nginx -t</span>
<span class="su">systemctl restart nginx</span></pre>


        </div>
    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

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
    document.execCommand('copy');
  }

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
    data() {
      let user_password = generatePassword();
      let db_password = generatePassword();
      return {
        project_dir: 'app',
        user: 'user',
        user_password: user_password,
        db_name: 'db_name',
        db_user: 'db_user',
        db_password: db_password,
        remote: 'awecode.com',
        ssh_port: '22',
        django_project: 'django_project'
      }
    },
    methods: {
      regenerate_user() {
        this.user_password = generatePassword();
      },
      regenerate_db() {
        this.db_password = generatePassword();
      },
      copy_user() {
        copyText(document.getElementsByName('user_password')[0]);
      },
      copy_db() {
        copyText(document.getElementsByName('db_password')[0]);
      },
      // https://jsfiddle.net/ourcodeworld/rce6nn3z/2
      download() {
        const element = document.createElement('a');
        let content = toJSONString(document.getElementById('django-form'));
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', this.django_project + '.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    },
    head: {
      script: [
//        {src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', body: true},
//        {src: 'https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.7.1/gist-embed.min.js', body: true},
      ]
    }
  }
</script>