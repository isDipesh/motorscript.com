<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Menu Management for Yii Framework"
      published="17 Jun 2013"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        This <code>menu</code> module for Yii allows you to create and edit
        themeable menus with nested/sortable items.<br />
        This work is inspired from menu management in WordPress and tries to
        provide a similar interface to drag and drop items for setting its order
        and depth.
      </p>

      <p>
        The module utilizes
        <a
          href="http://web.archive.org/web/20160323105621/http://mjsarfatti.com/sandbox/nestedSortable/">nestedSortable</a>
        jQuery plugin for drag-drop sorting of menu items in backend.<br />
        Free <span>CSS</span> dropdown menu from
        <a
          href="http://web.archive.org/web/20160323105621/http://www.lwis.net/free-css-drop-down-menu/"
          >http://www.lwis.net/free-css-drop-down-menu/</a
        >
        is used for menu styles and themes.
      </p>
      <p>
        The code for menu rendering is borrowed from
        <a
          href="http://web.archive.org/web/20160323105621/http://www.yiiframework.com/extension/emenu"
          >emenu</a
        >
        extension.<br />
        The code for implementing nestedSortable is borrowed from the dead
        project at
        <a
          href="http://web.archive.org/web/20160323105621/http://code.google.com/p/at-menu"
          >http://code.google.com/p/at-menu</a
        >
      </p>
      <h2>Installation</h2>
      <p>
        Download from
        <a href="https://github.com/xtranophilist/yii-menu/zipball/master"
          >https://github.com/xtranophilist/yii-menu/zipball/master</a
        >
      </p>
      <p>
        Extract the contents of the archive to menu folder inside modules.
      </p>
      <p>
        Acknowledge Yii about this module by including it into list of modules
        in <code>config/main.php</code>
      </p>
      <pre class="language-php"><code>        'modules' =&gt; array(
                ...
                'menu',
            ),
</code></pre>
      <p>Add the components and models required to your imports section</p>
      <pre class="language-php"><code>        'import' =&gt; array(
            ...
            'application.modules.menu.models.*',
            'application.modules.menu.components.*',
            ),
</code></pre>
      <p>Add Metadata class to components</p>
      <pre class="language-php"><code>'components'=&gt;array(
...
        'metadata' =&gt; array('class' =&gt; 'Metadata'),
...
),
</code></pre>
      <p>Import <code>menu.sql</code> to install the database schema.</p>
      <h2>Usage</h2>
      <p>
        Browse to /menu to create menu and menu items.<br />
        Click on <code>Get Code</code> link to get code for any menu.<br />
        Insert the code into any layout or view file.
      </p>
      <p>
        Git Repo:
        <a
          href="https://github.com/xtranophilist/yii-menu">https://github.com/xtranophilist/yii-menu</a>
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