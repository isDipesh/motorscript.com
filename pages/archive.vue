<template>
  <div>
      <h1>Archived Posts</h1>
    <ul class="posts">
      <li>
        <router-link to="crop-to-selection-keyboard-shortcut-gimp">
            'Crop to Selection' keyboard shortcut for GIMP
            </router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "index",
  head: {
    link: [{ rel: "canonical", href: "https://motorscript.com/archive" }]
  }
};
</script>