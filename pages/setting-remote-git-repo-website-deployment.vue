<template>
    <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
        <BlogTitle title="Using git to push websites to server" published="12 Oct 2014"/>

        <div class="content" itemprop="articleBody" v-highlight>

            <div class="block">
                This cheatsheet will push your repo to the <i class="hl">app</i>
                directory inside a user home directory in the remote server.
                <ul>
                    <li>Remote/Server (domain name or IP): <input v-model="remote"></li>
                    <li>User on Server : <input v-model="user"></li>
                    <li>Project Dir : <input v-model="project_dir"></li>
                    <li>SSH Port : <input v-model="ssh_port"></li>
                </ul>
            </div>

            <h3>SSH into the server</h3>

            <pre class="language-bash command-line" data-prompt="$" data-output="9,11-14,16">
<code>cd
mkdir repo.git {{project_dir}}
cd repo.git
git init --bare
git --bare update-server-info
git config core.bare false
git config receive.denycurrentbranch ignore
git config core.worktree /home/{{user}}/{{project_dir}}/

cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/sh
git checkout -f
EOF

chmod +x hooks/post-receive

exit</code></pre>

            <h3>On the client</h3>

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