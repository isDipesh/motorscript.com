<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Last.fm widget for websites"
      published="25 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This widget shows last played tracks from last.fm for a user. It also
        shows ‘Now Playing’ track if available.
      </p>
      <p>
        <strong>Download:</strong>
        <a
          href="https://github.com/xtranophilist/lastfm-widget/zipball/master"
          title="https://github.com/xtranophilist/lastfm-widget/zipball/master"
          >https://github.com/xtranophilist/lastfm-widget/zipball/master</a
        >
      </p>
      <p>Integration:</p>
      <p>
        <strong>Insert</strong>:
        <code>&lt;table id="last_fm_tracks"&gt;&lt;/table&gt;</code> where you
        want the script to write the track lists.
      </p>
      <p><strong>Add</strong>:</p>
      <pre class="language-html"><code>&lt;script type="text/javascript" src="last_widget.js"&gt;&lt;/script&gt;  
&lt;script type="text/javascript"&gt;  
loadLastFMTracks('xtranophilist');  
&lt;/script&gt;</code></pre>
      <p>
        just before the end of the body tag <code>&lt;/body&gt;</code> Don’t
        forget to replace <code>xtranophilist</code> with your username. If you
        are using ID for the
        <code>&lt;table&gt;</code> other than <code>last_fm_tracks</code>, make
        sure you pass the ID string as the second
        parameter for the <code>loadLastFMTracks()</code> method.
      </p>
      <p>
        <strong>To Dos:</strong> -
        <ul>
        <li>Use <code>&lt;div&gt;</code>instead of <code>&lt;table&gt;</code></li>
        <li>Better styling</li>
        <li>Find a way to get the feed direct from Last.fm (w/o using Yahoo Pipe as Proxy for JSON</li>
        </ul>
      </p>
      <p>
        Fork this from Github :
        <a
          href="https://github.com/xtranophilist/lastfm-widget"
          title="https://github.com/xtranophilist/lastfm-widget"
          >https://github.com/xtranophilist/lastfm-widget</a
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