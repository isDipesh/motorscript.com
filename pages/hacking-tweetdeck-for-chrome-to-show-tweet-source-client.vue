<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Hacking TweetDeck for Chrome to show tweet source/client"
      published="23 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        TweetDeck extension for Chrome doesn’t show the client or source
        application for each tweet.<br />
        Here’s a little dirty hack to add this feature on TweetDeck
        for Chrome.
      </p>
      <p>
        Go to Chrome/Chromium User Data Directory<br />
        Refer here to find your Data Directory:<br />
        <a
          href="https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"
          title="https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"
          >https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md</a
        ><br />
        e.g. mine is <code>~/.config/google-chrome/Default</code>
      </p>
      <p>
        Change directory to <code>Extensions/[tweetdeck-extension-id]/</code><br />
        <code>[tweetdeck-extension-id]</code> can be known from Chrome/Chromium
        -&gt; Tools -&gt; Extensions -&gt; TweetDeck -&gt;
        ID
      </p>
      <p>
        Change directory to the only folder inside the current folder which is
        named after the current version of the extension, <code>0.9.7.12_0</code>
        at the time this is being written.
      </p>
      <p>
        We are editing the files- <em>default.js</em> inside
        <em>scripts</em> folder and <em>status_twitter.ejs</em> file inside
        <em>EJSTemplates/status/</em> folder. Open them on your favorite
        text editor.
      </p>
      <p>
        In the <em>default.js</em> file:<br />
        Find:<br />
        <code>this.isFavorite=a.favorited;</code><br />
        Add after it:<br />
        <code>this.source=a.source;</code>
      </p>
      <p>
        In the same file,<br />
        Find:
        <pre class="language-javascript"><code>return a.decklyID?a.decklyURL:"http://twitter.com/"+a.user.screenName+"/status/"+a.id};</code></pre>
        Add after it:<pre class="language-javascript"><code>TD.services.TwitterStatus.prototype.getChirpSource=function(){
  var p=this.getMainTweet().source.replace('nofollow','url').split('&gt;');
  if (p.length==1) return p;
  var c=p[1].split('&lt;')[0];
  return p[0]+'title="'+c+'"&gt;'+c.split(' ')[0]+'&lt;/a&gt;';
};</code></pre>
        Save and close <em>default.js</em>
      </p>
      <p>In the <em>status_twitter.ejs</em> file:<br /> Find:</p>
      <pre class="language-javascript"><code>&lt;/time&gt; &lt;/a&gt;</code></pre>
      <p>Add after it:</p>
      <pre class="language-javascript"><code>via &lt;%= tweet.getChirpSource() %&gt;</code></pre>
      <p>Save and close <em>status_twitter.ejs</em></p>
      <p>
        Open or refresh TweetDeck on Chrome. The hack should be
        now visible.
      </p>
      <p>Thank you.</p>
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