<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle title="Open edX Setup Cheatsheet" published="04 Apr 2020" />

    <div class="content" itemprop="articleBody" v-highlight>
      <h2>Installation</h2>
      Guide for Ubuntu 16.04 (x64) : 
      <a href="https://openedx.atlassian.net/wiki/spaces/OpenOPS/pages/146440579/Native+Open+edX+platform+Ubuntu+16.04+64+bit+Installation">
      https://openedx.atlassian.net/wiki/spaces/OpenOPS/pages/146440579/Native+Open+edX+platform+Ubuntu+16.04+64+bit+Installation
      </a>

      <h2>User Management</h2>
      <p>
      Creating a user or upgrading an existing user to superuser:
      <pre
        class="language-bash normal"
      ><code class="prefix">sudo su edxapp -s /bin/bash</code>
<code class="prefix">cd</code>
<code class="prefix">/edx/bin/python.edxapp /edx/bin/manage.edxapp lms manage_user username user@domain.com --staff --superuser --settings=production</code></pre>
      </p>

      <p>
      Updating user password
      <pre
        class="language-bash normal"
      ><code class="prefix">cd /edx/app/edxapp/edx-platform</code>
<code class="prefix">sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings production changepassword username</code></pre>
      </p>


        <p>
        Reference:
      <a
        href="https://openedx.atlassian.net/wiki/spaces/OpenOPS/pages/60227913/Managing+OpenEdX+Tips+and+Tricks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Managing OpenEdX Tips and Tricks</a
      >
    </p>

    <h3>Services</h3>
    <p>See running services
        <pre
        class="language-bash normal"
      ><code class="prefix">sudo /edx/bin/supervisorctl status</code></pre>
    </p>

    <h3>Setting Up</h3>
    <ul>
        <li>Create an instance of Ubuntu 16.04 9x64)</li>
        <li>Setup Server</li>
        <li>Create superuser</li>
        <li>Access Admin</li>
        <li>Update Site</li>
        <li>Update Site Configuration -
          <a href="https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/configuration/sites/configure_site.html" target="_blank" rel="noreferrer noopener">
          https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/configuration/sites/configure_site.html</a></li>
    </ul>


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
