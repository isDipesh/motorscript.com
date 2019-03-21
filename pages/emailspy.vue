<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Emailspy" published="21 Aug 2014" archived="true" />
    <div class="content" itemprop="articleBody">
      <p>
        Emailspy finds information from Facebook, Myspace, Yahoo Messenger,
        Google Profiles, Picasa, etc. for all e-mail addresses found in a page
        and displays them on mouse-over.
      </p>
      <p><strong>Version:</strong> v1.0</p>
      <p>
        Displays information about the owner of the e-mail address found in
        pages. Information includes name, photos, age, sex, address, interests,
        zodiac, profile links, etc.
      </p>
      <p>
        The mashup is possible by employing Yahoo Pipes and Dapper and
        AJAX requests.<br />
        The information is displayed in a new pop-up division over e-mail
        addresses in the page.
      </p>
      <p>
        E-mail can be validated with a single click (<span class="caps"
          >SMTP</span
        >
        Validation).<br />
        Hi5 search is to be done manually with a single click because
        information isn’t visible without logging in.
      </p>
      <p>
        For now, the script looks for information in Facebook, MySpace, Google
        Profiles, Google Picasa, Yahoo Messenger, Yahoo Profiles(Pulse) and
        Flickr. Other networks and guessing mechanism will be added on future.
      </p>
      <h2>Browser Requirements</h2>
      <ul>
        <li>
          Requires
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/"
            title="Install Greasemonkey for Firefox!"
            >Greasemonkey</a
          >
          extension for Firefox
        </li>
        <li>
          Requires<a
            href="http://web.archive.org/web/20160323112237/http://8-p.info/greasekit/"
            title="Install Greasekit for Safari!"
            >Greasekit</a
          >
          extension for Safari
        </li>
        <li>Built-in support for Google Chrome and Opera</li>
      </ul>
      <h2>Installing EmailSpy</h2>
      <p>
        <a
          href="http://web.archive.org/web/20160323112237/http://userscripts.org/scripts/source/85358.user.js"
          title="http://userscripts.org/scripts/source/85358.user.js"
          >http://userscripts.org/scripts/source/85358.user.js</a
        >
      </p>
      <p>
        @userscripts :
        <a
          href="http://web.archive.org/web/20160323112237/http://userscripts.org/scripts/show/85358"
          title="EmailSpy at Userscripts.org"
          >http://userscripts.org/scripts/show/85358</a
        ><br />
        @github :
        <a
          href="https://github.com/xtranophilist/emailspy"
          title="EmailSpy at Github"
          >https://github.com/xtranophilist/emailspy</a
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