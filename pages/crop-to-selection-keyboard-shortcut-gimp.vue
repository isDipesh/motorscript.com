<template>
  <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
    <BlogTitle title="'Crop to Selection' keyboard shortcut for GIMP" published="06 Nov 2014" archived="true"/>
    <div class="content" itemprop="articleBody">

      <h4>For newer GIMP versions:</h4>
      <code>Edit</code> -> <code>Keyboard Shortcuts</code> -> <code>Image</code> -> <code>Crop to Selection</code>

      <h4>For older GIMP versions:</h4>
      <ol>
        <li>
          <p>Enable
            <code>Use dynamic keyboard shortcuts</code> and
            <code>Save keyboard shortcuts on exit</code> from
            <code>Edit</code> ->
            <code>Preferences</code> ->
            <code>Keyboard Shortcuts</code>
          </p>
        </li>
        <li>
          <p>From the
            <code>Image</code> menu, hover over
            <code>Crop to Selection</code> and hit a three key sequence (like
            <code>Ctrl + Alt + C</code>).
          </p>
        </li>
        <li>
          <p>Rejoice!</p>
        </li>
      </ol>
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