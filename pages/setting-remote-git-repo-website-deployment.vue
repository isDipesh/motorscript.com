<template>
    <div>
        <BlogTitle title="Using git to push websites to server" published="12 Oct 2014"/>

        <div class="content" itemprop="articleBody">

            <p>
            <h3><span class="caps">SSH</span> into the server</h3>

            <pre>
<span class="prefix">cd</span>
<span class="prefix">mkdir repo.git app conf logs media static</span>
<span class="prefix">cd repo.git</span>
<span class="prefix">git init --bare</span>
<span class="prefix">git --bare update-server-info</span>
<span class="prefix">git config core.bare false</span>
<span class="prefix">git config receive.denycurrentbranch ignore</span>
<span class="prefix">git config core.worktree /home/user/app/</span>

<span class="prefix">cat &gt; hooks/post-receive &lt;&lt;EOF
#!/bin/sh
git checkout -f
EOF</span>

<span class="prefix">chmod +x hooks/post-receive</span>

<span class="prefix">exit</span>
</pre>

            <h3>On the client</h3>

            <pre>
<span class="prefix">git remote add server user@awecode.com:/home/user/repo.git/</span>
<span class="prefix">ssh-copy-id user@awecode.com</span>
<span class="prefix">git push server --all</span>
</pre>

            If the server uses port other than 22, use the following on client to add git remote:
            <pre>
<span class="prefix">git remote add server ssh://user@awecode:port_no/home/user/repo.git/</span>
        </pre>

        </div>

    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>