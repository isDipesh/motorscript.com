<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Sitemap for SMF with Pretty URLs"
      published="17 Apr 2012"
      updated="13 Jan 2013"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        This is a PHP script that generates a sitemap file from an SMF
        installation with PrettyURLs mod, which is a must-have SEO package. The
        generated XML can be submitted to Google via Google Webmaster Tools.
      </p>
      <p>
        The script is very much the
        <a
          href="https://code.google.com/archive/p/smf-pretty-sitemap/"
          title="http://code.google.com/p/smf-pretty-sitemap"
          target="_blank"
          >http://code.google.com/p/smf-pretty-sitemap</a
        >
        itself. It has been modified to work with the latest version of SMF and
        PrettyURLs. The raw modifications can be seen in this commit
        <a
          href="http://web.archive.org/web/20150324105427/https://github.com/xtranophilist/sitemap-for-smf/commit/d9501e85b4704860f24b58acf1dabefbb1bc7e46"
          title="https://github.com/xtranophilist/sitemap-for-smf/commit/d9501e85b4704860f24b58acf1dabefbb1bc7e46"
          target="_blank"
          >https://github.com/xtranophilist/sitemap-for-smf/commit/d9501e85b4704860f24b58acf1dabefbb1bc7e46</a
        >
      </p>
      <p>
        Native mysql_query is used instead of SMF's <code>db_query</code> (or the latest
        <code>$smcFunc['db_query']</code>). The database field names have been corrected to
        match the latest version of SMF. Support for search-engine friendly URLs
        for member profiles (e.g. <code>http://mysite.com/profile/username</code>) has been
        added. Users may switch to not-pretty URLs (e.g. <code>http://mysite.com/index.php?action=profile;u=2</code> ) by modifying the boolean
        value <code>$sef_member_profile</code> to <code>FALSE</code> at the start of the script. Also, the
        retrieval of pretty URLs for topics had to be corrected by adding the <code>get_pretty_url_by_topic_id()</code> method.
      </p>
      <p>
        Tested against one live forum and it works fine, zero errors or warnings
        from Google Webmaster Tools.
      </p>
      <p>
        Gist on Github:<br />
        <a
          href="http://web.archive.org/web/20150324105427/https://gist.github.com/4683396"
          title="https://gist.github.com/4683396"
          target="_blank"
          >https://gist.github.com/4683396</a
        >
      </p>
      <p>
        Raw PHP File :<br />
        <a
          href="http://web.archive.org/web/20150324105427/https://raw.github.com/gist/4683396"
          title="https://raw.github.com/gist/4683396"
          target="_blank"
          >https://raw.github.com/gist/4683396</a
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