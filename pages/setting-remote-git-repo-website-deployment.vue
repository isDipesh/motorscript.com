<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Using git to push websites to server" published="12 Oct 2014"/>

        <div class="content" itemprop="articleBody">

            <div class="block">
                This cheatsheet will push your repo to the <i class="hl">app</i>
                directory inside a user home directory in the remote server.
                <ul>
                    <li>Remote/Server (domain name or IP): <input v-model="remote"></li>
                    <li>User on Server : <input v-model="user"></li>
                    <li>SSH Port : <input v-model="ssh_port"></li>
                </ul>
            </div>

            <h3><span class="caps">SSH</span> into the server</h3>

            <pre class="language-bash">
<code class="prefix">cd</code>
<code class="prefix">mkdir repo.git {{project_dir}} conf logs media static</code>
<code class="prefix">cd repo.git</code>
<code class="prefix">git init --bare</code>
<code class="prefix">git --bare update-server-info</code>
<code class="prefix">git config core.bare false</code>
<code class="prefix">git config receive.denycurrentbranch ignore</code>
<code class="prefix">git config core.worktree /home/{{user}}/{{project_dir}}/</code>

<code class="prefix">cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/sh
git checkout -f
EOF</code>

<code class="prefix">chmod +x hooks/post-receive</code>

<code class="prefix">exit</code>
</pre>

            <h3>On the client</h3>

            <pre class="language-bash">
<code class="prefix" v-if="ssh_port=='22'">git remote add server {{user}}@{{remote}}:/home/{{user}}/repo.git/</code><code class="prefix" v-else>git remote add server ssh://{{user}}@{{remote}}:{{ssh_port}}/home/{{user}}/repo.git/</code>
<code class="prefix" v-if="ssh_port=='22'">ssh-copy-id {{user}}@{{remote}}</code><code class="prefix" v-else>ssh-copy-id {{user}}@{{remote}} -p {{ssh_port}}</code>
<code class="prefix">git push server --all</code>
</pre>
            
            <p>
                You may want to modify your <i class="hl">git post-receive</i> hook to run custom commands on the server, like running database migrations, notifying services of new deployments, pushing static files to CDN, etc. 
            </p>

        </div>

    </article>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
    data() {
      return {
        project_dir: 'app',
        user: 'user',
        remote: 'awecode.com',
        ssh_port: '22'
      }
    }
  }
</script>