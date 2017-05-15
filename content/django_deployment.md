Title: My Django Deployment Cheat-sheet
Date: 2014-10-23 04:12:10

<h1>Setting up the environment</h1>

<h2>Installing Tools and Python</h2>

<pre>
<span class="prefix-su">yum install -y vim git links</span>
</pre>
<a href="https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-local-programming-environment-on-centos-7" target="_blank">Installing Python3 in CentOS/EPEL</a>

Install pip3  

     yum install -y python3.6-pip

<h2>Installation and Initialization of Postgres</h2>

<a href="https://tecadmin.net/install-postgresql-9-on-centos/">Installing Postgresql
    9.6</a>

<h3>Creating DB user</h3>

<pre>
<span class="prefix-su">su postgres # switch as system postgres user</span>
<span class="prefix">cd</span>
<span class="prefix">createdb db_name # create db named 'db_name'</span>
<span class="prefix">psql db_name # launch sql console for 'db_name' db</span>
<span class="prefix-shell">CREATE ROLE user_name WITH SUPERUSER LOGIN PASSWORD 'password';</span>
<span class="prefix-shell">\q</span>
<span class="prefix">exit</span>
</pre>

<h2>Nginx</h2>

<pre>
<span class="prefix-su">yum install -y nginx</span>
<span class="prefix-su">systemctl enable nginx</span>
<span class="prefix-su">systemctl start nginx</span>
</pre>


<h2>Supervisord</h2>

Install pip (supervisord requires python2 not python3)
<pre>
<span class="prefix-su">yum install -y python-pip</span>
</pre>


Install supervisor<br/>
<code class="prefix-su">pip install supervisor</code>

Create a sample config file with<br/>
mkdir -p /etc/supervisord/conf.d/
<code class="prefix-su">echo_supervisord_conf &gt; /etc/supervisord/supervisord.conf</code>
<pre><code class="prefix-su">
cat &gt;&gt; /etc/supervisord/supervisord.conf &lt;&lt;EOF
[inet_http_server]
port=127.0.0.1:9001
[include]
files = /etc/supervisord/conf.d/*.conf
EOF
</code></pre>


Download and save supervisord init script:<br/>
<code class="prefix-su">wget https://gist.githubusercontent.com/mozillazg/6cbdcccbf46fe96a4edd/raw/2f5c6f5e88fc43e27b974f8a4c19088fc22b1bd5/supervisord.service -O /usr/lib/systemd/system/supervisord.service</code>



Start and enable supervisord service<br/>
<code class="prefix-su">systemctl enable supervisord</code>
<code class="prefix-su">systemctl start supervisord</code>


<hr/>

<h1>The Application</h1>

http://motorscript.com/setting-remote-git-repo-website-deployment/

<h2>The Application Environment</h2>

<pre>
<span class="prefix">cd #goto user home directory</span>
<span class="prefix">virtualenv env -p python3.6 #Creates new virtual environment</span>
<span class="prefix">source env/bin/activate #Enter the virtual environment</span>
</pre>

<h2>Installing Application and its Dependencies</h2>

<pre>
<span class="prefix">cd #goto user home directory</span>
<span class="prefix">source env/bin/activate # Enter the virtual environment</span>
<span class="prefix">git clone git@github.com:username/reponame.git app # git clone the repo</span>
<span class="prefix">cd app # cd to project dir</span>
<span class="prefix">pip install -r requirements/production.txt # install required Python packages</span>
<span class="prefix">python manage.py migrate # run migrations</span>
<span class="prefix">python manage.py collectstatic</span>
</pre>

You might want to add the last three commands in your post receive hook.

<h3>Configuring and Testing Application</h3>

<pre>
<span class="prefix">./manage.py runserver # Test application</span>
<span class="prefix">links http://127.0.0.1:8000 # Test run from browser</span>
</pre>

<h2>Gunicorn</h2>

If gunicorn isn't already installed inside the virtual environment:<br/>
<code class="prefix">pip install gunicorn</code>

Create gunicorn config file
<code class="prefix">vi /home/user/conf/gunicorn.conf.py</code>

<pre><code>import multiprocessing

bind = "unix:/home/user/conf/gunicorn.sock"
workers = 3
errorlog = '/home/user/logs/gunicorn.error.log'
#accesslog = '/home/user/logs/gunicorn.access.log'
#loglevel = 'debug'
proc_name = 'gunicorn_appname'
</code></pre>

From the app directory, you may test if it runs successfully with:<br/>
<code class="prefix">gunicorn app_name.wsgi:application -c /home/user/conf/gunicorn.conf.py</code>
    
    <h2>Supervisord</h2>

<code class="prefix">vi /home/user/conf/supervisord.conf</code>

<pre><code>[program:app_name]
command = /home/user/env/bin/gunicorn app_name.wsgi:application -c /home/user/conf/gunicorn.conf.py
directory = /home/user/app/
user = user
environment=PATH= /home/user/env/bin
</code></pre>

Soft link to supervisord conf dir:
<code class="prefix-su">ln -s /home/user/conf/supervisord.conf /etc/supervisord/conf.d/app_name.conf</code>

Allow users to control the process with sudo
<code class="prefix-su">visudo</code><br/>
and Append

<pre><code>user ALL = (root) NOPASSWD:/usr/bin/supervisorctl start app_name
user ALL = (root) NOPASSWD:/usr/bin/supervisorctl stop app_name
user ALL = (root) NOPASSWD:/usr/bin/supervisorctl restart app_name
user ALL = (root) NOPASSWD:/usr/bin/supervisorctl status app_name
</code></pre>

<code class="prefix-su">supervisorctl reload</code>

Now you can control your program with <code class="prefix-su">supervisorctl</code>

<pre>
<span class="prefix">sudo supervisorctl start appname</span>
<span class="prefix">sudo supervisorctl status appname</span>
<span class="prefix">sudo supervisorctl stop appname</span>
<span class="prefix">sudo supervisorctl restart appname</span>
</pre>

<h2>Nginx</h2>

Nginx Config file:<br/>
<code class="prefix">vi /home/user/conf/nginx.conf</code>

<pre><code>upstream app_name{
    server unix:/home/user/conf/gunicorn.sock;
}

server {
    listen 216.224.179.43:80;
    server_name  www.site.com;
    return       301 http://site.com$request_uri;
}

server {
    listen 216.224.179.43:80;
    server_name site.com;
    access_log /home/user/logs/nginx.access.log;
    error_log /home/user/logs/nginx.error.log;
    index index.html index.htm;

location /robots.txt {
    alias /home/user/static/robots.txt;
}

location /favicon.ico {
    alias /home/user/static/img/favicon.ico;
}

location ~ ^/(media|static)/  {
    root    /home/user;
    expires 30d;
}

location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    if (!-f $request_filename) {
        proxy_pass http://app_name;
        break;
    }
}

# this prevents hidden files (beginning with a period) from being served
location ~ /\. { access_log off; log_not_found off; deny all; }

}
</code></pre>

Soft link the configuration to nginx conf dir:
<code class="prefix-su">ln -s /home/user/conf/nginx.conf /etc/nginx/conf.d/app_name.conf</code>

Restart nginx:<br/>
<code class="prefix-su">service nginx restart</code>
