<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Vbulletin to SMF 301 Permanent URL Redirects"
      published="14 Apr 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        Switching to SMF from vbulletin is easy. The
        database converters are easily available. The only tricky part is to
        keep the old links alive, which isn’t difficult either with a little
        regex knowledge and Apache mod_rewrite power.
      </p>
      <p>
        Since this is a permanent switch, 301 redirects are used to send
        acknowldgements to web spiders. The old vbulletin installation used
        SEO friendly URLs and the new
        SMF has PrettyURLs Mod, which i think despite
        of no SMF experience at all is a must.
      </p>
      <p>
        The following is the content from .htaccess file which should reside at
        the root directory of your forum.
      </p>
      <p><strong>.htacess</strong></p>
      <pre class="language-nginx"><code>RewriteEngine on
RewriteBase /

#Redirect www.mysite.com to mysite.com
RewriteCond %{HTTP_HOST} ^www.mysite.com$ [NC]
RewriteRule ^(.*)$ http://mysite.com/$1 [R=301]

# VB to SMF Redirects

RewriteRule ^forum.php index.php [R=301]
#Rewrite threads, thread id is captured
RewriteRule ^threads/([0-9]+)-.* index.php?topic=$1 [R=301]
#Rewriting archive to wap2 version of pages
RewriteRule ^archive/index.php/t-([0-9]+).* /forums/index.php?topic=$1&amp;wap2 [R=301]

#Rule for direct post permalink, thread id and post id are captured, doesn't seem to work with me
#RewriteRule ^threads/([0-9]+)-.*?p=([0-9]+) index.php?topic=$1.msg$2[R=301,L]

#The following rewrites work only with PrettyURL mod

#Rewriting member profile links
RewriteRule ^members/([0-9]+)-(.*) profile/$2 [R=301]
RewriteRule ^members mlist/ [R=301]
RewriteRule ^members/ mlist/ [R=301]
RewriteRule ^search.php search/ [R=301,QSA]

RewriteRule ^faq.php /forums/help/ [R=301]
RewriteRule ^tags.php /forums/index.php [R=301]

RewriteRule ^sendmessage.php /contact-us [R=301]

#The following requires the activation of RewriteMap http://stackoverflow.com/questions/703709/rewritemap-activation
RewriteMap tolower int:tolower
#Rewrite http://mysite.com/99-Forumname to http://mysite.com/forumname
RewriteRule ^([0-9]+)-(.+) /${tolower:$2} [R=301,L]
#RewriteRule ^forums/([0-9]+)-.* index.php?board=$1 [R=301]
</code></pre>
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