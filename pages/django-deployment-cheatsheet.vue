<template>
    <div>
        <BlogTitle title="Simple Django Deployment Cheat-sheet" published="23 Nov 2014"/>

        <div class="content" itemprop="articleBody">

            <div class="block">
                <ul>
                    <div class="right btn small" @click="download">Download form data</div>
                    <li>Remote/Server (domain name or IP): <input v-model="remote"></li>
                    <li>User on Server : <input v-model="user"></li>
                    <li>User Password : <input v-model="user_password">
                        <a class="l1 small" href="#" @click="regenerate_user">Regenerate</a>
                    </li>
                    <li>SSH Port : <input v-model="ssh_port"></li>
                    <li>Django Project Name : <input v-model="django_project"></li>
                    <li>Database Name : <input v-model="db_name"></li>
                    <li>Database User : <input v-model="db_user"></li>
                    <li>Database Password : <input v-model="db_password">
                        <a class="l1 small" href="#" @click="regenerate_db">Regenerate</a>
                    </li>
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
<span class="prefix">echo "GRANT ALL PRIVILEGES ON DATABASE "{{db_name}}" to {{db_user}};" | psql</span>
<span class="su">su - postgres</span></pre>


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
[watcher:{{user}}]
cmd=chaussette --fd $(circus.sockets.esx) {{django_project}}.wsgi.application
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
send_hup = True
working_dir = /home/{{user}}/app/

[socket:{{user}}]
host=127.0.0.1
port=9999

[env:{{user}}]
PYTHONPATH=/home/{{user}}/app/
</pre>

        </div>
    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  // https://stackoverflow.com/questions/1497481/javascript-password-generator/1497512#1497512
  function generatePassword() {
    var length = 15,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
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
      download() {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('haha'));
        element.setAttribute('download', 'a.txt');

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