<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="awegen - Code generator for Yii"
      published="10 Jul 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        awegen is an intelligent code generator for Yii framework with optional
        Twitter Bootstrap support.
      </p>
      <p>awegen borrows goodies from giix and gtc.</p>
      <p>
        <strong>[Note: This extension isn’t maintained any more.]</strong>
      </p>
      <h2>What awegen does?</h2>
      <ol>
        <li>Generates textarea for <code>text</code> db type.</li>
        <li>
          Genearates textarea with markitup editor for <code>longtext</code> db
          type. (Uses
          <a href="http://yiiext.github.com/extensions/markitup-widget/"
            >markitup widget</a
          >.)
        </li>
        <li>Generates checkbox for <code>boolean</code> db types.</li>
        <li>
          Uses JToggleColumn for <code>boolean</code> types in Admin/CGridView.
          (Uses
          <a href="https://www.yiiframework.com/extension/jtogglecolumn/"
            >JToggleColumn extension</a
          >.)
        </li>
        <li>Generates fields with Datepicker for <code>date</code> db type.</li>
        <li>
          Generates fields with Datetimepicker for <code>time</code>,
          <code>datetime</code> and <code>timestamp</code> db type. (Uses
          <a href="http://www.yiiframework.com/extension/datetimepicker/"
            >datetimepicker widget</a
          >.)
        </li>
        <li>
          Allows easy addition of access control templates in the generator. (
          Users can add templates into
          <code>AweCrud/templates/default/auth</code> folder and they will be
          listed in the CRUD generator.)
        </li>
        <li>
          Guesses e-mail fields by field names and adds e-mail validation for
          forms and mailto links for views.
        </li>
        <li>
          Guesses image fields by field names and tries to display the image in
          views.
        </li>
        <li>
          Guesses url fields by field names and adds url validation for forms
          and creates links for views.
        </li>
        <li>
          Guesses password fields by field names, generates password fields for
          them in forms and hides them from non-admin users in views.
        </li>
        <li>
          Guesses createtime and updatetime fields and adds proper timestamp
          behaviour to them.
        </li>
        <li>
          Uses
          <a
            href="http://yiiext.github.com/extensions/activerecord-relation-behavior/index.html"
            >Activerecord-relation-behavior</a
          >
          to handle all kinds of relations.
        </li>
        <li>
          Creates pulldown menu for one-to-many and one-to-one relations.
        </li>
        <li>Creates checkboxes for fields with many-to-many relations.</li>
        <li>
          Keeps generated code in abstract base model so that regeneration
          doesn’t overwrite user changes.
        </li>
        <li>
          Guesses identification column for models and uses them in headings and
          breadcrumbs. (Looks for following fields in order of priority – name,
          title, slug, any field with name in its name, first non-numeric field,
          primary key.)
        </li>
        <li>
          Handles parent-child relationship of items among same model. (Allows
          an item to be parent/child of any other items from the same table but
          not itself.)
        </li>
      </ol>
      <h2>Installation</h2>
      <p>
        Download from
        <a
          rel="noopener noreferrer nofollow"
          href="https://github.com/xtranophilist/awegen/zipball/master"
          >https://github.com/xtranophilist/awegen/zipball/master</a
        >.
      </p>
      <p>
        Extract the awegen folder from the archive to extensions directory of
        your application.
      </p>
      <p>
        Add the path of awegen to generatorPaths section in gii module
        configuration in <code>config/main.php</code>:
      </p>
      <pre class="language-bash"><code>'modules' =&gt; array(
    'gii' =&gt; array(
        'class' =&gt; 'system.gii.GiiModule',
        'password' =&gt; 'password',
        'generatorPaths' =&gt; array(
            'ext.awegen',
        ),
    ),
    ...
),
</code></pre>
      <p>Add the components required to your imports section:</p>
      <pre class="language-bash"><code>'import' =&gt; array(
    ...
    'application.extensions.awegen.components.*',
),
</code></pre>
      <h2>Usage</h2>
      <p>
        Browse to <code>/gii</code>, login and select AweModel Generator to
        create Model and then AweCrud to generate Controller and Views.
      </p>
      <p>
        Use <code>*</code> for table name in Model generator to preview all
        models. Generate all or selectively.
      </p>
      <h2>Resources</h2>
      <p>
        <a
          rel="noopener noreferrer nofollow"
          href="https://github.com/xtranophilist/awegen"
          >Repo on Github.</a
        ><br />
        <a
          rel="noopener noreferrer nofollow"
          href="http://www.yiiframework.com/extension/awegen/"
          >Extension on official Yii site.</a
        >
      </p>
      <p>
        Credits to
        <a
          rel="noopener noreferrer nofollow"
          href="https://twitter.com/bunkdeath"
          >@bunkdeath</a
        >
        for helping me with this.
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