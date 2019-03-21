<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="yii-comments : Comments Module for Yii"
      published="10 Jul 2012"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        yii-comments is a module for Yii Framework which allows you to make any
        instance of CActiveRecord commentable. This is a modification of the
        comments module available from
        <a href="https://www.yiiframework.com/extension/comments-module/"
          >https://www.yiiframework.com/extension/comments-module/</a
        >
        It is supposed that you have user module installed.
      </p>
      <p><strong>[Note: This extension isn’t maintained any more.]</strong></p>
      <h2>Changes:</h2>
      <ul>
        <li>Added Gravatar Support</li>
        <li>Better Comment Management</li>
        <li>Admin interface for editing comments</li>
        <li>Admin interface for comments settings</li>
        <li>Anchor for each comments (e.g. http://example.com/page/1#comment-12)</li>
        <li>Better User Interaction</li>
        and others.
      </ul>
      <h2>Installation</h2>
      <h3>Via Git:</h3>
      <p>From inside the modules directory in your application:</p>
      <pre class="language-bash"><code class="prefix">git clone https://github.com/awecode/comments.git
</code></pre>
      <p>
        OR Download :
        <a href="https://github.com/awecode/comments/zipball/master"
          >https://github.com/awecode/comments/zipball/master</a
        ><br />
        Extract the contents and move to <code>comments</code> folder inside
        modules.
      </p>
      <p>
        Execute the following SQL queries to create
        table and insert default comment settings.
      </p>
      <pre class="language-sql"><code>CREATE TABLE IF NOT EXISTS `comment` (
`id` int(12) NOT NULL AUTO_INCREMENT,
`owner_id` int(11) NOT NULL,
`owner_name` varchar(50) NOT NULL,
`count` int(11) NOT NULL,
`parent_id` int(12) DEFAULT NULL,
`creator_id` int(12) DEFAULT NULL,
`user_name` varchar(128) DEFAULT NULL,
`user_email` varchar(128) DEFAULT NULL,
`comment_text` text,
`create_time` int(11) DEFAULT NULL,
`update_time` int(11) DEFAULT NULL,
`status` int(1) NOT NULL DEFAULT '0',
`link` text,
PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `comment_setting` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`model` varchar(50) NOT NULL,
`registeredOnly` tinyint(1) NOT NULL DEFAULT '0',
`useCaptcha` tinyint(1) NOT NULL DEFAULT '0',
`allowSubcommenting` tinyint(1) NOT NULL DEFAULT '1',
`premoderate` tinyint(1) NOT NULL DEFAULT '0',
`isSuperuser` text,
`orderComments` enum('ASC','DESC') NOT NULL DEFAULT 'ASC',
`useGravatar` tinyint(1) NOT NULL DEFAULT '1',
PRIMARY KEY (`id`)
);

INSERT INTO `comment_setting` (`id`, `model`, `registeredOnly`, `useCaptcha`, `allowSubcommenting`, `premoderate`, `isSuperuser`, `orderComments`, `useGravatar`) VALUES
(1, 'default', 0, 0, 1, 1, 'Yii::app()-&gt;getModule("user")-&gt;isAdmin()', 'ASC', 1);
</code></pre>
      <p>Edit <code>config/main.php</code>:</p>
      <pre class="language-php"><code>'import' =&gt; array(
        'application.modules.comments.widgets.*',
        'application.modules.comments.components.*',
        'application.modules.comments.models.*',
        ...
    ),
'modules' =&gt; array(
        ...
        'comments' =&gt; array(
            'userConfig' =&gt; array(
                'class' =&gt; 'User',
                'nameProperty' =&gt; 'username',
                'emailProperty' =&gt; 'email',
            ),
        ),
),
</code></pre>
      <h2>Usage:</h2>
      <p>
        Add
        <code>$this-&gt;widget('Comments', array('model' =&gt; $model));</code>
        to the view of any model to make it commentable.
      </p>
      <p>
        Go to the URL <code>/comments</code> to manage
        comments and to play with the settings.
      </p>
      <h2>Downloads</h2>
      <p>
        <pre class="language-bash"><code>git clone https://github.com/awecode/comments.git</code></pre>
        or download
        <a
          href="https://github.com/awecode/comments/zipball/master"
          title="https://github.com/awecode/comments/zipball/master"
          >from here.</a
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