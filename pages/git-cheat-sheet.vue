<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="git Cheat-sheet"
      published="30 May 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        <strong><span>BASICS</span></strong>
      </p>
      <p>
        First time set-up:
        <pre class="language-bash command-line"><code class="prefix">git config --global user.name "Dipesh Acharya"</code></pre>
        <pre class="language-bash command-line"><code class="prefix">git config --global user.email x@gmail.com</code></pre>
        <pre class="language-bash command-line"><code class="prefix">ssh-keygen</code></pre>
        
      </p>
      <p>
        Push a branch
        <pre class="language-bash command-line"><code class="prefix">git push -u origin master</code></pre>
        <code>-u</code> to set automatic tracking
      </p>
      <p>
        Pulling a new branch from a remote repository
        <pre class="language-bash command-line"><code class="prefix">git fetch origin [remote-branch]:[new-local-branch]</code></pre>
      </p>
      <p>See all changes <pre class="language-bash command-line"><code class="prefix">git log --oneline</code></pre></p>
      <hr />
      <p>
        <strong
          ><span>BRANCHING</span>/<span>MERGING</span
          ></strong
        >
      </p>
      <p>Create new branch <pre class="language-bash command-line"><code class="prefix">git branch [new-branch-name]</code></pre></p>
      <p>View branches <pre class="language-bash command-line"><code class="prefix">git branch</code></pre></p>
      <p>Switch to a branch <pre class="language-bash command-line"><code class="prefix">git checkout [branch-name]</code></pre></p>
      <p>
        Merging from another branch <pre class="language-bash command-line"><code class="prefix">git merge [another-branch-name]</code></pre>
      </p>
      <p>
        Merging from another branch creating a commit object for the merge and
        preventing fast-fowarding
        <pre class="language-bash command-line"><code class="prefix">git merge --no-ff [another-branch-name]</code></pre>
      </p>
      <p>Delete a branch <pre class="language-bash command-line"><code class="prefix">git branch -d [branch-name]</code></pre></p>
      <hr />
      <p>
        <strong
          ><span>UNDO</span>/<span>REDO</span
          >:</strong
        >
      </p>
      <p>Undo everything since last commit <pre class="language-bash command-line"><code class="prefix">git reset --hard</code></pre></p>
      <p>
        Undo all changes on [file] since last commit
        <pre class="language-bash command-line"><code class="prefix">git checkout [file]</code></pre>
      </p>
      <p>Edit last commit message <pre class="language-bash command-line"><code class="prefix">git commit --amend</code></pre></p>
      <p>
        Restoring a deleted file from Git Repo:
        <pre class="language-bash command-line"><code class="prefix">git rev-list -n 1 HEAD -- [file_path]</code></pre>
        <pre class="language-bash command-line"><code class="prefix">git checkout [deleting_commit-id]^ -- [file_path]</code></pre>
      </p>
      <p>
        Ignore file permission/mode changes:
        <pre class="language-bash command-line"><code class="prefix">git config core.filemode false</code></pre>
      </p>
      <p>
        Roll back to an older commit
        <pre class="language-bash command-line"><code class="prefix">git reset --hard &lt;tag/branch/commit id&gt;</code></pre>
      </p>
      <hr />
      <p>
        <strong><span>TAGS</span></strong>
      </p>
      <p>
        Tagging commits
        <pre class="language-bash command-line"><code class="prefix">git tag v1.9b</code></pre>
        Tags can be used to refer to commits instead of commit id.
      </p>
      <p>
        Tagging commits with message
        <pre class="language-bash command-line"><code class="prefix">git tag -a v1.4 -m 'message here'</code></pre>
      </p>
      <p>Pushing tags <pre class="language-bash command-line"><code class="prefix">git push --tags</code></pre></p>
      <hr />
      <p>
        <strong><span>HACKS</span></strong>
      </p>
      <p>
        Creating git alias
        <pre class="language-bash command-line"><code class="prefix">git config --global alias.ci 'commit -v'</code></pre>
        <pre class="language-bash command-line"><code class="prefix">git ci</code></pre>
      </p>
      <p>
        Find out which branch contains a change
        <pre class="language-bash command-line"><code class="prefix">git branch --contains [commit-id]</code></pre>
      </p>
      <p>
        Configure git to rebase automatically after pulls
        <pre class="language-bash command-line"><code class="prefix">git config branch.autosetuprebase always</code></pre>
      </p>
      <p>
        Ignoring change in a file without deleting it from repo
        <pre class="language-bash command-line"><code class="prefix">git update-index --assume-unchanged &lt;file&gt;</code></pre>
      </p>
      <hr />
      <p><strong>Useful Links:</strong></p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/http://madebynathan.com/2011/10/18/git-shortcuts-like-youve-never-seen-before/"
          title="Git shortcuts like you've never seen before"
          >Git shortcuts like you’ve never seen before:</a
        >
      </p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/https://gist.github.com/2775965"
          title="My bash aliases"
          >My bash aliases</a
        >
      </p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/http://defunkt.io/hub/"
          title="Hub teaches git about GitHub"
          >Hub teaches git about GitHub</a
        >
      </p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/http://help.github.com/git-cheat-sheets/"
          >Git cheat sheets by Github</a
        >
      </p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/http://markosullivan.ca/how-to-handle-a-pull-request-from-github/"
          title="How to Handle a Pull Request from GitHub"
          >How to Handle a Pull Request from GitHub</a
        >
      </p>
      <p>
        <a
          href="http://web.archive.org/web/20170614214420/http://nvie.com/posts/a-successful-git-branching-model/"
          title="A successful Git branching model"
          >A successful Git branching model</a
        >
      </p>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
};
</script>