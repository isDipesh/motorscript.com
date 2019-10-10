<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="IMDB to GetGlue Bookmarklets"
      published="28 Jan 2013"
      updated="19 Dev 2013"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        You can use these bookmarklets to open GetGlue page of a movie or TV
        show from its IMDB page. I created these because I thought it would be a
        huge timesaver and searching in GetGlue isn’t pleasant at all.
      </p>
      <p>
        For GetGlue old version users,<br />
        <a
          href="javascript:(function(){var%20jsCode=document.createElement('script');jsCode.setAttribute('src','https://raw.github.com/gist/4636655/imdb-o.getglue.js');document.body.appendChild(jsCode)}());"
          title="IMDB to o.getglue.com"
          >I2OGG</a
        >
      </p>
      <p>
        For ‘new GetGlue’ users,<br />
        <a
          href="javascript:(function(){var%20jsCode=document.createElement('script');jsCode.setAttribute('src','https://raw.github.com/gist/4636655/imdb-getglue.js');document.body.appendChild(jsCode)}());"
          title="IMDB to getglue.com"
          >I2GG</a
        >
      </p>
      <p>
        Installation Instructions:<br />
        Drag your preferred link to your bookmark toolbar.
      </p>
      <p>
        The script tries to guess the URL for GetGlue from movie/tv-show title
        and director’s name from IMDb’s page. It may not work for all pages as
        GetGlue’s URL creation may not be consistent (The only inconsistent one
        I found was for
        <a
          href="https://www.imdb.com/title/tt0068646/"
          title="The Godfather"
          target="_blank"
          >The Godfather</a
        >).
      </p>
      <p>If you have any suggestions, feel free to comment.</p>
      <p>
        The source code is available from this
        <a href="https://gist.github.com/4636655" title="gist" target="_blank"
          >gist</a
        >.
      </p>
      <p>
        Another goodie for o.getglue.com user:
        <a
          href="https://mycroftproject.com/search-engines.html?name=o.getglue.com"
          title="Browser Search Plugin"
          target="_blank"
          >Browser Search Plugin</a
        >
        (Use the last one)
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