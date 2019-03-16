<template>
  <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
    <BlogTitle title="'Crop to Selection' keyboard shortcut for GIMP" published="06 Nov 2014" archived="true"/>
    <div class="content" itemprop="articleBody">

      <h4>For newer GIMP versions:</h4>
      <span class="hl">Edit</span> -> <span class="hl">Keyboard Shortcuts</span> -> <span class="hl">Image</span> -> <span class="hl">Crop to Selection</span>

      <h4>For older GIMP versions:</h4>
      <ol>
        <li>
          <p>Enable
            <span class="hl">Use dynamic keyboard shortcuts</span> and
            <span class="hl">Save keyboard shortcuts on exit</span> from
            <span class="hl">Edit</span> ->
            <span class="hl">Preferences</span> ->
            <span class="hl">Keyboard Shortcuts</span>
          </p>
        </li>
        <li>
          <p>From the
            <span class="hl">Image</span> menu, hover over
            <span class="hl">Crop to Selection</span> and hit a three key sequence (like
            <span class="hl">Ctrl + Alt + C</span>).
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